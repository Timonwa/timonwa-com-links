import { useCallback, useSyncExternalStore } from "react";
import type { ThemeType } from "@/lib/types";

const STORAGE_KEY = "timonwa-links-theme";

// Tailwind v4 doesn't ship a theming runtime — dark mode is driven by
// @custom-variant matching a selector (we use [data-theme="dark"]). This hook
// is just a thin DOM/localStorage wrapper; the theme "lives" on <html> and is
// initialized pre-hydration by the bootstrap script in app/layout.tsx. We read
// it straight from the DOM via useSyncExternalStore so there's no mirrored
// state to sync in an effect.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): ThemeType {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

// Hydration render matches the bootstrap script's default.
const getServerSnapshot = (): ThemeType => "dark";

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Writes the attribute + persists; the observer above turns that into a
  // re-render, so there's no setThemeState here.
  const apply = useCallback((next: ThemeType) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore private-mode / quota errors
    }
  }, []);

  const toggleTheme = useCallback(() => {
    apply(getSnapshot() === "dark" ? "light" : "dark");
  }, [apply]);

  return { theme, setTheme: apply, toggleTheme };
}
