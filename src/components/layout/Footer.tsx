import { Heart } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { TECH_WEBSITE } from "@/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 text-center text-sm text-muted">
      <p className="inline-flex flex-wrap items-center justify-center gap-1">
        Built with{" "}
        <Heart
          size={14}
          className="align-middle text-accent"
          aria-label="love"
        />{" "}
        by{" "}
        <ExternalLink
          href={TECH_WEBSITE}
          className="font-semibold text-accent transition-opacity hover:opacity-80"
        >
          Timonwa
        </ExternalLink>{" "}
        © {year}
      </p>
    </footer>
  );
}
