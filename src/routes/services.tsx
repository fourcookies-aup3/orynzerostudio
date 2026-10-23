import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import { ArrowUpRight, Compass, Film, SlidersHorizontal, CheckCircle2, Video, Cpu } from "lucide-react";
import { CORE_SERVICES } from "@/components/site/StickyOffersShowcase";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ORYN ZERO Studio" },
      {
        name: "description",
        content:
          "FPV aerial cinematography, event & brand films, and post-production by ORYN ZERO Studio in Switzerland.",
      },
      { property: "og:title", content: "Services — ORYN ZERO Studio" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities & Scope"
        title="Production Services"
        intro="Three clear client-facing service groups tailored for brands, agencies, and event organizers looking for dynamic visual storytelling."
      />

      <section className="px-6 py-20">
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
                      <span className="font-mono text-[9px] uppercase tracking-wider text-silver/50">
                        Client Focus
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
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
                      <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block mb-3">
                        Included Scope & Capabilities
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
                        Technical Specifications
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
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black hover:bg-accent transition-colors"
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

        <div className="mx-auto max-w-6xl mt-20 pt-12 border-t border-white/10">
          <div className="mb-8">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent block">
              Production Support
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
              Flexible, Swiss-Based Production Coverage
            </h3>
            <p className="mt-2 text-xs text-silver/60 max-w-lg leading-relaxed">
              Based in Switzerland, we work closely with brands, agencies, and events to plan locations, capture footage, and deliver a polished production on schedule.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
              <Video className="size-5 text-accent mb-3" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Location Planning</h4>
              <p className="mt-2 text-xs text-silver/60 font-light leading-relaxed">
                Smart scouting and route planning to align the story with the environment.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
              <Compass className="size-5 text-accent mb-3" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Creative Direction</h4>
              <p className="mt-2 text-xs text-silver/60 font-light leading-relaxed">
                Clear visual strategy, shot planning, and pacing that fits the brief.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
              <Cpu className="size-5 text-accent mb-3" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Equipment Readiness</h4>
              <p className="mt-2 text-xs text-silver/60 font-light leading-relaxed">
                Flight-ready setups, camera systems, and production support tailored to each job.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
              <SlidersHorizontal className="size-5 text-accent mb-3" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Delivery</h4>
              <p className="mt-2 text-xs text-silver/60 font-light leading-relaxed">
                Final edits, exports, and asset delivery shaped for the right channel and audience.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-black hover:bg-white transition-all shadow-[0_0_25px_rgba(212,176,98,0.22)]"
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
