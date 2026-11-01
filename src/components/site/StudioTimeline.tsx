import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  Film,
  Calendar,
  CheckCircle2,
  Clock
} from "lucide-react";

export interface TimelineMilestone {
  year: string;
  badge: string;
  calligraphySubtitle: string;
  title: string;
  story: string;
  capabilitiesAdded: string[];
  highlight: string;
  isNext?: boolean;
}

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "2026",
    badge: "FOUNDING & FIRST PROJECT",
    calligraphySubtitle: "the genesis & first flight",
    title: "The Founding of ORYN ZERO & Debut Production",
    story:
      "ORYN ZERO Studio was officially founded in Switzerland in 2026 with a clear cinematic conviction: camera movement should carry intention, momentum, and physical reality. We established our studio around custom-tuned agile FPV quads, fluid ground cinematography, and a complete in-house post-production suite. In our founding year, we delivered our first major production—partnering with VISURE GMBH on the high-energy Parkour Day Stäfa film, executing synchronized close-proximity athlete chase lines alongside ground camera crews.",
    capabilitiesAdded: [
      "Official founding of ORYN ZERO Studio in Switzerland",
      "Debut collaborative project: Parkour Day Stäfa with VISURE GMBH",
      "Dynamic close-proximity FPV chase lines following athletes across obstacles",
      "Synchronized dual-operator cinematography (FPV pilot + ground camera)",
      "Dedicated in-house narrative editing, filmic color grading, and tactile sound design",
      "Sub-250g indoor quad builds and high-speed exterior chase platforms",
    ],
    highlight: "Studio officially founded in Switzerland; debut release of the Parkour Day Stäfa collaborative event film.",
  },
  {
    year: "NEXT",
    badge: "COMING SOON",
    calligraphySubtitle: "the next chapter",
    title: "Upcoming Productions & Next Era",
    story:
      "What lies directly ahead for ORYN ZERO. We are actively in pre-production on our next wave of commercial collaborations, brand films, and kinetic visual experiments. Our upcoming slate focuses on unbroken single-take architectural walkthroughs, high-speed automotive tracking lines, luxury hospitality films, and self-produced movement pieces across Switzerland and Europe.",
    capabilitiesAdded: [
      "Upcoming commercial brand films & event coverage (currently in pre-production)",
      "Uncut indoor-to-outdoor continuous single-take architectural showcases",
      "High-speed automotive & action tracking sequences",
      "Expanded multi-ratio delivery packages for cinema (16:9) and vertical social (9:16)",
      "Bespoke creative direction and treatment development for upcoming partners",
    ],
    highlight: "New projects, experimental films & brand collaborations currently in pre-production. Coming soon...",
    isNext: true,
  },
];

export function StudioTimeline() {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Default to 2026 (Founding)
  const current = TIMELINE_DATA[activeIndex];

  return (
    <section className="relative px-6 py-24 sm:py-32 md:px-16 bg-[#040406] border-t border-b border-white/10 overflow-hidden">
      {/* Background ambient texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,176,98,0.06),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Section Header with Calligraphy Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent font-semibold block">
                Studio Timeline
              </span>
              <span className="text-silver/40 font-mono text-[9px]">·</span>
              <span className="font-script text-accent text-2xl font-normal relative top-0.5">
                our journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              2026 Founding &{" "}
              <span className="font-script text-accent normal-case font-normal text-4xl sm:text-6xl pl-1">
                what's next
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-silver/60 font-light max-w-sm leading-relaxed">
            Founded in Switzerland in 2026. Explore our founding milestones, first collaborative film project, and what is coming next.
          </p>
        </div>

        {/* Interactive Scrub Bar / Milestone Selector (2026 & NEXT) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
          {TIMELINE_DATA.map((milestone, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={milestone.year}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white/[0.06] border-accent/70 shadow-[0_0_30px_rgba(212,176,98,0.18)] ring-1 ring-accent/40"
                    : "bg-white/[0.01] border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                }`}
              >
                {/* Calligraphy sub-label */}
                <span
                  className={`block font-script text-lg mb-1 transition-colors ${
                    isActive ? "text-accent" : "text-silver/40 group-hover:text-silver/70"
                  }`}
                >
                  {milestone.calligraphySubtitle}
                </span>

                {/* Year Number Minimal Blocky */}
                <div className="flex items-baseline justify-between">
                  <span
                    className={`font-mono text-3xl font-black tracking-tight ${
                      isActive
                        ? "text-white"
                        : milestone.isNext
                        ? "text-accent/90"
                        : "text-silver/70 group-hover:text-white"
                    }`}
                  >
                    {milestone.year}
                  </span>
                  {milestone.isNext && (
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                    </span>
                  )}
                </div>

                <span
                  className={`block text-[10px] font-mono uppercase tracking-widest mt-2 ${
                    isActive ? "text-silver/90 font-semibold" : "text-silver/40"
                  }`}
                >
                  {milestone.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.year}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`rounded-3xl border p-8 sm:p-12 relative overflow-hidden ${
              current.isNext
                ? "bg-gradient-to-br from-[#0c0c12] via-[#08080a] to-[#040406] border-accent/40 shadow-[0_0_50px_rgba(212,176,98,0.12)]"
                : "bg-[#08080b] border-white/10"
            }`}
          >
            {/* Background subtle watermark year */}
            <span className="absolute -right-6 -bottom-10 font-mono text-[160px] sm:text-[220px] font-black text-white/[0.02] select-none pointer-events-none leading-none">
              {current.year}
            </span>

            <div className="grid gap-10 lg:grid-cols-12 relative z-10">
              {/* Left Column: Context & Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent font-bold px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
                    {current.badge}
                  </span>
                  <span className="font-script text-accent text-2xl lowercase">
                    {current.calligraphySubtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-silver/80 font-light leading-relaxed">
                  {current.story}
                </p>

                {/* Highlight Callout */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 flex items-start gap-3">
                  <Sparkles className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-silver/50 block">
                      Milestone Highlight
                    </span>
                    <p className="text-xs sm:text-sm text-white font-medium mt-1">
                      {current.highlight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Capabilities & Interactive Action */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-silver/50 block font-semibold">
                    {current.isNext ? "In Active Development" : "Milestones Conquered"}
                  </span>
                  <ul className="space-y-2.5">
                    {current.capabilitiesAdded.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-xs text-silver/80">
                        <span className="size-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Interactive Area */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  {current.isNext ? (
                    <div className="w-full space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="font-script text-accent text-3xl font-normal">
                          coming soon...
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-silver/50">
                          Next Productions
                        </span>
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-black hover:bg-white transition-all shadow-[0_0_25px_rgba(212,176,98,0.3)] w-full sm:w-auto"
                      >
                        <span>Collaborate on Our Next Project</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[9px] text-silver/50 uppercase tracking-widest">
                        Chapter 1 of 2 · Founding
                      </span>

                      <button
                        type="button"
                        onClick={() => setActiveIndex(1)}
                        className="font-mono text-[9px] uppercase tracking-widest text-accent hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <span className="font-script text-base normal-case">view</span>
                        <span>Next Era (Coming Soon) ↗</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
