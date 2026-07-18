import { Globe, Mail, Linkedin, Store, HandHeart } from "lucide-react";
import {
  SiGithub,
  SiX,
  SiTelegram,
  SiBluesky,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import {
  TECH_WEBSITE,
  CONTACT_EMAIL_ME,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SOCIAL_GITHUB,
  SOCIAL_TELEGRAM,
  SOCIAL_BLUESKY,
  SOCIAL_INSTAGRAM,
  SOCIAL_YOUTUBE,
  SHOP_HUB,
  SUPPORT_HUB,
} from "@/config";
import type { SocialType } from "@/types";

// Primary handles — shown in the header (and repeated in the footer).
export const socials: SocialType[] = [
  { name: "Website", url: TECH_WEBSITE, icon: Globe },
  { name: "GitHub", url: SOCIAL_GITHUB, icon: SiGithub },
  { name: "LinkedIn", url: SOCIAL_LINKEDIN, icon: Linkedin },
  { name: "Twitter/X", url: SOCIAL_TWITTER, icon: SiX },
  { name: "Shop", url: SHOP_HUB, icon: Store, title: "Shop my products" },
  {
    name: "Support",
    url: SUPPORT_HUB,
    icon: HandHeart,
    title: "Support my work",
  },
  { name: "Email", url: `mailto:${CONTACT_EMAIL_ME}`, icon: Mail },
];

// Secondary handles — shown in the footer to keep the header uncluttered.
export const moreSocials: SocialType[] = [
  { name: "Instagram", url: SOCIAL_INSTAGRAM, icon: SiInstagram },
  { name: "YouTube", url: SOCIAL_YOUTUBE, icon: SiYoutube },
  { name: "Bluesky", url: SOCIAL_BLUESKY, icon: SiBluesky },
  { name: "Telegram", url: SOCIAL_TELEGRAM, icon: SiTelegram },
];
