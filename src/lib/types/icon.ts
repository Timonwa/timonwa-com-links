import type { ComponentType, SVGProps } from "react";

// Icon components used across the app — covers both lucide-react icons and
// @icons-pack/react-simple-icons brand marks (both accept size + SVG props).
export type IconType = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string; title?: string }
>;
