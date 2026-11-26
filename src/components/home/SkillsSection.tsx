import { CardGridSection } from "@/components/ui";
import { skills } from "@/lib/data/skills";
import { SKILLS_ALL } from "@/lib/config";

export function SkillsSection() {
  return (
    <CardGridSection
      id="skills"
      title="AI Skills"
      description="Skills that teach your AI agent how I work, in any IDE or AI agent."
      items={skills}
      seeAll={{
        name: "See all skills",
        url: SKILLS_ALL,
        description: "Every skills set, on GitHub.",
      }}
    />
  );
}
