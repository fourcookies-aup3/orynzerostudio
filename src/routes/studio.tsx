import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionLabel } from "@/components/site/SectionHeader";
import { site } from "@/data/site";
import { FounderImage } from "@/components/site/FounderImage";
import { MemberImage } from "@/components/site/MemberImage";
import nickPhoto from "@/assets/Nick.jpeg";
import tatePhoto from "@/assets/Tate Rittscher.png";
import { CrowdifyWidget, CROWDIFY_PROJECT_URL } from "@/components/site/CrowdifyWidget";
import { ExternalLink, ArrowUpRight, ShieldCheck, CheckCircle2, MapPin } from "lucide-react";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio & Team — ORYN ZERO Studio" },
      {
        name: "description",
        content:
          "Small boutique film studio based in Stäfa, Switzerland. Combining dynamic FPV aerials, ground cinematography, and post-production.",
      },
      { property: "og:title", content: "Studio & Team — ORYN ZERO Studio" },
      { property: "og:url", content: "/studio" },
    ],
    links: [{ rel: "canonical", href: "/studio" }],
  }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <PageHero
        eyebrow="The Studio"
        title="Films Built Around Movement"
        intro="We are a small production team based in Stäfa, Switzerland. We combine FPV flying, ground cinematography, and post-production to create films built around movement. For larger productions, we work with trusted local partners."
      />

      {/* Founder Focus */}
      <section className="border-b border-white/10 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-14 md:grid-cols-2">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black">
            <FounderImage className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-102" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold block mb-1">
                Founder · FPV Pilot & Cinematographer
              </span>
              <h2 className="font-display text-3xl font-bold text-white tracking-tight">Finn Ryf</h2>
              <span className="font-mono text-[9px] uppercase tracking-widest text-silver/50 block mt-1">
                Stäfa, Switzerland
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <SectionLabel id="01">Studio Direction</SectionLabel>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Hands-on cinematography and flight precision.
            </h3>
            <p className="text-sm leading-relaxed text-silver/80 font-light">
              Finn directs and flies ORYN ZERO's productions. With deep experience building and tuning high-speed FPV quads as well as operating ground cinema packages, he bridges technical flight precision with human-led visual storytelling.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-silver/60 font-light">
              Rather than relying on abstract studio layers, Finn is directly on location on every shoot—scouting lines, coordinating flight safety, and executing close-proximity tracking shots in close synchronization with athletes and brand directors.
            </p>

            <div className="pt-2">
              <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block mb-3">
                Core Disciplines
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {["FPV Chase Cinematography", "Indoor Proximity Passes", "Sony FX3 Camera Systems", "DaVinci Resolve Editing", "Tactile Sound Design"].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-1.5 font-mono text-[10px] text-silver/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5 font-mono text-[10px] uppercase tracking-widest text-silver/60">
              <a
                href={site.social.finn.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Instagram ↗
              </a>
              <span>·</span>
              <a
                href={site.social.finn.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                YouTube ↗
              </a>
              <span>·</span>
              <a
                href={site.social.finn.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team & Collaborators */}
      <section className="border-b border-white/10 px-6 py-20 sm:py-24 bg-gradient-to-b from-transparent to-black/30">
        <div className="mx-auto max-w-6xl space-y-12">
          <div>
            <SectionLabel id="02">Team & Collaborators</SectionLabel>
            <h3 className="mt-3 text-3xl font-bold text-white tracking-tight">
              The Crew
            </h3>
            <p className="mt-2 text-xs text-silver/60 max-w-md font-light leading-relaxed">
              Clear roles, real craft, and transparent production credits.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Finn Ryf */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black border border-white/5">
                <FounderImage className="size-full object-cover grayscale" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold block">
                  Founder
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">Finn Ryf</h4>
                <p className="text-xs text-silver/70 font-light mt-2 leading-relaxed">
                  FPV pilot and cinematographer. Directs flight lines, close-proximity camera tracking, and editorial assembly.
                </p>
                <div className="mt-4 flex gap-3 font-mono text-[9px] text-silver/40">
                  <a href={site.social.finn.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Instagram
                  </a>
                  <span>·</span>
                  <a href={site.social.finn.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Nick Honstetter */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black border border-white/5">
                <MemberImage src={nickPhoto} alt="Nick Honstetter" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold block">
                  Co-Founder
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">Nick Honstetter</h4>
                <p className="text-xs text-silver/70 font-light mt-2 leading-relaxed">
                  Cinematography, visual media, and photography. Coordinates ground camera setups, lighting, and brand media.
                </p>
                <div className="mt-4 flex gap-3 font-mono text-[9px] text-silver/40">
                  <a href={site.social.nick.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Tate Rittscher */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black border border-white/5 relative">
                <div className="absolute top-3 left-3 z-10 rounded-full bg-accent/90 px-3 py-1 font-mono text-[8px] font-bold uppercase tracking-wider text-black">
                  Freelancer
                </div>
                <MemberImage src={tatePhoto} alt="Tate Rittscher" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-silver/50 font-semibold block">
                  Freelance Partner
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">Tate Rittscher</h4>
                <p className="text-xs text-silver/70 font-light mt-2 leading-relaxed">
                  Camera operator and editor. Supports high-tempo event coverage, b-roll cinematography, and on-site production assistance.
                </p>
                <div className="mt-4 flex gap-3 font-mono text-[9px] text-silver/40">
                  <a href={site.social.tate.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="border-b border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-[#0a0a0d] p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-12 items-center">
              <div className="md:col-span-8 space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block">
                  Legal Compliance & Flight Safety
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Swiss Aviation Compliance & Insurance
                </h3>
                <p className="text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
                  We operate strictly within Swiss and European civil aviation regulations. Every commercial flight is insured and coordinated through official airspace clearance protocols.
                </p>

                <div className="grid gap-3 sm:grid-cols-2 pt-2 text-xs text-silver/80">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>Swiss Federal Office of Civil Aviation (BAZL / FOCA) registered</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>EASA Category A1/A3 and A2 Certified Pilot Licenses</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>Commercial third-party liability aviation insurance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>Controlled airspace (CTR) authorizations for Zurich & Swiss cantons</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/[0.01] text-center space-y-2">
                <ShieldCheck className="size-12 text-accent" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white font-bold block">
                  Certified & Insured
                </span>
                <span className="text-xs text-silver/50 font-light">
                  Stäfa, Switzerland · Worldwide Availability
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Crowdfunding Note */}
      <section className="px-6 py-20 bg-[#070709]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block">
                Equipment & Studio Setup
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Crowdify.net Equipment Campaign
              </h3>
              <p className="text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
                To support the studio's official commercial registration in Switzerland and expand our in-house gear with a dedicated Sony FX3 solo package, we launched an honest crowdfunding campaign on Crowdify.net.
              </p>
              <div className="pt-2">
                <a
                  href={CROWDIFY_PROJECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[9px] font-bold uppercase tracking-widest text-black hover:bg-white transition-colors"
                >
                  <span>View Campaign on Crowdify.net</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <CrowdifyWidget />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
