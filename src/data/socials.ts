import {
  Globe,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Youtube,
} from "lucide-react";
import {
  TECH_WEBSITE,
  CONTACT_EMAIL_ME,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SOCIAL_INSTAGRAM,
  SOCIAL_GITHUB,
  SOCIAL_YOUTUBE,
} from "@/config";
import type { SocialType } from "@/types";

export const socials: SocialType[] = [
  { name: "Website", url: TECH_WEBSITE, icon: Globe },
  { name: "GitHub", url: SOCIAL_GITHUB, icon: Github },
  { name: "LinkedIn", url: SOCIAL_LINKEDIN, icon: Linkedin },
  { name: "Twitter/X", url: SOCIAL_TWITTER, icon: Twitter },
  { name: "Instagram", url: SOCIAL_INSTAGRAM, icon: Instagram },
  { name: "YouTube", url: SOCIAL_YOUTUBE, icon: Youtube },
  { name: "Email", url: `mailto:${CONTACT_EMAIL_ME}`, icon: Mail },
];
