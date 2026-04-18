import type { SectionProps } from "@/types";
import styles from "./Section.module.scss";

export function Section({
  id,
  title,
  description,
  note,
  children,
}: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={styles.head}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        {description && <p className={styles.desc}>{description}</p>}
      </div>
      {note && <div className={styles.note}>{note}</div>}
      <div className={styles.body}>{children}</div>
    </section>
  );
}
