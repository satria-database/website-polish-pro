import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/portfolio-sections";
export const Route = createFileRoute("/about")({
 head: () => ({ meta: [
  { title: "About Me \u2014 Satria Nur Ardiansyah" },
  { name: "description", content: "Learn about Satria Nur Ardiansyah, his background in electrical engineering, material standardization, and data management." },
  { property: "og:title", content: "About Me \u2014 Satria Nur Ardiansyah" },
  { property: "og:description", content: "Learn about Satria Nur Ardiansyah, his background in electrical engineering, material standardization, and data management." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
 ] }),
 component: AboutSection,
});
