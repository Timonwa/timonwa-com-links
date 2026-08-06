import { ExternalLink } from "@/components/ui/ExternalLink";
import type { SocialType } from "@/lib/types";

export function SocialIcon({ name, url, icon: Icon, title }: SocialType) {
  const label = title ?? name;
  return (
    <ExternalLink
      href={url}
      aria-label={label}
      title={label}
      data-umami-event={`Social: ${name}`}
      className="card-surface focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-text transition-[transform,color,border-color,background] duration-400 ease-out-expo hover:-translate-y-0.5 hover:text-accent hover:border-accent hover:bg-accent-soft"
    >
      <Icon size={20} strokeWidth={1.75} color="currentColor" title="" aria-hidden />
    </ExternalLink>
  );
}
