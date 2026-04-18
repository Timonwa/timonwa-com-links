import { BookOpen, Rss } from "lucide-react";
import {
  BLOG_URL,
  PUBLICATION_DEVTO,
  PUBLICATION_MEDIUM,
  PUBLICATION_HASHNODE,
} from "@/config";
import type { LinkProps } from "@/types";

export const blogLinks: LinkProps[] = [
  { name: "Timonwa's Notes", url: BLOG_URL, icon: BookOpen },
  { name: "Dev.to", url: PUBLICATION_DEVTO, icon: Rss },
  { name: "Medium", url: PUBLICATION_MEDIUM, icon: Rss },
  { name: "Hashnode", url: PUBLICATION_HASHNODE, icon: Rss },
];
