import { ExternalLink } from "@/components/ui/ExternalLink";
import type { SocialType } from "@/types";

export function SocialIcon({ name, url, icon: Icon }: SocialType) {
  return (
    <ExternalLink
      href={url}
      aria-label={name}
      title={name}
      className="card-surface focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-text transition-[transform,color,border-color,background] duration-200 ease-in-out hover:-translate-y-0.5 hover:text-accent hover:border-accent hover:bg-accent-soft"
    >
      <Icon size={20} strokeWidth={1.75} aria-hidden />
    </ExternalLink>
  );
}
