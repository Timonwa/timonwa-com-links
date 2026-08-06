import { Heart } from "lucide-react";
import { ExternalLink, SocialIcon } from "@/components/ui";
import { socials, moreSocials } from "@/lib/data";
import { SOCIAL_TWITTER } from "@/lib/config";

const allSocials = [...socials, ...moreSocials];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center gap-5 py-8 text-center text-sm text-muted">
      <nav aria-label="All social links">
        <ul className="flex max-w-full list-none flex-wrap justify-center gap-2">
          {allSocials.map((s) => (
            <li key={s.name}>
              <SocialIcon {...s} />
            </li>
          ))}
        </ul>
      </nav>
      <p className="inline-flex flex-wrap items-center justify-center gap-1">
        Built with{" "}
        <Heart
          size={14}
          className="align-middle text-accent"
          aria-label="love"
        />{" "}
        by{" "}
        <ExternalLink
          href={SOCIAL_TWITTER}
          className="font-semibold text-accent transition-opacity hover:opacity-80"
        >
          Timonwa
        </ExternalLink>{" "}
        © {year}
      </p>
    </footer>
  );
}
