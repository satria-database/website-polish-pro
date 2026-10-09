import { createFileRoute } from "@tanstack/react-router";
import { PortfolioSection } from "@/components/portfolio-sections";
export const Route = createFileRoute("/portfolio")({
 head: () => ({ meta: [
  { title: "Web Development Portfolio \u2014 Satria Nur Ardiansyah" },
  { name: "description", content: "Discover MATRIS, FUNLOC SIG PORTAL, and terramora \u2014 websites developed by Satria Nur Ardiansyah." },
  { property: "og:title", content: "Web Development Portfolio \u2014 Satria Nur Ardiansyah" },
  { property: "og:description", content: "Discover MATRIS, FUNLOC SIG PORTAL, and terramora \u2014 websites developed by Satria Nur Ardiansyah." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
 ] }),
 component: PortfolioSection,
});
