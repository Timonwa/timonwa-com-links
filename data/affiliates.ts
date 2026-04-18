import { Link2 } from "lucide-react";
import { AFFILIATES_PAGE } from "@/config";
import type { LinkProps } from "@/types";

export const affiliatesLink: LinkProps = {
  name: "See all affiliate picks",
  url: AFFILIATES_PAGE,
  icon: Link2,
};
