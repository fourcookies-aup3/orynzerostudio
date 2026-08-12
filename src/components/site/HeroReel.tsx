import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { showreel } from "@/data/site";
import { getCustomVideoUrl } from "@/lib/video-store";

function getYoutubeId(url: string) {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/,
  );
  return match ? match[1] : null;
}

/**
 * Fullscreen looping background video component.
 * Supports HTML5 video (mp4, webm, blob URL) and YouTube embeds.
 * Dynamically reacts to user-uploaded custom videos.
 */
export function HeroReel({ className, src }: { className?: string; src?: string }) {
  const [activeSrc, setActiveSrc] = useState<string>(src || showreel.src);

  useEffect(() => {
    let active = true;
    getCustomVideoUrl().then((customUrl) => {
      if (active && customUrl) {
        setActiveSrc(customUrl);
      } else if (active && src) {
        setActiveSrc(src);
      }
    });
    return () => {
      active = false;
    };
  }, [src]);

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ url?: string | null }>;
      if (customEvent.detail && customEvent.detail.url) {
        setActiveSrc(customEvent.detail.url);
      } else if (customEvent.detail && customEvent.detail.url === null) {
        setActiveSrc(src || showreel.src);
      } else {
        getCustomVideoUrl().then((url) => {
          if (url) setActiveSrc(url);
          else setActiveSrc(src || showreel.src);
        });
      }
    };

    window.addEventListener("oryn_showreel_updated", handleUpdate);
    return () => window.removeEventListener("oryn_showreel_updated", handleUpdate);
  }, [src]);

  const youtubeId = getYoutubeId(activeSrc);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none select-none", className)}>
      <div className="relative w-full h-full pointer-events-none">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&rel=0&loop=1&playlist=${youtubeId}&modestbranding=1&playsinline=1&enablejsapi=1`}
            className="absolute top-1/2 left-1/2 w-[350vw] h-[350vw] sm:w-[200vw] sm:h-[200vw] md:w-[160vw] md:h-[160vw] -translate-x-1/2 -translate-y-1/2 opacity-80 scale-125 pointer-events-none select-none border-0"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            tabIndex={-1}
          />
        ) : (
          <video
            key={activeSrc}
            src={activeSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-85 scale-105 pointer-events-none select-none"
          />
        )}
        {/* Full pointer-events blocker over iframe to guarantee no buttons or interactions show */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-black/10" />
      </div>

      {/* Subtle bottom shadow to anchor content cleanly without obscuring video */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
