import { Store, ShoppingBag, Package, Coffee } from "lucide-react";
import {
  SHOP_GUMROAD,
  SHOP_BUYMEACOFFEE,
  SHOP_LEMONSQUEEZY,
  SHOP_SELAR,
} from "@/config";
import type { LinkProps } from "@/types";

export const shopLinks: LinkProps[] = [
  { name: "Gumroad", url: SHOP_GUMROAD, icon: Store },
  { name: "Buy Me a Coffee", url: SHOP_BUYMEACOFFEE, icon: Coffee },
  { name: "Lemon Squeezy", url: SHOP_LEMONSQUEEZY, icon: ShoppingBag },
  { name: "Selar", url: SHOP_SELAR, icon: Package },
];
