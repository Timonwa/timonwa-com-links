import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type Theme = "light" | "dark";

export interface LinkProps {
  name: string;
  url: string;
  icon?: LucideIcon;
  description?: string;
  isExt?: boolean;
}

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  href: string;
  status?: "live" | "beta" | "coming-soon";
}

export interface SocialProps {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface SectionProps {
  id: string;
  title: string;
  description?: string;
  note?: ReactNode;
  children: ReactNode;
}

export interface LinkHubProfile {
  avatar: string;
  name: string;
  tagline: string;
  bio: string;
}
