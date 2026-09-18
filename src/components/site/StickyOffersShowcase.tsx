import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Video,
  Camera,
  Sliders,
  Cpu,
  Volume2,
  Briefcase,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { SectionLabel } from "./SectionHeader";

export interface OfferItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  highlight: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const OFFERS: OfferItem[] = [
  {
    id: "videography",
    category: "CINEMA ACQUISITION",
    title: "Videography",
    subtitle: "Precision multi-camera capture, custom active stabilization, and optical treatments.",
    description:
      "High-end cinematic image acquisition using state-of-the-art camera systems, tailored lens packages, and active stabilization. Calibrated for agile solo operations with our Sony FX3 rig as well as heavy-lift airborne setups.",
    specs: [
      { label: "OPTICS", value: "ARRI PL & Sony G-Master Glass" },
      { label: "FORMAT", value: "4K / 6K RAW · 10-Bit 4:2:2" },
      { label: "STABILIZATION", value: "Ronin Active & Gyroflow Tuned" },
    ],
    highlight: "Equipped with dedicated cinema rigs calibrated for zero vibration and rapid deployment.",
    icon: Video,
  },
  {
    id: "event-filming",
    category: "HIGH-OCTANE DOCUMENTATION",
    title: "Event Filming",
    subtitle: "Dynamic real-time documentation of luxury brand activations, motorsports, and festivals.",
    description:
      "Dynamic multi-perspective coverage that captures the raw atmosphere and key milestones of your production. High-speed FPV tracking and synchronized ground operators capture angles unreachable by conventional cranes.",
    specs: [
      { label: "VELOCITY", value: "0 to 140 km/h Chase Tracking" },
      { label: "COVERAGE", value: "Multi-Operator Synced Timecode" },
      { label: "DELIVERY", value: "Same-Night Teasers + 4K Master" },
    ],
    highlight: "Smooth, continuous sequence shots that place viewers directly in the action.",
    icon: Camera,
  },
  {
    id: "cinematic-editing",
    category: "POST-PRODUCTION PIPELINE",
    title: "Cinematic Editing",
    subtitle: "Rhythm-based montage, narrative pacing, and seamless visual architecture.",
    description:
      "Bespoke post-production services including precision rhythm editing, narrative structure sculpting, dynamic sound synchronization, and film-emulation color grading crafted to elevate raw footage into a cohesive cinematic piece.",
    specs: [
      { label: "WORKFLOW", value: "DaVinci Resolve Studio & Premiere" },
      { label: "COLOR PIPELINE", value: "ACES Color Managed & Film Print" },
      { label: "OUTPUT", value: "DCI 4K Scope & Social Formats" },
    ],
    highlight: "Frame-by-frame pacing engineered to command viewer engagement across every screen.",
    icon: Sliders,
  },
  {
    id: "cgi-vfx",
    category: "VISUAL SIMULATION",
    title: "CGI & VFX",
    subtitle: "Camera motion tracking, synthetic physics simulations, and photoreal visual integration.",
    description:
      "Integrating highly accurate 3D simulations, physical camera motion tracking, virtual environments, and seamless visual effects directly into aerial and physical frames to expand visual possibilities beyond reality.",
    specs: [
      { label: "TRACKING", value: "3D Camera Spatial Solver" },
      { label: "SIMULATION", value: "Unreal Engine 5 & Houdini" },
      { label: "COMPOSITING", value: "Nuke & After Effects 32-Bit" },
    ],
    highlight: "Photorealistic digital augmentations that blend imperceptibly into camera optics.",
    icon: Cpu,
  },
  {
    id: "sound-design",
    category: "SPATIAL AUDIO ARCHITECTURE",
    title: "Sound Design",
    subtitle: "Tactile Foley capture, low-frequency atmospheric sub-bass, and spatial soundscapes.",
    description:
      "Custom ambient audio creation, tactile soundscapes, high-fidelity Foley capture, and room-filling spatial audio that reinforces visual speed, heightens emotional impact, and drives the pulse of the edit.",
    specs: [
      { label: "FIELD AUDIO", value: "32-Bit Float Ambisonic Mics" },
      { label: "ACOUSTIC MIX", value: "Stereo Master + Dolby Atmos" },
      { label: "TEXTURES", value: "Custom Analog Synthesizer FX" },
    ],
    highlight: "Audio calibrated to give physical weight to every aerodynamic pass and frame cut.",
    icon: Volume2,
  },
  {
    id: "project-supporting",
    category: "REGULATORY & LOGISTICS",
    title: "Project Supporting",
    subtitle: "Full Swiss airspace clearance, SORA approvals, location scout logistics, and permits.",
    description:
      "End-to-end production logistics covering Swiss Federal Office of Civil Aviation (BAZL/FOCA) clearances, controlled CTR airspace waivers, location scouting, storyboard breakdown, and on-site flight safety coordination.",
    specs: [
      { label: "REGULATION", value: "BAZL / FOCA & EASA Certified" },
      { label: "PERMITS", value: "Controlled CTR Airspace Clearances" },
      { label: "INSURANCE", value: "Up to 5M CHF Commercial Liability" },
    ],
    highlight: "Full Swiss regulatory compliance ensuring your production proceeds without legal friction.",
    icon: Briefcase,
  },
  {
    id: "bespoke-innovations",
    category: "CUSTOM INNOVATION",
    title: "And Much More",
    subtitle: "Custom drone prototyping, photogrammetry scanning, and specialized technical builds.",
    description:
      "When standard off-the-shelf equipment cannot achieve your vision, we engineer custom hardware in our Stäfa studio — from sub-250g indoor proximity drones to heavy-lift gimbal rigs and photogrammetry reality meshes.",
    specs: [
      { label: "PROTOTYPING", value: "In-House Carbon Fiber Builds" },
      { label: "SPECIALTY", value: "LiDAR & 3D Reality Capture" },
      { label: "SOLUTIONS", value: "Tailored Multi-Cam Rigs" },
    ],
    highlight: "Engineered in Switzerland for directors who require unprecedented camera perspectives.",
    icon: Sparkles,
  },
];

