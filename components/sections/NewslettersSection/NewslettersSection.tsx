import { Section } from "@/components/layout/Section";
import { FeaturedCard } from "@/components/ui/FeaturedCard";
import { LinkCard } from "@/components/ui/LinkCard";
import { Stack } from "@/components/ui/Stack";
import { featuredNewsletter, otherNewsletters } from "@/data/newsletters";
import styles from "./NewslettersSection.module.scss";

export function NewslettersSection() {
  return (
    <Section
      id="newsletters"
      title="Newsletters"
      description="Pick a flavour. I write a few."
    >
      <div className={styles.featured}>
        <FeaturedCard
          {...featuredNewsletter}
          eyebrow="Featured"
          cta="Join Bits & Notes"
        />
      </div>
      <Stack>
        {otherNewsletters.map((n) => (
          <LinkCard key={n.name} {...n} />
        ))}
      </Stack>
    </Section>
  );
}
