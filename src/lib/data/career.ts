import { FileText, Briefcase, Code2, Newspaper } from "lucide-react";
import {
  WEBSITE_TECH,
  RESOURCE_WRITER_PORTFOLIO,
  CAREER_LINK,
  RESOURCE_PRESS_KIT,
} from "@/lib/config";
import type { LinkType } from "@/lib/types";

export const pressKitLinks: LinkType[] = [
  { name: "Engineering Portfolio", url: WEBSITE_TECH, icon: Code2 },
  {
    name: "Writing Portfolio",
    url: RESOURCE_WRITER_PORTFOLIO,
    icon: Briefcase,
  },
  { name: "CVs", url: CAREER_LINK, icon: FileText },
  { name: "Press Kit", url: RESOURCE_PRESS_KIT, icon: Newspaper },
];
