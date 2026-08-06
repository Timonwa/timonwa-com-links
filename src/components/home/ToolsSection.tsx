import { Wrench, LayoutGrid } from "lucide-react";
import { Section, GlassCard, Grid } from "@/components/ui";
import { tools } from "@/lib/data/tools";
import { WEBSITE_TOOLS } from "@/lib/config";

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
      description="Free web tools I've made to make work (and life) a little easier."
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
          url={WEBSITE_TOOLS}
          icon={LayoutGrid}
          description="Browse the full tools directory."
        />
      </Grid>
    </Section>
  );
}
