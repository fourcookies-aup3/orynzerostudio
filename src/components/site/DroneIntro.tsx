import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Luxury cinematic typographic loader.
 * Counts up from 0 to 100 with dynamic camera state indicators.
 * Fades out with a premium lens blur and scale effect.
 * Runs once per session to maintain excellent usability.
 */
export function DroneIntro() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip if played this session
    if (sessionStorage.getItem("oryn-intro-played") === "1") {
      setComplete(true);
      return;
    }

    setMounted(true);
    document.body.style.overflow = "hidden";

    // Smooth random increment count up
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setComplete(true);
          sessionStorage.setItem("oryn-intro-played", "1");
          document.body.style.overflow = "";
        }, 800);
      }
      setPercent(current);
    }, 60);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (complete || !mounted) return null;

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(20px)",
            scale: 1.05,
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-black p-8 md:p-12"
        >
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,176,98,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,176,98,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Top Row: Camera Metadata */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.4em] text-silver/60">
            <div className="flex items-center gap-2">
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              <span>SYSTEM ON / ORYN_INIT</span>
            </div>
            <div className="hidden sm:block">TC 00:00:00:00</div>
            <div>SHUTTER 180°</div>
          </div>

          {/* Center Row: Luxury Branding & Percentage */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ y: 30, opacity: 0, filter: "blur(5px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-silver/40">
                SWISS CINEMATOGRAPHY STUDIO
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-extrabold uppercase tracking-[-0.05em] text-white sm:text-6xl md:text-8xl"
            >
              ORYN <span className="text-accent italic font-normal">ZERO</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "160px" }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
              className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent"
            />
          </div>

          {/* Bottom Row: Counting progress */}
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-end justify-between font-mono text-[10px] uppercase tracking-widest text-silver/50">
              <div className="flex flex-col gap-1">
                <span className="text-white/30">MODULE // PERSPECTIVE</span>
                <span>STATE // {percent < 100 ? "LOADING" : "READY"}</span>
              </div>
              <div className="text-right">
                <span className="font-sans text-5xl font-light text-white tabular-nums tracking-tighter md:text-7xl">
                  {percent}
                </span>
                <span className="ml-1 text-xs text-accent">%</span>
              </div>
            </div>

            {/* Micro-thin loading line */}
            <div className="h-[1px] w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
