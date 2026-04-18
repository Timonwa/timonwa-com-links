import {
  Globe,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Youtube,
  AtSign,
  Rocket,
  Code2,
} from "lucide-react";
import {
  TECH_WEBSITE,
  CONTACT_EMAIL_ME,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SOCIAL_INSTAGRAM,
  SOCIAL_GITHUB,
  SOCIAL_YOUTUBE,
  SOCIAL_THREADS,
  SOCIAL_INDIEHACKERS,
  SOCIAL_CODEPEN,
  SOCIAL_TIKTOK,
} from "@/config";
import type { SocialProps } from "@/types";

export const socials: SocialProps[] = [
  { name: "Website", url: TECH_WEBSITE, icon: Globe },
  { name: "GitHub", url: SOCIAL_GITHUB, icon: Github },
  { name: "LinkedIn", url: SOCIAL_LINKEDIN, icon: Linkedin },
  { name: "Twitter/X", url: SOCIAL_TWITTER, icon: Twitter },
  { name: "Instagram", url: SOCIAL_INSTAGRAM, icon: Instagram },
  { name: "YouTube", url: SOCIAL_YOUTUBE, icon: Youtube },
  { name: "Email", url: `mailto:${CONTACT_EMAIL_ME}`, icon: Mail },
  // { name: "Threads", url: SOCIAL_THREADS, icon: AtSign },
  // { name: "CodePen", url: SOCIAL_CODEPEN, icon: Code2 },
  // { name: "TikTok", url: SOCIAL_TIKTOK, icon: AtSign },
];
