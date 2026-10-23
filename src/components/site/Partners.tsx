import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionHeader";

export function PartnersClients() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <SectionLabel id="// 04">Collaborators</SectionLabel>
            <h3 className="mt-4 text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white">
              Studio Network
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-silver/50 max-w-xs">
              Flexible production support and trusted collaborators across Switzerland.
            </p>
          </div>

          <div className="md:col-span-8 grid gap-8 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-3xl bg-white/[0.02] border border-white/5 p-8 transition-all hover:bg-white/[0.05] hover:border-accent/40 duration-500"
            >
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-accent/80 block mb-6">
                  Production Support
                </span>

                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-auto text-white transition-transform duration-500 group-hover:scale-105 flex items-center gap-3">
                    <div className="flex items-center h-full gap-3 font-display text-xl font-black uppercase tracking-[0.15em] text-white">
                      SWITZERLAND
                    </div>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-silver/50 mt-4">
                  Strategic production support for location shoots, event coverage, and brand filming across Switzerland.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between font-mono text-[8px] uppercase tracking-widest text-accent">
                <div className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-accent animate-pulse" />
                  <span>Available</span>
                </div>
                <span className="flex items-center gap-1 text-silver/60 group-hover:text-accent transition-colors font-mono">
                  Switzerland <ArrowUpRight className="size-3" />
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-3xl bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] duration-500"
            >
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-accent/80 block mb-6">
                  Flexible Team
                </span>

                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-auto text-white transition-transform duration-500 group-hover:scale-105">
                    <div className="flex items-center h-full gap-3 font-display text-base font-black uppercase tracking-[0.1em] text-white">
                      ORYN ZERO
                    </div>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-silver/50 mt-4">
                  A compact team for production planning, on-location filming, and post-production support.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between font-mono text-[8px] uppercase tracking-widest text-silver/40">
                <div className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-silver/50" />
                  <span>Creative Partner</span>
                </div>
                <span className="text-silver/60">Switzerland</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
