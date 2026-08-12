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

          {/* Showcasing the 2 authentic collaborators in a spacious, borders-free layout */}
          <div className="md:col-span-8 grid gap-8 sm:grid-cols-2">
            {/* VISURE GmbH Partner */}
            <motion.a
              href="https://www.visure.ch/de"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-3xl bg-white/[0.02] border border-white/5 p-8 transition-all hover:bg-white/[0.05] hover:border-accent/40 duration-500 cursor-pointer block"
            >
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-accent/80 block mb-6">
                  Production Partner
                </span>

                {/* Logo for VISURE GmbH */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-auto text-white transition-transform duration-500 group-hover:scale-105 flex items-center gap-3">
                    <img
                      src="https://yt3.googleusercontent.com/A_ScjFkBdLwARQaR3olhj0YbTRdBsI0b0L48ptf0VoqnGDOS-q7CDruAwczMZvbM5Wy7xz46=s900-c-k-c0x00ffffff-no-rj"
                      alt="VISURE GmbH Logo"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex items-center h-full gap-3 font-display text-xl font-black uppercase tracking-[0.15em] text-white">
                      VISURE{" "}
                      <span className="text-silver/40 font-mono text-[9px] tracking-widest mt-1">
                        GmbH
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-silver/50 mt-4">
                  Co-production and logistics partner for high-concept commercial projects and
                  high-risk aerial operations.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between font-mono text-[8px] uppercase tracking-widest text-accent">
                <div className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-accent animate-pulse" />
                  <span>Verified Partner</span>
                </div>
                <span className="flex items-center gap-1 text-silver/60 group-hover:text-accent transition-colors font-mono">
                  visure.ch <ArrowUpRight className="size-3" />
                </span>
              </div>
            </motion.a>

            {/* Parkour Day Stäfa Client */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-3xl bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] duration-500"
            >
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-accent/80 block mb-6">
                  Client & Brand
                </span>

                {/* Logo for Parkour Day Stäfa */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-auto text-white transition-transform duration-500 group-hover:scale-105">
                    {/* The user will supply the image */}
                    <div className="flex items-center h-full gap-3 font-display text-base font-black uppercase tracking-[0.1em] text-white">
                      Parkour Day{" "}
                      <span className="font-sans text-xs font-semibold text-silver/60">
                        Stäfa, Zürich
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-silver/50 mt-4">
                  A high-impact community and athletic event captured using our specialized
                  close-proximity FPV drone tracking.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-silver/40">
                <span className="size-1 rounded-full bg-silver/50" />
                <span>Event Film Client</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
