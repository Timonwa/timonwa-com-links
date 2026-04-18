import { Mail, Sparkles, Bug } from "lucide-react";
import {
  PUBLICATION_BITS_AND_NOTES,
  PUBLICATION_SIGNEDT,
  PUBLICATION_THEPRODBUG,
} from "@/config";
import type { LinkProps } from "@/types";

export const featuredNewsletter: LinkProps = {
  name: "Bits & Notes",
  url: PUBLICATION_BITS_AND_NOTES,
  icon: Sparkles,
  description:
    "A monthly dispatch on web development, AI tools, what I'm building, and useful resources worth your time.",
};

export const otherNewsletters: LinkProps[] = [
  {
    name: "Signed, T",
    url: PUBLICATION_SIGNEDT,
    icon: Mail,
    description: "Personal letters on creativity, life, and the in-between.",
  },
  {
    name: "The Productive Bug",
    url: PUBLICATION_THEPRODBUG,
    icon: Bug,
    description: "Experiments, productivity hacks, and dev tips.",
  },
];
