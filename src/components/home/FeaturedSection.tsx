import { Section, FeaturedCard } from "@/components/ui";
import { featuredProduct } from "@/lib/data/featured";

export function FeaturedSection() {
  return (
    <Section
      id="featured"
      title="Featured"
      description="Start here — the one most people came for."
    >
      <FeaturedCard
        {...featuredProduct}
        eyebrow="Best-seller"
        cta="Get the template"
      />
    </Section>
  );
}
