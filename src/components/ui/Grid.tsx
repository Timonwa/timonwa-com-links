import { Children, type ReactNode } from "react";

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
    <ul className={`grid list-none grid-cols-1 gap-3 ${COLUMN_CLASS[columns]}`}>
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
}
