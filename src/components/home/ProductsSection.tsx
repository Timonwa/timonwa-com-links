import { Package } from "lucide-react";
import { CardGridSection } from "@/components/ui";
import { products } from "@/lib/data/products";
import { SHOP_LINK } from "@/lib/config";

export function ProductsSection() {
  return (
    <CardGridSection
      id="products"
      title="Digital Products"
      description="Digital products I've built — and use myself — to help you skip the setup and get going faster."
      items={products.map((p) => ({
        name: p.name,
        url: p.href,
        icon: Package,
        description: p.tagline,
      }))}
      seeAll={{
        name: "See all products",
        url: SHOP_LINK,
        description: "Browse the full shop.",
      }}
    />
  );
}
