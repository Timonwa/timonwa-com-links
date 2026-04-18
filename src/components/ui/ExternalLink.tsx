import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkType
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
}

export function ExternalLink({ href, children, ...rest }: ExternalLinkType) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </Link>
  );
}
