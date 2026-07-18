import { Section } from "@/components/layout/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Grid } from "@/components/ui/Grid";
import { SectionNote } from "@/components/ui/SectionNote";
import { supportLinks } from "@/data/support";

export function SupportSection() {
  return (
    <Section
      id="support"
      title="Support My Work"
      description="If you've enjoyed something I made, a tip goes a long way."
      note={
        <SectionNote>
          <strong>African cards?</strong> Try Selar or Paystack.
        </SectionNote>
      }
    >
      <Grid columns={2}>
        {supportLinks.map((l) => (
          <GlassCard key={l.name} {...l} />
        ))}
      </Grid>
    </Section>
  );
}
