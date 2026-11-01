import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import {
  ArrowUpRight,
  Compass,
  Film,
  SlidersHorizontal,
  CheckCircle2,
  ShieldCheck,
  Video,
  Cpu,
  Volume2,
  Camera,
  Layers,
  Sparkles,
} from "lucide-react";
import { CORE_SERVICES } from "@/components/site/StickyOffersShowcase";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Capabilities — ORYN ZERO Studio" },
      {
        name: "description",
        content:
          "FPV aerial cinematography, commercial brand films, and in-house post-production by ORYN ZERO Studio in Switzerland.",
      },
      { property: "og:title", content: "Services & Capabilities — ORYN ZERO Studio" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const EXTENDED_SERVICES = [
  {
    title: "Architectural Single-Takes",
    calligraphy: "fluid spaces",
    desc: "Uncut, continuous indoor fly-throughs linking entrances, interiors, and outdoor courtyards in one seamless kinetic movement.",
    icon: Video,
  },
  {
    title: "High-Speed Chase Tracking",
    calligraphy: "pure momentum",
    desc: "Dynamic close-proximity tracking of vehicles, action sports athletes, and live performances with precision safety margins.",
    icon: Compass,
  },
  {
    title: "Synchronized Ground DP",
    calligraphy: "dual perspective",
    desc: "Ground cinematography operator tracking alongside aerial flight lines for cohesive cinematic narrative rhythm.",
    icon: Camera,
  },
  {
    title: "Sub-250g Micro Quads",
    calligraphy: "delicate craft",
    desc: "Whisper-quiet indoor flight platforms custom-engineered to fly close to people, artwork, and historic interiors.",
    icon: Cpu,
  },
  {
    title: "Filmic Color Grading",
    calligraphy: "signature look",
    desc: "Custom color science emphasizing organic contrast, deep blacks, natural skin tones, and rich editorial texture.",
    icon: SlidersHorizontal,
  },
  {
    title: "Tactile Sound Design & Foley",
    calligraphy: "sensory audio",
    desc: "Synthesizing aerodynamic speed rushes, mechanical frequencies, and atmospheric audio to give visual flight tangible weight.",
    icon: Volume2,
  },
  {
    title: "Flight Scouting & Safety Planning",
    calligraphy: "disciplined craft",
    desc: "Pre-shoot route simulation, terrain reconnaissance, site risk assessment, and precise coordination for complex flight paths.",
    icon: ShieldCheck,
  },
  {
    title: "Visual Finishing & Cleanups",
    calligraphy: "invisible finish",
    desc: "Object removal, horizon stabilization, subtle speed ramp choreography, and post-production polish for spotless final delivery.",
    icon: Layers,
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={
          <div className="flex items-center gap-2">
            <span>Capabilities & Scope</span>
            <span className="text-silver/40">·</span>
            <span className="font-script text-accent text-xl normal-case">what we do</span>
          </div>
        }
        title={
          <>
            Films Defined by{" "}
            <span className="font-script text-accent font-normal text-5xl sm:text-7xl md:text-8xl normal-case pl-1.5 inline-block relative top-1">
              perspective.
            </span>
          </>
        }
        intro="Three core client-facing disciplines supported by comprehensive flight engineering, ground cinematography, and in-house post-production."
      />

      <section className="px-6 py-20 bg-[#050507]">
        <div className="mx-auto max-w-6xl space-y-16">
          {CORE_SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="rounded-3xl border border-white/10 bg-[#0a0a0d] p-8 sm:p-12 transition-colors hover:border-white/20"
              >
                <div className="grid gap-8 lg:grid-cols-12 items-start">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
                        Service {s.number}
                      </span>
                      <span className="size-1 rounded-full bg-white/20" />
                      <span className="font-script text-accent text-xl normal-case">
                        {s.calligraphyNote}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                        {s.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-silver/80 font-light leading-relaxed">
                      {s.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-silver/60 font-light leading-relaxed">
                      {s.description}
                    </p>

                    <div className="pt-2">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block mb-3 font-semibold">
                        Included Scope & Workflows
                      </span>
                      <ul className="grid gap-2 sm:grid-cols-2 text-xs text-silver/80">
                        {s.capabilities.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-5 lg:pl-6 lg:border-l lg:border-white/5">
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block">
                        Production Scope
                      </span>
                      <div className="space-y-3">
                        {s.specs.map((spec) => (
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
                        Deliverables
                      </span>
                      <p className="text-xs text-silver/80 leading-relaxed font-light">
                        {s.deliverables}
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(212,176,98,0.2)]"
                    >
                      <span>Inquire About {s.title}</span>
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extended Capabilities Grid (More of What We Do) */}
        <div className="mx-auto max-w-6xl mt-20 pt-16 border-t border-white/10">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block">
                  Extended Craft
                </span>
                <span className="text-silver/40 font-mono text-[9px]">·</span>
                <span className="font-script text-accent text-xl normal-case">more of what we do</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                Specialized Production Capabilities
              </h3>
            </div>
            <p className="mt-2 text-xs text-silver/60 max-w-sm font-light leading-relaxed">
              We manage all site logistics, specialized rigging, flight path simulation, and bespoke post-production finishing in-house.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXTENDED_SERVICES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-accent/40 hover:bg-white/[0.03] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="size-5 text-accent" />
                    <span className="font-script text-accent text-base opacity-75 group-hover:opacity-100 transition-opacity">
                      {item.calligraphy}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-silver/60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-black hover:bg-white transition-all shadow-[0_0_25px_rgba(212,176,98,0.25)]"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
