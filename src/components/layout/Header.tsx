import { Avatar } from "@/components/ui/Avatar";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function Header() {
  return (
    <header className="flex flex-col items-center gap-5 py-8 text-center">
      <Avatar src={profile.avatar} alt={profile.name} size={120} />
      <div className="flex max-w-lg flex-col gap-2">
        <h1 className="m-0 text-3xl font-bold leading-tight">{profile.name}</h1>
        <p className="m-0 text-base leading-relaxed text-muted">
          {profile.bio}
        </p>
      </div>
      <nav
        aria-label="Social links"
        className="flex max-w-full flex-wrap justify-center gap-2"
      >
        {socials.map((s) => (
          <SocialIcon key={s.name} {...s} />
        ))}
      </nav>
    </header>
  );
}
