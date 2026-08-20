import { Wrench, BookOpen, Mail } from "lucide-react";
import { BLOG_ODD_JOBS, BLOG_TIMONWAS_NOTES, BLOG_SIGNEDT } from "@/lib/config";
import type { LinkType } from "@/lib/types";

export const writingLinks: LinkType[] = [
  {
    name: "Odd Jobs",
    url: BLOG_ODD_JOBS,
    icon: Wrench,
    description:
      "Guides, tutorials, and lessons learned the hard way — on the tools, shortcuts, and workflows worth stealing.",
  },
  {
    name: "Timonwa's Notes",
    url: BLOG_TIMONWAS_NOTES,
    icon: BookOpen,
    description:
      "My tutorials, guides, and projects on web development, AI, and everything around it.",
  },
  {
    name: "Signed, T.",
    url: BLOG_SIGNEDT,
    icon: Mail,
    description:
      "Personal thoughts, notes, experiences, and reflections — just me, being human.",
  },
];
