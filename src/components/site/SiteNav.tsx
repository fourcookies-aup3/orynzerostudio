import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Globe, Coins } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { OrynLogo } from "./OrynLogo";
import { useLocale, type Language, type Currency } from "@/context/LocaleContext";

const nav = [
  { id: "work", href: "#work", path: "/work", labelKey: "nav.work", defaultLabel: "Work" },
  { id: "services", href: "#services", path: "/services", labelKey: "nav.services", defaultLabel: "Services" },
  { id: "studio", href: "#studio", path: "/studio", labelKey: "nav.studio", defaultLabel: "Studio" },
  { id: "contact", href: "#contact", path: "/contact", labelKey: "nav.contact", defaultLabel: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { t } = useLocale();

  const getNavLabel = (item: (typeof nav)[number]) => {
    return t(item.labelKey) || item.defaultLabel;
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighting logic
      if (currentPath === "/") {
        const sections = ["work", "services", "studio", "team", "contact"];
        let current = "";
        for (const section of sections) {
          const element =
            document.getElementById(section) ||
            document.querySelector(`[data-section="${section}"]`);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 280 && rect.bottom >= 100) {
              current = section === "team" ? "studio" : section;
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

  const scrollToTarget = (sectionName: string) => {
    const target =
      document.getElementById(sectionName) ||
      document.querySelector(`[data-section="${sectionName}"]`);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
      if (typeof window !== "undefined" && window.history.replaceState) {
        window.history.replaceState(null, "", `#${sectionName}`);
      }
      return true;
    }
    return false;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof nav)[number]) => {
    if (currentPath === "/") {
      e.preventDefault();
      if (open) {
        setOpen(false);
        document.body.style.overflow = "";
        setTimeout(() => {
          scrollToTarget(item.id);
        }, 80);
      } else {
        scrollToTarget(item.id);
      }
    } else {
      // Navigate to page route
      setOpen(false);
      document.body.style.overflow = "";
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
      {/* Floating Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-500",
          scrolled ? "top-3 sm:top-5" : "top-5 sm:top-7",
        )}
      >
        <div
          className={cn(
            "flex w-full max-w-5xl items-center justify-between border border-white/10 px-5 sm:px-7 py-3 transition-all duration-500",
            scrolled
              ? "rounded-full bg-black/75 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl border-white/15"
              : "rounded-full bg-black/40 backdrop-blur-md",
          )}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => {
              if (window.scrollY > 0) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center cursor-pointer shrink-0"
          >
            <OrynLogo size="sm" />
          </Link>

          {/* Desktop Navigation Links — Clean typography without static pills */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {nav.map((item) => {
              const isActive =
                currentPath === item.path || (currentPath === "/" && activeSection === item.id);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cn(
                    "text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 py-1",
                    isActive
                      ? "text-accent font-semibold border-b border-accent/70"
                      : "text-silver/80 hover:text-white",
                  )}
                >
                  {getNavLabel(item)}
                </Link>
              );
            })}
          </nav>

          {/* Primary Client CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              onClick={(e) => {
                if (currentPath === "/") {
                  e.preventDefault();
                  scrollToTarget("contact");
                }
              }}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_20px_rgba(212,176,98,0.2)] transition-all hover:bg-white hover:text-black cursor-pointer"
            >
              Discuss a Project
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              className="flex md:hidden size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-white/15"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-black/98 p-6 sm:p-10 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
                <OrynLogo size="md" />
              </Link>
              <button
                type="button"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/20 transition-all"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 py-12 max-w-xl mx-auto w-full">
              {nav.map((item, idx) => {
                const isActive =
                  currentPath === item.path || (currentPath === "/" && activeSection === item.id);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={item.path}
                      onClick={(e) => handleNavClick(e, item)}
                      className={cn(
                        "block py-3 text-3xl sm:text-4xl font-bold uppercase tracking-widest transition-all hover:translate-x-1.5",
                        isActive ? "text-accent" : "text-silver/80 hover:text-white",
                      )}
                    >
                      {getNavLabel(item)}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Menu Drawer Controls */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="border-t border-white/10 pt-6 space-y-4 max-w-xl mx-auto w-full"
            >
              <Link
                to="/contact"
                onClick={(e) => {
                  setOpen(false);
                  if (currentPath === "/") {
                    e.preventDefault();
                    scrollToTarget("contact");
                  }
                }}
                className="block w-full rounded-full bg-accent py-4 text-center text-xs font-bold uppercase tracking-[0.25em] text-black shadow-[0_4px_25px_rgba(212,176,98,0.25)] hover:bg-white transition-all"
              >
                Discuss a Project
              </Link>
              <div className="flex items-center justify-center gap-6 pt-2 font-mono text-[9px] uppercase tracking-widest text-silver/50">
                <Link to="/careers" onClick={() => setOpen(false)} className="hover:text-white transition-colors">
                  Careers
                </Link>
                <span>·</span>
                <a
                  href="https://www.crowdify.net/de/projekt/orynzero-studio-am-start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Crowdfunding ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
