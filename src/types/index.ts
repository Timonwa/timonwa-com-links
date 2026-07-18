import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export type ThemeType = "light" | "dark";

/**
 * Icon components used across the app — covers both lucide-react icons and
 * @icons-pack/react-simple-icons brand marks (both accept size + SVG props).
 */
export type IconType = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string; title?: string }
>;

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
  /** Overrides the status label on the card, e.g. "Popular". */
  badge?: string;
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
  icon: IconType;
  /** Descriptive tooltip / accessible label; falls back to `name`. */
  title?: string;
}

export interface ProfileType {
  avatar: string;
  name: string;
  bio: string;
}
