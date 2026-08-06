import { Section, LinkCard, Stack } from "@/components/ui";
import { pressKitLinks } from "@/lib/data/career";

export function CareerSection() {
  return (
    <Section
      id="press"
      title="Work With Me"
      description="Portfolios, CV, rate card, and press kit — everything you need to work with me."
    >
      <Stack>
        {pressKitLinks.map((l) => (
          <LinkCard key={l.name} {...l} />
        ))}
      </Stack>
    </Section>
  );
}
