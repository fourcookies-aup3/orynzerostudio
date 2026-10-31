import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "xs";
  animated?: boolean;
};

export function OrynLogo({ className, iconOnly = false, size = "md" }: LogoProps) {
  const sizeClasses = {
    xs: "h-5 w-5",
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-11 w-11",
    xl: "h-16 w-16",
  };

  return (
    <div className={cn("flex items-center gap-2.5 select-none group cursor-pointer", className)}>
      {/* Official Golden Brushed Emblem */}
      <img
        src="/favicon.png"
        alt="ORYN ZERO"
        className={cn(
          sizeClasses[size],
          "aspect-square rounded-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-[0_0_12px_rgba(212,176,98,0.25)]",
        )}
      />

      {!iconOnly && (
        <span className="font-display tracking-[0.08em] transition-colors duration-300">
          <span className="font-extrabold text-accent">Oryn</span>
          <span className="font-extrabold text-white">ZERO</span>{" "}
          <span className="font-serif-luxury font-normal italic text-accent">Studio</span>
        </span>
      )}
    </div>
  );
}
