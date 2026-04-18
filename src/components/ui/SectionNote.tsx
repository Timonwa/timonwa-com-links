import { Info } from "lucide-react";
import type { ReactNode } from "react";

interface SectionNoteProps {
  children: ReactNode;
}

export function SectionNote({ children }: SectionNoteProps) {
  return (
    <aside
      role="note"
      className="flex items-start gap-2 rounded-lg border border-note-border bg-note-bg px-3 py-2 text-sm leading-relaxed text-text"
    >
      <Info
        size={16}
        strokeWidth={2}
        aria-hidden
        className="mt-0.5 shrink-0 text-accent"
      />
      <span>{children}</span>
    </aside>
  );
}
