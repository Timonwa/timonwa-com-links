import { useCallback, useEffect, useState } from "react";
import type { ThemeType } from "@/types";

const STORAGE_KEY = "timonwa-links-theme";

// Tailwind v4 doesn't ship a theming runtime — dark mode is driven by
// @custom-variant matching a selector (we use [data-theme="dark"]). This hook
// is just a thin DOM/localStorage wrapper; the theme "lives" on <html> and is
// initialized pre-hydration by the script in _document.tsx.
export function useTheme() {
  const [theme, setThemeState] = useState<ThemeType>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") setThemeState(current);
  }, []);

  const apply = useCallback((next: ThemeType) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore private-mode / quota errors
    }
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    const current = document.documentElement.getAttribute("data-theme");
    apply(current === "dark" ? "light" : "dark");
  }, [apply]);

  return { theme, setTheme: apply, toggleTheme };
}
