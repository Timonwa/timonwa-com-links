import { Avatar, SocialIcon } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { socials } from "@/lib/data";

export function Header() {
  return (
    <header className="flex flex-col items-center gap-5 py-8 text-center">
      <Avatar src={siteConfig.avatar} alt={siteConfig.name} size={120} />
      <div className="flex max-w-lg flex-col gap-2">
        <h1 className="m-0 text-3xl font-bold leading-tight">{siteConfig.name}</h1>
        <p className="m-0 text-base leading-relaxed text-muted">
          {siteConfig.description}
        </p>
      </div>
      <nav aria-label="Social links">
        <ul className="flex max-w-full list-none flex-wrap justify-center gap-2">
          {socials.map((s) => (
            <li key={s.name}>
              <SocialIcon {...s} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
