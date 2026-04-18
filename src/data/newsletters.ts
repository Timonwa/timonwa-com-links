import { Mail, Sparkles, Bug } from "lucide-react";
import {
  PUBLICATION_BITS_AND_NOTES,
  PUBLICATION_SIGNEDT,
  PUBLICATION_THEPRODBUG,
} from "@/config";
import type { LinkType } from "@/types";

export const featuredNewsletter: LinkType = {
  name: "Signed, T",
  url: PUBLICATION_SIGNEDT,
  icon: Mail,
  description:
    "My online journal — reflections on life, purpose, faith, and the founder journey.",
};

export const otherNewsletters: LinkType[] = [
  {
    name: "Signed, T",
    url: PUBLICATION_SIGNEDT,
    icon: Mail,
    description:
      "My online journal — reflections on life, purpose, faith, and the founder journey.",
  },
  {
    name: "Bits & Notes",
    url: PUBLICATION_BITS_AND_NOTES,
    icon: Sparkles,
    description:
      "Where I share what I'm shipping, the tools I'm testing, and the dev ideas I can't stop thinking about — once a month, in your inbox.",
  },
  // {
  //   name: "The Productive Bug",
  //   url: PUBLICATION_THEPRODBUG,
  //   icon: Bug,
  //   description: "Experiments, productivity hacks, and dev tips.",
  // },
];
