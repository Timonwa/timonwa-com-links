import { Info } from "lucide-react";
import type { ReactNode } from "react";
import styles from "./SectionNote.module.scss";

interface SectionNoteProps {
  children: ReactNode;
}

export function SectionNote({ children }: SectionNoteProps) {
  return (
    <aside className={styles.note} role="note">
      <Info size={16} strokeWidth={2} aria-hidden className={styles.icon} />
      <span>{children}</span>
    </aside>
  );
}
