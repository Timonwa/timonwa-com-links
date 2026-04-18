import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const label =
    mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <Sun size={18} strokeWidth={1.75} aria-hidden />
      ) : (
        <Moon size={18} strokeWidth={1.75} aria-hidden />
      )}
    </button>
  );
}
