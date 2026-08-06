import { ArrowUpRight } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { LinkType } from "@/lib/types";

interface FeaturedCardProps extends LinkType {
  cta?: string;
  eyebrow?: string;
}

export function FeaturedCard({
  name,
  url,
  icon: Icon,
  description,
  cta = "Subscribe",
  eyebrow,
}: FeaturedCardProps) {
  return (
    <ExternalLink
      href={url}
      data-umami-event={`Featured: ${name}`}
      className="card-surface hover-lift focus-ring featured-gradient group flex flex-col gap-3 rounded-2xl p-6 text-text"
    >
      <div className="flex flex-wrap items-center gap-3">
        {Icon && (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-purple text-white shadow-cta">
            <Icon size={24} strokeWidth={1.75} aria-hidden />
          </span>
        )}
        {eyebrow && (
          <span className="rounded-pill border border-brand-purple bg-brand-overlay px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-purple">
            {eyebrow}
          </span>
        )}
      </div>
      <h3 className="m-0 text-xl font-bold leading-tight">{name}</h3>
      {description && (
        <p className="m-0 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
      <span className="inline-flex items-center gap-2 self-start rounded-pill bg-brand-purple px-5 py-3 text-sm font-semibold text-white shadow-cta transition-[transform,box-shadow,background] duration-200 group-hover:-translate-y-0.5 group-hover:bg-brand-purple-deep group-hover:shadow-cta-hover">
        {cta}
        <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden />
      </span>
    </ExternalLink>
  );
}
