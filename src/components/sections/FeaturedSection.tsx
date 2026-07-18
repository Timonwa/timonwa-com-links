import { Section } from "@/components/layout/Section";
import { FeaturedCard } from "@/components/ui/FeaturedCard";
import { featuredProduct } from "@/data/featured";

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
