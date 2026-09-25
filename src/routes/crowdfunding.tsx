import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import { CrowdifyWidget, CROWDIFY_PROJECT_URL } from "@/components/site/CrowdifyWidget";
import { ExternalLink, CheckCircle2, Video, FileText } from "lucide-react";

export const Route = createFileRoute("/crowdfunding")({
  head: () => ({
    meta: [
      { title: "Crowdfunding Campaign — ORYN ZERO Studio" },
      {
        name: "description",
        content:
          "Support the official equipment and commercial setup of ORYN ZERO Studio on Crowdify.net.",
      },
      { property: "og:title", content: "Crowdfunding Campaign — ORYN ZERO Studio" },
      { property: "og:url", content: "/crowdfunding" },
    ],
    links: [{ rel: "canonical", href: "/crowdfunding" }],
  }),
  component: CrowdfundingPage,
});

function CrowdfundingPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <PageHero
        eyebrow="Studio Initiative"
        title="OrynZERO Studio am Start"
        intro="An honest look at our launch phase: supporting our official Swiss company registration and expanding our cinema equipment setup."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold block">
                Crowdify.net Swiss Campaign
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Building our technical independence.
              </h2>
              <p className="text-sm leading-relaxed text-silver/80 font-light">
                We started ORYN ZERO with high-performance FPV equipment and on-site flight expertise. To take on full-scale commercial productions independently, we launched a community crowdfunding campaign on the Swiss platform Crowdify.net.
              </p>

              <div className="space-y-4 pt-2">
                <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Video className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Dedicated Solo Cinema Rig (Sony FX3)</h3>
                    <p className="text-xs text-silver/60 font-light mt-1 leading-relaxed">
                      Enabling agile ground cinematography, calibrated electronic stabilization, and 10-bit 4K RAW capture paired with our aerial setups.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Official Swiss Commercial Registration</h3>
                    <p className="text-xs text-silver/60 font-light mt-1 leading-relaxed">
                      Completing the legal and administrative registration of ORYN ZERO Studio in the canton of Zürich.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={CROWDIFY_PROJECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black hover:bg-white transition-all shadow-[0_0_25px_rgba(212,176,98,0.25)]"
                >
                  <span>Support Campaign on Crowdify.net</span>
                  <ExternalLink className="size-3.5" />
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
