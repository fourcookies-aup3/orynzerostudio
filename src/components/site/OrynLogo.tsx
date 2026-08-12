import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "xs";
  animated?: boolean;
};

export function OrynLogo({ className, iconOnly = false, size = "md", animated = true }: LogoProps) {
  const sizeClasses = {
    xs: "h-4",
    sm: "h-5",
    md: "h-7",
    lg: "h-10",
    xl: "h-16",
  };

  return (
    <div className={cn("flex items-center gap-2.5 select-none group cursor-pointer", className)}>
      {/* Golden Geometric Icon */}
      <svg
        viewBox="0 0 100 100"
        className={cn(
          sizeClasses[size],
          "aspect-square fill-none transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:rotate-180",
        )}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E29B" />
            <stop offset="35%" stopColor="#D4B062" />
            <stop offset="70%" stopColor="#B48E42" />
            <stop offset="100%" stopColor="#8A6726" />
          </linearGradient>
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4B062" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4B062" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient background glow */}
        <circle
          cx="50%"
          cy="50%"
          r="45"
          fill="url(#goldGlow)"
          className="opacity-40 group-hover:opacity-100 transition-opacity duration-700"
        />

        {/* Outer Circle (representing "O" for Oryn) */}
        <circle
          cx="50%"
          cy="50%"
          r="38"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="200 40"
          className="origin-center transition-all duration-1000 ease-out group-hover:rotate-90"
        />

        {/* Sharp inner "Z" (representing "Z" for Zero) */}
        <path
          d="M34 34 H66 L34 66 H66"
          stroke="url(#goldGradient)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-700 ease-out"
        />

        {/* Precision Core Lens Indicator (white core center) */}
        <circle
          cx="50%"
          cy="50%"
          r="4.5"
          fill="#FFFFFF"
          className={animated ? "animate-pulse" : ""}
          style={{ filter: "drop-shadow(0px 0px 4px rgba(212, 176, 98, 0.8))" }}
        />
      </svg>

      {!iconOnly && (
        <span className="font-display font-black uppercase tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-accent">
          ORYN <span className="font-light text-silver">ZERO</span>
        </span>
      )}
    </div>
  );
}
