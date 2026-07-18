import { Section } from "@/components/layout/Section";
import { LinkCard } from "@/components/ui/LinkCard";
import { Stack } from "@/components/ui/Stack";
import { pressKitLinks } from "@/data/pressKit";

export function PressKitSection() {
  return (
    <Section
      id="press"
      title="Work With Me"
      description="Portfolio, CV, talks, press, and rates — everything to work together."
    >
      <Stack>
        {pressKitLinks.map((l) => (
          <LinkCard key={l.name} {...l} />
        ))}
      </Stack>
    </Section>
  );
}
