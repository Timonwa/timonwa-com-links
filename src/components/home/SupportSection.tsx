import { Section, LinkCard, Grid, SectionNote } from "@/components/ui";
import { supportLinks } from "@/lib/data/support";

export function SupportSection() {
  return (
    <Section
      id="support"
      title="Support My Work"
      description="If you've enjoyed something I made, a tip goes a long way."
      note={
        <SectionNote>
          <strong>African cards?</strong> Try Selar for a smoother checkout.
        </SectionNote>
      }
    >
      <Grid columns={2}>
        {supportLinks.map((l) => (
          <LinkCard key={l.name} {...l} />
        ))}
      </Grid>
    </Section>
  );
}
