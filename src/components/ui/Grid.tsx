import type { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  columns?: 2 | 3;
}

const COLUMN_CLASS: Record<2 | 3, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

export function Grid({ children, columns = 2 }: GridProps) {
  return (
    <div className={`grid grid-cols-1 gap-3 ${COLUMN_CLASS[columns]}`}>
      {children}
    </div>
  );
}
