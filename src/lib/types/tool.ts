export interface ToolType {
  slug: string;
  name: string;
  tagline: string;
  href: string;
  status?: "live" | "beta" | "coming-soon";
  /** Overrides the status label on the card, e.g. "Popular". */
  badge?: string;
}
