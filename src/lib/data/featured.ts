import { LayoutTemplate, PenLine } from "lucide-react";
import {
  TEMPLATE_WRITERS_PORTFOLIO,
  SKILLS_CONTENT_WRITING,
} from "@/lib/config";
import type { FeaturedLinkType } from "@/lib/types";

export const featuredProducts: FeaturedLinkType[] = [
  {
    name: "Content Writing Skills",
    url: SKILLS_CONTENT_WRITING,
    icon: PenLine,
    description:
      "17 AI skills that plan, write, edit, and review your blog posts and newsletters in your own voice, in any IDE or AI agent.",
    eyebrow: "New",
    cta: "Get the skills",
  },
  {
    name: "Writers Portfolio Notion Template",
    url: TEMPLATE_WRITERS_PORTFOLIO,
    icon: LayoutTemplate,
    description:
      "My best-selling template — a Notion site that turns your writing into a polished, professional portfolio.",
    eyebrow: "Best-seller",
    cta: "Get the template",
  },
];
