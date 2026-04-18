import { ArrowUpRight } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { LinkProps } from "@/types";
import styles from "./LinkCard.module.scss";

export function LinkCard({ name, url, icon: Icon, description }: LinkProps) {
  return (
    <ExternalLink
      href={url}
      aria-label={`${name}${description ? ` — ${description}` : ""}`}
      className={styles.card}
    >
      {Icon && (
        <span className={styles.iconWrap}>
          <Icon size={20} strokeWidth={1.75} aria-hidden />
        </span>
      )}
      <div className={styles.body}>
        <span className={styles.name}>{name}</span>
        {description && <span className={styles.desc}>{description}</span>}
      </div>
      <ArrowUpRight
        size={16}
        strokeWidth={2}
        className={styles.arrow}
        aria-hidden
      />
    </ExternalLink>
  );
}
