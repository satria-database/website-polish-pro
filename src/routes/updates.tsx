import { createFileRoute } from "@tanstack/react-router";
import { UpdatesSection } from "@/components/portfolio-sections";
export const Route = createFileRoute("/updates")({
 head: () => ({ meta: [
  { title: "Work Updates \u2014 Satria Nur Ardiansyah" },
  { name: "description", content: "Recent material cataloging work, tender documents, and volume pooling projects by Satria Nur Ardiansyah." },
  { property: "og:title", content: "Work Updates \u2014 Satria Nur Ardiansyah" },
  { property: "og:description", content: "Recent material cataloging work, tender documents, and volume pooling projects by Satria Nur Ardiansyah." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
 ] }),
 component: UpdatesSection,
});
