import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/portfolio-sections";
export const Route = createFileRoute("/contact")({
 head: () => ({ meta: [
  { title: "Contact \u2014 Satria Nur Ardiansyah" },
  { name: "description", content: "Contact Satria Nur Ardiansyah in Tuban, East Java for project inquiries and professional collaboration." },
  { property: "og:title", content: "Contact \u2014 Satria Nur Ardiansyah" },
  { property: "og:description", content: "Contact Satria Nur Ardiansyah in Tuban, East Java for project inquiries and professional collaboration." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
 ] }),
 component: ContactSection,
});
