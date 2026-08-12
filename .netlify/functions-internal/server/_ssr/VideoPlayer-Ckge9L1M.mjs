import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { d as Pause, f as Minimize2, m as Maximize2, n as VolumeX, r as Volume2, u as Play } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/VideoPlayer-Ckge9L1M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/site/VideoPlayer.tsx";
function getYoutubeId(url) {
	const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
	return match ? match[1] : null;
}
function VideoPlayer({ src, poster, className, autoPlay = true, loop = true, muted = true, aspect = "video" }) {
	const wrapperRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(autoPlay);
	const [isMuted, setIsMuted] = (0, import_react.useState)(muted);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [duration, setDuration] = (0, import_react.useState)(0);
	const [current, setCurrent] = (0, import_react.useState)(0);
	const [isFullscreen, setIsFullscreen] = (0, import_react.useState)(false);
	const [hovering, setHovering] = (0, import_react.useState)(false);
	const youtubeId = src ? getYoutubeId(src) : null;
	(0, import_react.useEffect)(() => {
		if (youtubeId) return;
		const v = videoRef.current;
		if (!v) return;
		const onTime = () => {
			setCurrent(v.currentTime);
			setProgress(v.currentTime / (v.duration || 1) * 100);
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
	(0, import_react.useEffect)(() => {
		const onFs = () => setIsFullscreen(!!document.fullscreenElement);
		document.addEventListener("fullscreenchange", onFs);
		return () => document.removeEventListener("fullscreenchange", onFs);
	}, []);
	const toggle = () => {
		if (youtubeId) return;
		const v = videoRef.current;
		if (!v) return;
		if (v.paused) v.play();
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
		if (!document.fullscreenElement) await el.requestFullscreen();
		else await document.exitFullscreen();
	};
	const onSeek = (e) => {
		if (youtubeId) return;
		const v = videoRef.current;
		if (!v || !v.duration) return;
		const rect = e.currentTarget.getBoundingClientRect();
		v.currentTime = (e.clientX - rect.left) / rect.width * v.duration;
	};
	const fmt = (s) => {
		if (!Number.isFinite(s)) return "00:00";
		const m = Math.floor(s / 60);
		const r = Math.floor(s % 60);
		return `${m.toString().padStart(2, "0")}:${r.toString().padStart(2, "0")}`;
	};
	if (!src) return null;
	if (youtubeId) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: wrapperRef,
		className: cn("relative w-full overflow-hidden bg-graphite border border-border", aspect === "video" ? "aspect-video" : "aspect-[2.39/1]", className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
			src: `https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}&loop=${loop ? 1 : 0}&playlist=${youtubeId}&controls=1&rel=0&modestbranding=1`,
			className: "absolute inset-0 w-full h-full border-none",
			allow: "autoplay; encrypted-media; fullscreen",
			allowFullScreen: true
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 128,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 120,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: wrapperRef,
		className: cn("group relative w-full overflow-hidden bg-graphite border border-border", aspect === "video" ? "aspect-video" : "aspect-[2.39/1]", className),
		onMouseEnter: () => setHovering(true),
		onMouseLeave: () => setHovering(false),
		onClick: toggle,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", {
				ref: videoRef,
				src,
				poster,
				autoPlay,
				loop,
				muted: isMuted,
				playsInline: true,
				preload: "metadata",
				className: "h-full w-full object-cover"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 150,
				columnNumber: 7
			}, this),
			!playing && /* @__PURE__ */ (void 0)("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation();
					toggle();
				},
				className: "absolute inset-0 grid place-items-center",
				"aria-label": "Play video",
				children: /* @__PURE__ */ (void 0)("span", {
					className: "grid size-20 place-items-center rounded-full border border-white/25 bg-black/30 backdrop-blur-sm transition-transform hover:scale-110",
					children: /* @__PURE__ */ (void 0)(Play, {
						className: "size-6 translate-x-0.5",
						strokeWidth: 1.5
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 173,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 164,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: cn("pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 transition-opacity duration-300", hovering || !playing ? "opacity-100" : "opacity-0"),
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "pointer-events-auto flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: toggle,
							className: "text-white hover:text-silver",
							"aria-label": playing ? "Pause" : "Play",
							children: playing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pause, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 24
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 55
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 188,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-[2px] flex-1 cursor-pointer bg-white/15",
							onClick: onSeek,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "h-full bg-white transition-[width] duration-100",
								style: { width: `${progress}%` }
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 198,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-mono text-[10px] uppercase tracking-widest text-white/80",
							children: [
								fmt(current),
								" / ",
								fmt(duration)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 204,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: toggleMute,
							className: "text-white hover:text-silver",
							"aria-label": isMuted ? "Unmute" : "Mute",
							children: isMuted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VolumeX, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 214,
								columnNumber: 24
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 214,
								columnNumber: 57
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 208,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: toggleFs,
							className: "text-white hover:text-silver",
							"aria-label": "Fullscreen",
							children: isFullscreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minimize2, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 223,
								columnNumber: 29
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 223,
								columnNumber: 64
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 217,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 187,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 180,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 139,
		columnNumber: 5
	}, this);
}
//#endregion
export { VideoPlayer as t };
