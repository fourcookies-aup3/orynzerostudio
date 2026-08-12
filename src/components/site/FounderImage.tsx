import localFounder from "@/assets/Finn.jpeg";

interface FounderImageProps {
  alt?: string;
  className?: string;
}

export function FounderImage({
  alt = "Finn Ryf — Founder of ORYN ZERO",
  className = "",
}: FounderImageProps) {
  return (
    <img
      src={localFounder}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      className={className}
    />
  );
}
