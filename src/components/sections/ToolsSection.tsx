import { Wrench, LayoutGrid } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Grid } from "@/components/ui/Grid";
import { tools } from "@/data/tools";
import { TOOLS_HUB } from "@/config";

const STATUS_LABEL: Record<
  NonNullable<(typeof tools)[number]["status"]>,
  string
> = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Soon",
};

export function ToolsSection() {
  if (tools.length === 0) return null;

  return (
    <Section
      id="tools"
      title="Tools I've Built"
      description="Small things I've shipped to make work (and life) easier."
    >
      <Grid columns={2}>
        {tools.map((t) => (
          <GlassCard
            key={t.slug}
            name={t.name}
            url={t.href}
            icon={Wrench}
            description={t.tagline}
            badge={t.badge ?? (t.status ? STATUS_LABEL[t.status] : undefined)}
          />
        ))}
        <GlassCard
          name="View all tools"
          url={TOOLS_HUB}
          icon={LayoutGrid}
          description="Browse the full tools directory."
        />
      </Grid>
    </Section>
  );
}
