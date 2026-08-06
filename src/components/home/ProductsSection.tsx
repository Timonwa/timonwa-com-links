import { Package, LayoutGrid } from "lucide-react";
import { Section, GlassCard, Grid } from "@/components/ui";
import { products } from "@/lib/data/products";
import { SHOP_LINK } from "@/lib/config";

export function ProductsSection() {
  if (products.length === 0) return null;

  return (
    <Section
      id="products"
      title="Digital Products"
      description="Digital products I've built — and use myself — to help you skip the setup and get going faster."
    >
      <Grid columns={2}>
        {products.map((p) => (
          <GlassCard
            key={p.slug}
            name={p.name}
            url={p.href}
            icon={Package}
            description={p.tagline}
          />
        ))}
        <GlassCard
          name="View all products"
          url={SHOP_LINK}
          icon={LayoutGrid}
          description="Browse the full shop."
        />
      </Grid>
    </Section>
  );
}
