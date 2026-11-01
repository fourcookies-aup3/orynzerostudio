import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionLabel } from "@/components/site/SectionHeader";
import { site } from "@/data/site";
import { FounderImage } from "@/components/site/FounderImage";
import { MemberImage } from "@/components/site/MemberImage";
import nickPhoto from "@/assets/Nick.jpeg";
import tatePhoto from "@/assets/Tate Rittscher.png";
import { StudioTimeline } from "@/components/site/StudioTimeline";
import { ArrowUpRight, ArrowRight, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio & Team — ORYN ZERO Studio" },
      {
        name: "description",
        content:
          "Small boutique film studio based in Switzerland. Combining dynamic FPV aerials, ground cinematography, and post-production.",
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
        eyebrow={
          <div className="flex items-center gap-2">
            <span>The Studio</span>
            <span className="text-silver/40">·</span>
            <span className="font-script text-accent text-xl normal-case">Switzerland</span>
          </div>
        }
        title={
          <>
            Films Built Around{" "}
            <span className="font-script text-accent font-normal text-5xl sm:text-7xl md:text-8xl normal-case pl-1.5 inline-block relative top-1">
              movement.
            </span>
          </>
        }
        intro="We are a small production team based in Switzerland. We combine FPV flying, ground cinematography, and post-production to create films built around movement. For larger productions, we work with trusted local partners."
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
                Switzerland
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <SectionLabel id="01">Studio Direction</SectionLabel>
              <span className="text-silver/40 font-mono text-[9px]">·</span>
              <span className="font-script text-accent text-xl normal-case">hands-on</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Cinematography &{" "}
              <span className="font-script text-accent normal-case font-normal text-4xl sm:text-5xl pl-1">
                flight precision.
              </span>
            </h3>
            <p className="text-sm leading-relaxed text-silver/80 font-light">
              Finn directs and flies ORYN ZERO's productions. With deep experience building and tuning high-speed FPV quads as well as operating ground cinema packages, he bridges technical flight precision with human-led visual storytelling.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-silver/60 font-light">
              Rather than relying on abstract studio layers, Finn is directly on location on every shoot—scouting lines, coordinating flight safety, and executing close-proximity tracking shots in close synchronization with athletes and brand directors.
            </p>

            <div className="pt-2">
              <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block mb-3 font-semibold">
                Core Disciplines & Craft
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "FPV Chase Cinematography",
                  "Indoor Proximity Single-Takes",
                  "Ground Handheld & Gimbal Work",
                  "Narrative Rhythm Editing",
                  "Bespoke Filmic Color Grading",
                  "Custom Spatial Sound Design",
                ].map((item) => (
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
            <div className="flex items-center gap-2 mb-2">
              <SectionLabel id="02">Team & Collaborators</SectionLabel>
              <span className="text-silver/40 font-mono text-[9px]">·</span>
              <span className="font-script text-accent text-xl normal-case">the crew</span>
            </div>
            <h3 className="mt-1 text-3xl font-black text-white tracking-tight uppercase">
              Production Collective
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

          {/* Discreet link to open positions */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-silver/60 font-light">
              We are actively expanding our collaborative production crew in Switzerland.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-accent hover:text-white transition-colors"
            >
              <span>Explore Open Positions</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Studio Timeline: Founding to Present Day & Next: Coming Soon */}
      <StudioTimeline />

      {/* Bottom Conversion CTA */}
      <section className="px-6 py-20 bg-[#050507]">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0a0a0d] p-8 sm:p-14 text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold">
              Work With Us
            </span>
            <span className="text-silver/40">·</span>
            <span className="font-script text-accent text-2xl normal-case">bespoke productions</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Have a Project in Mind?
          </h3>

          <p className="text-xs sm:text-sm text-silver/70 font-light max-w-md mx-auto leading-relaxed">
            From initial shot treatment to flight clearances and final post-production master delivery. Discuss your vision directly with our founder.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-black hover:bg-white transition-all shadow-[0_0_30px_rgba(212,176,98,0.25)]"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
