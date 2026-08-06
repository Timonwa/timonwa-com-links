import type { LucideIcon } from "lucide-react";

export interface LinkType {
  name: string;
  url: string;
  icon?: LucideIcon;
  description?: string;
  isExt?: boolean;
}
