import { FileText, PenLine, Code2 } from "lucide-react";
import {
  SKILLS_TECHNICAL_WRITING,
  SKILLS_CONTENT_WRITING,
  SKILLS_ENGINEERING,
} from "@/lib/config";
import type { LinkType } from "@/lib/types";

export const skills: LinkType[] = [
  {
    name: "Technical Writing Skills",
    url: SKILLS_TECHNICAL_WRITING,
    icon: FileText,
    description:
      "AI skills that plan, write, edit, and review your docs, checked against the code.",
  },
  {
    name: "Content Writing Skills",
    url: SKILLS_CONTENT_WRITING,
    icon: PenLine,
    description:
      "AI skills that plan, write, edit, and review your posts and newsletters in your own voice.",
  },
  {
    name: "Engineering Skills",
    url: SKILLS_ENGINEERING,
    icon: Code2,
    description:
      "AI skills that help you build, review, and ship web apps on Next.js, React, and Firebase.",
  },
];
