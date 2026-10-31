import { Calendar, ExternalLink } from "lucide-react";

interface CalEmbedProps {
  calLink?: string; // e.g. "oryn-29f422/discovery-call"
  title?: string;
  description?: string;
}

export function CalEmbed({
  calLink = "oryn-29f422/discovery-call",
  title = "Discovery Call (30 min)",
  description,
}: CalEmbedProps) {
  const calUrl = `https://cal.com/${calLink}`;

  return (
    <div className="w-full max-w-full overflow-hidden rounded-3xl border border-white/10 bg-[#08080a] shadow-2xl">
      {/* Header bar for embed */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 bg-white/[0.02] px-6 py-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
            <Calendar className="size-4" />
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold">
              Cal.com Live Calendar
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[9px] uppercase tracking-wider text-silver/80 transition-colors hover:border-accent hover:text-white"
          >
            <span>Open in Cal.com</span>
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>

      {description && (
        <div className="border-b border-white/5 bg-white/[0.01] px-6 py-3 text-xs text-silver/60 font-light leading-relaxed">
          {description}
        </div>
      )}

      {/* Embed Container with strict overflow guard */}
      <div className="relative w-full max-w-full overflow-hidden bg-black min-h-[580px] sm:min-h-[660px]">
        <iframe
          src={`${calUrl}?embed=true&theme=dark`}
          title="Cal.com Booking Calendar"
          loading="lazy"
          className="w-full min-w-full max-w-full h-[620px] sm:h-[680px] md:h-[720px] border-0"
          style={{ width: "100%", maxWidth: "100%" }}
          allow="camera; microphone; autoplay; payment"
        />
      </div>
    </div>
  );
}
