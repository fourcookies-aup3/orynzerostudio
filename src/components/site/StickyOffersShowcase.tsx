import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Video,
  Film,
  SlidersHorizontal,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Volume2,
  Camera,
  MapPin,
  Check,
} from "lucide-react";
import { SectionLabel } from "./SectionHeader";
import { FadeInOnScroll } from "./FadeInOnScroll";

export interface ServiceGroup {
  id: string;
  number: string;
  calligraphyNote: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  specs: { label: string; value: string }[];
  deliverables: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const CORE_SERVICES: ServiceGroup[] = [
  {
    id: "fpv-aerial",
    number: "01",
    calligraphyNote: "kinetic perspective",
    title: "FPV & Dynamic Aerials",
    tagline: "Dynamic indoor, outdoor, automotive, action sport, and architectural filming.",
    description:
      "We operate specialized FPV drones and agile flight platforms engineered to move with subjects in real time. Rather than distant flyovers, our camera matches momentum—chasing downhill lines, threading tight indoor corridors in a single uncut take, skimming surfaces, and revealing spaces from angles conventional camera cranes, jibs, and helicopters cannot reach.",
    capabilities: [
      "High-speed chase tracking (automotive, athletes, cycling, drift lines)",
      "Continuous indoor single-take walkthroughs (offices, villas, venues)",
      "Proximity gap fly-throughs & tight architectural navigation",
      "Sub-250g ultra-lightweight micro quads for delicate spaces",
      "Cinematic mountain, alpine ridge & natural landscape reveals",
      "Low-altitude skimming and rapid elevation transitions",
    ],
    specs: [
      { label: "Flight Scope", value: "High-Speed Dynamic Chases & Sub-250g Indoor Takes" },
      { label: "Environment", value: "Complex Interiors, Mountain Terrain & Live Events" },
      { label: "Flight Craft", value: "Custom-Tuned Agile Drone Platforms" },
    ],
    deliverables: "Stabilized cinematic flight takes, graded master sequences, and synchronized natural sound.",
    icon: Compass,
  },
  {
    id: "event-brand-films",
    number: "02",
    calligraphyNote: "narrative momentum",
    title: "Brand & Event Films",
    tagline: "Creative planning, ground cinematography, FPV integration, and complete film direction.",
    description:
      "We produce complete commercial films from initial treatment to final release. By pairing fluid ground camera operators with synchronized FPV perspectives, we capture both intimate human connection and expansive kinetic energy. Designed for forward-thinking brands, luxury hospitality, sports events, festivals, and architectural showcases.",
    capabilities: [
      "Concept treatment, visual shot-lists & storyboarding",
      "Synchronized dual-operator coverage (FPV pilot + ground DP)",
      "Fluid ground gimbal tracking & handheld cinema camera work",
      "Commercial brand films, launch campaigns & teaser cutdowns",
      "Luxury architecture, boutique hotel & spatial showcases",
      "High-energy festival, live sports & cultural event films",
    ],
    specs: [
      { label: "Cinematography", value: "Synchronized Ground & Aerial Multi-Angle Coverage" },
      { label: "Production Scale", value: "Concept Development Through Directorial Delivery" },
      { label: "Delivery Ratios", value: "Widescreen Cinema (16:9) & Vertical Social (9:16)" },
    ],
    deliverables: "Full commercial master films, launch teaser cutdowns, and tailored social ratios.",
    icon: Film,
  },
  {
    id: "post-production",
    number: "03",
    calligraphyNote: "refined rhythm",
    title: "Post-Production & Sound",
    tagline: "Rhythm-based editing, bespoke color grading, tactile sound design, and clean VFX.",
    description:
      "A film succeeds in the edit. We take captured footage through a disciplined in-house post-production pipeline: cutting keyed to physical rhythm and musical pace, custom color grading for a rich filmic aesthetic, tactile sound design and custom Foley that give aerodynamic speed weight, and invisible visual cleanups.",
    capabilities: [
      "Rhythm-based narrative & high-tempo montage editing",
      "Bespoke filmic color grading with natural contrast & rich tones",
      "Tactile sound design, custom engine Foley & spatial audio mixes",
      "Visual cleanups, speed-ramp smoothing & invisible wire removal",
      "Multi-ratio export packages (16:9 cinema, 9:16 vertical, 4:5 social)",
      "Audio stem mastering for web, broadcast, and presentation screens",
    ],
    specs: [
      { label: "Color Palette", value: "Bespoke Filmic Contrast & Natural Skin Tones" },
      { label: "Sound Design", value: "Custom Spatial Foley & Aerodynamic Acoustics" },
      { label: "Deliverable Format", value: "Full-Resolution Master Packages & Web Cuts" },
    ],
    deliverables: "Mastered films, balanced audio stems, and multi-format exports for broadcast and web.",
    icon: SlidersHorizontal,
  },
];

const EXTENDED_CAPABILITIES = [
  {
    title: "Architectural Single-Takes",
    calligraphy: "seamless spatial flow",
    desc: "Uncut, continuous indoor fly-throughs linking entrances, interior rooms, and outdoor courtyards in one fluid movement.",
    icon: Video,
  },
  {
    title: "High-Speed Chase Tracking",
    calligraphy: "pure momentum",
    desc: "Close-proximity following of vehicles, extreme sports athletes, and high-tempo live performances with surgical precision.",
    icon: Compass,
  },
  {
    title: "Bespoke Filmic Color Grading",
    calligraphy: "signature palette",
    desc: "Custom color development tailored to brand identity, emphasizing cinematic contrast, rich black levels, and organic skin tones.",
    icon: SlidersHorizontal,
  },
  {
    title: "Tactile Foley & Sound Design",
    calligraphy: "sensory depth",
    desc: "Synthesizing aerodynamic speed rushes, mechanical engine frequencies, and atmospheric audio to make visual flight tangible.",
    icon: Volume2,
  },
  {
    title: "Dual-Operator Ground & Air Sets",
    calligraphy: "synchronized vision",
    desc: "Simultaneous on-site ground cinematography and aerial coordination, ensuring cohesive visual continuity across every scene.",
    icon: Camera,
  },
  {
    title: "Flight Scouting & Safety Planning",
    calligraphy: "disciplined craft",
    desc: "Pre-shoot route simulation, terrain reconnaissance, site risk assessment, and precise coordination for complex flight paths.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Agile Drone Builds",
    calligraphy: "engineered precision",
    desc: "Hand-tuned flight electronics and sub-250g micro platforms customized for whisper-quiet flight in delicate heritage interiors.",
    icon: Cpu,
  },
  {
    title: "Visual Cleanups & Motion Polish",
    calligraphy: "invisible finishing",
    desc: "Object removal, horizon leveling, subtle speed ramp choreography, and post-production refinement for spotless final release.",
    icon: Layers,
  },
];

interface StickyOffersShowcaseProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const StickyOffersShowcase: React.FC<StickyOffersShowcaseProps> = ({ onSelectService }) => {
  const [activeId, setActiveId] = useState<string>(CORE_SERVICES[0].id);

