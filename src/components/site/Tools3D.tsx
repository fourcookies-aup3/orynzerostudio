import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Sliders, Compass, Activity, Wind, Camera, Layers, Video, Crosshair } from "lucide-react";

// Interactive 3D tilt card component with rounded-2xl style
function TiltCard({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.15)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for high-end feel
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 120, damping: 25 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 120, damping: 25 });

  const glowX = useSpring(useTransform(x, [0, 1], [0, 100]), { stiffness: 150, damping: 30 });
  const glowY = useSpring(useTransform(y, [0, 1], [0, 100]), { stiffness: 150, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseEnter = () => setHovered(true);

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${className}`}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: hovered ? 1.01 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative size-full border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 transition-colors duration-500 hover:border-accent/30 rounded-3xl"
      >
        {/* Hover Radial Glow Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) =>
                `radial-gradient(350px circle at ${gx}% ${gy}%, ${glowColor}, transparent 80%)`,
            ),
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Content projection */}
        <div style={{ transform: "translateZ(25px)" }} className="relative z-10 size-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

// 1. Creative Workflow Softwares (Only the specified three)
const softwares = [
  {
    name: "DaVinci Resolve",
    category: "Color & Editing",
    description:
      "Our premier post-production workspace for advanced color grading, RAW conforming, and final theatrical finishing.",
    logoUrl: "https://cdn.simpleicons.org/davinciresolve/white",
    glow: "rgba(255, 255, 255, 0.12)",
  },
  {
    name: "Blender",
    category: "CGI & Animation",
    description:
      "Utilized for 3D pre-visualization, spatial planning, and seamless environment cleanups or CGI integrations.",
    logoUrl: "https://cdn.simpleicons.org/blender/white",
    glow: "rgba(255, 255, 255, 0.08)",
  },
  {
    name: "Gyroflow",
    category: "FPV Stabilization",
    description:
      "Advanced post-flight gyro stabilization to achieve buttery-smooth cinematic sequences from high-velocity FPV runs.",
    logoUrl: "https://raw.githubusercontent.com/gyroflow/gyroflow/master/resources/icon.svg",
    glow: "rgba(255, 255, 255, 0.12)",
  },
];

// 2. Real Equipment (Only the specified items)
const gear = [
  {
    name: "DJI FPV Drone",
    category: "Aerial Dynamics",
    specs: "High-Speed Maneuverability",
    details:
      "Delivering high-velocity, responsive sweeps with absolute control and reliability in open or demanding environments.",
    icon: Wind,
    glow: "rgba(255, 255, 255, 0.08)",
    tag: "FPV System",
  },
  {
    name: 'Custom 5" FPV Drone',
    category: "Proximity Cinematography",
    specs: "Agile Action",
    details:
      "Custom-built for micro-proximity flight to capture razor-sharp, stabilized action close-ups.",
    icon: Camera,
    glow: "rgba(255, 255, 255, 0.12)",
    tag: "Custom Rig",
  },
  {
    name: "GoPro HERO12 Black",
    category: "Action Camera",
    specs: "5.3K 60fps",
    details:
      "High dynamic range and impeccable stabilization for our high-speed kinetic tracking shots.",
    icon: Video,
    glow: "rgba(255, 255, 255, 0.10)",
    tag: "Camera",
  },
  {
    name: "Custom Cinelifter",
    category: "Heavy Lift Cinema",
    specs: "High-Payload",
    details:
      "High-power cinelifter designed to carry professional cinema cameras smoothly through the air.",
    icon: Layers,
    glow: "rgba(255, 255, 255, 0.15)",
    tag: "Heavy Rig",
  },
  {
    name: "2-axis Gimbal",
    category: "Stabilization",
    specs: "Precision Control",
    details:
      "Integrated mechanical stabilization system ensuring buttery smooth cinematic sweeps under heavy payloads.",
    icon: Crosshair,
    glow: "rgba(255, 255, 255, 0.08)",
    tag: "Hardware",
  },
];

export function Tools3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-96 w-full animate-pulse bg-black/20" />;
  }

  return (
    <div className="space-y-24">
      {/* ===================== CREATIVE WORKFLOW (SOFTWARE) ===================== */}
      <div>
        <div className="mb-12">
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-accent block mb-2">
            // Digital Workbench
          </span>
          <h3 className="text-balance-tight text-3xl font-bold tracking-tight md:text-4xl">
            Workflow & Software
          </h3>
          <p className="mt-3 max-w-lg text-xs leading-relaxed text-silver/60">
            A focused post-production pipeline where high-bitrate footage is refined, stabilized,
            and graded to produce luxury cinematic experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {softwares.map((sw, index) => {
            return (
              <motion.div
                key={sw.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard glowColor={sw.glow} className="h-full min-h-[240px]">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="mb-5 flex size-12 items-center justify-center p-2 rounded-2xl bg-white/[0.02] border border-white/5">
                        <img src={sw.logoUrl} alt={sw.name} className="size-full object-contain" />
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-accent/80 block">
                        {sw.category}
                      </span>
                      <h4 className="mt-1.5 text-lg font-bold text-white tracking-tight">
                        {sw.name}
                      </h4>
                      <p className="mt-2.5 text-[11px] leading-relaxed text-silver/50">
                        {sw.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===================== EQUIPMENT (HARDWARE) ===================== */}
      <div>
        <div className="mb-12">
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-accent block mb-2">
            // The Arsenal
          </span>
          <h3 className="text-balance-tight text-3xl font-bold tracking-tight md:text-4xl">
            Production Equipment
          </h3>
          <p className="mt-3 max-w-lg text-xs leading-relaxed text-silver/60">
            Our real, highly specialized production gear is calibrated for extreme velocity,
            close-proximity flight, and perfect cinematic fluid stability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {gear.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard glowColor={item.glow} className="h-full min-h-[260px]">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-white/[0.02] text-accent border border-white/5">
                          <Icon className="size-4" />
                        </div>
                        <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-accent">
                          {item.tag}
                        </span>
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/50 block">
                        {item.category}
                      </span>
                      <h4 className="mt-1 text-lg font-bold text-white tracking-tight">
                        {item.name}
                      </h4>
                      <p className="mt-1 font-mono text-[8px] text-accent/80 tracking-wider">
                        {item.specs}
                      </p>
                      <p className="mt-2.5 text-[11px] leading-relaxed text-silver/50">
                        {item.details}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-silver/30">
                      <span className="size-1 rounded-full bg-accent animate-pulse" />
                      <span>Studio Ready</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
