import { TEMPLATE_WRITERS_PORTFOLIO, TEMPLATE_NEXTJS_STARTER } from "@/config";
import type { TemplateType } from "@/types";

export const templates: TemplateType[] = [
  {
    slug: "writers-portfolio-notion-template",
    name: "Writers Portfolio Notion Template",
    tagline:
      "A Notion site template for writers to showcase their skills and create a professional online portfolio.",
    href: TEMPLATE_WRITERS_PORTFOLIO,
  },
  {
    slug: "next-pro-starter-template",
    name: "Next Pro Starter Template",
    tagline:
      "A production-ready Next.js starter with sensible defaults so you can skip the boilerplate.",
    href: TEMPLATE_NEXTJS_STARTER,
  },
];
