import { ArrowUpRight } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { LinkType } from "@/lib/types";

interface FeaturedCardProps extends LinkType {
  cta?: string;
  eyebrow?: string;
  variant?: "primary" | "secondary";
}

type CardProps = Omit<FeaturedCardProps, "variant">;

export function FeaturedCard({
  variant = "primary",
  ...props
}: FeaturedCardProps) {
  return variant === "primary" ? (
    <PrimaryCard {...props} />
  ) : (
    <SecondaryCard {...props} />
  );
}

function PrimaryCard({
  name,
  url,
  icon: Icon,
  description,
  cta = "Subscribe",
  eyebrow,
}: CardProps) {
  return (
    <ExternalLink
      href={url}
      data-umami-event="link-click"
      data-umami-event-name={name}
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

// Plain surface, small icon and a text CTA, so it never competes with the primary card.
function SecondaryCard({
  name,
  url,
  icon: Icon,
  description,
  cta,
  eyebrow,
}: CardProps) {
  return (
    <ExternalLink
      href={url}
      data-umami-event="link-click"
      data-umami-event-name={name}
      className="card-surface hover-lift focus-ring group flex items-start gap-4 rounded-xl p-4 text-text"
    >
      {Icon && (
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
          <Icon size={20} strokeWidth={1.75} aria-hidden />
        </span>
      )}
      <div className="flex min-w-0 flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="m-0 text-base font-semibold leading-tight">{name}</h3>
          {eyebrow && (
            <span className="rounded-pill bg-accent-soft px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-accent">
              {eyebrow}
            </span>
          )}
        </div>
        {description && (
          <p className="m-0 text-sm leading-snug text-muted">{description}</p>
        )}
        {cta && (
          <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple">
            {cta}
            <ArrowUpRight
              size={14}
              strokeWidth={2.25}
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        )}
      </div>
    </ExternalLink>
  );
}
