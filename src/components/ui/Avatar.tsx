import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export function Avatar({ src, alt, size = 120 }: AvatarProps) {
  return (
    <div
      className="gpu-layer relative rounded-full p-1 shadow-avatar transition-[scale,box-shadow] duration-500 ease-out-expo hover:scale-[1.03] hover:shadow-avatar-hover before:content-[''] before:absolute before:-inset-2 before:rounded-full before:-z-10 before:pointer-events-none before:bg-[radial-gradient(circle,rgba(124,91,131,0.25)_0%,rgba(124,91,131,0)_70%)]"
      style={{
        width: size,
        height: size,
        background:
          "conic-gradient(from 140deg, var(--color-accent) 0deg, var(--color-brand-lilac) 120deg, var(--color-accent-strong) 240deg, var(--color-accent) 360deg)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        priority
        className="block h-full w-full rounded-full object-cover bg-bg"
      />
    </div>
  );
}
