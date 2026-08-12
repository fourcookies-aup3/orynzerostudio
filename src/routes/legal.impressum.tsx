import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/legal/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — ORYN ZERO" },
      { name: "description", content: "Impressum · Legal information for ORYN ZERO." },
      { property: "og:url", content: "/legal/impressum" },
    ],
    links: [{ rel: "canonical", href: "/legal/impressum" }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <>
      <PageHero eyebrow="// Legal" title="Impressum" />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <Block title="Angaben gemäss Schweizer Recht">
            <p>Oryn ZERO Studio</p>
            <p>Ebnetstrasse 25</p>
            <p>8712 Stäfa, Schweiz</p>
          </Block>
          <Block title="Kontakt">
            <p>E-Mail: orynzerostudio@gmail.com</p>
            <p>Telefon: +41 77 415 34 33</p>
          </Block>
          <Block title="Handelsregister">
            <p>Handelsregister-Kanton: Zürich</p>
          </Block>
          <Block title="Verantwortlich für den Inhalt">
            <p>Finn Ryf</p>
          </Block>
          <Block title="Haftungsausschluss">
            <p>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
              Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            </p>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] uppercase tracking-widest text-foreground">{title}</h2>
      <div className="mt-3 space-y-1">{children}</div>
    </div>
  );
}
