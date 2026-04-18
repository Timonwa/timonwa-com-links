"use client";

import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks";

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
    <div className="fixed right-5 top-5 z-50" ref={ref}>
      <button
        type="button"
        className="glass-pill gpu-layer focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-text transition-[scale,color] duration-400 ease-out-expo hover:scale-105 hover:text-accent"
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
        <ul
          role="menu"
          className="glass-surface absolute right-0 top-[calc(100%+0.5rem)] flex min-w-56 animate-[fadeSlide_280ms_cubic-bezier(0.16,1,0.3,1)_both] flex-col gap-0.5 rounded-lg p-2"
        >
          {items.map((item) => (
            <li key={item.id} role="none">
              <button
                type="button"
                role="menuitem"
                className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-text transition-[background,color] duration-300 ease-out hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
                onClick={() => jumpTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
