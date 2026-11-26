import { Flame, Code2, Map } from "lucide-react";
import {
  PROJECT_FIREBASE_HOOKS,
  PROJECT_JAVASCRIPT_PROJECTS,
  PROJECT_TECH_ROADMAP,
} from "@/lib/config";
import type { LinkType } from "@/lib/types";

export const projects: LinkType[] = [
  {
    name: "Firebase Hooks",
    url: PROJECT_FIREBASE_HOOKS,
    icon: Flame,
    description:
      "Firebase sign-in flows in a few lines, with the edge cases already handled.",
  },
  {
    name: "JavaScript Projects for Beginners",
    url: PROJECT_JAVASCRIPT_PROJECTS,
    icon: Code2,
    description:
      "Fifteen JavaScript projects to run, read, and learn from, one idea at a time.",
  },
  {
    name: "Tech Roadmap",
    url: PROJECT_TECH_ROADMAP,
    icon: Map,
    description:
      "Free roadmaps that show what to learn, and in what order, for a career in tech.",
  },
];
