"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/hooks";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      className="glass-pill gpu-layer focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-text transition-[rotate,color,border-color] duration-400 ease-out-expo hover:-rotate-12 hover:text-accent"
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
