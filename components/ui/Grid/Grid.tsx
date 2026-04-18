import type { ReactNode } from "react";
import styles from "./Grid.module.scss";

interface GridProps {
  children: ReactNode;
  columns?: 2 | 3;
}

export function Grid({ children, columns = 2 }: GridProps) {
  return (
    <div className={styles.grid} data-columns={columns}>
      {children}
    </div>
  );
}
