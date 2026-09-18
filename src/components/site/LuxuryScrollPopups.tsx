import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Compass } from "lucide-react";

export const LuxuryScrollPopups: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("storytelling");
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [hudMinimized, setHudMinimized] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      setScrollPercent(Math.round(progress * 100));

      // Check current section
      const sections = [
        "storytelling",
        "showreel",
        "services",
        "portfolio",
        "team",
        "crowdfunding",
        "careers",
        "contact",
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec) || document.querySelector(`[data-section="${sec}"]`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            setCurrentSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getSectionLabel = (sec: string) => {
    switch (sec) {
      case "storytelling":
        return "// 01 · DIRECTION";
      case "showreel":
        return "// 02 · SHOWREEL";
      case "services":
        return "// 03 · OFFERINGS";
      case "portfolio":
        return "// 04 · CASE STUDIES";
      case "team":
        return "// 05 · ARCHIVE / CREW";
      case "crowdfunding":
        return "// 06 · CROWDIFY";
      case "careers":
        return "// 07 · RECRUITMENT";
      case "contact":
        return "// 08 · INITIATE";
      default:
        return "// ORYN STUDIO";
    }
  };

  return (
    <>
      {/* 1. Discreet Floating Luxury Telemetry Capsule (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block select-none pointer-events-auto">
        <AnimatePresence>
          {!hudMinimized ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4 }}
              className="group flex items-center gap-3.5 rounded-full border border-white/[0.08] bg-[#0c0c0e]/90 px-4 py-2 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                  {getSectionLabel(currentSection)}
                </span>
              </div>

              <span className="h-3 w-px bg-white/10" />

              <div className="flex items-center gap-2 text-[9px] font-mono text-silver/60">
                <span>STÄFA, CH</span>
                <span className="text-white/80 font-bold">{scrollPercent}%</span>
              </div>

              <button
                type="button"
                onClick={() => setHudMinimized(true)}
                title="Minimize telemetry"
                className="size-4 flex items-center justify-center rounded-full text-silver/40 hover:text-white transition-colors ml-1 cursor-pointer"
              >
                <X className="size-2.5" />
              </button>
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              type="button"
              onClick={() => setHudMinimized(false)}
              title="Show telemetry"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-black/80 backdrop-blur-md text-accent hover:border-accent transition-colors"
            >
              <Compass className="size-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
