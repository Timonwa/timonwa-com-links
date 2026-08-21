import { ODD_JOBS_REFERRAL_QUERY, WEBSITE_ODD_JOBS } from "@/lib/config";
import type { ToolType } from "@/lib/types";

export const tools: ToolType[] = [
  {
    slug: "article-to-social-posts",
    name: "Article to Social Posts",
    tagline: "Turn articles into platform-optimized social media posts.",
    href: `${WEBSITE_ODD_JOBS}/article-to-social-posts${ODD_JOBS_REFERRAL_QUERY}`,
    status: "live",
    badge: "Popular",
  },
  {
    slug: "article-to-seo-meta",
    name: "Article to SEO Meta",
    tagline:
      "Generate SEO-friendly title and description variations with character counts in spec.",
    href: `${WEBSITE_ODD_JOBS}/article-to-seo-meta${ODD_JOBS_REFERRAL_QUERY}`,
    status: "live",
  },
  {
    slug: "word-counter",
    name: "Word & Character Counter",
    tagline:
      "Live word, character, sentence, and reading-time counts, with platform character limits.",
    href: `${WEBSITE_ODD_JOBS}/word-counter${ODD_JOBS_REFERRAL_QUERY}`,
    status: "live",
  },
];