interface StickyOffersShowcaseProps {
  onSelectService?: (serviceName: string) => void;
}

export const StickyOffersShowcase: React.FC<StickyOffersShowcaseProps> = ({
  onSelectService,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const currentProgress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setProgress(currentProgress);

      const totalItems = OFFERS.length;
      // Calculate active index across the expanded slower scroll runway
      const rawIndex = Math.floor(currentProgress * totalItems);
      const boundedIndex = Math.min(Math.max(rawIndex, 0), totalItems - 1);

      setActiveIndex((prev) => (prev !== boundedIndex ? boundedIndex : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentOffer = OFFERS[activeIndex];
  const Icon = currentOffer.icon;

  const handleJumpToOffer = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    const targetScrollY = window.scrollY + rect.top + (idx / OFFERS.length) * totalScrollable + 20;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handleInquire = () => {
    if (onSelectService) {
      onSelectService(currentOffer.title);
    } else {
      const el = document.getElementById("contact");
      if (el) {
        const offset = 90;
        const pos = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      id="services"
      data-section="services"
      ref={containerRef}
      // Slower, luxurious scroll runway (750vh allows ~100vh of scroll per offer)
      className="relative min-h-[750vh] bg-[#070708] border-t border-b border-white/[0.06] scroll-mt-24"
    >
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-10 z-20">
        {/* Subtle Obsidian Lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(212,176,98,0.03),transparent_80%)]" />

        {/* Minimalist Top Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <SectionLabel id="// 03">CAPABILITIES</SectionLabel>
            <span className="hidden sm:inline-block text-silver/30 font-mono text-[9px]">/</span>
            <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-[0.25em] text-silver/50">
              DISCIPLINE 0{activeIndex + 1} OF 0{OFFERS.length}
            </span>
          </div>

          {/* Clean Stepper Indicators */}
          <div className="flex items-center gap-2">
            {OFFERS.map((offer, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={offer.id}
                  type="button"
                  onClick={() => handleJumpToOffer(idx)}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "h-1.5 w-6 bg-accent rounded-full"
                      : "size-1.5 bg-white/20 hover:bg-white/40 rounded-full"
                  }`}
                  aria-label={`Jump to ${offer.title}`}
                />
              );
            })}
          </div>
        </div>

        {/* Center Stage: The Active Offer Card (JUST POPPING UP) */}
        <div className="my-auto w-full max-w-3xl mx-auto py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentOffer.id}
              // Crisp pop-up animation: scales and springs straight up into view
              initial={{ opacity: 0, scale: 0.88, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -16 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
                mass: 0.7,
              }}
              className="relative rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/90 p-8 sm:p-11 md:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
            >
              {/* Minimal Top Hairline */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

              {/* Tag & Index */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold">
                  // 0{activeIndex + 1} · {currentOffer.category}
                </span>
                <span className="font-mono text-[10px] text-silver/40">
                  0{activeIndex + 1} / 0{OFFERS.length}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-5 mb-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] text-accent">
                  <Icon className="size-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] font-display">
                    {currentOffer.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm font-light text-silver/70 leading-snug">
                    {currentOffer.subtitle}
                  </p>
                </div>
              </div>

              {/* Body Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-silver/80 font-light mb-8">
                {currentOffer.description}
              </p>

              {/* Action Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
                <span className="text-[11px] sm:text-xs text-silver/50 font-light">
                  {currentOffer.highlight}
                </span>

                <button
                  type="button"
                  onClick={handleInquire}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                >
                  <span>Inquire Discipline</span>
                  <ArrowUpRight className="size-3" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Bottom Bar: Scroll Status */}
        <div className="border-t border-white/[0.06] pt-4 flex items-center justify-between text-silver/50 font-mono text-[9px]">
          <div className="flex items-center gap-2">
            <ChevronDown className="size-3 text-accent animate-bounce" />
            <span>
              {activeIndex < OFFERS.length - 1
                ? `SCROLL TO REVEAL OFFER 0${activeIndex + 2}`
                : "ALL 7 OFFERS REVEALED · CONTINUE SCROLLING"}
            </span>
          </div>

          <div className="w-28 sm:w-40 h-1 bg-white/[0.08] rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-200"
              style={{ width: `${Math.max(10, progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
