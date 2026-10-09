import { createFileRoute } from "@tanstack/react-router";
import { HeroSection, AboutSection, ProfileSection, CertificationSection, PortfolioSection, UpdatesSection, ContactSection } from "@/components/portfolio-sections";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Satria Nur Ardiansyah — Cataloger Elins Staff" },
    { name: "description", content: "Professional portfolio of Satria Nur Ardiansyah: material cataloging, product standardization, data management, and web development." },
    { property: "og:title", content: "Satria Nur Ardiansyah — Professional Portfolio" },
    { property: "og:description", content: "Explore Satria's experience, education, web development projects, and material cataloging work." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
function Index() {
  return <><HeroSection /><AboutSection /><ProfileSection /><CertificationSection /><PortfolioSection /><UpdatesSection /><ContactSection /></>;
}
