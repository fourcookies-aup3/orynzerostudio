import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCustomVideoUrl } from "@/lib/video-store";
import { showreel } from "@/data/site";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  aspect?: "video" | "cinemascope";
};

function getYoutubeId(url: string) {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/,
  );
  return match ? match[1] : null;
}

export function VideoPlayer({
  src,
  poster,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  aspect = "video",
}: Props) {
  const [effectiveSrc, setEffectiveSrc] = useState(src);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let active = true;
    const isShowreel =
      src === showreel.src ||
      src === showreel.youtubeUrl ||
      (src && (src.includes("2bbwo-n7Lmo") || src.includes("Kt5Mk_92qAc") || src.includes("9ZlS3aqVbyM")));

    if (isShowreel) {
      getCustomVideoUrl().then((customUrl) => {
        if (active && customUrl) setEffectiveSrc(customUrl);
        else if (active) setEffectiveSrc(src);
      });
    } else {
      setEffectiveSrc(src);
    }
    return () => {
      active = false;
    };
  }, [src]);

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const isShowreel =
        src === showreel.src ||
        src === showreel.youtubeUrl ||
        (src && (src.includes("2bbwo-n7Lmo") || src.includes("Kt5Mk_92qAc") || src.includes("9ZlS3aqVbyM")));

      if (isShowreel) {
        const customEvent = e as CustomEvent<{ url?: string | null }>;
        if (customEvent.detail && customEvent.detail.url) {
          setEffectiveSrc(customEvent.detail.url);
        } else if (customEvent.detail && customEvent.detail.url === null) {
          setEffectiveSrc(src);
        } else {
          getCustomVideoUrl().then((url) => setEffectiveSrc(url || src));
        }
      }
    };

    window.addEventListener("oryn_showreel_updated", handleUpdate);
    return () => window.removeEventListener("oryn_showreel_updated", handleUpdate);
  }, [src]);

  const youtubeId = effectiveSrc ? getYoutubeId(effectiveSrc) : null;

  useEffect(() => {
    if (youtubeId) return;

    const v = videoRef.current;
    if (!v) return;

    const onTime = () => {
      setCurrent(v.currentTime);
      setProgress((v.currentTime / (v.duration || 1)) * 100);
    };
    const onMeta = () => setDuration(v.duration);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [youtubeId]);

  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggle = () => {
    if (youtubeId) return;
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  const toggleMute = () => {
    if (youtubeId) return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const toggleFs = async () => {
    const el = wrapperRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) {
        if (el.requestFullscreen) {
          await el.requestFullscreen();
        } else if ((el as any).webkitRequestFullscreen) {
          await (el as any).webkitRequestFullscreen();
        } else if ((el as any).msRequestFullscreen) {
          await (el as any).msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn("Fullscreen request notice (iframe restriction):", err);
    }
  };

  const onSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (youtubeId) return;
    const v = videoRef.current;
    if (!v || !v.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * v.duration;
  };

  const fmt = (s: number) => {
    if (!Number.isFinite(s)) return "00:00";
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m.toString().padStart(2, "0")}:${r.toString().padStart(2, "0")}`;
  };

  if (!src) return null;

  if (youtubeId) {
    return (
      <div
        ref={wrapperRef}
        className={cn(
          "relative w-full overflow-hidden bg-graphite border border-border",
          aspect === "video" ? "aspect-video" : "aspect-[2.39/1]",
          className,
        )}
      >
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}&loop=${loop ? 1 : 0}&playlist=${youtubeId}&controls=1&rel=0&modestbranding=1`}
          className="absolute inset-0 w-full h-full border-none"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "group relative w-full overflow-hidden bg-graphite border border-border",
        aspect === "video" ? "aspect-video" : "aspect-[2.39/1]",
        className,
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={effectiveSrc}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        playsInline
        preload="metadata"
        className={cn("h-full w-full", isFullscreen ? "object-contain bg-black" : "object-cover")}
      />

      {/* Center play indicator when paused */}
      {!playing && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          className="absolute inset-0 grid place-items-center"
          aria-label="Play video"
        >
          <span className="grid size-20 place-items-center rounded-full border border-white/25 bg-black/30 backdrop-blur-sm transition-transform hover:scale-110">
            <Play className="size-6 translate-x-0.5" strokeWidth={1.5} />
          </span>
        </button>
      )}

      {/* Controls */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 transition-opacity duration-300",
          hovering || !playing ? "opacity-100" : "opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-auto flex items-center gap-4">
          <button
            type="button"
            onClick={toggle}
            className="text-white hover:text-silver"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>

          <div className="h-[2px] flex-1 cursor-pointer bg-white/15" onClick={onSeek}>
            <div
              className="h-full bg-white transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
            {fmt(current)} / {fmt(duration)}
          </span>

          <button
            type="button"
            onClick={toggleMute}
            className="text-white hover:text-silver"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>

          <button
            type="button"
            onClick={toggleFs}
            className="text-white hover:text-silver"
            aria-label="Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
