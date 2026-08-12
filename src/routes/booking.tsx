import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import { useLocale } from "@/context/LocaleContext";
import { CalEmbed } from "@/components/site/CalEmbed";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Meeting — ORYN ZERO" },
      {
        name: "description",
        content: "Schedule a discovery call, project meeting or consultation with ORYN ZERO directly via Cal.com.",
      },
      { property: "og:title", content: "Book a Meeting — ORYN ZERO" },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  const { t } = useLocale();

  // Define the 3 phases matching Cal.com availabilities
  const phases = [
    {
      id: "B/01",
      slug: "discovery-call",
      calLink: "oryn-29f422/discovery-call",
      title: t("booking.b01.title"), // "Discovery Call"
      duration: "30 min",
      body: t("booking.b01.body"),
      tag: "Phase 1 · Intro",
    },
    {
      id: "B/02",
      slug: "project-meeting",
      calLink: "oryn-29f422/project-meeting",
      title: t("booking.b02.title"), // "Project Meeting"
      duration: "60 min",
      body: t("booking.b02.body"),
      tag: "Phase 2 · Production",
    },
    {
      id: "B/03",
      slug: "consultation",
      calLink: "oryn-29f422/consultation",
      title: t("booking.b03.title"), // "Consultation"
      duration: "45 min",
      body: t("booking.b03.body"),
      tag: "Phase 3 · Advisory",
    },
  ];

  const [selectedPhaseId, setSelectedPhaseId] = useState<string>("B/01");
  const [showAllAvailabilities, setShowAllAvailabilities] = useState<boolean>(false);

  const activePhase = phases.find((p) => p.id === selectedPhaseId) || phases[0];

  const activeCalLink = showAllAvailabilities ? "oryn-29f422" : activePhase.calLink;
  const activeTitle = showAllAvailabilities
    ? "All Availabilities — Cal.com"
    : `${activePhase.title} (${activePhase.duration})`;

  return (
    <>
      <PageHero
        eyebrow={t("booking.eyebrow")}
        title={t("booking.title")}
        intro={t("booking.intro")}
      />

      {/* Booking Phases Selection */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Select Availability Phase
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
              Choose a meeting scope to schedule directly
            </h2>
          </div>

          {/* Phase Selection Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {phases.map((phase) => {
              const isSelected = selectedPhaseId === phase.id && !showAllAvailabilities;
              return (
                <div
                  key={phase.id}
                  onClick={() => {
                    setSelectedPhaseId(phase.id);
                    setShowAllAvailabilities(false);
                  }}
                  className={`cursor-pointer border p-6 transition flex flex-col justify-between ${
                    isSelected
                      ? "border-accent bg-accent/10 shadow-lg"
                      : "border-border bg-background hover:border-silver/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {phase.id} · {phase.duration}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent border border-accent/30 px-2 py-0.5">
                        {phase.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {phase.body}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 font-mono text-[11px] uppercase tracking-wider">
                    <span className={isSelected ? "text-accent font-bold" : "text-silver"}>
                      {isSelected ? "Selected Phase" : "Select Phase"}
                    </span>
                    <ArrowRight className={`h-4 w-4 transition ${isSelected ? "text-accent translate-x-1" : "text-muted-foreground"}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* All Availabilities Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4 border border-border bg-graphite/20 p-4">
            <span className="text-xs text-muted-foreground">
              Prefer to see all availabilities at once on a single overview page?
            </span>
            <button
              onClick={() => setShowAllAvailabilities(!showAllAvailabilities)}
              className={`px-4 py-2 border font-mono text-[11px] uppercase tracking-wider transition ${
                showAllAvailabilities
                  ? "border-accent bg-accent text-background font-bold"
                  : "border-border bg-background text-silver hover:text-foreground"
              }`}
            >
              {showAllAvailabilities ? "Show Phase View" : "View All Availabilities"}
            </button>
          </div>

          {/* Embedded Cal.com Component */}
          <div className="pt-4">
            <CalEmbed
              calLink={activeCalLink}
              title={activeTitle}
              description={`Book your ${activeTitle} directly below with real-time availability.`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
