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
      "High-speed chase tracking and subject following",
      "Proximity indoor fly-throughs & architectural tours",
      "Sub-250g lightweight quads for tight, delicate spaces",
      "Cinematic mountain, landscape & location aerials",
    ],
    specs: [
      { label: "Flight Scope", value: "Kinetic Chases & Close Proximity Passes" },
      { label: "Certifications", value: "Swiss BAZL / FOCA & EASA A1 / A3 Certified" },
      { label: "Safety Margin", value: "Commercial Aviation Liability Insurance" },
    ],
    deliverables: "Stabilized cinematic takes, clean master files, and synchronized natural sound.",
    icon: Compass,
  },
  {
    id: "event-brand-films",
    number: "02",
    title: "Event & Brand Films",
    tagline: "Creative planning, ground cinematography, FPV coverage, and complete film production.",
    description:
      "We handle complete film productions from visual storyboard concepts and location planning to live multi-angle filming. By pairing fluid ground cinematography with synchronized FPV aerial perspectives, we deliver cohesive, high-energy visual stories for brands, festivals, sports events, hotels, and architectural spaces.",
    capabilities: [
      "Concept development, shot-lists & storyboarding",
      "Grounded cinematography and dynamic tracking",
      "Synchronized multi-operator coverage (FPV + ground)",
      "Commercial brand films, teasers & social cutdowns",
    ],
    specs: [
      { label: "Cinematography", value: "Synchronized Ground & Aerial Coverage" },
      { label: "Coverage", value: "Lead Cinematographer & Dedicated FPV Pilots" },
      { label: "Aspect Ratios", value: "Widescreen Cinema & Vertical Social Formats" },
    ],
    deliverables: "Full commercial master films, launch teaser cutdowns, and tailored social ratios.",
    icon: Film,
  },
  {
    id: "post-production",
    number: "03",
    title: "Post-Production",
    tagline: "Editing, color grading, sound design, and selected VFX.",
    description:
      "A film succeeds in the edit. We take captured footage through a disciplined post-production workflow: rhythm-based cutting that respects physical motion, custom color grading for a rich filmic palette, tactile sound design and Foley that give aerodynamic speed tangible weight, and clean visual finishing.",
    capabilities: [
      "Rhythm-based narrative and fast-paced montage editing",
      "Refined color grading and contrast balance",
      "Tactile sound design, Foley & spatial audio mixes",
      "Motion tracking, screen replacement & cleanups",
    ],
    specs: [
      { label: "Color Grading", value: "Filmic Contrast & Natural Skin Tones" },
      { label: "Sound Design", value: "Tactile Foley & Atmospheric Soundscapes" },
      { label: "Master Delivery", value: "Full-Resolution Masters & Web Releases" },
    ],
    deliverables: "Finished mastered films, balanced audio stems, and multi-format exports for broadcast and web.",
    icon: SlidersHorizontal,
  },
];

const SUPPORTING_EXPERTISE = [
  {
    title: "Agile Camera Support",
    desc: "Compact camera platforms, lightweight indoor quads, and calibrated stabilization systems.",
    icon: Video,
  },
  {
    title: "Swiss Airspace Coordination",
    desc: "Coordination with the Federal Office of Civil Aviation (BAZL / FOCA), CTR controlled airspace permits, and insurance.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Drone Builds",
    desc: "Hand-tuned flight electronics, calibrated stabilization, and redundant safety systems.",
    icon: Cpu,
  },
  {
    title: "Visual Cleanups & Motion Tracking",
    desc: "Clean motion tracking, object removal, and seamless visual finishing where live filming requires post-production refinement.",
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
        {/* Section Header */}
        <FadeInOnScroll direction="up" distance={25}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <SectionLabel id="02">What We Do</SectionLabel>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Three client-facing disciplines.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
              We focus our production on three distinct service groups. Each is designed for clarity, safety, and visual momentum.
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
                      ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(212,176,98,0.15)] ring-1 ring-accent/30"
                      : "border-white/10 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
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

        {/* Supporting Capabilities Grid */}
        <div className="pt-6 border-t border-white/10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block">
                Supporting Foundation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                Logistics, Safety & Flight Craft
              </h3>
            </div>
            <p className="text-xs text-silver/50 font-light">
              Compliance with Swiss and European civil aviation rules.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPORTING_EXPERTISE.map((sup) => {
              const Icon = sup.icon;
              return (
                <div
                  key={sup.title}
                  className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 transition-colors hover:border-white/15"
                >
                  <Icon className="size-5 text-accent mb-3" />
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
