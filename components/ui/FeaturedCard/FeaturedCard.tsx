import { ArrowUpRight } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { LinkProps } from "@/types";
import styles from "./FeaturedCard.module.scss";

interface FeaturedCardProps extends LinkProps {
  cta?: string;
  eyebrow?: string;
}

export function FeaturedCard({
  name,
  url,
  icon: Icon,
  description,
  cta = "Subscribe",
  eyebrow,
}: FeaturedCardProps) {
  return (
    <ExternalLink href={url} className={styles.card}>
      <div className={styles.top}>
        {Icon && (
          <span className={styles.iconWrap}>
            <Icon size={24} strokeWidth={1.75} aria-hidden />
          </span>
        )}
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      </div>
      <h3 className={styles.name}>{name}</h3>
      {description && <p className={styles.desc}>{description}</p>}
      <span className={styles.cta}>
        {cta}
        <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden />
      </span>
    </ExternalLink>
  );
}
