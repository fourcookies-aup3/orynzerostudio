import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import {
  ArrowUpRight,
  Play,
  X,
  Mail,
  Instagram,
  Linkedin,
  MapPin,
  Lock,
  Maximize2,
  Video,
  Camera,
  Sliders,
  Cpu,
  Volume2,
  Briefcase,
  Sparkles,
  Upload,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { HeroReel } from "@/components/site/HeroReel";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { SectionLabel } from "@/components/site/SectionHeader";
import { FadeInOnScroll } from "@/components/site/FadeInOnScroll";
import { projects, Project } from "@/data/projects";
import { PartnersClients } from "@/components/site/Partners";
import { site, showreel } from "@/data/site";
import { getCustomVideoUrl, saveCustomVideo, clearCustomVideo } from "@/lib/video-store";
import hero1 from "@/assets/hero-1.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import { Users, UserPlus, CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { FounderImage } from "@/components/site/FounderImage";
import { TeamMemberPlaceholder } from "@/components/site/TeamMemberPlaceholder";
import { MemberImage } from "@/components/site/MemberImage";
import nickPhoto from "@/assets/Nick.jpeg";
import tatePhoto from "@/assets/Tate Rittscher.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORYN ZERO Studio — Premium Swiss Cinematography & FPV" },
      {
        name: "description",
        content:
          "Swiss premium cinematic production studio based in Stäfa, Zürich. Creating high-end brand films, elite FPV cinematography, and commercial visual stories.",
      },
      {
        property: "og:title",
        content: "ORYN ZERO Studio — Premium Swiss Cinematography & FPV",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const showreelCategories = ["All", "FPV", "Event Films"] as const;

// Deployed clips using real project imagery
const featuredClips = [
  {
    title: "ORYN ZERO — Official Showreel",
    category: "FPV & Brand",
    src: "https://youtu.be/9ZlS3aqVbyM",
    poster: "https://img.youtube.com/vi/9ZlS3aqVbyM/maxresdefault.jpg",
    client: "ORYN ZERO",
    year: "2026",
  },
  {
    title: "Parkour Day Stäfa — Official Film",
    category: "Event Films",
    src: "https://youtu.be/4mwIvmZ5y7c",
    poster: "https://img.youtube.com/vi/4mwIvmZ5y7c/maxresdefault.jpg",
    client: "Parkour Day Stäfa",
    year: "2026",
    credits: "Main Recording/Editing: VISURE GMBH · Co-Filming/Drone Shots: Finn Ryf",
  },
];

const servicesList = [
  {
    icon: Video,
    title: "Videography",
    description:
      "High-end cinematic image acquisition using state-of-the-art multi-camera packages, custom active stabilization systems, and precise composition.",
  },
  {
    icon: Camera,
    title: "Event Filming",
    description:
      "Dynamic documentation of premium brand events, high-octane sports events, launches, and festivals with modern, immersive cinematography.",
  },
  {
    icon: Sliders,
    title: "Cinematic Editing",
    description:
      "Bespoke post-production services including rhythm-based rhythm editing, narrative structure design, sound synchronization, and custom color grading.",
  },
  {
    icon: Cpu,
    title: "CGI & VFX",
    description:
      "Integrating highly accurate 3D model simulations, camera motion tracking, virtual environments, and seamless visual effects into high-end physical frames.",
  },
  {
    icon: Volume2,
    title: "Sound Design",
    description:
      "Custom ambient audio creation, tactile soundscapes, professional Foley capture, and room-filling spatial sound design that drives the visual pace.",
  },
  {
    icon: Briefcase,
    title: "Project Supporting",
    description:
      "End-to-end support for your production including airspace clearances, location scouting, storyboard crafting, flight permits, and crew logistics.",
  },
];

const JOB_ROLES = [
  {
    id: "fpv-pilot",
    title: "FPV Drone Pilot & Aerial Operator",
    department: "Flight Operations",
    location: "Stäfa, CH & Hybrid",
    description:
      "Execute precision high-speed chase-cam flights, slow cinematic indoor passes, and heavy-lifter operations.",
    requirements: [
      'Extensive experience flying 5" and 7" cinematic FPV quads',
      "Valid EASA A1/A3 & A2 drone certificates",
      "Outstanding spatial awareness and stress resistance during live shoots",
    ],
  },
  {
    id: "cinematographer",
    title: "Cinematographer & Camera Operator",
    department: "Camera & Lighting",
    location: "Stäfa, CH & Travel",
    description:
      "Direct visual composition, manage specialized camera gear (RED, ARRI), and maintain cinematic standard on brand sets.",
    requirements: [
      "Deep understanding of lens properties, focal lengths, and camera sensors",
      "Proven portfolio in commercial or high-end documentary film",
      "Ability to coordinate lighting schemes and active camera moves",
    ],
  },
  {
    id: "video-editor",
    title: "Lead Video Editor & Colorist",
    department: "Post-Production",
    location: "Stäfa, CH & Hybrid",
    description:
      "Craft powerful narrative flow from raw footage, execute rhythm-based edits, and color-grade DaVinci Resolve timelines.",
    requirements: [
      "Mastery of DaVinci Resolve or Premiere Pro",
      "Strong sense of pacing, sound design, and emotional storytelling",
      "Proven experience in commercial color grading",
    ],
  },
  {
    id: "sound-designer",
    title: "Sound Designer & SFX Specialist",
    department: "Post-Production",
    location: "Stäfa, CH & Remote",
    description:
      "Generate deep, immersive soundscapes, perform clean Foley recording, and direct room-filling audio mixes.",
    requirements: [
      "Excellent skill in Reaper, Pro Tools, or Ableton Live",
      "Experience creating tactical, physical, and high-pacing audio for FPV videos",
      "Strong library management and spatial audio rendering skills",
    ],
  },
  {
    id: "vfx-artist",
    title: "VFX & CGI Generalist",
    department: "Post-Production",
    location: "Stäfa, CH & Remote",
    description:
      "Incorporate highly detailed 3D assets, carry out camera motion tracking, and integrate seamless CGI elements into real FPV takes.",
    requirements: [
      "Proficient in Blender, Cinema 4D, or Unreal Engine",
      "Expert knowledge of 3D tracking, compositing, and illumination matching",
      "Familiarity with cinematic pipelines and sub-frame rendering",
    ],
  },
  {
    id: "creative-director",
    title: "Creative Director / Producer",
    department: "Creative Lead",
    location: "Stäfa, CH & Hybrid",
    description:
      "Translate partner goals into high-impact script/storyboard treatments, oversee overall production design, and direct logistics.",
    requirements: [
      "Strong narrative background with exceptional pitching skills",
      "Experience managing production budgets, airspace clearances, and crews",
      "A keen eye for modern brand aesthetics and high-velocity pacing",
    ],
  },
];

const getJobKeyPrefix = (id: string) => {
  if (id === "fpv-pilot") return "job.fpv";
  if (id === "cinematographer") return "job.cameraman";
  if (id === "video-editor") return "job.editor";
  if (id === "sound-designer") return "job.sound";
  if (id === "vfx-artist") return "job.vfx";
  if (id === "creative-director") return "job.creative";
  return "job.fpv";
};

function HomePage() {
  const { t } = useLocale();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showreelCategory, setShowreelCategory] =
    useState<(typeof showreelCategories)[number]>("All");
  const [projectFilter, setProjectFilter] = useState<"released" | "progress">("released");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [currentShowreelSrc, setCurrentShowreelSrc] = useState<string>(showreel.src);
  const [hasCustomVideo, setHasCustomVideo] = useState(false);

  useEffect(() => {
    getCustomVideoUrl().then((url) => {
      if (url) {
        setCurrentShowreelSrc(url);
        setHasCustomVideo(true);
      }
    });
  }, []);

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ url?: string | null }>;
      if (customEvent.detail && customEvent.detail.url) {
        setCurrentShowreelSrc(customEvent.detail.url);
        setHasCustomVideo(true);
      } else if (customEvent.detail && customEvent.detail.url === null) {
        setCurrentShowreelSrc(showreel.src);
        setHasCustomVideo(false);
      } else {
        getCustomVideoUrl().then((url) => {
          if (url) {
            setCurrentShowreelSrc(url);
            setHasCustomVideo(true);
          } else {
            setCurrentShowreelSrc(showreel.src);
            setHasCustomVideo(false);
          }
        });
      }
    };
    window.addEventListener("oryn_showreel_updated", handleUpdate);
    return () => window.removeEventListener("oryn_showreel_updated", handleUpdate);
  }, []);

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await saveCustomVideo(file);
    setCurrentShowreelSrc(url);
    setHasCustomVideo(true);
  };

  const handleResetVideo = async () => {
    await clearCustomVideo();
    setCurrentShowreelSrc(showreel.src);
    setHasCustomVideo(false);
  };

  // Job applications state with persistence
  useEffect(() => {
    if (window.location.hash) {
      const sectionName = window.location.hash.substring(1);
      const timer = setTimeout(() => {
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
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);
  const [applications, setApplications] = useState<
    Record<string, Array<{ name: string; email: string; portfolio: string; message: string }>>
  >(() => {
    try {
      const saved =
        typeof window !== "undefined" ? localStorage.getItem("oryn_applications") : null;
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [applyingJobId, setApplyingJobId] = useState<string | null>(null);
  const [appForm, setAppForm] = useState({ name: "", email: "", portfolio: "", message: "" });
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    discipline: "FPV Cinematography",
    message: "",
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  const translatedJobRoles = JOB_ROLES.map((job) => {
    const prefix = getJobKeyPrefix(job.id);
    return {
      ...job,
      title: t(`${prefix}.title`),
      department: t(`${prefix}.dept`),
      location: t(`${prefix}.loc`),
      description: t(`${prefix}.desc`),
      requirements: [t(`${prefix}.req1`), t(`${prefix}.req2`), t(`${prefix}.req3`)],
    };
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("oryn_applications", JSON.stringify(applications));
    }
  }, [applications]);

  const completedProjects = projects.filter(
    (p) => !p.status || p.status === "Released" || p.status === "Post-production",
  );
  const progressProjects = projects.filter(
    (p) => p.status === "Production" || p.status === "Pre-production",
  );
  const currentProjectsDisplay =
    projectFilter === "released" ? completedProjects : progressProjects;

  // Track global cursor for subtle ambient spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleApplySubmit = (e: React.FormEvent, jobId: string) => {
    e.preventDefault();
    if (!appForm.name.trim() || !appForm.email.trim()) {
      setFormError("Name and Email are required.");
      return;
    }
    const currentList = applications[jobId] || [];
    if (currentList.length >= 3) {
      setFormError("This role is already fully booked.");
      return;
    }
    const updatedList = [
      ...currentList,
      {
        name: appForm.name.trim(),
        email: appForm.email.trim(),
        portfolio: appForm.portfolio.trim(),
        message: appForm.message.trim(),
      },
    ];
    setApplications({
      ...applications,
      [jobId]: updatedList,
    });

    // Send email via FormSubmit AJAX
    fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: appForm.name.trim(),
        email: appForm.email.trim(),
        portfolio: appForm.portfolio.trim(),
        message: appForm.message.trim(),
        jobId: jobId,
        _subject: `ORYN ZERO - New Application for ${jobId}`,
      }),
    }).catch((err) => console.error("FormSubmit error:", err));

    setFormSuccess(true);
    setFormError("");
    setAppForm({ name: "", email: "", portfolio: "", message: "" });
    setTimeout(() => {
      setFormSuccess(false);
      setApplyingJobId(null);
    }, 2500);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    setContactSuccess(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...contactForm,
          _subject: "New Project Inquiry - ORYN ZERO",
        }),
      });

      if (response.ok) {
        setContactSuccess(true);
        setContactForm({
          name: "",
          email: "",
          phone: "",
          discipline: "FPV Cinematography",
          message: "",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
    } finally {
      setContactLoading(false);
    }
  };

  const filteredClips = featuredClips.filter((c) => {
    if (showreelCategory === "All") return true;
    if (showreelCategory === "FPV" && c.category.includes("FPV")) return true;
    if (showreelCategory === "Event Films" && c.category.includes("Event")) return true;
    return false;
  });

  const openMainShowreel = () => {
    setSelectedVideo(showreel.src);
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('[data-section="contact"]') || document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined" && window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <div className="relative min-h-screen text-white bg-[#030303] select-none selection:bg-accent selection:text-black">
      {/* ===================== FIXED CINEMATIC BACKGROUND ===================== */}
      <HeroReel className="fixed inset-0 z-0 pointer-events-none scale-102" />

      {/* Interactive spotlight glow - highly refined */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 opacity-70"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212,176,98,0.04), transparent 80%)`,
        }}
      />

      {/* Subtle organic vertical grid lines (very low opacity) */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-20">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative flex h-screen min-h-[700px] flex-col justify-center px-6 py-8 sm:px-12 sm:py-12 md:px-16">
          {/* Center Visual Core */}
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl text-white text-balance-tight"
            >
              ORYN ZERO <span className="text-accent italic font-light lowercase">Studio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-6 max-w-xl text-lg font-light tracking-wide text-silver/80 leading-relaxed"
            >
              Cinematic storytelling. High-end FPV. Minimal design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-col items-center justify-center gap-2"
            >
              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-silver/40 animate-pulse">
                Scroll To Explore
              </span>
            </motion.div>
          </div>
        </section>

        {/* ===================== ABOUT SECTION (STORYTELLING) ===================== */}
        <section
          id="storytelling"
          data-section="storytelling"
          className="relative px-6 py-24 sm:py-32 md:px-16 bg-gradient-to-b from-transparent to-black/30 scroll-mt-28"
        >
          <FadeInOnScroll direction="up" distance={40}>
            <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-12 items-start">
              <div className="md:col-span-4">
                <SectionLabel id="// 01">Storytelling</SectionLabel>
                <h2 className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-accent font-mono">
                  Visual Philosophy
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-balance text-xl font-light leading-snug sm:text-2xl md:text-3xl text-silver tracking-tight">
                  We create <span className="font-semibold text-white">professional high-quality visuals</span> driven by seamless <span className="font-semibold text-white">teamwork</span> and unified creative direction. Every frame and perspective is crafted with precision — delivering cinematic stories that{" "}
                  <span className="text-accent italic font-normal">command immersion and excellence.</span>
                </p>
                <p className="mt-6 text-xs leading-relaxed text-silver/50 max-w-md">
                  Our foundation relies on strong collaboration, mutual trust, and uncompromising quality standards. By combining our team's creative synergy with a dedication to top-tier execution, we deliver polished, high-impact productions for every project.
                </p>
                <div className="mt-12 flex gap-12 border-t border-white/5 pt-8 font-mono text-[9px] uppercase tracking-[0.25em] text-silver/40">
                  <div>
                    <span className="block text-xl font-bold font-sans text-accent">01</span>
                    <span className="mt-1 block">Swiss Precision</span>
                  </div>
                  <div>
                    <span className="block text-xl font-bold font-sans text-accent">100%</span>
                    <span className="mt-1 block">High Quality Shots</span>
                  </div>
                  <div>
                    <span className="block text-xl font-bold font-sans text-accent">Team</span>
                    <span className="mt-1 block">Great Teamwork</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </section>

        {/* ===================== SHOWREEL SECTION (PREMIUM GALLERY) ===================== */}
        <section id="showreel" data-section="showreel" className="relative px-6 py-24 sm:py-32 md:px-16 scroll-mt-28">
          <FadeInOnScroll direction="up" distance={40}>
            <div className="mx-auto max-w-5xl">
              {/* Header */}
              <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <SectionLabel id="// 02">Portfolio Clips</SectionLabel>
                  <h3 className="text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white">
                    Featured Motion
                  </h3>
                </div>

                {/* Minimal Luxury Categories */}
                <div className="flex flex-wrap gap-1 border border-white/5 bg-black/40 p-1 backdrop-blur-md rounded-full">
                  {showreelCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setShowreelCategory(cat)}
                      className={`rounded-full px-4 py-2 text-[8px] uppercase tracking-[0.2em] transition-all duration-300 ${
                        showreelCategory === cat
                          ? "bg-white text-black font-bold"
                          : "text-silver/60 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gallery Grid - Large cinematic cards */}
              <div className="grid gap-6 sm:grid-cols-2">
                <AnimatePresence mode="popLayout">
                  {filteredClips.map((clip, idx) => (
                    <motion.div
                      key={clip.title}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative aspect-video overflow-hidden border border-white/5 bg-white/[0.01] cursor-pointer rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-700 ease-out hover:border-accent/40 hover:shadow-[0_20px_60px_rgba(212,176,98,0.18)] hover:-translate-y-1"
                      onClick={() => setSelectedVideo(clip.src)}
                      onMouseEnter={() => setHoveredCardIndex(idx)}
                      onMouseLeave={() => setHoveredCardIndex(null)}
                    >
                      {/* Autoplay preview on hover, else high-quality image */}
                      {hoveredCardIndex === idx && !clip.src.includes("youtu") ? (
                        <video
                          src={clip.src}
                          muted
                          playsInline
                          autoPlay
                          loop
                          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out scale-102 opacity-90"
                        />
                      ) : (
                        <img
                          src={clip.poster}
                          alt={clip.title}
                          loading="lazy"
                          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-110 group-hover:-translate-y-1"
                        />
                      )}

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                      {/* Top HUD markers */}
                      <div className="absolute inset-x-6 top-6 flex items-start justify-between font-mono text-[8px] uppercase tracking-widest text-silver/50 transition-transform duration-500 group-hover:translate-y-0.5">
                        <span>{clip.category}</span>
                        <span>[ {clip.year} ]</span>
                      </div>

                      {/* Meta info bottom with subtle parallax lift */}
                      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between transition-transform duration-500 group-hover:-translate-y-1">
                        <div>
                          <span className="font-mono text-[8px] uppercase tracking-wider text-accent block mb-1">
                            CLIENT: {clip.client}
                          </span>
                          <h4 className="text-xl font-bold tracking-tight text-white uppercase">
                            {clip.title}
                          </h4>
                          {"credits" in clip && clip.credits && (
                            <span className="mt-1.5 inline-block font-mono text-[8px] tracking-wide text-silver/90 bg-black/70 px-2.5 py-0.5 rounded-full border border-white/10">
                              {clip.credits as string}
                            </span>
                          )}
                        </div>
                        <div className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                          <Play className="size-3 fill-current ml-0.5" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </FadeInOnScroll>
        </section>

        {/* ===================== SERVICES SECTION (WHAT WE OFFER) ===================== */}
        <section
          id="services"
          data-section="services"
          className="relative px-6 py-24 sm:py-32 md:px-16 bg-gradient-to-b from-black/20 to-transparent scroll-mt-28"
        >
          <FadeInOnScroll direction="up" distance={40}>
            <div className="mx-auto max-w-5xl">
              <div className="mb-16">
                <SectionLabel id="// 03">Capabilities</SectionLabel>
                <h3 className="text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white mt-4">
                  What We Offer
                </h3>
                <p className="mt-4 text-xs leading-relaxed text-silver/50 max-w-md">
                  A comprehensive production pipeline designed to handle demanding creative goals.
                  From concept to Swiss-crafted final grade.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {servicesList.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      className="group relative border border-white/5 bg-white/[0.01] p-8 rounded-3xl transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.02]"
                    >
                      {/* Subtle ambient card glow */}
                      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-radial-gradient(ellipse at center, rgba(212,176,98,0.02), transparent 70%) opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-accent transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/10">
                        <Icon className="size-5" />
                      </div>

                      <h4 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                        {service.title}
                      </h4>

                      <p className="mt-3 text-xs leading-relaxed text-silver/60">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}

                {/* "Much More" Custom Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 6 * 0.05 }}
                  className="group relative border border-white/5 bg-white/[0.01] p-8 rounded-3xl transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.02] flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/5 text-accent">
                      <Sparkles className="size-5 animate-pulse" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                      And Much More
                    </h4>
                    <p className="mt-3 text-xs leading-relaxed text-silver/60">
                      Bespoke drone rigs, photogrammetry scanning, raw media transcoding, and
                      customizable creative treatments calibrated to your exact vision.
                    </p>
                  </div>
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={handleScrollToContact}
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-accent group-hover:text-white transition-colors cursor-pointer"
                    >
                      Discuss project{" "}
                      <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeInOnScroll>
        </section>

        {/* ===================== PROJECTS SECTION (CASE STUDY) ===================== */}
        <section id="portfolio" data-section="portfolio" className="relative px-6 py-24 sm:py-32 md:px-16 scroll-mt-28">
          <FadeInOnScroll direction="up" distance={40}>
            <div className="mx-auto max-w-5xl">
              {/* Header */}
              <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <SectionLabel id="// 03">Case Study</SectionLabel>
                  <h3 className="text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white">
                    Featured Work
                  </h3>
                </div>
              </div>

              {/* List/Grid of Case studies */}
              <div className="grid gap-8">
                {projects.length > 0 ? (
                  <div className="grid gap-12 sm:grid-cols-1">
                    {projects.map((p, pIdx) => (
                      <FadeInOnScroll key={p.slug} delay={pIdx * 100} direction="up" distance={30}>
                        <div
                          onClick={() => setActiveCaseStudy(p)}
                          className="group block cursor-pointer"
                        >
                          <div className="relative aspect-video overflow-hidden border border-white/5 bg-white/[0.01] rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out group-hover:border-accent/40 group-hover:shadow-[0_25px_70px_rgba(212,176,98,0.2)]">
                            <img
                              src={p.cover}
                              alt={p.title}
                              loading="lazy"
                              className="h-full w-full object-cover grayscale transition-all duration-1000 ease-out scale-100 group-hover:scale-108 group-hover:-translate-y-1.5 group-hover:grayscale-0"
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
                          <div className="mt-6 flex flex-col sm:flex-row sm:items-start justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-silver/40 pl-4 pr-4">
                            <div className="flex flex-col gap-2">
                              <span>CLIENT: {p.client}</span>
                              <span>DISCIPLINE: {p.category}</span>
                              {p.credits && (
                                <span className="text-accent normal-case tracking-normal font-sans text-xs mt-1">
                                  <strong>Main Recording/Editing:</strong> {p.credits.mainRecordingEditing} · <strong>Co-Filming/Drone Shots:</strong> {p.credits.coFilmingDroneShots}
                                </span>
                              )}
                            </div>
                            <span>{p.location}</span>
                          </div>
                        </div>
                      </FadeInOnScroll>
                    ))}

                    {/* NEW PROJECTS COMING SOON Box */}
                    <FadeInOnScroll delay={projects.length * 100} direction="up" distance={30}>
                      <div className="group relative overflow-hidden rounded-[2rem] border border-dashed border-white/10 bg-white/[0.01] p-8 sm:p-12 transition-all duration-700 hover:border-accent/40 hover:bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="space-y-3 text-center sm:text-left">
                          <div className="flex items-center justify-center sm:justify-start gap-2 text-accent font-mono text-[10px] uppercase tracking-[0.25em]">
                            <span className="size-2 rounded-full bg-accent animate-ping" />
                            <span>In Production & Storyboarding</span>
                          </div>
                          <h4 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            NEW PROJECTS COMING SOON
                          </h4>
                          <p className="text-xs leading-relaxed text-silver/50 max-w-lg">
                            We are currently crafting custom brand films, high-speed automotive reels, and mountain proximity FPV edits for upcoming 2026 releases.
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="rounded-full border border-white/10 bg-black/40 px-6 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-silver/80 backdrop-blur-md">
                            Stay Tuned
                          </span>
                        </div>
                      </div>
                    </FadeInOnScroll>
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
          </FadeInOnScroll>
        </section>

        {/* ===================== TEAM SECTION ===================== */}
        <section
          id="team"
          data-section="team"
          className="relative px-6 py-24 sm:py-32 md:px-16 border-t border-white/5 bg-gradient-to-b from-black/40 to-transparent scroll-mt-28"
        >
          <FadeInOnScroll direction="up" distance={40}>
            <div className="mx-auto max-w-5xl">
              <div className="mb-16">
                <SectionLabel id="// 04">{t("team.eyebrow")}</SectionLabel>
                <h3 className="text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white mt-4">
                  {t("team.title")}
                </h3>
                <p className="mt-4 text-xs leading-relaxed text-silver/50 max-w-md">
                  {t("team.intro")}
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Finn Ryf */}
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black/40">
                  <FounderImage className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end">
                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-accent">
                      {t("team.finn.role")}
                    </span>
                    <h4 className="mt-2 font-display text-2xl font-bold text-white tracking-tight">
                      Finn Ryf
                    </h4>
                    <p className="mt-3 text-xs leading-relaxed text-silver/60">
                      {t("team.finn.bio")}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-[9px] uppercase tracking-widest text-silver/40">
                      <span className="font-mono">CH · 2026</span>
                      <span className="text-accent/40">•</span>
                      <a
                        href={site.social.finn.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors font-mono"
                      >
                        Instagram
                      </a>
                      <span className="text-accent/40">•</span>
                      <a
                        href={site.social.finn.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors font-mono"
                      >
                        YouTube
                      </a>
                      <span className="text-accent/40">•</span>
                      <a
                        href={site.social.finn.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors font-mono"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* Nick Honstetter */}
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black/40">
                  <MemberImage src={nickPhoto} alt="Nick Honstetter" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end">
                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-accent">
                      {t("team.nick.role")}
                    </span>
                    <h4 className="mt-2 font-display text-2xl font-bold text-white tracking-tight">
                      Nick Honstetter
                    </h4>
                    <p className="mt-3 text-xs leading-relaxed text-silver/60">
                      {t("team.nick.bio")}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-[9px] uppercase tracking-widest text-silver/40">
                      <span className="font-mono">CH · 2026</span>
                      <span className="text-accent/40">•</span>
                      <a
                        href={site.social.nick.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors font-mono"
                      >
                        Instagram
                      </a>
                      <span className="text-accent/40">•</span>
                      <span className="font-mono text-accent">CO-FOUNDER</span>
                    </div>
                  </div>
                </div>

                {/* Tate Rittscher */}
                <div className="flex flex-col">
                  <span className="mb-2 font-mono text-xs font-black uppercase tracking-[0.25em] text-accent">
                    FREELANCER
                  </span>
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black/40">
                    <div className="absolute top-4 left-4 z-20 bg-accent text-black font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      FREELANCER
                    </div>
                    <MemberImage src={tatePhoto} alt="Tate Rittscher" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end">
                      <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-accent">
                        {t("team.tate.role")}
                      </span>
                      <h4 className="mt-2 font-display text-2xl font-bold text-white tracking-tight">
                        Tate Rittscher
                      </h4>
                      <p className="mt-3 text-xs leading-relaxed text-silver/60">
                        {t("team.tate.bio")}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-[9px] uppercase tracking-widest text-silver/40">
                        <span className="font-mono">CH · 2026</span>
                        <span className="text-accent/40">•</span>
                        <a
                          href={site.social.tate.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors font-mono"
                        >
                          Instagram
                        </a>
                        <span className="text-accent/40">•</span>
                        <span className="font-mono text-accent font-bold">FREELANCER</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vacant Slot Card "You could be here" */}
                <div
                  onClick={() =>
                    document.getElementById("careers")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-3xl border border-dashed border-accent/20 bg-accent/[0.01] hover:border-accent/50 hover:bg-accent/[0.03] transition-all duration-500 p-8 flex flex-col justify-between"
                >
                  {/* Accent ambient glow */}
                  <div className="pointer-events-none absolute inset-0 bg-radial-gradient(ellipse at center, rgba(212,176,98,0.03), transparent 70%) opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-silver/30">
                      Slot ID: OZ-VACANT
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-full border border-accent/20 bg-accent/5 text-accent group-hover:scale-110 transition-transform duration-500">
                      <UserPlus className="size-4 animate-pulse" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-display text-xl font-bold text-accent uppercase tracking-wider">
                      {t("team.vacant.title")}
                    </h4>
                    <p className="text-xs leading-relaxed text-silver/60">{t("team.vacant.bio")}</p>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-white group-hover:text-accent transition-colors">
                        {t("team.vacant.cta")}{" "}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </section>

        {/* ===================== JOBS & CAREER SECTION ===================== */}
        <section
          id="careers"
          data-section="careers"
          className="relative px-6 py-24 sm:py-32 md:px-16 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20 scroll-mt-28"
        >
          <FadeInOnScroll direction="up" distance={40}>
            <div className="mx-auto max-w-5xl">
              <div className="mb-16">
                <SectionLabel id="// 05">{t("careers.eyebrow")}</SectionLabel>
                <h3 className="text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white mt-4">
                  {t("careers.title")}
                </h3>
                <p className="mt-4 text-xs leading-relaxed text-silver/50 max-w-md">
                  {t("careers.intro")}
                </p>
              </div>

              <div className="space-y-6">
                {translatedJobRoles.map((job) => {
                  const currentApps = applications[job.id] || [];
                  const slotsTaken = currentApps.length;
                  const remainingSlots = Math.max(0, 3 - slotsTaken);
                  const isFormOpen = applyingJobId === job.id;

                  return (
                    <div
                      key={job.id}
                      className="border border-white/5 bg-white/[0.01] p-8 rounded-3xl backdrop-blur-md transition-all duration-500 hover:border-white/10 hover:bg-white/[0.02]"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40">
                              {job.department}
                            </span>
                            <span className="text-white/10">•</span>
                            <span className="font-mono text-[8px] uppercase tracking-widest text-accent">
                              {job.location}
                            </span>
                          </div>
                          <h4 className="font-display text-xl font-bold text-white tracking-tight">
                            {job.title}
                          </h4>
                          <p className="text-xs text-silver/60 leading-relaxed max-w-2xl">
                            {job.description}
                          </p>
                        </div>

                        {/* Status and Actions Panel */}
                        <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                          <div className="font-mono text-[9px] uppercase tracking-wider bg-white/[0.02] border border-white/5 rounded-full px-3 py-1 text-silver/70">
                            {t("careers.slotsAvailable")}:{" "}
                            <span
                              className={
                                remainingSlots > 0
                                  ? "text-accent font-bold"
                                  : "text-destructive font-bold"
                              }
                            >
                              {remainingSlots} / 3 slots
                            </span>
                          </div>

                          {!isFormOpen &&
                            (slotsTaken < 3 ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setApplyingJobId(job.id);
                                  setFormError("");
                                  setFormSuccess(false);
                                }}
                                className="rounded-full bg-white px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-accent hover:text-black"
                              >
                                {t("careers.apply")}
                              </button>
                            ) : (
                              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-silver/40 cursor-not-allowed">
                                {t("careers.slotsBooked")}
                              </span>
                            ))}
                        </div>
                      </div>

                      {/* Requirements Bullets */}
                      <div className="mt-6 pt-6 border-t border-white/5">
                        <p className="font-mono text-[8px] uppercase tracking-widest text-silver/40 mb-3">
                          {t("careers.parameters")}
                        </p>
                        <ul className="grid gap-2 sm:grid-cols-2 text-xs text-silver/70">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dynamic Slots Allocations Grid */}
                      <div className="mt-6 pt-6 border-t border-white/5 bg-black/25 -mx-8 -mb-8 p-8 rounded-b-3xl">
                        <p className="font-mono text-[8px] uppercase tracking-widest text-silver/40 mb-4">
                          {t("careers.telemetry")}
                        </p>
                        <div className="grid gap-4 sm:grid-cols-3">
                          {[0, 1, 2].map((slotIdx) => {
                            const app = currentApps[slotIdx];
                            if (app) {
                              return (
                                <div
                                  key={slotIdx}
                                  className="flex items-center gap-3 border border-accent/25 bg-accent/[0.02] rounded-2xl p-4"
                                >
                                  <CheckCircle className="size-4 text-accent shrink-0" />
                                  <div className="min-w-0">
                                    <p className="font-mono text-[7px] uppercase tracking-widest text-accent">
                                      {t("careers.slotClaimed")} {slotIdx + 1}
                                    </p>
                                    <p className="text-xs font-bold text-white truncate mt-0.5">
                                      {app.name}
                                    </p>
                                    <p className="font-mono text-[8px] text-silver/40 truncate">
                                      {app.email}
                                    </p>
                                  </div>
                                </div>
                              );
                            } else {
                              return (
                                <div
                                  key={slotIdx}
                                  className="flex items-center gap-3 border border-white/5 border-dashed bg-white/[0.01] rounded-2xl p-4"
                                >
                                  <div className="size-4 rounded-full border border-white/10 shrink-0" />
                                  <div>
                                    <p className="font-mono text-[7px] uppercase tracking-widest text-silver/30">
                                      {t("careers.slotOpen")} {slotIdx + 1}
                                    </p>
                                    <p className="text-xs font-medium text-silver/40 mt-0.5">
                                      {t("careers.vacantTelemetry")}
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>

                      {/* Inline Application Form */}
                      {isFormOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-6 pt-6 border-t border-white/5 space-y-6"
                        >
                          <h5 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                            {t("form.claimSlot")} - {job.title}
                          </h5>

                          {formSuccess ? (
                            <div className="flex flex-col items-center justify-center p-8 border border-accent/20 bg-accent/[0.02] rounded-2xl text-center">
                              <CheckCircle className="size-8 text-accent mb-3 animate-bounce" />
                              <h6 className="font-display text-base font-bold text-white uppercase tracking-wider">
                                {t("form.secured")}
                              </h6>
                              <p className="mt-1 text-xs text-silver/60">{t("form.stored")}</p>
                            </div>
                          ) : (
                            <form
                              onSubmit={(e) => handleApplySubmit(e, job.id)}
                              className="space-y-6"
                            >
                              <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                  <label className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40">
                                    {t("form.yourName")}
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    placeholder="e.g. Robin Ryf"
                                    value={appForm.name}
                                    onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                                    className="w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40">
                                    {t("form.email")}
                                  </label>
                                  <input
                                    type="email"
                                    required
                                    placeholder="e.g. robin@ryf.com"
                                    value={appForm.email}
                                    onChange={(e) =>
                                      setAppForm({ ...appForm, email: e.target.value })
                                    }
                                    className="w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
                                  />
                                </div>
                              </div>

                              <div className="space-y-1.5">
                                <label className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40">
                                  {t("form.portfolio")}
                                </label>
                                <input
                                  type="url"
                                  placeholder="e.g. https://vimeo.com/your-reel"
                                  value={appForm.portfolio}
                                  onChange={(e) =>
                                    setAppForm({ ...appForm, portfolio: e.target.value })
                                  }
                                  className="w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
                                />
                              </div>

                              <div className="space-y-1.5">
                                <label className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40">
                                  {t("form.about")}
                                </label>
                                <textarea
                                  rows={3}
                                  placeholder="State your experience..."
                                  value={appForm.message}
                                  onChange={(e) =>
                                    setAppForm({ ...appForm, message: e.target.value })
                                  }
                                  className="w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors resize-none"
                                />
                              </div>

                              {formError && (
                                <div className="flex items-center gap-2 text-destructive font-mono text-[10px] uppercase tracking-wider">
                                  <AlertCircle className="size-4 shrink-0" />
                                  <span>{formError}</span>
                                </div>
                              )}

                              <div className="flex items-center gap-4">
                                <button
                                  type="submit"
                                  className="rounded-full bg-accent text-black px-6 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
                                >
                                  {t("form.submit")}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setApplyingJobId(null)}
                                  className="rounded-full border border-white/10 text-white px-6 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
                                >
                                  {t("form.cancel")}
                                </button>
                              </div>
                            </form>
                          )}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeInOnScroll>
        </section>

        {/* ===================== PARTNERS NETWORK ===================== */}
        <div id="partners" data-section="partners" className="scroll-mt-28">
          <PartnersClients />
        </div>

        {/* ===================== CONTACT & MAPS SECTION ===================== */}
        <section id="contact" data-section="contact" className="relative px-6 py-24 sm:py-32 md:px-16 scroll-mt-28">
          <FadeInOnScroll direction="up" distance={40}>
            <div className="mx-auto max-w-5xl">
            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <div>
                <SectionLabel id="// 05">Contact Core</SectionLabel>
                <h3 className="text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white">
                  Initiate the Frame
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-silver/50 md:mt-6">
                Connect with us to plan your next cinematic project, coordinate drone logistics, or
                outline high-concept brand treatments. We provide full-service Swiss-crafted
                production.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 items-start">
              {/* Form panel */}
              <div className="lg:col-span-7 border border-white/5 bg-white/[0.01] p-8 md:p-10 backdrop-blur-md rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                {contactSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="size-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                      <CheckCircle className="size-8 text-accent" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">Transmission Successful</h4>
                    <p className="text-silver/60 text-sm max-w-sm">
                      Your project brief has been encrypted and sent to our production desk. Our
                      crew will review the details and initiate contact within 24 hours.
                    </p>
                    <button
                      onClick={() => setContactSuccess(false)}
                      className="mt-8 text-[10px] uppercase tracking-widest text-accent hover:text-white transition-colors"
                    >
                      Send another brief
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-8">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="Finn Ryf"
                          className="w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, email: e.target.value })
                          }
                          placeholder="agency@brand.com"
                          className="w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={contactForm.phone}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, phone: e.target.value })
                          }
                          placeholder="+41 00 000 00 00"
                          className="w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40">
                          Project Discipline
                        </label>
                        <select
                          name="discipline"
                          value={contactForm.discipline}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, discipline: e.target.value })
                          }
                          className="w-full border-b border-white/10 bg-[#030303] py-2.5 text-xs tracking-wider text-white/50 focus:border-accent focus:outline-none transition-colors"
                        >
                          <option>FPV Cinematography</option>
                          <option>Event Highlight Production</option>
                          <option>Commercial Brand Film</option>
                          <option>Photography</option>
                          <option>Video Editing</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40">
                        Brief Narrative *
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={3}
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, message: e.target.value })
                        }
                        placeholder="Share the locations, timing, and aesthetic goals of the project..."
                        className="w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none resize-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={contactLoading}
                      className="group flex items-center justify-center gap-3 w-full rounded-full bg-white py-4 text-[9px] font-bold uppercase tracking-[0.25em] text-black transition-all hover:bg-accent hover:shadow-[0_0_20px_rgba(212,176,98,0.3)] cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
                    >
                      {contactLoading ? (
                        <>
                          <Loader2 className="size-3.5 animate-spin text-black" />
                          <span className="tracking-[0.2em] animate-pulse">Sending Transmission...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Briefing Package</span>
                          <Send className="size-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="border border-white/5 bg-white/[0.01] p-8 backdrop-blur-md rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] space-y-6 font-mono text-[10px] tracking-wider leading-relaxed">
                  <h4 className="font-sans text-lg font-bold uppercase tracking-tight text-white mb-2">
                    ORYN ZERO Studio
                  </h4>
                  <div className="flex items-center gap-3 text-silver/70">
                    <Mail className="size-3.5 text-accent" />
                    <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                      {site.email}
                    </a>
                  </div>

                  <div className="flex gap-4 border-t border-white/5 pt-5 text-[8px] uppercase tracking-widest text-silver/40">
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Instagram className="size-3" /> Instagram
                    </a>
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Linkedin className="size-3" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </section>
      </div>

      {/* ===================== LIGHTBOX MODAL PLAYER ===================== */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, filter: "blur(5px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.95, filter: "blur(5px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-video border border-white/5 bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white/90 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 hover:text-accent hover:border-accent transition-colors"
              >
                CLOSE FRAME <X className="size-3.5" />
              </button>
              {selectedVideo && selectedVideo.includes("4mwIvmZ5y7c") && (
                <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-white/90 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-accent/30 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                  <span>Main Recording/Editing: VISURE GMBH · Co-Filming/Drone Shots: Finn Ryf</span>
                </div>
              )}
              <VideoPlayer src={selectedVideo} autoPlay={true} loop={true} muted={false} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================== EXPANDABLE PORTFOLIO DETAILS MODAL ===================== */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={() => setActiveCaseStudy(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 38, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative ml-auto w-full max-w-4xl min-h-screen bg-[#060606] border-l border-white/5 p-6 sm:p-10 md:p-12 shadow-[-20px_0_60px_rgba(0,0,0,0.8)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8 font-mono text-[9px] uppercase tracking-widest text-silver/50">
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  ← BACK TO INDEX
                </button>
                <span>PROJECT ID // {activeCaseStudy.id}</span>
              </div>

              {/* Case details */}
              <div className="space-y-10">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent block mb-2">
                    {activeCaseStudy.category} · {activeCaseStudy.year}
                  </span>
                  <h2 className="text-balance-tight font-display text-4xl font-black uppercase tracking-tight md:text-5xl text-white">
                    {activeCaseStudy.title}
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-silver/70 max-w-2xl">
                    {activeCaseStudy.overview}
                  </p>
                </div>

                {/* Dynamic player */}
                <div className="border border-white/5 bg-black rounded-3xl overflow-hidden aspect-video shadow-2xl relative">
                  <VideoPlayer
                    src={activeCaseStudy.video || "https://youtu.be/2bbwo-n7Lmo"}
                    poster={activeCaseStudy.cover}
                    autoPlay={false}
                    loop={true}
                    muted={false}
                  />
                </div>

                {/* Sub-blocks layout */}
                <div className="grid gap-10 md:grid-cols-12 items-start">
                  <div className="md:col-span-8 space-y-8">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-accent block">
                          // CHALLENGE
                        </span>
                        <p className="text-xs leading-relaxed text-silver/50">
                          {activeCaseStudy.challenge}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-accent block">
                          // CONCEPT
                        </span>
                        <p className="text-xs leading-relaxed text-silver/50">
                          {activeCaseStudy.concept}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-accent block">
                          // PRODUCTION
                        </span>
                        <p className="text-xs leading-relaxed text-silver/50">
                          {activeCaseStudy.production}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-accent block">
                          // RESULT
                        </span>
                        <p className="text-xs leading-relaxed text-silver/50">
                          {activeCaseStudy.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar stats */}
                  <aside className="md:col-span-4 border border-white/5 bg-white/[0.01] p-6 rounded-3xl space-y-5 font-mono text-[9px] tracking-widest leading-relaxed">
                    {/* Explicit Production Credits in Modal Sidebar */}
                    <div className="border border-accent/20 bg-accent/5 p-4 rounded-2xl space-y-2">
                      <span className="block text-accent uppercase text-[8px] font-bold tracking-widest">
                        PRODUCTION CREDITS
                      </span>
                      <div className="space-y-1.5 text-white font-sans text-xs tracking-normal">
                        <p>
                          <span className="text-silver/50 block font-mono text-[8px] uppercase tracking-wider">Main Recording/Editing</span>
                          VISURE GMBH
                        </p>
                        <p className="mt-1">
                          <span className="text-silver/50 block font-mono text-[8px] uppercase tracking-wider">Co-Filming/Drone Shots</span>
                          Finn Ryf
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="block text-silver/40 uppercase text-[8px]">CLIENT</span>
                      <span className="mt-1 block text-white font-sans text-xs font-bold uppercase tracking-normal">
                        {activeCaseStudy.client}
                      </span>
                    </div>
                    <div>
                      <span className="block text-silver/40 uppercase text-[8px]">LOCATION</span>
                      <span className="mt-1 block text-white font-sans text-xs font-bold uppercase tracking-normal">
                        {activeCaseStudy.location}
                      </span>
                    </div>
                    <div>
                      <span className="block text-silver/40 uppercase text-[8px]">YEAR</span>
                      <span className="mt-1 block text-white font-sans text-xs font-bold uppercase tracking-normal">
                        {activeCaseStudy.year}
                      </span>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                      <span className="block text-silver/40 uppercase text-[8px] mb-2">
                        SERVICES
                      </span>
                      <ul className="space-y-1 text-xs text-silver/60 font-sans tracking-normal font-light">
                        {activeCaseStudy.services.map((s) => (
                          <li key={s} className="flex items-center gap-1.5">
                            <span className="size-1 rounded-full bg-accent" /> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                </div>

                {/* Footer Controls */}
                <div className="border-t border-white/5 pt-6 flex justify-between">
                  <button
                    onClick={() => setActiveCaseStudy(null)}
                    className="border border-white/10 px-6 py-3 rounded-full text-[8px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    CLOSE BRIEF
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      setActiveCaseStudy(null);
                      handleScrollToContact(e);
                    }}
                    className="bg-accent px-6 py-3 rounded-full text-[8px] font-bold uppercase tracking-widest text-black hover:bg-white transition-colors cursor-pointer"
                  >
                    DISCUSS INITIATION
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
