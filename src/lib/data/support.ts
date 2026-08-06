import { Coffee, Heart } from "lucide-react";
import { SUPPORT_BUYMEACOFFEE, SUPPORT_SELAR } from "@/lib/config";
import type { LinkType } from "@/lib/types";

export const supportLinks: LinkType[] = [
  { name: "Buy Me a Coffee", url: SUPPORT_BUYMEACOFFEE, icon: Coffee },
  { name: "Selar", url: SUPPORT_SELAR, icon: Heart },
];
