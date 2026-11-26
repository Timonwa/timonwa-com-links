import type { ReactNode } from "react";
import { LayoutGrid } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Grid } from "@/components/ui/Grid";
import { Section } from "@/components/ui/Section";
import type { LinkType } from "@/lib/types";

interface CardGridSectionProps {
  id: string;
  title: string;
  description?: string;
  note?: ReactNode;
  items: (LinkType & { badge?: string })[];
  seeAll: { name: string; url: string; description: string };
}

// Every section shows its top three and a "See all" card, so the hub points to
// each full list instead of keeping a second copy of it.
export function CardGridSection({
  id,
  title,
  description,
  note,
  items,
  seeAll,
}: CardGridSectionProps) {
  return (
    <Section id={id} title={title} description={description} note={note}>
      <Grid columns={2}>
        {items.slice(0, 3).map((item) => (
          <GlassCard key={item.name} {...item} />
        ))}
        <GlassCard {...seeAll} icon={LayoutGrid} />
      </Grid>
    </Section>
  );
}
