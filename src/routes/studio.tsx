import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionLabel } from "@/components/site/SectionHeader";
import { site } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import { FounderImage } from "@/components/site/FounderImage";
import { TeamMemberPlaceholder } from "@/components/site/TeamMemberPlaceholder";
import { MemberImage } from "@/components/site/MemberImage";
import nickPhoto from "@/assets/Nick.jpeg";
import tatePhoto from "@/assets/Tate Rittscher.png";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — ORYN ZERO" },
      {
        name: "description",
        content:
          "Founder-led Swiss cinematic production studio specialising in FPV, aerial and brand films.",
      },
      { property: "og:title", content: "Studio — ORYN ZERO" },
      { property: "og:url", content: "/studio" },
    ],
    links: [{ rel: "canonical", href: "/studio" }],
  }),
  component: StudioPage,
});

function StudioPage() {
  const { t } = useLocale();

  const skills = [t("studio.skills.founder"), t("studio.skills.pilot"), t("studio.skills.editor")];

  const futureRoles = [
    t("studio.future.role1"),
    t("studio.future.role2"),
    t("studio.future.role3"),
    t("studio.future.role4"),
    t("studio.future.role5"),
  ];

  return (
    <>
      <PageHero eyebrow={t("studio.eyebrow")} title={t("studio.title")} intro={t("studio.intro")} />

      {/* Founder */}
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-2">
          <div className="group relative aspect-[4/5] overflow-hidden border border-border">
            <FounderImage className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-silver">
                  {t("team.finn.role")}
                </p>
                <p className="mt-1 font-display text-2xl font-bold">Finn Ryf</p>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest">CH · 2026</span>
            </div>
          </div>

          <div>
            <SectionLabel id="// 01">{t("studio.team.eyebrow")}</SectionLabel>
            <h2 className="mt-6 text-balance-tight text-4xl font-bold leading-[1.05] md:text-5xl">
              {t("studio.team.title")}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              {t("studio.team.bio")}
            </p>

            <div className="mt-10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {t("studio.skills")}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {skills.map((s) => (
                  <li key={s} className="border border-border px-3 py-2">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex gap-4 text-[11px] uppercase tracking-widest text-silver">
              <a
                href={site.social.finn.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href={site.social.finn.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                YouTube
              </a>
              <a
                href={site.social.finn.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Crew */}
      <section className="border-b border-border px-6 py-24 bg-[#0a0a0a]/50">
        <div className="mx-auto max-w-7xl">
          <SectionLabel id="// 02">THE CREW</SectionLabel>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Nick Honstetter */}
            <div className="group">
              <div className="relative aspect-[4/5] overflow-hidden border border-border">
                <MemberImage src={nickPhoto} alt="Nick Honstetter" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-[10px] text-accent font-mono uppercase tracking-[0.2em]">
                    {t("team.nick.role")}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl font-bold tracking-tight">Nick Honstetter</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t("team.nick.role")}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-silver/60">{t("team.nick.bio")}</p>
              </div>
            </div>

            {/* Tate Rittscher */}
            <div className="group">
              <span className="mb-2 block font-mono text-xs font-black uppercase tracking-[0.25em] text-accent">
                FREELANCER
              </span>
              <div className="relative aspect-[4/5] overflow-hidden border border-border">
                <div className="absolute top-4 left-4 z-20 bg-accent text-black font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                  FREELANCER
                </div>
                <MemberImage src={tatePhoto} alt="Tate Rittscher" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-[10px] text-accent font-mono uppercase tracking-[0.2em]">
                    {t("team.tate.role")}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl font-bold tracking-tight">Tate Rittscher</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
                  FREELANCER · {t("team.tate.role")}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-silver/60">{t("team.tate.bio")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future collaborators */}
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel id="// 03">{t("studio.future.eyebrow")}</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-balance-tight text-3xl font-bold italic md:text-4xl">
            {t("studio.future.title")}
          </h2>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-5">
            {futureRoles.map((r) => (
              <div key={r} className="bg-background p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t("studio.future.open")}
                </p>
                <p className="mt-3 text-lg font-bold tracking-tight">{r}</p>
              </div>
            ))}
          </div>
          <Link
            to="/careers"
            className="mt-10 inline-block border border-border px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background"
          >
            {t("studio.future.cta")}
          </Link>
        </div>
      </section>

      {/* Focus statement */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>{t("studio.focus.eyebrow")}</SectionLabel>
          <p className="mt-8 text-balance-tight text-3xl font-bold italic leading-tight md:text-5xl">
            {t("studio.focus.text")}
          </p>
        </div>
      </section>
    </>
  );
}
