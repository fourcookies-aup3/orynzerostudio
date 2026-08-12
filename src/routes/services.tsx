import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import { useLocale } from "@/context/LocaleContext";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ORYN ZERO" },
      {
        name: "description",
        content:
          "FPV cinematography, aerial drone films, brand films, event films, and social media content.",
      },
      { property: "og:title", content: "Services — ORYN ZERO" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLocale();

  const services = [
    {
      id: "S/01",
      title: t("services.s01.title"),
      body: t("services.s01.body"),
    },
    {
      id: "S/02",
      title: t("services.s02.title"),
      body: t("services.s02.body"),
    },
    {
      id: "S/03",
      title: t("services.s03.title"),
      body: t("services.s03.body"),
    },
    {
      id: "S/04",
      title: t("services.s04.title"),
      body: t("services.s04.body"),
    },
    {
      id: "S/05",
      title: t("services.s05.title"),
      body: t("services.s05.body"),
    },
    {
      id: "S/06",
      title: t("services.s06.title"),
      body: t("services.s06.body"),
    },
    {
      id: "S/07",
      title: t("services.s07.title"),
      body: t("services.s07.body"),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        intro={t("services.intro")}
      />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl divide-y divide-border border-y border-border">
          {services.map((s) => (
            <div
              key={s.id}
              className="group grid grid-cols-12 items-start gap-6 py-10 transition-colors hover:bg-foreground/[0.02]"
            >
              <div className="col-span-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:col-span-1">
                {s.id}
              </div>
              <div className="col-span-10 md:col-span-5">
                <h2 className="text-3xl font-bold tracking-tight transition-transform group-hover:translate-x-2 md:text-4xl">
                  {s.title}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="text-base leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="border border-border px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-foreground hover:text-background"
          >
            {t("services.cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
