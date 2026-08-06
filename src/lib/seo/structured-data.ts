import {
  siteConfig,
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SOCIAL_INSTAGRAM,
  SOCIAL_YOUTUBE,
} from "@/lib/config";

// Stable @id anchors so the graph nodes can reference each other.
const PERSON_ID = `${siteConfig.url}/#person`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

// The person is the site's primary entity — this is what answer/generative
// engines use to identify who Timonwa is. `sameAs` links the known profiles.
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.avatar}`,
    description: siteConfig.description,
    jobTitle: siteConfig.roles,
    sameAs: [
      SOCIAL_GITHUB,
      SOCIAL_LINKEDIN,
      SOCIAL_TWITTER,
      SOCIAL_INSTAGRAM,
      SOCIAL_YOUTUBE,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
  };
}
