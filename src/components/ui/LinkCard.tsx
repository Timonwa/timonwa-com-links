import { ArrowUpRight } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { LinkType } from "@/lib/types";

export function LinkCard({ name, url, icon: Icon, description }: LinkType) {
  return (
    <ExternalLink
      href={url}
      aria-label={`${name}${description ? ` — ${description}` : ""}`}
      data-umami-event={name}
      className="card-surface hover-lift focus-ring group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-text"
    >
      {Icon && (
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
          <Icon size={20} strokeWidth={1.75} aria-hidden />
        </span>
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-base font-semibold leading-tight">{name}</span>
        {description && (
          <span className="text-sm leading-snug text-muted">{description}</span>
        )}
      </div>
      <ArrowUpRight
        size={16}
        strokeWidth={2}
        aria-hidden
        className="shrink-0 text-muted opacity-60 transition-[transform,opacity,color] duration-400 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100"
      />
    </ExternalLink>
  );
}
