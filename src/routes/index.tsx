import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Play,
  X,
  CheckCircle,
  MapPin,
  ShieldCheck,
  Send,
  Loader2,
  Compass,
  Film,
  SlidersHorizontal,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { HeroReel } from "@/components/site/HeroReel";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { SectionLabel } from "@/components/site/SectionHeader";
import { FadeInOnScroll } from "@/components/site/FadeInOnScroll";
import { projects, Project } from "@/data/projects";
import { StickyOffersShowcase } from "@/components/site/StickyOffersShowcase";
import { site, showreel } from "@/data/site";
import { FounderImage } from "@/components/site/FounderImage";
import { MemberImage } from "@/components/site/MemberImage";
import nickPhoto from "@/assets/Nick.jpeg";
import tatePhoto from "@/assets/Tate Rittscher.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORYN ZERO Studio — Films Built Around Movement" },
      {
        name: "description",
        content:
          "Boutique film studio based in Stäfa, Switzerland. Combining dynamic FPV aerials, ground cinematography, and post-production for brands, events, and places.",
      },
      {
        property: "og:title",
        content: "ORYN ZERO Studio — Films Built Around Movement",
      },
      {
        property: "og:description",
        content:
          "Boutique film studio based in Stäfa, Switzerland. Combining dynamic FPV aerials, ground cinematography, and post-production for brands, events, and places.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  // Compact Homepage Contact Brief Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    projectType: "FPV & Aerial",
    message: "",
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  // Handle hash scrolling on page load
  useEffect(() => {
    const hash = window.location.hash?.substring(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash) || document.querySelector(`[data-section="${hash}"]`);
        if (el) {
          const offset = 90;
          const pos = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }
      }, 150);
    }
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    try {
      await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...contactForm,
          _subject: `New Homepage Project Brief: ${contactForm.projectType} from ${contactForm.name}`,
        }),
      });
    } catch {
      // Proceed
    } finally {
      setContactLoading(false);
      setContactSuccess(true);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen text-white bg-[#030303] selection:bg-accent selection:text-black">
      {/* 4K Background Video */}
      <HeroReel className="fixed inset-0 z-0 pointer-events-none" />

      {/* Controlled Dark Overlay for Guaranteed Text Contrast */}
      <div className="fixed inset-0 z-0 bg-black/45 backdrop-brightness-[0.8] pointer-events-none" />

      <div className="relative z-10">
        {/* =================================================================
            1. HERO SECTION
            Clear 3-second value proposition:
            - What ORYN ZERO produces
            - Who it is for
            - What makes the studio distinctive
            - What action to take next
        ================================================================= */}
        <section className="relative flex min-h-[90vh] flex-col justify-center px-6 py-20 sm:px-12 md:px-16">
          <div className="mx-auto max-w-4xl text-center">
            {/* Studio Identity */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent font-semibold">
                ORYN ZERO Studio
              </span>
              <span className="text-white/30">·</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-silver/70">
                Stäfa, Switzerland
              </span>
            </motion.div>

            {/* Clear, Human Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]"
            >
              Films built around <span className="text-accent italic font-serif-luxury font-normal">movement.</span>
            </motion.h1>

            {/* Clear Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-6 max-w-xl text-base sm:text-lg font-light text-silver/90 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            >
              Cinematic production and FPV perspectives for events, brands, and places. We film movement from angles conventional cameras can’t reach.
            </motion.p>

            {/* Direct Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollTo("work")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_25px_rgba(212,176,98,0.25)] hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="size-3.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-7 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md hover:bg-white hover:text-black hover:border-transparent transition-all cursor-pointer"
              >
                <span>Discuss a Project</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* =================================================================
            2. SELECTED WORK (Moved closer to the top of homepage)
            Proof of quality before long philosophy text.
            - Studio Showreel (distinguished from client work)
            - Parkour Day Stäfa (clear collaborative credits with VISURE)
        ================================================================= */}
        <section
          id="work"
          data-section="work"
          className="relative px-6 py-20 sm:py-24 md:px-16 scroll-mt-28 bg-[#060608]/95 border-t border-white/10"
        >
          <FadeInOnScroll direction="up" distance={30}>
            <div className="mx-auto max-w-5xl">
              {/* Header */}
              <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <SectionLabel id="01">Selected Work</SectionLabel>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl text-white">
                    Featured Productions
                  </h2>
                </div>
                <p className="max-w-md text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
                  Real footage capturing athletic motion, low-altitude flight paths, and synchronized ground cinematography.
                </p>
              </div>

              {/* Grid: 2 Strong Cards (Showreel + Client Work) */}
              <div className="grid gap-8 md:grid-cols-2">
                {/* 1. Official Studio Showreel */}
                <div
                  onClick={() => setSelectedVideo(showreel.src)}
                  className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-black cursor-pointer shadow-xl transition-all duration-500 hover:border-accent/50 hover:-translate-y-1"
                >
                  <img
                    src={showreel.poster}
                    alt="ORYN ZERO Official Showreel"
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Play Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex size-14 items-center justify-center rounded-full bg-accent text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="size-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-silver/60">
                    <span className="text-accent font-semibold">Studio Reel</span>
                    <span>2026</span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-accent block mb-1">
                      ORYN ZERO Showreel
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      FPV Perspectives & Movement
                    </h3>
                    <p className="mt-1 text-xs text-silver/70 font-light line-clamp-1">
                      High-speed chase lines, indoor single-takes, and Swiss alpine aerials.
                    </p>
                  </div>
                </div>

                {/* 2. Client Case Study: Parkour Day Stäfa */}
                {projects[0] && (
                  <div
                    onClick={() => setActiveCaseStudy(projects[0])}
                    className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-black cursor-pointer shadow-xl transition-all duration-500 hover:border-accent/50 hover:-translate-y-1"
                  >
                    <img
                      src={projects[0].cover}
                      alt={projects[0].title}
                      loading="lazy"
                      className="size-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="rounded-full bg-accent px-5 py-2 font-mono text-[9px] font-bold uppercase tracking-widest text-black">
                        Explore Case Study
                      </span>
                    </div>

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-silver/60">
                      <span className="text-accent font-semibold">Client Project</span>
                      <span>Stäfa, CH</span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-accent block mb-1">
                        Client: {projects[0].client}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {projects[0].title}
                      </h3>
                      <p className="mt-1 font-mono text-[9px] text-silver/70">
                        Role: {projects[0].exactRole}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Case study credits indicator */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.01] px-5 py-3 font-mono text-[9px] text-silver/60">
                <span>
                  Transparent Production Credits: Collaboration with VISURE GMBH (Main Recording & Editing).
                </span>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-white transition-colors"
                >
                  <span>Explore All Selected Work</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </section>

        {/* =================================================================
            3. THREE CORE SERVICES
            Scannable client-facing services:
            1. FPV & Aerial
            2. Event & Brand Films
            3. Post-Production
        ================================================================= */}
        <StickyOffersShowcase
          onSelectService={(serviceTitle) => {
            setContactForm((prev) => ({
              ...prev,
              projectType: serviceTitle,
            }));
            scrollTo("contact");
          }}
        />

        {/* =================================================================
            4. SHORT STUDIO INTRODUCTION
            Honest, human, grounded Swiss studio description.
            Calm solid background for maximum legibility.
        ================================================================= */}
        <section
          id="studio"
          data-section="studio"
          className="relative px-6 py-20 sm:py-24 md:px-16 scroll-mt-28 bg-[#08080a] border-y border-white/10"
        >
          <FadeInOnScroll direction="up" distance={30}>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 md:grid-cols-12 items-start">
                <div className="md:col-span-4">
                  <SectionLabel id="03">Studio Story</SectionLabel>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Based in Stäfa, Switzerland.
                  </h3>
                  <div className="mt-6 font-mono text-[9px] uppercase tracking-widest text-silver/50 space-y-1">
                    <p>Zürich Region · Lake Zürich</p>
                    <p>Available Across Europe</p>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <p className="text-xl sm:text-2xl font-light leading-snug text-silver tracking-tight">
                    We are a small production team based in Stäfa, Switzerland. We combine{" "}
                    <span className="font-semibold text-white">FPV flying, ground cinematography, and post-production</span>{" "}
                    to create films built around movement. For larger productions, we work with trusted local partners.
                  </p>

                  <p className="text-xs sm:text-sm leading-relaxed text-silver/70 font-light max-w-xl">
                    Our focus is on camera movement with intention. Rather than standard drone flyovers, we place the lens directly alongside subjects—matching speed, height, and momentum to capture the genuine atmosphere of events, architecture, and brand stories.
                  </p>

                  <div className="pt-4 flex flex-wrap gap-8 font-mono text-[9px] uppercase tracking-widest text-silver/60 border-t border-white/5">
                    <div>
                      <span className="block text-xl font-bold font-sans text-accent">100%</span>
                      <span className="mt-0.5 block">Swiss BAZL Compliant</span>
                    </div>
                    <div>
                      <span className="block text-xl font-bold font-sans text-accent">4K</span>
                      <span className="mt-0.5 block">High-Bitrate Masters</span>
                    </div>
                    <div>
                      <span className="block text-xl font-bold font-sans text-accent">1 Day</span>
                      <span className="mt-0.5 block">Direct Founder Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </section>

        {/* =================================================================
            5. TEAM & FOUNDER
            Real roles clearly labeled:
            - Finn Ryf (Founder · FPV Pilot / Cinematographer)
            - Nick Honstetter (Co-Founder · Cinematography)
            - Tate Rittscher (Freelancer · Camera Operator)
        ================================================================= */}
        <section
          id="team"
          data-section="team"
          className="relative px-6 py-20 sm:py-24 md:px-16 scroll-mt-28 bg-[#040406]"
        >
          <FadeInOnScroll direction="up" distance={30}>
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <SectionLabel id="04">People</SectionLabel>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl text-white">
                    The Team
                  </h3>
                </div>
                <p className="max-w-md text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
                  A focused core team handling camera rigs, flight paths, and post-production with hands-on dedication.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {/* Finn Ryf */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black border border-white/5">
                    <FounderImage className="size-full object-cover grayscale" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold block">
                      Founder
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">Finn Ryf</h4>
                    <p className="text-xs text-silver/70 font-light mt-1.5 leading-relaxed">
                      FPV pilot and cinematographer. Handles high-speed chase lines, indoor fly-throughs, and editorial assembly.
                    </p>
                    <div className="mt-3 flex gap-3 font-mono text-[8px] text-silver/40">
                      <a href={site.social.finn.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        Instagram ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Nick Honstetter */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black border border-white/5">
                    <MemberImage src={nickPhoto} alt="Nick Honstetter" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold block">
                      Co-Founder
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">Nick Honstetter</h4>
                    <p className="text-xs text-silver/70 font-light mt-1.5 leading-relaxed">
                      Cinematography and visual media. Focuses on ground camera packages, brand photography, and color balance.
                    </p>
                    <div className="mt-3 flex gap-3 font-mono text-[8px] text-silver/40">
                      <a href={site.social.nick.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        Instagram ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Tate Rittscher */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black border border-white/5 relative">
                    <div className="absolute top-3 left-3 z-10 rounded-full bg-accent/90 px-2.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-black">
                      Freelancer
                    </div>
                    <MemberImage src={tatePhoto} alt="Tate Rittscher" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-silver/50 font-semibold block">
                      Freelance Partner
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">Tate Rittscher</h4>
                    <p className="text-xs text-silver/70 font-light mt-1.5 leading-relaxed">
                      Camera operator and video editor. Supports on-site shoots, second-camera angles, and event b-roll.
                    </p>
                    <div className="mt-3 flex gap-3 font-mono text-[8px] text-silver/40">
                      <a href={site.social.tate.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        Instagram ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </section>

        {/* =================================================================
            6. TRUST & SAFETY SIGNALS
            Swiss BAZL Compliance, EASA certifications, Insurance, VISURE partner
        ================================================================= */}
        <section className="relative px-6 py-14 md:px-16 border-t border-white/10 bg-[#070709]">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 font-mono text-[10px]">
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 flex items-start gap-3">
                <ShieldCheck className="size-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white uppercase block">Swiss BAZL / FOCA</span>
                  <span className="text-silver/60 text-[9px] block mt-1">Official aviation compliance and flight logs.</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 flex items-start gap-3">
                <ShieldCheck className="size-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white uppercase block">EASA Certified</span>
                  <span className="text-silver/60 text-[9px] block mt-1">A1/A3 and A2 category drone licenses.</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 flex items-start gap-3">
                <ShieldCheck className="size-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white uppercase block">Fully Insured</span>
                  <span className="text-silver/60 text-[9px] block mt-1">Commercial aviation third-party liability coverage.</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 flex items-start gap-3">
                <ShieldCheck className="size-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white uppercase block">VISURE GMBH</span>
                  <span className="text-silver/60 text-[9px] block mt-1">Trusted Swiss production collaboration partner.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            7. CLEAR CONTACT CTA (HOMEPAGE CONVERSION BLOCK)
            Headline: “Have a project in mind?”
            Text: “Tell us what you’re planning, where it takes place, and when you need it. You’ll hear directly from the founder within one working day.”
            Buttons: “Send a Project Brief”, “Book a 30-Minute Call”
        ================================================================= */}
        <section
          id="contact"
          data-section="contact"
          className="relative px-6 py-20 sm:py-28 md:px-16 scroll-mt-28 bg-[#050507] border-t border-white/10"
        >
          <FadeInOnScroll direction="up" distance={30}>
            <div className="mx-auto max-w-5xl">
              <div className="rounded-3xl border border-white/10 bg-[#0a0a0d] p-8 sm:p-12 md:p-14 shadow-2xl">
                <div className="grid gap-10 lg:grid-cols-12 items-start">
                  {/* Left: Clear Conversion Pitch */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <SectionLabel id="05">Inquiries</SectionLabel>
                      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        Have a project in mind?
                      </h2>
                    </div>

                    <p className="text-sm text-silver/80 font-light leading-relaxed">
                      Tell us what you’re planning, where it takes place, and when you need it. You’ll hear directly from the founder within one working day.
                    </p>

                    <div className="space-y-3 pt-2 font-mono text-[10px]">
                      <div>
                        <span className="text-silver/40 uppercase block text-[8px]">Direct Email</span>
                        <a
                          href={`mailto:${site.email}`}
                          className="text-accent hover:text-white underline underline-offset-4 text-xs font-semibold transition-colors mt-0.5 block"
                        >
                          {site.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-silver/40 uppercase block text-[8px]">Location</span>
                        <span className="text-white text-xs block mt-0.5">Stäfa, Zürich, Switzerland</span>
                      </div>
                      <div>
                        <span className="text-silver/40 uppercase block text-[8px]">Schedule Call</span>
                        <Link
                          to="/booking"
                          className="inline-flex items-center gap-1.5 text-xs text-white hover:text-accent transition-colors mt-0.5"
                        >
                          <span>Book a 30-Minute Call</span>
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right: Fast Project Brief Box */}
                  <div className="lg:col-span-7">
                    {contactSuccess ? (
                      <div className="p-8 rounded-2xl border border-accent/20 bg-accent/5 text-center space-y-3">
                        <CheckCircle className="size-8 text-accent mx-auto" />
                        <h4 className="text-xl font-bold text-white">Brief Received</h4>
                        <p className="text-xs text-silver/70 font-light max-w-sm mx-auto leading-relaxed">
                          Thank you for sharing your project. Finn will review your brief and reply directly to {contactForm.email} within one working day.
                        </p>
                        <button
                          type="button"
                          onClick={() => setContactSuccess(false)}
                          className="pt-2 font-mono text-[9px] uppercase tracking-widest text-accent hover:text-white transition-colors"
                        >
                          Send another note
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="font-mono text-[8px] uppercase tracking-widest text-silver/50 block mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={contactForm.name}
                              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                              placeholder="Name"
                              className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
                            />
                          </div>

                          <div>
                            <label className="font-mono text-[8px] uppercase tracking-widest text-silver/50 block mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={contactForm.email}
                              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                              placeholder="agency@company.ch"
                              className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="font-mono text-[8px] uppercase tracking-widest text-silver/50 block mb-1">
                            Project Type
                          </label>
                          <select
                            value={contactForm.projectType}
                            onChange={(e) => setContactForm({ ...contactForm, projectType: e.target.value })}
                            className="w-full rounded-xl border border-white/10 bg-[#0d0d10] px-4 py-2.5 text-xs text-white focus:border-accent focus:outline-none transition-colors"
                          >
                            <option value="FPV & Aerial">FPV & Aerial Filming</option>
                            <option value="Event & Brand Films">Event & Brand Film Production</option>
                            <option value="Post-Production">Post-Production & Color Grading</option>
                            <option value="Custom Collaboration">Custom Project / Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="font-mono text-[8px] uppercase tracking-widest text-silver/50 block mb-1">
                            Project Details *
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            placeholder="Tell us what you're planning, where it takes place, and key dates..."
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs text-white placeholder:text-white/20 focus:border-accent focus:outline-none resize-none transition-colors"
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                          <button
                            type="submit"
                            disabled={contactLoading}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(212,176,98,0.2)] disabled:opacity-70 cursor-pointer"
                          >
                            {contactLoading ? (
                              <>
                                <Loader2 className="size-3.5 animate-spin text-black" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <span>Send a Project Brief</span>
                                <Send className="size-3" />
                              </>
                            )}
                          </button>

                          <Link
                            to="/contact"
                            className="font-mono text-[9px] uppercase tracking-wider text-silver/50 hover:text-white transition-colors"
                          >
                            Open Detailed Form ↗
                          </Link>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </section>
      </div>

      {/* =================================================================
          LIGHTBOX VIDEO MODAL (Showreel & Clips)
      ================================================================= */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
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
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-30 flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 hover:text-accent transition-colors cursor-pointer"
              >
                Close <X className="size-3.5" />
              </button>
              <VideoPlayer src={selectedVideo} autoPlay={true} loop={true} muted={false} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================================
          CASE STUDY DETAILS MODAL
      ================================================================= */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={() => setActiveCaseStudy(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 36, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="relative ml-auto w-full max-w-4xl min-h-screen bg-[#07070a] border-l border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8 font-mono text-[9px] uppercase tracking-widest text-silver/50">
                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(null)}
                  className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
                >
                  ← Back
                </button>
                <span>Case Study · {activeCaseStudy.year}</span>
              </div>

              <div className="space-y-8">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent block mb-1">
                    {activeCaseStudy.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {activeCaseStudy.title}
                  </h2>
                  <p className="mt-3 text-sm text-silver/80 font-light leading-relaxed">
                    {activeCaseStudy.overview}
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video shadow-xl">
                  <VideoPlayer src={activeCaseStudy.video || showreel.src} poster={activeCaseStudy.cover} autoPlay={false} />
                </div>

                <div className="grid gap-8 md:grid-cols-12 items-start">
                  <div className="md:col-span-8 space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-accent block mb-1">
                          Challenge
                        </span>
                        <p className="text-xs text-silver/70 font-light leading-relaxed">
                          {activeCaseStudy.challenge}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-accent block mb-1">
                          Concept
                        </span>
                        <p className="text-xs text-silver/70 font-light leading-relaxed">
                          {activeCaseStudy.concept}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-accent block mb-1">
                          Production
                        </span>
                        <p className="text-xs text-silver/70 font-light leading-relaxed">
                          {activeCaseStudy.production}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-accent block mb-1">
                          Result
                        </span>
                        <p className="text-xs text-silver/70 font-light leading-relaxed">
                          {activeCaseStudy.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  <aside className="md:col-span-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-4 font-mono text-[10px]">
                    <div className="rounded-xl border border-accent/20 bg-accent/5 p-3.5 space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-accent font-bold block">
                        ORYN ZERO Exact Role
                      </span>
                      <p className="text-xs font-semibold text-white">
                        {activeCaseStudy.exactRole}
                      </p>
                    </div>

                    <div>
                      <span className="text-silver/40 uppercase block text-[8px]">Client</span>
                      <span className="text-white font-sans text-xs font-bold block mt-0.5">
                        {activeCaseStudy.client}
                      </span>
                    </div>

                    <div>
                      <span className="text-silver/40 uppercase block text-[8px]">Location</span>
                      <span className="text-white font-sans text-xs block mt-0.5">
                        {activeCaseStudy.location}
                      </span>
                    </div>

                    <div>
                      <span className="text-silver/40 uppercase block text-[8px]">Partner Credits</span>
                      <span className="text-silver/70 font-sans text-xs block mt-0.5">
                        VISURE GMBH (Main Recording & Editing)
                      </span>
                    </div>

                    <div className="border-t border-white/5 pt-3">
                      <span className="text-silver/40 uppercase block text-[8px] mb-1.5">Delivered Services</span>
                      <ul className="space-y-1 text-xs text-silver/70 font-sans">
                        {activeCaseStudy.services.map((s) => (
                          <li key={s} className="flex items-center gap-1.5">
                            <span className="size-1 rounded-full bg-accent" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                </div>

                <div className="border-t border-white/10 pt-5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveCaseStudy(null)}
                    className="rounded-full border border-white/20 px-5 py-2.5 font-mono text-[9px] uppercase tracking-widest text-silver hover:text-white"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setActiveCaseStudy(null)}
                    className="rounded-full bg-accent px-6 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-black hover:bg-white transition-colors"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
