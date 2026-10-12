import { createFileRoute } from '@tanstack/react-router'
import { createClient } from '@supabase/supabase-js'

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.set(key, recent);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  return false;
}

function cleanText(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null;
  const v = value.trim();
  if (v.length < 1 || v.length > max) return null;
  return v;
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ip = (request.headers.get('x-forwarded-for') ?? 'local').split(',')[0].trim();
        if (isRateLimited(ip)) {
          return Response.json({ ok: false, error: 'Too many messages sent. Please try again later.' }, { status: 429 });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
        }

        const { name, email, message } = (body ?? {}) as Record<string, unknown>;
        const cleanName = cleanText(name, 120);
        const cleanMessage = cleanText(message, 5000);
        const cleanEmail = typeof email === 'string' ? email.trim() : '';
        const emailOk = cleanEmail.length > 3 && cleanEmail.length <= 255 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);
        if (!cleanName || !cleanMessage || !emailOk) {
          return Response.json({ ok: false, error: 'Please fill in your name, a valid email, and a message.' }, { status: 400 });
        }

        const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
        const url = process.env['SUPABASE_URL'];
        if (!key || !url) {
          return Response.json({ ok: false, error: 'Server configuration error.' }, { status: 500 });
        }

        const supabasePublic = createClient(url, key, {
          auth: { persistSession: false },
          global: {
            fetch: (input, init) => {
              const h = new Headers(init?.headers);
              if (key.startsWith('sb_') && h.get('Authorization') === `Bearer ${key}`) h.delete('Authorization');
              h.set('apikey', key);
              return fetch(input, { ...init, headers: h });
            },
          },
        });

        const { error } = await supabasePublic
          .from('contact_submissions')
          .insert({ name: cleanName, email: cleanEmail, message: cleanMessage });
        if (error) {
          console.error('contact_submissions insert failed:', error.message);
          return Response.json({ ok: false, error: 'Could not save your message. Please try again.' }, { status: 500 });
        }
        return Response.json({ ok: true });
      },
    },
  },
})
