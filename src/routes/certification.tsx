import { createFileRoute } from "@tanstack/react-router";
import { CertificationSection } from "@/components/portfolio-sections";
export const Route = createFileRoute("/certification")({
 head: () => ({ meta: [
  { title: "Sertification Information \u2014 Satria Nur Ardiansyah" },
  { name: "description", content: "Professional achievements in material cataloging, data management, and technical documentation." },
  { property: "og:title", content: "Sertification Information \u2014 Satria Nur Ardiansyah" },
  { property: "og:description", content: "Professional achievements in material cataloging, data management, and technical documentation." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
 ] }),
 component: CertificationSection,
});