  const activeService = CORE_SERVICES.find((s) => s.id === activeId) || CORE_SERVICES[0];

  const handleSelect = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
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
    <section
      id="services"
      data-section="services"
      className="relative px-6 py-20 sm:py-28 md:px-16 scroll-mt-28 bg-[#050507]"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Section Header with Calligraphy Contrast */}
        <FadeInOnScroll direction="up" distance={25}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block">
                  Core Disciplines
                </span>
                <span className="text-silver/40 font-mono text-[9px]">·</span>
                <span className="font-script text-accent text-2xl font-normal relative top-0.5">
                  what we do
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
                Films Defined by{" "}
                <span className="font-script text-accent normal-case font-normal text-4xl sm:text-6xl pl-1">
                  perspective
                </span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
              We specialize in kinetic perspectives and complete film production. Explore our three core client disciplines below, followed by our full spectrum of capabilities.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Interactive 3-Tab Service Selector */}
        <div className="space-y-8">
          {/* Quick Tabs Grid */}
          <div className="grid gap-3 sm:grid-cols-3">
            {CORE_SERVICES.map((service) => {
              const isSelected = activeId === service.id;
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  className={`group relative text-left rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-accent bg-accent/10 shadow-[0_0_25px_rgba(212,176,98,0.15)] ring-1 ring-accent/30"
                      : "border-white/10 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-silver/50">
                      {service.number}
                    </span>
                    <div
                      className={`size-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-accent text-black"
                          : "bg-white/5 text-silver/60 group-hover:text-white"
                      }`}
                    >
                      <Icon className="size-4" />
                    </div>
                  </div>

                  {/* Calligraphy texture note */}
                  <span
                    className={`block font-script text-base mb-1 ${
                      isSelected ? "text-accent" : "text-silver/40 group-hover:text-silver/70"
                    }`}
                  >
                    {service.calligraphyNote}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs text-silver/60 font-light line-clamp-2 leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-silver/40 group-hover:text-accent transition-colors">
                    <span>{isSelected ? "Active Details" : "View Scope"}</span>
                    <ArrowUpRight className="size-3" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/10 bg-[#0a0a0d] p-7 sm:p-10 md:p-12 shadow-2xl relative"
            >
              <div className="grid gap-10 lg:grid-cols-12 items-start">
                {/* Left: Detailed Overview */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block">
                        Service {activeService.number}
                      </span>
                      <span className="text-silver/40 font-mono text-[9px]">·</span>
                      <span className="font-script text-accent text-xl font-normal">
                        {activeService.calligraphyNote}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {activeService.title}
                    </h3>
                    <p className="mt-2 text-sm text-silver/80 font-light leading-relaxed">
                      {activeService.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-silver/70 leading-relaxed font-light">
                    {activeService.description}
                  </p>

                  <div className="pt-2">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block mb-3 font-semibold">
                      Included Capabilities & Workflows
                    </span>
                    <ul className="grid gap-2.5 sm:grid-cols-2 text-xs text-silver/80">
                      {activeService.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleSelect(activeService.title)}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black hover:bg-white transition-all cursor-pointer shadow-[0_0_20px_rgba(212,176,98,0.2)]"
                    >
                      <span>Discuss {activeService.title}</span>
                      <ArrowUpRight className="size-3.5" />
                    </button>
                    <span className="text-xs text-silver/50 font-light">
                      Founder direct communication & planning
                    </span>
                  </div>
                </div>

                {/* Right: Scope & Output */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block">
                      Production Scope
                    </span>
                    <div className="space-y-3">
                      {activeService.specs.map((spec) => (
                        <div key={spec.label} className="border-b border-white/5 pb-2.5 last:border-none last:pb-0">
                          <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block">
                            {spec.label}
                          </span>
                          <span className="text-xs text-white font-medium block mt-0.5">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-accent font-semibold block mb-1">
                      Deliverable Focus
                    </span>
                    <p className="text-xs text-silver/80 leading-relaxed font-light">
                      {activeService.deliverables}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Extended Capabilities Grid (Adding More of What We Do) */}
        <div className="pt-8 border-t border-white/10">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block">
                  Extended Capabilities
                </span>
                <span className="text-silver/40 font-mono text-[9px]">·</span>
                <span className="font-script text-accent text-xl font-normal">
                  more of what we do
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Specialized Production Capabilities
              </h3>
            </div>
            <p className="text-xs text-silver/50 font-light max-w-sm leading-relaxed">
              From sub-250g delicate indoor quads to synchronized dual-operator cinema setups and tactile sound design.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXTENDED_CAPABILITIES.map((sup) => {
              const Icon = sup.icon;
              return (
                <div
                  key={sup.title}
                  className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.03] group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="size-5 text-accent" />
                    <span className="font-script text-accent text-base opacity-75 group-hover:opacity-100 transition-opacity">
                      {sup.calligraphy}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    {sup.title}
                  </h4>
                  <p className="mt-2 text-xs text-silver/60 font-light leading-relaxed">
                    {sup.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
