import { LayoutTemplate, LayoutGrid } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Grid } from "@/components/ui/Grid";
import { templates } from "@/data/templates";
import { SHOP_GUMROAD } from "@/config";

export function TemplatesSection() {
  if (templates.length === 0) return null;

  return (
    <Section
      id="templates"
      title="Templates"
      description="Starter kits and plug-and-play templates you can ship with today."
    >
      <Grid columns={2}>
        {templates.map((t) => (
          <GlassCard
            key={t.slug}
            name={t.name}
            url={t.href}
            icon={LayoutTemplate}
            description={t.tagline}
          />
        ))}
        <GlassCard
          name="View all templates"
          url={SHOP_GUMROAD}
          icon={LayoutGrid}
          description="Browse the full shop for more templates."
        />
      </Grid>
    </Section>
  );
}
