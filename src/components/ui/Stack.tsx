import type { ReactNode } from "react";

interface StackProps {
  children: ReactNode;
}

export function Stack({ children }: StackProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
