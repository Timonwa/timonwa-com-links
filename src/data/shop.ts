import { Package, Coffee, Store } from "lucide-react";
import { SHOP_BUYMEACOFFEE, SHOP_SELAR, SHOP_HUB } from "@/config";
import type { LinkType } from "@/types";

export const shopLinks: LinkType[] = [
  { name: "Buy Me a Coffee", url: SHOP_BUYMEACOFFEE, icon: Coffee },
  { name: "Selar", url: SHOP_SELAR, icon: Package },
  { name: "All products", url: SHOP_HUB, icon: Store },
];
