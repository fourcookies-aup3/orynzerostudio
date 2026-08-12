const fs = require("fs");
let code = fs.readFileSync("src/routes/index.tsx", "utf-8");

const startIdx = code.indexOf("{/* List/Grid of Case studies */}");
const endIdx = code.indexOf(
  "{/* ===================== SERVICES (HUD/LIST) ===================== */}",
);

const replacement = `{/* List/Grid of Case studies */}
            <div className="grid gap-8">
              {projects.length > 0 ? (
                <div className="grid gap-12 sm:grid-cols-1">
                  {projects.map((p) => (
                    <div
                      key={p.slug}
                      onClick={() => setActiveCaseStudy(p)}
                      className="group block cursor-pointer"
                    >
                      <div className="relative aspect-video overflow-hidden border border-white/5 bg-white/[0.01] rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
                        <img
                          src={p.cover}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                        />
                        {/* Dark radial shade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        {/* Text Content over Image */}
                        <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6 pointer-events-none">
                          <div className="space-y-4">
                            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver/80">
                              ID: {p.id} · {p.year}
                            </p>
                            <h4 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                              {p.title}
                            </h4>
                          </div>
                        </div>

                        {/* Hover reveal HUD overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-[4px]">
                          <div className="flex flex-col items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                              View Case Study
                            </span>
                            <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-silver">
                              Explore Project Details <Maximize2 className="size-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Footer detail row of the card */}
                      <div className="mt-6 flex items-start justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-silver/40 pl-4 pr-4">
                        <div className="flex flex-col gap-2">
                          <span>CLIENT: {p.client}</span>
                          <span>DISCIPLINE: {p.category}</span>
                        </div>
                        <span>{p.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Intentional, highly elegant, premium empty state */
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center justify-center text-center py-24 border border-white/5 rounded-3xl bg-white/[0.01] px-6"
                >
                  <div className="flex size-14 items-center justify-center rounded-full bg-white/[0.03] border border-white/5 mb-6 animate-pulse text-white">
                    <Lock className="size-5" />
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-widest text-white">
                    Active Pre-Production
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-silver/50 max-w-sm">
                    Our next-generation FPV runs and cinematic brand film productions are currently
                    in storyboard or early grade phases.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        `;

code = code.substring(0, startIdx) + replacement + code.substring(endIdx);
fs.writeFileSync("src/routes/index.tsx", code);
