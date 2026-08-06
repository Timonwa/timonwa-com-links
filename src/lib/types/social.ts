import type { IconType } from "./icon";

export interface SocialType {
  name: string;
  url: string;
  icon: IconType;
  /** Descriptive tooltip / accessible label; falls back to `name`. */
  title?: string;
}
