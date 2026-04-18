import { Heart } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { TECH_WEBSITE } from "@/config";
import styles from "./Footer.module.scss";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        Built with <Heart size={14} className={styles.heart} aria-label="love" />{" "}
        by{" "}
        <ExternalLink href={TECH_WEBSITE} className={styles.link}>
          Timonwa
        </ExternalLink>{" "}
        © {year}
      </p>
    </footer>
  );
}
