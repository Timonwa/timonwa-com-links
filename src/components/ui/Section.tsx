import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  note?: ReactNode;
  children: ReactNode;
}

export function Section({
  id,
  title,
  description,
  note,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mb-12 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <h2
          id={`${id}-title`}
          className="m-0 text-xl font-semibold leading-snug"
        >
          {title}
        </h2>
        {description && (
          <p className="m-0 text-sm leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
      {note && <div className="-mt-1">{note}</div>}
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}
