import { Section } from "@/components/layout/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Grid } from "@/components/ui/Grid";
import { SectionNote } from "@/components/ui/SectionNote";
import { shopLinks } from "@/data/shop";

export function ShopSection() {
  return (
    <Section
      id="shop"
      title="Digital Products & Stores"
      description="Templates, resources, and digital goods. Same items, your choice of store."
      note={
        <SectionNote>
          <strong>Nigerian cards?</strong> Try Selar for a smoother checkout.
        </SectionNote>
      }
    >
      <Grid columns={2}>
        {shopLinks.map((l) => (
          <GlassCard key={l.name} {...l} />
        ))}
      </Grid>
    </Section>
  );
}
