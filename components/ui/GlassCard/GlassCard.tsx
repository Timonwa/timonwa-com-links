import { ArrowUpRight } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { LinkProps } from "@/types";
import styles from "./GlassCard.module.scss";

interface GlassCardProps extends LinkProps {
  badge?: string;
}

export function GlassCard({
  name,
  url,
  icon: Icon,
  description,
  badge,
}: GlassCardProps) {
  return (
    <ExternalLink
      href={url}
      aria-label={`${name}${description ? ` — ${description}` : ""}`}
      className={styles.card}
    >
      <div className={styles.iconWrap}>
        {Icon && <Icon size={22} strokeWidth={1.75} aria-hidden />}
      </div>
      <div className={styles.body}>
        <span className={styles.name}>{name}</span>
        {description && <span className={styles.desc}>{description}</span>}
      </div>
      {badge && <span className={styles.badge}>{badge}</span>}
      <ArrowUpRight
        size={16}
        strokeWidth={2}
        className={styles.arrow}
        aria-hidden
      />
    </ExternalLink>
  );
}
