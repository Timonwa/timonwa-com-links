import { Section } from "@/components/layout/Section";
import { LinkCard } from "@/components/ui/LinkCard";
import { Stack } from "@/components/ui/Stack";
import { blogLinks } from "@/data/blog";

export function BlogSection() {
  return (
    <Section
      id="blog"
      title="Blog & Writing"
      description="Dev posts, tutorials, and cross-posts across platforms."
    >
      <Stack>
        {blogLinks.map((l) => (
          <LinkCard key={l.name} {...l} />
        ))}
      </Stack>
    </Section>
  );
}
