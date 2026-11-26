import { Section, FeaturedCard } from "@/components/ui";
import { featuredProducts } from "@/lib/data/featured";

// The first product leads; the rest sit below it as compact cards.
export function FeaturedSection() {
  const [lead, ...rest] = featuredProducts;

  return (
    <Section
      id="featured"
      title="Featured"
      description="Start here — my newest and my best-seller."
    >
      <ul className="flex list-none flex-col gap-3">
        <li>
          <FeaturedCard {...lead} />
        </li>
        {rest.map((product) => (
          <li key={product.name}>
            <FeaturedCard {...product} variant="secondary" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
