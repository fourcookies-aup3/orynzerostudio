import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import { useLocale } from "@/context/LocaleContext";
import { CalEmbed } from "@/components/site/CalEmbed";
import { ArrowRight, CheckCircle2, Clock, PhoneCall, Sparkles } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Schedule a Call — ORYN ZERO Studio" },
      {
        name: "description",
        content:
          "Book a 30-minute discovery call or project planning session directly with founder Finn Ryf.",
      },
      { property: "og:title", content: "Schedule a Call — ORYN ZERO Studio" },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

interface MeetingOption {
  id: string;
  calLink: string;
  title: string;
  duration: string;
  description: string;
  badge: string;
  isDefault?: boolean;
}

const MEETING_OPTIONS: MeetingOption[] = [
  {
    id: "discovery",
    calLink: "oryn-29f422/discovery-call",
    title: "Discovery Call",
    duration: "30 min",
    description:
      "Initial conversation to discuss your creative brief, location feasibility, airspace clearance requirements, and preliminary budget.",
    badge: "Recommended",
    isDefault: true,
  },
  {
    id: "project-planning",
    calLink: "oryn-29f422/project-meeting",
    title: "Project Planning",
    duration: "60 min",
    description:
      "In-depth pre-production session for confirmed productions: shot-list review, flight logistics, and schedule planning.",
    badge: "Active Briefs",
  },
];

function BookingPage() {
  const { t } = useLocale();
  const [selectedMeetingId, setSelectedMeetingId] = useState<string>("discovery");
  const [showAllAvailabilities, setShowAllAvailabilities] = useState<boolean>(false);

  // Guarantee page loads at top and resists any iframe auto-scroll
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      const timer1 = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 100);
      const timer2 = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 400);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, []);

  const activeMeeting =
    MEETING_OPTIONS.find((m) => m.id === selectedMeetingId) || MEETING_OPTIONS[0];

  const activeCalLink = showAllAvailabilities ? "oryn-29f422" : activeMeeting.calLink;
  const activeTitle = showAllAvailabilities
    ? "All Availabilities — Cal.com"
    : `${activeMeeting.title} (${activeMeeting.duration})`;

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-[#050507] text-white">
      <PageHero
        eyebrow="Direct Studio Contact"
        title="Schedule a Call"
        intro="Book a direct 30-minute discovery call with studio founder Finn Ryf to discuss your project scope, location, and creative ideas."
      />

      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          {/* Meeting Selection Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block">
                Meeting Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Choose a meeting type
              </h2>
            </div>
            <p className="font-mono text-[10px] text-silver/50 uppercase tracking-widest">
              Direct Founder Call · No Account Required
            </p>
          </div>

          {/* Simple, intuitive Meeting Cards (Discovery Call default) */}
          <div className="grid gap-4 sm:grid-cols-2">
            {MEETING_OPTIONS.map((m) => {
              const isSelected = selectedMeetingId === m.id && !showAllAvailabilities;
              return (
                <div
                  key={m.id}
                  onClick={() => {
                    setSelectedMeetingId(m.id);
                    setShowAllAvailabilities(false);
                  }}
                  className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(212,176,98,0.15)] ring-1 ring-accent/30"
                      : "border-white/10 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.02]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-silver/70">
                        <Clock className="size-3 text-accent" />
                        <span>{m.duration}</span>
                      </span>
                      <span
                        className={`text-[9px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                          m.isDefault
                            ? "border-accent/40 bg-accent/20 text-accent font-bold"
                            : "border-white/10 bg-white/5 text-silver/60"
                        }`}
                      >
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">{m.title}</h3>
                    <p className="mt-2 text-xs text-silver/70 font-light leading-relaxed">
                      {m.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 font-mono text-[10px] uppercase tracking-wider">
                    <span className={isSelected ? "text-accent font-bold" : "text-silver/50"}>
                      {isSelected ? "Selected Option" : "Select This Scope"}
                    </span>
                    <ArrowRight
                      className={`size-4 transition-transform ${
                        isSelected ? "text-accent translate-x-1" : "text-silver/40"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Toggle to Overview View */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.01] p-4 text-xs">
            <span className="text-silver/70 font-light">
              Looking for flexible times across all meeting types on a single calendar?
            </span>
            <button
              type="button"
              onClick={() => setShowAllAvailabilities(!showAllAvailabilities)}
              className={`rounded-full border px-4 py-2 font-mono text-[9px] uppercase tracking-wider transition-colors shrink-0 ${
                showAllAvailabilities
                  ? "border-accent bg-accent text-black font-bold"
                  : "border-white/15 bg-white/5 text-silver/80 hover:text-white hover:border-white/30"
              }`}
            >
              {showAllAvailabilities ? "Show Selected Scope" : "View All Availabilities"}
            </button>
          </div>

          {/* Cal.com Embedded Widget */}
          <div className="pt-2 scroll-mt-28">
            <CalEmbed
              calLink={activeCalLink}
              title={activeTitle}
              description={`Select a date and time slot below for your ${activeTitle}. You'll receive a calendar invite and video link immediately.`}
            />
          </div>

          {/* Alternative direct inquiry note */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-6 text-center space-y-2">
            <p className="text-xs text-silver/70 font-light">
              Prefer writing down your project details before scheduling a call?
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent hover:underline font-semibold"
              >
                <span>Submit our Quick Project Brief instead</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
