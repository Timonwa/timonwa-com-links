import { Section, LinkCard, Stack } from "@/components/ui";
import { writingLinks } from "@/lib/data/writing";

export function WritingSection() {
  return (
    <Section
      id="writing"
      title="Writing"
      description="Where I write — dev tutorials, tool guides, and personal reflections."
    >
      <Stack>
        {writingLinks.map((l) => (
          <LinkCard key={l.name} {...l} />
        ))}
      </Stack>
    </Section>
  );
}
