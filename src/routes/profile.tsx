import { createFileRoute } from "@tanstack/react-router";
import { ProfileSection } from "@/components/portfolio-sections";
export const Route = createFileRoute("/profile")({
 head: () => ({ meta: [
  { title: "Profile & Experience \u2014 Satria Nur Ardiansyah" },
  { name: "description", content: "Explore Satria Nur Ardiansyah\u2019s work experience, education, and professional skills." },
  { property: "og:title", content: "Profile & Experience \u2014 Satria Nur Ardiansyah" },
  { property: "og:description", content: "Explore Satria Nur Ardiansyah\u2019s work experience, education, and professional skills." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
 ] }),
 component: ProfileSection,
});
