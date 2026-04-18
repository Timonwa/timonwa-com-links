import { Section } from "@/components/layout/Section";
import { LinkCard } from "@/components/ui/LinkCard";
import { Stack } from "@/components/ui/Stack";
import { pressKitLinks } from "@/data/pressKit";

export function PressKitSection() {
  return (
    <Section
      id="press"
      title="Talks, Press Kit & CV"
      description="Speaking, press materials, and everything hiring managers ask for."
    >
      <Stack>
        {pressKitLinks.map((l) => (
          <LinkCard key={l.name} {...l} />
        ))}
      </Stack>
    </Section>
  );
}
