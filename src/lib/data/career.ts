import { FileText, Briefcase, Code2, Receipt, Newspaper } from "lucide-react";
import {
  WEBSITE_TECH,
  RESOURCE_WRITER_PORTFOLIO,
  RESOURCE_CV,
  RESOURCE_RATE_CARD,
  RESOURCE_PRESS_KIT,
} from "@/lib/config";
import type { LinkType } from "@/lib/types";

export const pressKitLinks: LinkType[] = [
  { name: "Engineering Portfolio", url: WEBSITE_TECH, icon: Code2 },
  { name: "Writing Portfolio", url: RESOURCE_WRITER_PORTFOLIO, icon: Briefcase },
  { name: "CVs", url: RESOURCE_CV, icon: FileText },
  { name: "Writer Rate Card", url: RESOURCE_RATE_CARD, icon: Receipt },
  { name: "Press Kit", url: RESOURCE_PRESS_KIT, icon: Newspaper },
];
