import { ExternalLink } from "@/components/ui/ExternalLink";
import type { SocialProps } from "@/types";
import styles from "./SocialIcon.module.scss";

export function SocialIcon({ name, url, icon: Icon }: SocialProps) {
  return (
    <ExternalLink
      href={url}
      aria-label={name}
      title={name}
      className={styles.socialIcon}
    >
      <Icon size={20} strokeWidth={1.75} aria-hidden />
    </ExternalLink>
  );
}
