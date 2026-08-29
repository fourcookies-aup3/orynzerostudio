import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Globe, Coins } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { OrynLogo } from "./OrynLogo";
import { useLocale, type Language, type Currency } from "@/context/LocaleContext";

const nav = [
  { href: "#storytelling", label: "Philosophy" },
  { href: "#showreel", label: "Showreel" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "#careers", label: "Jobs & Career" },
  { href: "#partners", label: "Network" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { language, setLanguage, currency, setCurrency, t } = useLocale();

  const getNavLabel = (href: string) => {
    if (href === "#storytelling") return t("nav.philosophy");
    if (href === "#showreel") return t("nav.showreel");
    if (href === "#portfolio") return t("nav.portfolio");
    if (href === "#team") return t("nav.team");
    if (href === "#careers") return t("nav.careers");
    if (href === "#partners") return t("nav.network");
    if (href === "#contact") return t("nav.contact");
    return "";
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighting logic
      if (currentPath === "/") {
        const sections = nav.map((n) => n.href.substring(1));
        let current = "";
        for (const section of sections) {
          const element =
            document.getElementById(section) ||
            document.querySelector(`[data-section="${section}"]`);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 300 && rect.bottom >= 100) {
              current = section;
            }
          }
        }
        setActiveSection(current);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentPath]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      document.body.style.overflow = "";
      const sectionName = href.substring(1);

      const performScroll = () => {
        const target =
          document.getElementById(sectionName) ||
          document.querySelector(`[data-section="${sectionName}"]`);
        if (target) {
          const headerOffset = 90;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
          if (window.history.replaceState) {
            window.history.replaceState(null, "", `#${sectionName}`);
          }
        }
      };

      if (currentPath === "/") {
        // Run after modal close transition begins so layout isn't blocked
        setTimeout(performScroll, 50);
      } else {
        window.location.href = `/#${sectionName}`;
      }
    }
  };

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating Pill Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-500",
          scrolled ? "top-4 sm:top-6" : "top-6 sm:top-8",
        )}
      >
        <div
          className={cn(
            "flex w-full max-w-5xl items-center justify-between border border-white/5 px-4 sm:px-6 py-3 transition-all duration-500",
            scrolled
              ? "rounded-full bg-black/40 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl border-white/10"
              : "rounded-full bg-black/10 backdrop-blur-sm",
          )}
        >
          {/* Brand Logo with a gold dot */}
          <Link
            to="/"
            onClick={() => {
              if (window.scrollY > 0) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center pl-1 cursor-pointer shrink-0"
          >
            <OrynLogo size="sm" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {nav.map((n) => {
              const isActive = activeSection === n.href.substring(1);
              return (
                <a
                  key={n.href}
                  href={currentPath === "/" ? n.href : `/${n.href}`}
                  onClick={(e) => handleScrollTo(e, n.href)}
                  className={cn(
                    "px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-[0.2em] transition-all duration-300",
                    isActive
                      ? "bg-white/10 text-accent font-bold"
                      : "text-silver/70 hover:text-white hover:bg-white/5",
                  )}
                >
                  {getNavLabel(n.href)}
                </a>
              );
            })}
          </nav>

          {/* Premium CTA Buttons & Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/freelancers"
              className="hidden sm:inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-silver transition-all hover:border-accent hover:text-white"
            >
              Sign Up as Freelancer
            </Link>

            <Link
              to="/booking"
              className="hidden sm:inline-block rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-black hover:border-transparent shadow-[0_0_15px_rgba(212,176,98,0.05)]"
            >
              {t("nav.schedule")}
            </Link>

            {/* Menu trigger (Three lines icon) */}
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/20 hover:border-accent/40"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Navigation Drawer (Luxury Fullscreen) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-black/95 p-6 sm:p-10 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
                <OrynLogo size="md" />
              </Link>
              <button
                type="button"
                className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/20 transition-all"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 py-8 max-w-2xl mx-auto w-full">
              {nav.map((n, idx) => {
                const isActive = activeSection === n.href.substring(1);
                return (
                  <motion.div
                    key={n.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={currentPath === "/" ? n.href : `/${n.href}`}
                      onClick={(e) => handleScrollTo(e, n.href)}
                      className={cn(
                        "block py-2.5 text-2xl sm:text-3xl font-bold uppercase tracking-widest transition-all hover:translate-x-1",
                        isActive ? "text-accent" : "text-silver/70 hover:text-white",
                      )}
                    >
                      {getNavLabel(n.href)}
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            {/* Menu Drawer Controls */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="border-t border-white/10 pt-6 space-y-3 max-w-2xl mx-auto w-full"
            >
              <Link
                to="/freelancers"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full border border-white/20 bg-white/5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.25em] text-silver hover:border-accent hover:text-white transition-all"
              >
                Sign Up as Freelancer
              </Link>
              <Link
                to="/booking"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-accent py-4 text-center text-xs font-bold uppercase tracking-[0.25em] text-black shadow-[0_4px_25px_rgba(212,176,98,0.25)] hover:bg-white transition-all"
              >
                {t("nav.scheduleCall")}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
