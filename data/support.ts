import { Coffee, Heart, Github, Banknote } from "lucide-react";
import {
  SUPPORT_BUYMEACOFFEE,
  SUPPORT_PAYSTACK,
  SUPPORT_SELAR,
  SUPPORT_GITHUB_SPONSORS,
} from "@/config";
import type { LinkProps } from "@/types";

export const supportLinks: LinkProps[] = [
  { name: "Buy Me a Coffee", url: SUPPORT_BUYMEACOFFEE, icon: Coffee },
  { name: "Paystack", url: SUPPORT_PAYSTACK, icon: Banknote },
  { name: "Selar", url: SUPPORT_SELAR, icon: Heart },
  { name: "GitHub Sponsors", url: SUPPORT_GITHUB_SPONSORS, icon: Github },
];
