import { ArrowUpRight } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { LinkType } from "@/types";

interface GlassCardProps extends LinkType {
  badge?: string;
}

export function GlassCard({
  name,
  url,
  icon: Icon,
  description,
  badge,
}: GlassCardProps) {
  return (
    <ExternalLink
      href={url}
      aria-label={`${name}${badge ? ` (${badge})` : ""}${description ? ` — ${description}` : ""}`}
      data-umami-event={name}
      className="card-surface hover-lift focus-ring group relative flex h-full min-h-30 flex-col items-start gap-2 rounded-xl p-4 text-text"
    >
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent">
        {Icon && <Icon size={20} strokeWidth={1.75} aria-hidden />}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold leading-tight">{name}</span>
        {description && (
          <span className="text-sm leading-snug text-muted">{description}</span>
        )}
      </div>
      {badge && (
        <span className="absolute right-3 top-3 rounded-pill bg-accent-soft px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-accent">
          {badge}
        </span>
      )}
      <ArrowUpRight
        size={16}
        strokeWidth={2}
        aria-hidden
        className="absolute bottom-3 right-3 text-muted opacity-60 transition-[transform,opacity,color] duration-400 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100"
      />
    </ExternalLink>
  );
}
