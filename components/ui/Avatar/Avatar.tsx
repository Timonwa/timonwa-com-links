import Image from "next/image";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export function Avatar({ src, alt, size = 120 }: AvatarProps) {
  return (
    <div className={styles.avatar} style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        priority
        className={styles.image}
      />
    </div>
  );
}
