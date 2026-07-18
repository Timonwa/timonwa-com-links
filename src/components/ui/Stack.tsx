import { Children, type ReactNode } from "react";

interface StackProps {
  children: ReactNode;
}

export function Stack({ children }: StackProps) {
  return (
    <ul className="flex list-none flex-col gap-2">
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
}
