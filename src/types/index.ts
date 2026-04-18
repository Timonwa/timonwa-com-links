import type { LucideIcon } from "lucide-react";

export type ThemeType = "light" | "dark";

export interface LinkType {
  name: string;
  url: string;
  icon?: LucideIcon;
  description?: string;
  isExt?: boolean;
}

export interface ToolType {
  slug: string;
  name: string;
  tagline: string;
  href: string;
  status?: "live" | "beta" | "coming-soon";
}

export interface TemplateType {
  slug: string;
  name: string;
  tagline: string;
  href: string;
}

export interface SocialType {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface ProfileType {
  avatar: string;
  name: string;
  bio: string;
}
