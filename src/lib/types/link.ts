import type { LucideIcon } from "lucide-react";

export interface LinkType {
  name: string;
  url: string;
  icon?: LucideIcon;
  description?: string;
  isExt?: boolean;
}

export interface FeaturedLinkType extends LinkType {
  eyebrow: string;
  cta: string;
}
