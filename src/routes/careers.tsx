import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import { ApplicationForm } from "@/components/ApplicationForm";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Compass,
  Film,
  SlidersHorizontal,
  Camera,
  FolderGit2,
  FileText
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Open Positions — ORYN ZERO Studio" },
      {
        name: "description",
        content:
          "Open positions and career opportunities at ORYN ZERO Studio in Switzerland. Apply as FPV Pilot, Video Editor, DP, Sound Designer, or Production Coordinator.",
      },
      { property: "og:title", content: "Careers & Open Positions — ORYN ZERO Studio" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
  errorComponent: CareersErrorBoundary,
  notFoundComponent: CareersErrorBoundary,
});

interface JobPosition {
  id: string;
  formRole: string;
  title: string;
  calligraphyNote: string;
  department: string;
  location: string;
  contract: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: "fpv-pilot",
    formRole: "FPV Pilot & Aerial Specialist",
    title: "FPV Drone Pilot & Aerial Specialist",
    calligraphyNote: "kinetic flight",
    department: "Flight Operations",
    location: "Switzerland · Hybrid",
    contract: "Freelance / Project-Based",
    description:
      "We are seeking an agile FPV pilot capable of chasing fast-moving subjects, executing millimeter-tight indoor single-takes, and navigating complex terrain with disciplined safety standards.",
    responsibilities: [
      "Operate sub-250g micro quads and high-speed chase rigs on commercial shoots",
      "Execute synchronized tracking lines alongside ground camera crews and athletes",
      "Participate in pre-shoot flight path scouting and terrain risk assessments",
      "Maintain custom flight gear, batteries, and backup components to studio standards",
    ],
    requirements: [
      "Valid EASA A1/A3 drone certifications & proven flight logs",
      "Exceptional manual (acro) flight skills in both tight indoor and high-speed outdoor spaces",
      "Strong showreel demonstrating smooth cinematic camera flow and subject tracking",
      "Calm under pressure during live event filming and fast-paced commercial sets",
    ],
    icon: Compass,
  },
  {
    id: "lead-editor",
    formRole: "Senior Video Editor & Post Production Lead",
    title: "Lead Video Editor & Colorist",
    calligraphyNote: "rhythm & montage",
    department: "Post-Production",
    location: "Switzerland · Remote / Hybrid",
    contract: "Project-Based / Part-Time",
    description:
      "We are looking for a rhythm-driven editor and colorist to take raw aerial and ground cinema takes and craft them into high-tempo, emotionally charged visual narratives.",
    responsibilities: [
      "Assemble commercial brand films, social teasers, and high-energy event edits",
      "Develop bespoke filmic color grades with natural contrast and rich skin tones",
      "Key cut tempo and visual pacing to dynamic music scores and physical motion",
      "Deliver multi-ratio master packages for cinema (16:9), vertical social (9:16), and web",
    ],
    requirements: [
      "Mastery of DaVinci Resolve Studio or Adobe Premiere Pro",
      "Demonstrated portfolio of commercial, automotive, or action sports editing",
      "Deep understanding of color management, Log profiles, and film emulation",
      "Ability to meet tight commercial turnarounds without compromising creative polish",
    ],
    icon: SlidersHorizontal,
  },
  {
    id: "cinematographer-dp",
    formRole: "Director of Photography (DP) / Camera Operator",
    title: "Cinematographer & Camera Operator (DP)",
    calligraphyNote: "grounded vision",
    department: "Camera & Ground Production",
    location: "Switzerland · Travel on Shoot",
    contract: "Freelance / Project-Based",
    description:
      "We need a versatile camera operator and DP who can capture fluid handheld and gimbal movement that integrates seamlessly with dynamic aerial flight lines.",
    responsibilities: [
      "Lead principal ground camera operations on commercials, brand films, and live events",
      "Coordinate lighting and camera movement to match aerodynamic speed and tone",
      "Work in close choreography with the lead FPV pilot for synchronized dual-angle takes",
      "Manage on-set camera packages, lenses, stabilization rigs, and data offloads",
    ],
    requirements: [
      "Proven commercial or documentary cinematography reel",
      "Experience operating gimbal setups and dynamic handheld camera rigs",
      "Eye for natural lighting, intentional framing, and kinetic composition",
      "Collaborative, energetic on-set presence and reliability",
    ],
    icon: Camera,
  },
  {
    id: "sound-designer",
    formRole: "Sound Designer & Audio Engineer",
    title: "Tactile Sound Designer & Audio Engineer",
    calligraphyNote: "sensory audio",
    department: "Post-Production & Audio",
    location: "Switzerland · Remote",
    contract: "Freelance / Project-Based",
    description:
      "We believe movement is felt through sound. We are looking for an audio designer to build custom aerodynamic rushes, engine acoustics, spatial Foley, and high-impact soundscapes.",
    responsibilities: [
      "Design custom Foley and sound effects synchronized with high-speed aerial motion",
      "Clean, balance, and spatial-mix location audio and commercial voiceovers",
      "Deliver polished stereo stems and mastered tracks for web and broadcast releases",
      "Build a growing studio sound library of kinetic textures and mechanical tones",
    ],
    requirements: [
      "High proficiency in digital audio workstations (Ableton, Pro Tools, Reaper)",
      "Portfolio of sound design for high-energy trailers, sports, or commercial films",
      "Ability to make speed, wind, and impact feel tangible and visceral",
      "Prompt delivery and attention to mix headroom and broadcast standards",
    ],
    icon: Film,
  },
  {
    id: "production-coordinator",
    formRole: "Production Coordinator & Studio Manager",
    title: "Production Coordinator & Assistant Producer",
    calligraphyNote: "on-set logistics",
    department: "Studio Management & Operations",
    location: "Switzerland",
    contract: "Part-Time / Project-Based",
    description:
      "Support our productions through organized logistics, site reconnaissance coordination, schedule planning, and direct client and location communication.",
    responsibilities: [
      "Manage shoot schedules, call sheets, equipment checklists, and crew logistics",
      "Coordinate site permissions, location agreements, and flight reconnaissance prep",
      "Assist with client communication, shoot briefs, and project deliverables",
      "Provide on-set production support and coordination during filming days",
    ],
    requirements: [
      "Fluent in German and English (spoken & written); French is a plus",
      "Highly organized, detail-oriented, and dependable with schedules",
      "Familiarity with Swiss geography and production environments",
      "Passionate about video production, sports, and creative media",
    ],
    icon: Briefcase,
  },
];

