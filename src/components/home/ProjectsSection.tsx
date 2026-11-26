import { CardGridSection } from "@/components/ui";
import { projects } from "@/lib/data/projects";
import { WEBSITE_STUDIO } from "@/lib/config";

export function ProjectsSection() {
  return (
    <CardGridSection
      id="projects"
      title="Projects"
      description="Apps and tools I've built and launched, free for anyone to use."
      items={projects}
      seeAll={{
        name: "See all projects",
        url: WEBSITE_STUDIO,
        description: "Every project I've launched, in my studio.",
      }}
    />
  );
}
