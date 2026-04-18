import { Avatar } from "@/components/ui/Avatar";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Avatar src={profile.avatar} alt={profile.name} size={120} />
      <div className={styles.text}>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.tagline}>{profile.tagline}</p>
        <p className={styles.bio}>{profile.bio}</p>
      </div>
      <nav aria-label="Social links" className={styles.socials}>
        {socials.map((s) => (
          <SocialIcon key={s.name} {...s} />
        ))}
      </nav>
    </header>
  );
}
