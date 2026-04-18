import { Section } from "@/components/layout/Section";
import { FeaturedCard } from "@/components/ui/FeaturedCard";
import { LinkCard } from "@/components/ui/LinkCard";
import { Stack } from "@/components/ui/Stack";
import { featuredNewsletter, otherNewsletters } from "@/data/newsletters";

export function NewslettersSection() {
  return (
    <Section
      id="newsletters"
      title="Newsletters"
      description="Pick a flavour. I write a few."
    >
      <div className="mb-2">
        {/* <FeaturedCard
          {...featuredNewsletter}
          eyebrow="Featured"
          cta={`Read ${featuredNewsletter.name}`}
        /> */}
      </div>
      <Stack>
        {otherNewsletters.map((n) => (
          <LinkCard key={n.name} {...n} />
        ))}
      </Stack>
    </Section>
  );
}
