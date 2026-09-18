import { useState } from "react";
import { ExternalLink, Sparkles, ShieldCheck, Camera, Building2, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "./SectionHeader";
import { FadeInOnScroll } from "./FadeInOnScroll";

export const CROWDIFY_PROJECT_URL =
  "https://www.crowdify.net/de/projekt/orynzero-studio-am-start";
export const CROWDIFY_WIDGET_URL =
  "https://www.crowdify.net/de/projekt/orynzero-studio-am-start/widget/v3";

interface CrowdifyWidgetProps {
  className?: string;
}

export function CrowdifyWidget({ className = "" }: CrowdifyWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative mx-auto flex flex-col items-center justify-center ${className}`}
    >
      {/* Outer Glow & Glass Frame */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-2 sm:p-3 shadow-[0_20px_70px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        {/* Top bar with quick status */}
        <div className="mb-2 flex items-center justify-between px-3 pt-1 font-mono text-[9px] uppercase tracking-widest text-silver/60">
          <div className="flex items-center gap-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="text-white font-bold">Crowdify.net</span>
          </div>
          <a
            href={CROWDIFY_PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent hover:text-white transition-colors"
          >
            <span>Open Campaign</span>
            <ExternalLink className="size-2.5" />
          </a>
        </div>

        {/* The Exact Crowdify Widget iframe */}
        <div className="relative min-h-[520px] w-[375px] max-w-full overflow-hidden rounded-2xl bg-[#0c0c0c] flex items-center justify-center">
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c0c0c] p-6 text-center">
              <div className="size-8 rounded-full border-2 border-accent border-t-transparent animate-spin mb-3" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-silver/70">
                Loading Crowdify Widget...
              </p>
            </div>
          )}

          <iframe
            width="375"
            height="520"
            src={CROWDIFY_WIDGET_URL}
            frameBorder="0"
            scrolling="no"
            title="OrynZERO Studio am Start — Crowdify Widget"
            className="w-[375px] max-w-full border-0 transition-opacity duration-500"
            style={{ opacity: isLoaded ? 1 : 0 }}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}

export function CrowdfundingSection() {
  return (
    <section
      id="crowdfunding"
      data-section="crowdfunding"
      className="relative px-6 py-24 sm:py-32 md:px-16 border-t border-white/5 bg-gradient-to-b from-black/40 via-[#0a0a0a]/80 to-transparent scroll-mt-28"
    >
      <FadeInOnScroll direction="up" distance={40}>
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <SectionLabel id="// 06">Crowdfunding Initiative</SectionLabel>
            <h3 className="mt-4 text-balance-tight text-3xl font-bold tracking-tight md:text-5xl text-white">
              ORYN ZERO Studio am Start
            </h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-silver/70 font-light">
              We are officially taking ORYN ZERO to the next level: financing a dedicated Sony FX3 solo rig
              and covering all official Swiss legal entries to sign up and register as a formal company.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Details & Motivation */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[9px] uppercase tracking-widest text-accent">
                  <Sparkles className="size-3" />
                  <span>Where Your Support Goes</span>
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  Transparent Allocation of Campaign Funds
                </h4>
                <p className="text-sm leading-relaxed text-silver/60">
                  Every Swiss Franc raised directly funds two critical milestones that allow us to operate as an
                  autonomous, professional creative production unit in Switzerland:
                </p>
              </div>

              {/* Highlights List: FX3 Solo Rig & Company Registration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-6 backdrop-blur-sm space-y-3">
                  <div className="flex items-center gap-2.5 text-accent">
                    <div className="flex size-8 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                      <Camera className="size-4 text-accent" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-white">
                      Sony FX3 Solo Rig
                    </span>
                  </div>
                  <p className="text-xs text-silver/70 leading-relaxed">
                    A dedicated, high-mobility cinema line camera rig with top handle audio, high dynamic range 4K recording, and tailored mounting for agile solo shoots and airborne tracking.
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 font-mono text-[9px] text-accent/80">
                    <CheckCircle2 className="size-3" />
                    <span>Independent cinema-grade filming</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm space-y-3">
                  <div className="flex items-center gap-2.5 text-accent">
                    <div className="flex size-8 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                      <Building2 className="size-4 text-white" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-white">
                      Company Registration
                    </span>
                  </div>
                  <p className="text-xs text-silver/70 leading-relaxed">
                    Covering all official Swiss notary fees, commercial registry (Handelsregister) entries, and legal formation costs to register ORYN ZERO as an official legal entity.
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 font-mono text-[9px] text-accent/80">
                    <CheckCircle2 className="size-3" />
                    <span>Official Swiss corporate entity</span>
                  </div>
                </div>
              </div>

              {/* Direct Link CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={CROWDIFY_PROJECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-black transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(212,176,98,0.4)]"
                >
                  <span>Support on Crowdify</span>
                  <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-silver/40">
                  <ShieldCheck className="size-3.5 text-accent" />
                  <span>Secure pledge via Crowdify Switzerland</span>
                </span>
              </div>
            </div>

            {/* The Crowdify Widget */}
            <div className="lg:col-span-5 flex justify-center">
              <CrowdifyWidget />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
