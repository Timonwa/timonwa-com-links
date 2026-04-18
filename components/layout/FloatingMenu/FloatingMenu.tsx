import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./FloatingMenu.module.scss";

interface FloatingMenuItem {
  id: string;
  label: string;
}

interface FloatingMenuProps {
  items: FloatingMenuItem[];
}

export function FloatingMenu({ items }: FloatingMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  function jumpTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  }

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={styles.button}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open navigation menu"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <X size={18} strokeWidth={2} aria-hidden />
        ) : (
          <Menu size={18} strokeWidth={2} aria-hidden />
        )}
      </button>

      {open && (
        <ul className={styles.dropdown} role="menu">
          {items.map((item) => (
            <li key={item.id} role="none">
              <button
                type="button"
                role="menuitem"
                className={styles.item}
                onClick={() => jumpTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
