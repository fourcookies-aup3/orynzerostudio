import { useState } from "react";
import { ExternalLink, Calendar } from "lucide-react";

interface CalEmbedProps {
  calLink?: string; // e.g. "oryn-29f422" or "oryn-29f422/discovery-call"
  title?: string;
  description?: string;
}

export function CalEmbed({ calLink = "oryn-29f422", title, description }: CalEmbedProps) {
  const calUrl = `https://cal.com/${calLink}`;

  return (
    <div className="space-y-4">
      {/* Header bar for embed */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-graphite/40 px-6 py-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border border-border bg-background text-accent">
            <Calendar className="h-4 w-4" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Live Calendar
            </span>
            <h3 className="text-base font-bold text-foreground">
              {title || "ORYN ZERO Booking Schedule"}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-border bg-background px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-silver transition hover:border-accent hover:text-foreground"
          >
            <span>Open Calendar</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {description && (
        <p className="px-6 text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}

      {/* Embed Container */}
      <div className="relative min-h-[680px] border border-border bg-background overflow-hidden shadow-2xl">
        <iframe
          src={`${calUrl}?embed=true&theme=dark&layout=month_view`}
          title="Cal.com Booking Calendar"
          className="w-full h-[680px] border-0"
          allow="camera; microphone; autoplay; payment"
        />
      </div>
    </div>
  );
}