function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>(OPEN_POSITIONS[0].formRole);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const departments = ["All", "Flight Operations", "Post-Production", "Camera & Ground Production", "Studio Management & Operations"];

  const filteredPositions = selectedFilter === "All"
    ? OPEN_POSITIONS
    : OPEN_POSITIONS.filter((p) => p.department === selectedFilter);

  const handleApplyClick = (formRole: string) => {
    setSelectedRole(formRole);
    const element = document.getElementById("application-form");
    if (element) {
      const offset = 90;
      const pos = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <PageHero
        eyebrow={
          <div className="flex items-center gap-2">
            <span>Careers & Roster</span>
            <span className="text-silver/40">·</span>
            <span className="font-script text-accent text-xl normal-case">join the crew</span>
          </div>
        }
        title={
          <>
            Films Built by{" "}
            <span className="font-script text-accent font-normal text-5xl sm:text-7xl md:text-8xl normal-case pl-1.5 inline-block relative top-1">
              creators.
            </span>
          </>
        }
        intro="We are actively expanding our creative and technical roster. Explore our current open positions below or submit an open application to collaborate with ORYN ZERO Studio on upcoming productions."
      />

      {/* Open Positions Section */}
      <section className="px-6 py-20 sm:py-24 border-b border-white/10">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Header & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block">
                  Active Hiring · 2026
                </span>
                <span className="text-silver/40 font-mono text-[9px]">·</span>
                <span className="font-script text-accent text-xl normal-case">open positions</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                Current Opportunities
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedFilter(dept)}
                  className={`rounded-full px-4 py-2 font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer ${
                    selectedFilter === dept
                      ? "bg-accent text-black font-bold shadow-[0_0_15px_rgba(212,176,98,0.25)]"
                      : "bg-white/[0.03] text-silver/70 border border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Positions Grid */}
          <div className="grid gap-6">
            {filteredPositions.map((job) => {
              const Icon = job.icon;
              return (
                <div
                  key={job.id}
                  className="rounded-3xl border border-white/10 bg-[#0a0a0d] p-7 sm:p-10 transition-all duration-300 hover:border-accent/40 hover:bg-[#0c0c10] shadow-xl group"
                >
                  <div className="grid gap-8 lg:grid-cols-12 items-start">
                    {/* Left: Job Header, Summary & Responsibilities */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-accent/10 border border-accent/30 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-accent">
                          {job.department}
                        </span>
                        <span className="font-script text-accent text-lg normal-case">
                          {job.calligraphyNote}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                          <Icon className="size-5" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                          {job.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-5 text-xs text-silver/60 font-mono uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-accent" />
                          <span>{job.location}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="size-3.5 text-accent" />
                          <span>{job.contract}</span>
                        </span>
                      </div>

                      <p className="text-sm text-silver/80 font-light leading-relaxed">
                        {job.description}
                      </p>

                      <div className="pt-2">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-silver/50 block mb-2 font-semibold">
                          Key Responsibilities
                        </span>
                        <ul className="space-y-1.5 text-xs text-silver/70">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="size-1 rounded-full bg-accent shrink-0 mt-1.5" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: Requirements & Direct Action */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pl-6 lg:border-l lg:border-white/5">
                      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-3">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-silver/50 block font-semibold">
                          Candidate Requirements
                        </span>
                        <ul className="space-y-2 text-xs text-silver/80">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="size-3.5 text-accent shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 pt-2">
                        <button
                          type="button"
                          onClick={() => handleApplyClick(job.formRole)}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black hover:bg-white transition-all shadow-[0_0_25px_rgba(212,176,98,0.25)] cursor-pointer"
                        >
                          <span>Apply for this Position</span>
                          <ArrowRight className="size-3.5" />
                        </button>
                        <p className="text-[10px] text-center font-mono text-silver/40 uppercase tracking-widest">
                          Direct founder review within 48h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Open Application Callout Card */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.02] to-white/[0.04] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-accent" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold">
                  Creative Network
                </span>
                <span className="font-script text-accent text-lg">always open</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Don't See Your Exact Role?
              </h4>
              <p className="text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
                We are always eager to connect with lighting technicians, 3D artists, creative directors, and talented visual storytellers. Submit an open creative application below.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleApplyClick("Open Application / Other Studio Position")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all shrink-0 cursor-pointer"
            >
              <span>Submit Open Application</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="px-6 py-20 sm:py-28 bg-[#040406]">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold">
                Direct Submission
              </span>
              <span className="text-silver/40">·</span>
              <span className="font-script text-accent text-2xl normal-case">apply now</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Submit Your Application
            </h2>
            <p className="text-xs sm:text-sm text-silver/70 font-light max-w-md mx-auto leading-relaxed">
              Applying for: <strong className="text-accent font-mono text-xs">{selectedRole}</strong>. Submit your details, portfolio or showreel link, or attach your CV and materials.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0a0a0d] p-6 sm:p-12 shadow-2xl">
            <ApplicationForm type="job" defaultRole={selectedRole} />
          </div>
        </div>
      </section>

      {/* Studio Values / What to Expect */}
      <section className="px-6 py-20 border-t border-white/10 bg-[#050507]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-3 font-light text-xs">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold block">
                01 · Craft Over Clutter
              </span>
              <h4 className="text-sm font-bold text-white">Direct Production Access</h4>
              <p className="text-silver/60 leading-relaxed">
                Zero corporate bureaucracy. You work directly with founder Finn Ryf and the core team on real commercial and cinema projects.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold block">
                02 · Transparent Credits
              </span>
              <h4 className="text-sm font-bold text-white">Honest Attribution</h4>
              <p className="text-silver/60 leading-relaxed">
                We believe in full creative attribution. Every operator, colorist, and collaborator is clearly credited on every production.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold block">
                03 · Pushing Motion
              </span>
              <h4 className="text-sm font-bold text-white">Kinetic Exploration</h4>
              <p className="text-silver/60 leading-relaxed">
                We constantly push new camera angles, lightweight rigs, and fluid transitions that conventional cameras cannot execute.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CareersErrorBoundary() {
  return (
    <div className="min-h-screen bg-[#050507] text-white flex items-center justify-center px-6 py-28">
      <div className="max-w-md text-center space-y-6">
        <div className="inline-flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold">
            ORYN ZERO · Studio Roster
          </span>
          <span className="font-script text-accent text-xl">open positions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
          Opportunities & Roles
        </h1>
        <p className="text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
          We are actively looking for FPV Drone Pilots, Video Editors, Cinematographers (DP), Sound Designers, and Production Coordinators across Switzerland.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="mailto:orynzerostudio@gmail.com?subject=Job%20Application%20—%20ORYN%20ZERO%20Studio"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(212,176,98,0.25)]"
          >
            Email Application (orynzerostudio@gmail.com)
          </a>
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.reload();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white/20 transition-all cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
}

