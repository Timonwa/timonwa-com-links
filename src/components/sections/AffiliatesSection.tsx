import { Section } from "@/components/layout/Section";
import { LinkCard } from "@/components/ui/LinkCard";
import { affiliatesLink } from "@/data/affiliates";

export function AffiliatesSection() {
  return (
    <Section
      id="affiliates"
      title="Affiliate Picks"
      description="Tools I actually use and recommend."
    >
      <LinkCard {...affiliatesLink} />
    </Section>
  );
}
