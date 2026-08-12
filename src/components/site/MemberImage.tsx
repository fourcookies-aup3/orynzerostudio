import { cn } from "@/lib/utils";

interface MemberImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function MemberImage({ src, alt, className }: MemberImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      className={cn(
        "h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]",
        className,
      )}
    />
  );
}
