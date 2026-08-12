import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/legal/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — ORYN ZERO" },
      {
        name: "description",
        content: "Datenschutzerklärung für die Website von ORYN ZERO.",
      },
      { property: "og:url", content: "/legal/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/legal/datenschutz" }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <>
      <PageHero eyebrow="// Legal" title="Datenschutz" />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <p>
            Diese Datenschutzerklärung informiert über die Erhebung und Verarbeitung
            personenbezogener Daten bei der Nutzung dieser Website, basierend auf dem revidierten
            Schweizer Datenschutzgesetz (revDSG) und – soweit anwendbar – der DSGVO.
          </p>
          <Section title="1. Verantwortliche Stelle">
            <p>ORYN ZERO, [Adresse], Schweiz. Kontakt: studio@orynzero.ch</p>
          </Section>
          <Section title="2. Erhebung und Speicherung">
            <p>
              Beim Besuch dieser Website werden automatisch technische Zugriffsdaten verarbeitet
              (IP-Adresse, Browsertyp, Zeit). Diese Daten werden nur zu Sicherheits- und
              Analysezwecken verwendet.
            </p>
          </Section>
          <Section title="3. Kontakt- und Anfrageformulare">
            <p>
              Von Ihnen übermittelte Daten (Name, E-Mail, Nachricht) werden ausschliesslich zur
              Bearbeitung Ihrer Anfrage verwendet.
            </p>
          </Section>
          <Section title="4. Cookies und Analyse">
            <p>[Beschreibung eingesetzter Cookies und Analyse-Tools.]</p>
          </Section>
          <Section title="5. Ihre Rechte">
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
              Verarbeitung Ihrer Daten. Bitte wenden Sie sich an studio@orynzero.ch.
            </p>
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
