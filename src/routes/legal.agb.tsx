import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/legal/agb")({
  head: () => ({
    meta: [
      { title: "AGB — ORYN ZERO" },
      {
        name: "description",
        content: "Allgemeine Geschäftsbedingungen von ORYN ZERO.",
      },
      { property: "og:url", content: "/legal/agb" },
    ],
    links: [{ rel: "canonical", href: "/legal/agb" }],
  }),
  component: AGB,
});

function AGB() {
  return (
    <>
      <PageHero eyebrow="// Legal" title="AGB" />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <Section title="1. Geltungsbereich">
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche Aufträge, Angebote und
              Leistungen der ORYN ZERO Filmproduktion gegenüber Auftraggebern.
            </p>
          </Section>
          <Section title="2. Vertragsabschluss">
            <p>
              Ein Vertrag kommt durch schriftliche Bestätigung des individuellen Angebots durch den
              Auftraggeber zustande.
            </p>
          </Section>
          <Section title="3. Leistungen und Nutzungsrechte">
            <p>
              Sämtliche Leistungen sowie Nutzungsrechte werden im Einzelangebot geregelt.
              Rohmaterial bleibt Eigentum von ORYN ZERO, sofern nicht anders vereinbart.
            </p>
          </Section>
          <Section title="4. Preise und Zahlung">
            <p>Preise verstehen sich in CHF exkl. gesetzlicher MwSt.</p>
          </Section>
          <Section title="5. Haftung und Gerichtsstand">
            <p>Es gilt Schweizer Recht. Gerichtsstand ist der Sitz von ORYN ZERO.</p>
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] uppercase tracking-widest text-foreground">{title}</h2>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}
