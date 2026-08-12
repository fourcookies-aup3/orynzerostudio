import { useState, useEffect } from "react";
import { Camera, Compass, Volume2, Terminal } from "lucide-react";

interface TeamMemberPlaceholderProps {
  initials: string;
  name: string;
  roleType: "co-founder" | "pilot" | "sfx" | "general";
}

export function TeamMemberPlaceholder({ initials, name, roleType }: TeamMemberPlaceholderProps) {
  const [signalStrength, setSignalStrength] = useState(98);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(Math.floor(Math.random() * 5) + 95);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getRoleDetails = () => {
    switch (roleType) {
      case "co-founder":
        return {
          label: "CO-PILOT LINKED",
          sublabel: "CREATIVE & BRAND STRATEGY",
          icon: Camera,
          code: "OZ-02-NICK",
        };
      case "pilot":
        return {
          label: "FPV LINK STANDBY",
          sublabel: "AERIAL RECONNAISSANCE",
          icon: Compass,
          code: "OZ-03-NICOLA",
        };
      case "sfx":
        return {
          label: "AV PASS LIVE",
          sublabel: "POST-PROD AUDIO/VIDEO",
          icon: Volume2,
          code: "OZ-04-TATE",
        };
      default:
        return {
          label: "FEED OFFLINE",
          sublabel: "COMPILING DIGITAL PROFILE",
          icon: Terminal,
          code: "OZ-0X-PENDING",
        };
    }
  };

  const details = getRoleDetails();
  const Icon = details.icon;

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#080808] border border-white/5 p-6 select-none font-mono text-silver">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

      {/* Cybernetic details */}
      <div className="absolute top-4 left-4 flex flex-col gap-1 text-[8px] text-silver/40 tracking-wider">
        <span>REF: {details.code}</span>
        <span>SYS_STATUS: ACTIVE</span>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[8px] text-accent font-bold tracking-wider">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/70 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
        </span>
        <span>SIG: {signalStrength}%</span>
      </div>

      {/* Target Crosshairs in Corners */}
      <div className="absolute top-3 left-3 size-2 border-t border-l border-white/20" />
      <div className="absolute top-3 right-3 size-2 border-t border-r border-white/20" />
      <div className="absolute bottom-3 left-3 size-2 border-b border-l border-white/20" />
      <div className="absolute bottom-3 right-3 size-2 border-b border-r border-white/20" />

      {/* Center Initials & Icon */}
      <div className="relative z-10 flex flex-col items-center gap-4 py-8">
        <div className="relative flex items-center justify-center size-20 rounded-full border border-white/10 bg-black/60 group-hover:border-accent/40 group-hover:scale-105 transition-all duration-500">
          <div className="absolute inset-2 rounded-full border border-dashed border-white/5 group-hover:border-accent/20 animate-[spin_60s_linear_infinite]" />
          <span className="font-display text-2xl font-bold text-white tracking-widest pl-1">
            {initials}
          </span>
        </div>

        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[8px] font-bold text-silver uppercase tracking-wider">
            <Icon className="size-3 text-accent" />
            {details.label}
          </span>
          <span className="mt-1.5 text-[9px] text-silver/40 uppercase tracking-widest">
            {details.sublabel}
          </span>
        </div>
      </div>

      {/* Bottom telemetry log */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[7px] text-silver/30 font-mono tracking-widest">
        <span>LOC: SWITZERLAND</span>
        <span>IMAGE: PENDING_UPLOAD</span>
      </div>
    </div>
  );
}
