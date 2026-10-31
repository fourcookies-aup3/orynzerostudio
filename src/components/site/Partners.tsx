import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionHeader";

export function PartnersClients() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          {/* Header Area */}
          <div className="md:col-span-4">
            <SectionLabel id="// 04">Collaborators</SectionLabel>
            <h3 className="mt-4 text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white">
              Studio Network
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-silver/50 max-w-xs">
              We operate alongside premium partners and local institutions to deliver Swiss
              excellence at scale.
            </p>
          </div>

          {/* Showcasing the authentic collaborators & supporters in a clean layout */}
          <div className="md:col-span-8 grid gap-6 sm:grid-cols-3">
            {/* VISURE GmbH Partner */}
            <motion.a
              href="https://www.visure.ch/de"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-3xl bg-white/[0.02] border border-white/5 p-6 transition-all hover:bg-white/[0.05] hover:border-accent/40 duration-500 cursor-pointer block"
            >
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-accent/80 block mb-4">
                  Production Partner
                </span>

                {/* Logo for VISURE GmbH */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://yt3.googleusercontent.com/A_ScjFkBdLwARQaR3olhj0YbTRdBsI0b0L48ptf0VoqnGDOS-q7CDruAwczMZvbM5Wy7xz46=s900-c-k-c0x00ffffff-no-rj"
                    alt="VISURE GmbH Logo"
                    className="h-9 w-9 rounded-full object-cover shrink-0"
                  />
                  <div className="font-display text-base font-black uppercase tracking-[0.15em] text-white">
                    VISURE <span className="text-silver/40 font-mono text-[8px]">GmbH</span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-silver/60 mt-3">
                  Trusted Swiss production collaboration partner for cinema and commercial projects.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between font-mono text-[8px] uppercase tracking-widest text-accent">
                <span className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-accent animate-pulse" />
                  <span>Trusted Partner</span>
                </span>
                <span className="flex items-center gap-1 text-silver/60 group-hover:text-accent transition-colors font-mono">
                  visure.ch <ArrowUpRight className="size-3" />
                </span>
              </div>
            </motion.a>

            {/* Supporting Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-3xl bg-white/[0.02] border border-white/5 p-6 transition-all hover:bg-white/[0.04] duration-500"
            >
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-accent/80 block mb-4">
                  Patron & Supporter
                </span>

                <div className="mb-3">
                  <div className="font-display text-base font-black uppercase tracking-[0.1em] text-white">
                    Supporting Foundation
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-silver/60 mt-3">
                  Recognized foundation patron supporting Swiss aerial creativity, youth arts, and local cultural productions.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between font-mono text-[8px] uppercase tracking-widest text-silver/40">
                <span className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-accent" />
                  <span>Patron</span>
                </span>
                <span className="text-silver/60">Switzerland</span>
              </div>
            </motion.div>

            {/* Parkour Day Stäfa Client */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-3xl bg-white/[0.02] border border-white/5 p-6 transition-all hover:bg-white/[0.04] duration-500"
            >
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-accent/80 block mb-4">
                  Client & Brand
                </span>

                <div className="mb-3">
                  <div className="font-display text-base font-black uppercase tracking-[0.1em] text-white">
                    Parkour Day Stäfa
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-silver/60 mt-3">
                  High-impact community athletic event captured with dynamic close-proximity FPV chase lines.
                </p>

                {/* Explicit Production Credits */}
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-2.5 space-y-1 font-mono text-[8px]">
                  <p className="text-white">
                    <span className="text-silver/50">Main Rec/Edit:</span> VISURE GMBH
                  </p>
                  <p className="text-white">
                    <span className="text-silver/50">FPV Drone:</span> Finn Ryf
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between font-mono text-[8px] uppercase tracking-widest text-silver/40">
                <span className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-silver/50" />
                  <span>Event Client</span>
                </span>
                <span className="text-silver/60">Switzerland</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
