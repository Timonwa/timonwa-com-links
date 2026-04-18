import { Mic, FileText, Briefcase, Receipt, Newspaper } from "lucide-react";
import {
  TALKS_URL,
  PRESS_KIT,
  TECH_CV,
  WRITER_PORTFOLIO,
  WRITER_RATE_CARD,
} from "@/config";
import type { LinkType } from "@/types";

export const pressKitLinks: LinkType[] = [
  { name: "Talks & Slides", url: TALKS_URL, icon: Mic },
  { name: "Press Kit", url: PRESS_KIT, icon: Newspaper },
  { name: "Tech CV", url: TECH_CV, icon: FileText },
  { name: "Writing Portfolio", url: WRITER_PORTFOLIO, icon: Briefcase },
  { name: "Writer Rate Card", url: WRITER_RATE_CARD, icon: Receipt },
];
