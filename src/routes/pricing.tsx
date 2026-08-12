import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import { useLocale } from "@/context/LocaleContext";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ORYN ZERO" },
      {
        name: "description",
        content:
          "Three production editions — Starter, Business, and Premium — for cinematic film work.",
      },
      { property: "og:title", content: "Pricing — ORYN ZERO" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { t, formatPrice } = useLocale();

  const packages = [
    {
      edition: "Edition 01",
      name: "Starter",
      price: formatPrice(1500),
      tagline: t("pricing.starter.tagline"),
      features: [
        t("pricing.starter.f1"),
        t("pricing.starter.f2"),
        t("pricing.starter.f3"),
        t("pricing.starter.f4"),
      ],
    },
    {
      edition: "Edition 02",
      name: "Business",
      price: formatPrice(5500),
      tagline: t("pricing.business.tagline"),
      features: [
        t("pricing.business.f1"),
        t("pricing.business.f2"),
        t("pricing.business.f3"),
        t("pricing.business.f4"),
      ],
      recommended: true,
    },
    {
      edition: "Edition 03",
      name: "Premium",
      price: formatPrice(10000),
      tagline: t("pricing.premium.tagline"),
      features: [
        t("pricing.premium.f1"),
        t("pricing.premium.f2"),
        t("pricing.premium.f3"),
        t("pricing.premium.f4"),
      ],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("pricing.eyebrow")}
        title={t("pricing.title")}
        intro={t("pricing.intro")}
      />
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl border border-border bg-background md:grid-cols-3">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={
                "relative flex flex-col p-10 " +
                (i > 0 ? "border-t border-border md:border-l md:border-t-0" : "")
              }
            >
              {p.recommended && (
                <div className="absolute right-0 top-0 bg-silver px-3 py-1.5 text-[8px] font-bold uppercase tracking-widest text-background">
                  {t("pricing.recommended")}
                </div>
              )}
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {p.edition}
              </p>
              <h3 className="mt-4 text-3xl font-bold italic">{p.name}</h3>
              <p className="mt-3 text-3xl font-bold tracking-tighter">{p.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={
                  "mt-10 block w-full py-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] transition-colors " +
                  (p.recommended
                    ? "bg-foreground text-background hover:bg-silver"
                    : "border border-border hover:bg-foreground hover:text-background")
                }
              >
                {t("pricing.requestQuote")}
              </Link>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
          {t("pricing.footerText")}
        </p>
      </section>
    </>
  );
}
