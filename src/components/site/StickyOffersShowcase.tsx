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
} from "lucide-react";
import { SectionLabel } from "./SectionHeader";
import { FadeInOnScroll } from "./FadeInOnScroll";

export interface ServiceGroup {
  id: string;
  number: string;
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
    title: "FPV & Aerial",
    tagline: "Dynamic indoor, outdoor, event, automotive, sport, and location-based filming.",
    description:
      "We operate specialized FPV drones and aerial camera platforms capable of chasing fast-moving subjects, flying smooth indoor single-takes, and navigating spaces conventional camera cranes and helicopters cannot reach. From high-speed automotive lines to close-proximity athlete tracking, every flight is planned for safety and cinematic flow.",
    capabilities: [
      "High-speed chase tracking (up to 140 km/h)",
      "Proximity indoor fly-throughs & architectural tours",
      "Sub-250g lightweight quads for tight, delicate spaces",
      "Cinematic mountain, landscape & location aerials",
    ],
    specs: [
      { label: "Flight Speeds", value: "0 to 140 km/h Chase Lines" },
      { label: "Resolutions", value: "4K / 5.3K 10-Bit RAW / Log" },
      { label: "Certifications", value: "Swiss BAZL / FOCA & EASA A1/A3, A2" },
    ],
    deliverables: "Stabilized high-bitrate aerial takes, color-ready Log/RAW footage, and synchronized audio.",
    icon: Compass,
  },
  {
    id: "event-brand-films",
    number: "02",
    title: "Event & Brand Films",
    tagline: "Creative planning, ground cinematography, FPV coverage, and complete film production.",
    description:
      "We handle complete film productions from visual storyboard concepts and location planning to live multi-angle filming. By pairing grounded cinema cameras (Sony FX3 rigs) with synchronized FPV aerial perspectives, we deliver cohesive, high-energy visual stories for brands, festivals, sports events, hotels, and architectural spaces.",
    capabilities: [
      "Concept development, shot-lists & storyboarding",
      "Ground cinematography with Sony FX3 cinema packages",
      "Synchronized multi-operator coverage (FPV + ground)",
      "Commercial brand films, teasers & social cutdowns",
    ],
    specs: [
      { label: "Camera Packages", value: "Sony FX3 & Cinema Primes" },
      { label: "Coverage", value: "Synchronized Ground & FPV Crew" },
      { label: "Formats", value: "DCI 4K Scope + 9:16 Social Masters" },
    ],
    deliverables: "Full 4K commercial masters, teaser edits for immediate launch, and tailored social ratios.",
    icon: Film,
  },
  {
    id: "post-production",
    number: "03",
    title: "Post-Production",
    tagline: "Editing, color grading, sound design, and selected VFX.",
    description:
      "A film succeeds in the edit. We take raw footage through a disciplined post-production workflow: rhythm-based cutting that respects physical motion, custom DaVinci Resolve color grading for a rich filmic palette, tactile sound design and Foley that give aerodynamic speed tangible weight, and clean visual cleanup or tracking.",
    capabilities: [
      "Rhythm-based narrative and fast-paced montage editing",
      "DaVinci Resolve color grading (ACES color managed)",
      "Tactile sound design, Foley & spatial audio mixes",
      "Motion tracking, screen replacement & cleanups",
    ],
    specs: [
      { label: "Grading Suite", value: "DaVinci Resolve Studio (ACES)" },
      { label: "Sound Design", value: "Tactile Foley & Sub-Bass Soundscapes" },
      { label: "Delivery", value: "ProRes 422 HQ / H.265 Master Files" },
    ],
    deliverables: "Finished mastered films, stems for audio, calibrated SDR/HDR grades, and multi-format exports.",
    icon: SlidersHorizontal,
  },
];

const SUPPORTING_EXPERTISE = [
  {
    title: "Specialized Cinema Rigs",
    desc: "Custom balanced Sony FX3 solo rigs, lightweight cinewhoops, and low-vibration damping systems.",
    icon: Video,
  },
  {
    title: "Swiss Airspace Coordination",
    desc: "Coordination with the Federal Office of Civil Aviation (BAZL / FOCA), CTR controlled airspace permits, and insurance.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Drone Builds",
    desc: "Hand-tuned flight controllers, calibrated Gyroflow stabilization, and redundant communication links.",
    icon: Cpu,
  },
  {
    title: "Camera Motion Tracking & CGI",
    desc: "Spatial 3D camera solving and photoreal visual integration where practical filming requires digital support.",
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
      className="relative px-6 py-20 sm:py-28 md:px-16 scroll-mt-28 bg-gradient-to-b from-transparent via-black/40 to-transparent"
    >
      <FadeInOnScroll direction="up" distance={35}>
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel id="02">What We Do</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl text-white">
                Three Core Services
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
              Every production is built around client needs. We offer standalone FPV filming, complete
              event coverage, and specialized post-production.
            </p>
          </div>

          {/* Interactive 3-Service Grid / Switcher */}
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {CORE_SERVICES.map((service) => {
              const isSelected = service.id === activeId;
              const Icon = service.icon;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-accent/60 bg-[#0d0d10] shadow-[0_8px_30px_rgba(212,176,98,0.12)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                        isSelected ? "text-accent" : "text-silver/50"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div
                      className={`flex size-9 items-center justify-center rounded-xl transition-colors ${
                        isSelected
                          ? "bg-accent text-black"
                          : "bg-white/5 text-silver/70 group-hover:text-white"
                      }`}
                    >
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-xs text-silver/60 line-clamp-2 leading-relaxed">
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
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
                      Service {activeService.number} · Client Solution
                    </span>
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
                    <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block mb-3">
                      Included Capabilities
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
                      Direct response within 24h
                    </span>
                  </div>
                </div>

                {/* Right: Technical Specs & Output */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block">
                      Production Specs
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

          {/* Supporting Technical Expertise */}
          <div className="mt-14 pt-10 border-t border-white/10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40 block">
                  Supporting Capabilities
                </span>
                <h4 className="text-lg font-bold text-white tracking-tight mt-1">
                  Technical Foundation
                </h4>
              </div>
              <span className="font-mono text-[9px] text-silver/40 uppercase tracking-widest">
                Stäfa, Switzerland
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SUPPORTING_EXPERTISE.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/15 transition-all"
                  >
                    <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center text-accent mb-3">
                      <ItemIcon className="size-4" />
                    </div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                      {item.title}
                    </h5>
                    <p className="mt-2 text-xs text-silver/60 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};
