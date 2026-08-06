import {
  TEMPLATE_WRITERS_PORTFOLIO,
  TEMPLATE_IDEA_INCUBATOR,
  TEMPLATE_GOALS_PLANNER,
} from "@/lib/config";
import type { ProductType } from "@/lib/types";

export const products: ProductType[] = [
  {
    slug: "writers-portfolio-notion-template",
    name: "Writers Portfolio Notion Template",
    tagline:
      "A Notion site template for writers to showcase their skills and create a professional online portfolio.",
    href: TEMPLATE_WRITERS_PORTFOLIO,
  },
  {
    slug: "idea-incubator-notion-template",
    name: "Idea Incubator Notion Template",
    tagline:
      "A Notion template to capture, organise, and validate your ideas — so nothing brilliant slips away.",
    href: TEMPLATE_IDEA_INCUBATOR,
  },
  {
    slug: "yearly-goals-planner-notion-template",
    name: "Yearly Goals Planner & Tracker Notion Template",
    tagline:
      "A Notion system for setting yearly goals, breaking them into milestones, and tracking progress all year.",
    href: TEMPLATE_GOALS_PLANNER,
  },
];
