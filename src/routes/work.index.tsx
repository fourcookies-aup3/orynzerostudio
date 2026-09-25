import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Compass, Film } from "lucide-react";
import { PageHero } from "@/components/site/SectionHeader";
import { projects } from "@/data/projects";
import { showreel } from "@/data/site";
import { useState } from "react";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work & Productions — ORYN ZERO Studio" },
      {
        name: "description",
        content:
          "Selected cinematic productions, FPV aerial sequences, and event films by ORYN ZERO Studio in Stäfa, Switzerland.",
      },
      { property: "og:title", content: "Work & Productions — ORYN ZERO Studio" },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Portfolio & Productions"
        title="Selected Work"
        intro="Real productions demonstrating dynamic FPV perspectives, synchronized ground cinematography, and movement-first editing."
      />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-20">
          {/* 1. Studio Reel (Distinguished from Client Work) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold">
                  Studio Showreel
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  FPV Perspectives & Movement Reel
                </h2>
              </div>
              <span className="font-mono text-[10px] text-silver/40 uppercase tracking-widest">
                Studio Production · 2026
              </span>
            </div>

            <div
              onClick={() => setActiveVideo(showreel.src)}
              className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-black cursor-pointer shadow-2xl transition-all duration-500 hover:border-accent/40"
            >
              <img
                src={showreel.poster}
                alt="ORYN ZERO FPV Showreel"
                loading="eager"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-accent text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-6 fill-current ml-1" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent block mb-1">
                    ORYN ZERO · Studio Reel
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    High-Velocity Aerials & Precision Proximity
                  </h3>
                  <p className="mt-1 text-xs text-silver/70 max-w-lg font-light leading-relaxed">
                    A compilation of high-speed outdoor chase lines, close-proximity indoor passes, and Swiss alpine aerials.
                  </p>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-white/80 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 shrink-0">
                  Watch Showreel (4K)
                </span>
              </div>
            </div>
          </div>

          {/* 2. Client Case Studies */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold">
                  Client Case Study
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  Collaborative & Commercial Projects
                </h2>
              </div>
              <span className="font-mono text-[10px] text-silver/40 uppercase tracking-widest">
                Stäfa, Switzerland
              </span>
            </div>

            <div className="grid gap-12">
              {projects.map((p) => (
                <div
                  key={p.slug}
                  className="rounded-3xl border border-white/10 bg-[#0a0a0d] p-7 sm:p-10 transition-all hover:border-white/20"
                >
                  <div className="grid gap-8 lg:grid-cols-12 items-start">
                    {/* Visual Media Card */}
                    <div className="lg:col-span-6">
                      <Link
                        to="/work/$slug"
                        params={{ slug: p.slug }}
                        className="group relative block aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black cursor-pointer shadow-lg"
                      >
                        <img
                          src={p.cover}
                          alt={p.title}
                          loading="lazy"
                          className="size-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="rounded-full bg-accent px-5 py-2 font-mono text-[9px] font-bold uppercase tracking-widest text-black">
                            View Case Study
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[9px] uppercase tracking-widest">
                          <span>{p.category}</span>
                          <span>{p.year}</span>
                        </div>
                      </Link>
                    </div>

                    {/* Case Study Details */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
                          Client: {p.client}
                        </span>
                        <span className="font-mono text-[10px] text-silver/40">{p.location}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        <Link to="/work/$slug" params={{ slug: p.slug }} className="hover:text-accent transition-colors">
                          {p.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
                        {p.overview}
                      </p>

                      {/* Explicit Transparent Role Banner */}
                      <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 space-y-1">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-accent font-semibold block">
                          ORYN ZERO's Exact Role
                        </span>
                        <p className="text-xs font-semibold text-white">
                          {p.exactRole}
                        </p>
                        {p.credits && (
                          <p className="text-[11px] text-silver/60 pt-1 font-light">
                            <strong>Partner Credits:</strong> {p.credits.mainRecordingEditing} (Main Recording & Editing)
                          </p>
                        )}
                      </div>

                      <div className="pt-2">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block mb-2">
                          Delivered Services by ORYN ZERO
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {p.services.map((s) => (
                            <span
                              key={s}
                              className="font-mono text-[9px] text-silver/80 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex items-center gap-4">
                        <Link
                          to="/work/$slug"
                          params={{ slug: p.slug }}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-black hover:bg-accent transition-colors"
                        >
                          <span>Full Case Study</span>
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-10 sm:p-14 text-center space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent">
              Let's Film Movement
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Have a production in mind?
            </h3>
            <p className="text-xs sm:text-sm text-silver/70 max-w-lg mx-auto font-light leading-relaxed">
              Whether you need close-proximity FPV flight lines for an upcoming event or complete film production, tell us what you're planning.
            </p>
            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(212,176,98,0.2)]"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-video border border-white/10 bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-30 flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 hover:text-accent transition-colors cursor-pointer"
              >
                Close <X className="size-3.5" />
              </button>
              <VideoPlayer src={activeVideo} autoPlay={true} loop={true} muted={false} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
