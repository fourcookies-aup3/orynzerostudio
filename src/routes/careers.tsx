import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import { useLocale } from "@/context/LocaleContext";
import { ApplicationForm } from "@/components/ApplicationForm";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Open Applications — ORYN ZERO" },
      {
        name: "description",
        content:
          "Apply for jobs and positions at ORYN ZERO. Open applications welcome from FPV pilots, video editors, DPs, sound engineers, and motion designers.",
      },
      { property: "og:title", content: "Careers — ORYN ZERO" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  const { t } = useLocale();

  const positions = [
    t("job.fpv.title"),
    t("job.editor.title"),
    t("job.cameraman.title"),
    t("job.sound.title"),
    t("job.vfx.title"),
    t("job.creative.title"),
  ];

  return (
    <>
      <PageHero
        eyebrow={t("page.careers.eyebrow")}
        title={t("page.careers.title")}
        intro={t("page.careers.intro")}
      />

      <section className="border-b border-border px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-2xl font-bold italic md:text-3xl">
              {t("page.careers.openPositions")}
            </h2>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [ Updated 2026 ]
            </span>
          </div>
          <div className="border border-border p-8 text-center bg-black/40 rounded-2xl">
            <p className="font-mono text-[10px] uppercase tracking-widest text-silver">
              {t("page.careers.currently")}
            </p>
            <p className="mt-4 text-2xl font-bold italic md:text-3xl">
              {t("page.careers.noPositions")}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{t("page.careers.welcome")}</p>
          </div>

          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {t("page.careers.planToGrow")}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {positions.map((p) => (
                <span
                  key={p}
                  className="border border-border bg-white/[0.02] px-3 py-2 text-xs uppercase tracking-widest text-silver rounded-lg"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold italic md:text-4xl">
              {t("page.careers.openApplication")}
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t("page.careers.details")} Fill out the rich job application form below with your CV/résumé, showreel, gear setup, and motivation.
            </p>
          </div>

          <ApplicationForm type="job" />
        </div>
      </section>
    </>
  );
}
