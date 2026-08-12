import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useLocale } from "./LocaleContext-BdhTBtGq.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as SectionLabel } from "./SectionHeader-9VaAjv67.mjs";
import { n as site, t as showreel } from "./site-Csma6-ee.mjs";
import { n as projects } from "./projects-DleLoEdc.mjs";
import { D as Briefcase, E as Camera, O as ArrowUpRight, T as CircleAlert, _ as Lock, a as UserPlus, c as SlidersVertical, g as Mail, h as MapPin, i as Video, m as Maximize2, r as Volume2, s as Sparkles, t as X, u as Play, v as Linkedin, w as CircleCheckBig, x as Cpu, y as Instagram } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as VideoPlayer } from "./VideoPlayer-Ckge9L1M.mjs";
import { i as TeamMemberPlaceholder, n as MemberImage, r as Nick_default, t as FounderImage } from "./Nick-C5RZgT9m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJ-hg5v3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "/app/applet/src/components/site/HeroReel.tsx";
/**
* Fullscreen looping background video using YouTube.
* Styled to feel cinematic, effortless, and perfectly integrated at 50% opacity.
*/
function HeroReel({ className }) {
	const youtubeId = "2bbwo-n7Lmo";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("absolute inset-0 overflow-hidden pointer-events-none", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative w-full h-full pb-[56.25%] sm:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
					src: `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&rel=0&loop=1&playlist=${youtubeId}&modestbranding=1&playsinline=1`,
					className: "absolute top-1/2 left-1/2 w-[300vw] h-[300vw] sm:w-[150vw] sm:h-[150vw] md:w-[130vw] md:h-[130vw] -translate-x-1/2 -translate-y-1/2 opacity-45 scale-110 pointer-events-none",
					allow: "autoplay; encrypted-media",
					frameBorder: "0",
					tabIndex: -1
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 14,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black/15" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 24,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#030303] via-black/10 to-[#030303]/60" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 25,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/site/Partners.tsx";
function PartnersClients() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative px-4 py-24 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-5xl",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-12 md:grid-cols-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
							id: "// 04",
							children: "Collaborators"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 11,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mt-4 text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white",
							children: "Studio Network"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 12,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 text-xs leading-relaxed text-silver/50 max-w-xs",
							children: "We operate alongside premium partners and local institutions to deliver Swiss excellence at scale."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 15,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 10,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:col-span-8 grid gap-8 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
						initial: {
							opacity: 0,
							y: 15
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "group flex flex-col justify-between rounded-3xl bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] duration-500",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-[8px] uppercase tracking-[0.25em] text-accent/80 block mb-6",
								children: "Production Partner"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 32,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-4 mb-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-10 w-auto text-white transition-transform duration-500 group-hover:scale-105 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: "https://yt3.googleusercontent.com/A_ScjFkBdLwARQaR3olhj0YbTRdBsI0b0L48ptf0VoqnGDOS-q7CDruAwczMZvbM5Wy7xz46=s900-c-k-c0x00ffffff-no-rj",
										alt: "VISURE GmbH Logo",
										className: "h-10 w-10 rounded-full object-cover"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 39,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center h-full gap-3 font-display text-xl font-black uppercase tracking-[0.15em] text-white",
										children: [
											"VISURE",
											" ",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-silver/40 font-mono text-[9px] tracking-widest mt-1",
												children: "GmbH"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 46,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 44,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 38,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 37,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs leading-relaxed text-silver/50 mt-4",
								children: "Co-production and logistics partner for high-concept commercial projects and high-risk aerial operations."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 53,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 31,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-accent animate-pulse" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 60,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Verified Partner" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 61,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 59,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 24,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
						initial: {
							opacity: 0,
							y: 15
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							delay: .1,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "group flex flex-col justify-between rounded-3xl bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] duration-500",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-[8px] uppercase tracking-[0.25em] text-accent/80 block mb-6",
								children: "Client & Brand"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 74,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-4 mb-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-10 w-auto text-white transition-transform duration-500 group-hover:scale-105",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center h-full gap-3 font-display text-base font-black uppercase tracking-[0.1em] text-white",
										children: [
											"Parkour Day",
											" ",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-sans text-xs font-semibold text-silver/60",
												children: "Stäfa, Zürich"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 84,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 82,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 80,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 79,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs leading-relaxed text-silver/50 mt-4",
								children: "A high-impact community and athletic event captured using our specialized close-proximity FPV drone tracking."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 91,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 73,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-silver/40",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-silver/50" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 98,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Event Film Client" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 99,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 97,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 66,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 22,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 8,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 7,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
var showreelCategories = [
	"All",
	"FPV",
	"Event Films"
];
var featuredClips = [{
	title: "Cinematic Studio Showreel",
	category: "FPV & Brand",
	src: "https://youtu.be/2bbwo-n7Lmo",
	poster: "https://img.youtube.com/vi/2bbwo-n7Lmo/maxresdefault.jpg",
	client: "ORYN ZERO",
	year: "2026"
}, {
	title: "Parkour Day Stäfa — Official Film",
	category: "Event Films",
	src: "https://youtu.be/4mwIvmZ5y7c",
	poster: "https://img.youtube.com/vi/4mwIvmZ5y7c/maxresdefault.jpg",
	client: "Parkour Day Stäfa",
	year: "2026"
}];
var servicesList = [
	{
		icon: Video,
		title: "Videography",
		description: "High-end cinematic image acquisition using state-of-the-art multi-camera packages, custom active stabilization systems, and precise composition."
	},
	{
		icon: Camera,
		title: "Event Filming",
		description: "Dynamic documentation of premium brand events, high-octane sports events, launches, and festivals with modern, immersive cinematography."
	},
	{
		icon: SlidersVertical,
		title: "Cinematic Editing",
		description: "Bespoke post-production services including rhythm-based rhythm editing, narrative structure design, sound synchronization, and custom color grading."
	},
	{
		icon: Cpu,
		title: "CGI & VFX",
		description: "Integrating highly accurate 3D model simulations, camera motion tracking, virtual environments, and seamless visual effects into high-end physical frames."
	},
	{
		icon: Volume2,
		title: "Sound Design",
		description: "Custom ambient audio creation, tactile soundscapes, professional Foley capture, and room-filling spatial sound design that drives the visual pace."
	},
	{
		icon: Briefcase,
		title: "Project Supporting",
		description: "End-to-end support for your production including airspace clearances, location scouting, storyboard crafting, flight permits, and crew logistics."
	}
];
var JOB_ROLES = [
	{
		id: "fpv-pilot",
		title: "FPV Drone Pilot & Aerial Operator",
		department: "Flight Operations",
		location: "Stäfa, CH & Hybrid",
		description: "Execute precision high-speed chase-cam flights, slow cinematic indoor passes, and heavy-lifter operations.",
		requirements: [
			"Extensive experience flying 5\" and 7\" cinematic FPV quads",
			"Valid EASA A1/A3 & A2 drone certificates",
			"Outstanding spatial awareness and stress resistance during live shoots"
		]
	},
	{
		id: "cinematographer",
		title: "Cinematographer & Camera Operator",
		department: "Camera & Lighting",
		location: "Stäfa, CH & Travel",
		description: "Direct visual composition, manage specialized camera gear (RED, ARRI), and maintain cinematic standard on brand sets.",
		requirements: [
			"Deep understanding of lens properties, focal lengths, and camera sensors",
			"Proven portfolio in commercial or high-end documentary film",
			"Ability to coordinate lighting schemes and active camera moves"
		]
	},
	{
		id: "video-editor",
		title: "Lead Video Editor & Colorist",
		department: "Post-Production",
		location: "Stäfa, CH & Hybrid",
		description: "Craft powerful narrative flow from raw footage, execute rhythm-based edits, and color-grade DaVinci Resolve timelines.",
		requirements: [
			"Mastery of DaVinci Resolve or Premiere Pro",
			"Strong sense of pacing, sound design, and emotional storytelling",
			"Proven experience in commercial color grading"
		]
	},
	{
		id: "sound-designer",
		title: "Sound Designer & SFX Specialist",
		department: "Post-Production",
		location: "Stäfa, CH & Remote",
		description: "Generate deep, immersive soundscapes, perform clean Foley recording, and direct room-filling audio mixes.",
		requirements: [
			"Excellent skill in Reaper, Pro Tools, or Ableton Live",
			"Experience creating tactical, physical, and high-pacing audio for FPV videos",
			"Strong library management and spatial audio rendering skills"
		]
	},
	{
		id: "vfx-artist",
		title: "VFX & CGI Generalist",
		department: "Post-Production",
		location: "Stäfa, CH & Remote",
		description: "Incorporate highly detailed 3D assets, carry out camera motion tracking, and integrate seamless CGI elements into real FPV takes.",
		requirements: [
			"Proficient in Blender, Cinema 4D, or Unreal Engine",
			"Expert knowledge of 3D tracking, compositing, and illumination matching",
			"Familiarity with cinematic pipelines and sub-frame rendering"
		]
	},
	{
		id: "creative-director",
		title: "Creative Director / Producer",
		department: "Creative Lead",
		location: "Stäfa, CH & Hybrid",
		description: "Translate partner goals into high-impact script/storyboard treatments, oversee overall production design, and direct logistics.",
		requirements: [
			"Strong narrative background with exceptional pitching skills",
			"Experience managing production budgets, airspace clearances, and crews",
			"A keen eye for modern brand aesthetics and high-velocity pacing"
		]
	}
];
var getJobKeyPrefix = (id) => {
	if (id === "fpv-pilot") return "job.fpv";
	if (id === "cinematographer") return "job.cameraman";
	if (id === "video-editor") return "job.editor";
	if (id === "sound-designer") return "job.sound";
	if (id === "vfx-artist") return "job.vfx";
	if (id === "creative-director") return "job.creative";
	return "job.fpv";
};
function HomePage() {
	const { t } = useLocale();
	const [selectedVideo, setSelectedVideo] = (0, import_react.useState)(null);
	const [showreelCategory, setShowreelCategory] = (0, import_react.useState)("All");
	const [projectFilter, setProjectFilter] = (0, import_react.useState)("released");
	const [activeCaseStudy, setActiveCaseStudy] = (0, import_react.useState)(null);
	const [hoveredCardIndex, setHoveredCardIndex] = (0, import_react.useState)(null);
	const [mousePos, setMousePos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [applications, setApplications] = (0, import_react.useState)(() => {
		try {
			const saved = typeof window !== "undefined" ? localStorage.getItem("oryn_applications") : null;
			return saved ? JSON.parse(saved) : {};
		} catch {
			return {};
		}
	});
	const [applyingJobId, setApplyingJobId] = (0, import_react.useState)(null);
	const [appForm, setAppForm] = (0, import_react.useState)({
		name: "",
		email: "",
		portfolio: "",
		message: ""
	});
	const [formSuccess, setFormSuccess] = (0, import_react.useState)(false);
	const [formError, setFormError] = (0, import_react.useState)("");
	const [contactForm, setContactForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		discipline: "FPV Cinematography",
		message: ""
	});
	const [contactSuccess, setContactSuccess] = (0, import_react.useState)(false);
	const [contactLoading, setContactLoading] = (0, import_react.useState)(false);
	const translatedJobRoles = JOB_ROLES.map((job) => {
		const prefix = getJobKeyPrefix(job.id);
		return {
			...job,
			title: t(`${prefix}.title`),
			department: t(`${prefix}.dept`),
			location: t(`${prefix}.loc`),
			description: t(`${prefix}.desc`),
			requirements: [
				t(`${prefix}.req1`),
				t(`${prefix}.req2`),
				t(`${prefix}.req3`)
			]
		};
	});
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") localStorage.setItem("oryn_applications", JSON.stringify(applications));
	}, [applications]);
	projects.filter((p) => !p.status || p.status === "Released" || p.status === "Post-production");
	projects.filter((p) => p.status === "Production" || p.status === "Pre-production");
	(0, import_react.useEffect)(() => {
		const handleMouseMove = (e) => {
			setMousePos({
				x: e.clientX,
				y: e.clientY
			});
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);
	const handleApplySubmit = (e, jobId) => {
		e.preventDefault();
		if (!appForm.name.trim() || !appForm.email.trim()) {
			setFormError("Name and Email are required.");
			return;
		}
		const currentList = applications[jobId] || [];
		if (currentList.length >= 3) {
			setFormError("This role is already fully booked.");
			return;
		}
		const updatedList = [...currentList, {
			name: appForm.name.trim(),
			email: appForm.email.trim(),
			portfolio: appForm.portfolio.trim(),
			message: appForm.message.trim()
		}];
		setApplications({
			...applications,
			[jobId]: updatedList
		});
		fetch(`https://formsubmit.co/ajax/${site.email}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({
				name: appForm.name.trim(),
				email: appForm.email.trim(),
				portfolio: appForm.portfolio.trim(),
				message: appForm.message.trim(),
				jobId,
				_subject: `ORYN ZERO - New Application for ${jobId}`
			})
		}).catch((err) => console.error("FormSubmit error:", err));
		setFormSuccess(true);
		setFormError("");
		setAppForm({
			name: "",
			email: "",
			portfolio: "",
			message: ""
		});
		setTimeout(() => {
			setFormSuccess(false);
			setApplyingJobId(null);
		}, 2500);
	};
	const handleContactSubmit = async (e) => {
		e.preventDefault();
		setContactLoading(true);
		setContactSuccess(false);
		try {
			if ((await fetch(`https://formsubmit.co/ajax/${site.email}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					...contactForm,
					_subject: "New Project Inquiry - ORYN ZERO"
				})
			})).ok) {
				setContactSuccess(true);
				setContactForm({
					name: "",
					email: "",
					phone: "",
					discipline: "FPV Cinematography",
					message: ""
				});
			}
		} catch (error) {
			console.error("Contact form error:", error);
		} finally {
			setContactLoading(false);
		}
	};
	const filteredClips = featuredClips.filter((c) => {
		if (showreelCategory === "All") return true;
		if (showreelCategory === "FPV" && c.category.includes("FPV")) return true;
		if (showreelCategory === "Event Films" && c.category.includes("Event")) return true;
		return false;
	});
	const openMainShowreel = () => {
		setSelectedVideo(showreel.src);
	};
	const handleScrollToContact = (e) => {
		e.preventDefault();
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative min-h-screen text-white bg-[#030303] select-none selection:bg-accent selection:text-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroReel, { className: "fixed inset-0 z-0 pointer-events-none scale-102" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 290,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 opacity-70",
				style: { background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212,176,98,0.04), transparent 80%)` }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 293,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-0 z-10 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100px_100px]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 298,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						className: "relative flex h-screen min-h-[700px] flex-col justify-center px-6 py-8 sm:px-12 sm:py-12 md:px-16",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto max-w-4xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h1, {
									initial: {
										opacity: 0,
										y: 30
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: 1.4,
										delay: .1,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl text-white text-balance-tight",
									children: ["ORYN ZERO ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-accent italic font-light lowercase",
										children: "Studio"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 316,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 305,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.p, {
									initial: {
										opacity: 0,
										y: 15
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: 1.2,
										delay: .3,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "mx-auto mt-6 max-w-xl text-lg font-light tracking-wide text-silver/80 leading-relaxed",
									children: "Cinematic storytelling. High-end FPV. Minimal design."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 319,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
									initial: {
										opacity: 0,
										y: 15
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: 1.2,
										delay: .4,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: openMainShowreel,
										className: "group flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-medium text-black transition-all hover:scale-105 hover:bg-white/90 sm:w-auto cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-4 fill-current transition-transform group-hover:scale-110" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 345,
											columnNumber: 17
										}, this), "Play Showreel"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 344,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: "#contact",
										onClick: handleScrollToContact,
										className: "w-full text-center rounded-full border border-white/10 bg-black/20 backdrop-blur-md px-8 py-4 text-xs font-medium text-white transition-all hover:bg-white/10 sm:w-auto",
										children: "Let's Talk"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 348,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 333,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 304,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 302,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "storytelling",
						className: "relative px-6 py-24 sm:py-32 md:px-16 bg-gradient-to-b from-transparent to-black/30",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto max-w-5xl",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-12 md:grid-cols-12 items-start",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "md:col-span-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
										id: "// 01",
										children: "Storytelling"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 360,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
										className: "mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-accent font-mono",
										children: "Visual Philosophy"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 361,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 359,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "md:col-span-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-balance text-xl font-light leading-snug sm:text-2xl md:text-3xl text-silver tracking-tight",
											children: [
												"We capture movement ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-semibold text-white",
													children: "unbound"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 367,
													columnNumber: 39
												}, this),
												". Through custom-engineered FPV flight lines, active 2-axis stabilization, and uncompromising cinematic color workflows, we craft visuals that do not merely demand attention —",
												" ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-accent italic font-normal",
													children: "they command immersion."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 371,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 366,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-6 text-xs leading-relaxed text-silver/50 max-w-md",
											children: "In a world crowded with transient noise, we stand for cinematic restraint. Every sweeping perspective, close-proximity arc, and editorial frame of black is calibrated to communicate premium craftsmanship and deep creative intent."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 373,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mt-12 flex gap-12 border-t border-white/5 pt-8 font-mono text-[9px] uppercase tracking-[0.25em] text-silver/40",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "block text-xl font-bold font-sans text-accent",
													children: "01"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 380,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "mt-1 block",
													children: "Swiss Precision"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 381,
													columnNumber: 21
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 379,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "block text-xl font-bold font-sans text-accent",
													children: "GoPro12"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 384,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "mt-1 block",
													children: "Stabilized Raw Capture"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 385,
													columnNumber: 21
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 383,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "block text-xl font-bold font-sans text-accent",
													children: "100%"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 388,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "mt-1 block",
													children: "Bespoke Editorial"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 389,
													columnNumber: 21
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 387,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 378,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 365,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 358,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 357,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 356,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "showreel",
						className: "relative px-6 py-24 sm:py-32 md:px-16",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto max-w-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
									id: "// 02",
									children: "Portfolio Clips"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 403,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white",
									children: "Featured Motion"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 404,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 402,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-wrap gap-1 border border-white/5 bg-black/40 p-1 backdrop-blur-md rounded-full",
									children: showreelCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: () => setShowreelCategory(cat),
										className: `rounded-full px-4 py-2 text-[8px] uppercase tracking-[0.2em] transition-all duration-300 ${showreelCategory === cat ? "bg-white text-black font-bold" : "text-silver/60 hover:text-white"}`,
										children: cat
									}, cat, false, {
										fileName: _jsxFileName,
										lineNumber: 411,
										columnNumber: 48
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 410,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 401,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-6 sm:grid-cols-2",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, {
									mode: "popLayout",
									children: filteredClips.map((clip, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
										layout: true,
										initial: {
											opacity: 0,
											scale: .98
										},
										whileInView: {
											opacity: 1,
											scale: 1
										},
										viewport: { once: true },
										exit: {
											opacity: 0,
											scale: .95
										},
										transition: {
											duration: .8,
											ease: [
												.16,
												1,
												.3,
												1
											]
										},
										className: "group relative aspect-video overflow-hidden border border-white/5 bg-white/[0.01] cursor-pointer rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]",
										onClick: () => setSelectedVideo(clip.src),
										onMouseEnter: () => setHoveredCardIndex(idx),
										onMouseLeave: () => setHoveredCardIndex(null),
										children: [
											hoveredCardIndex === idx && !clip.src.includes("youtu") ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", {
												src: clip.src,
												muted: true,
												playsInline: true,
												autoPlay: true,
												loop: true,
												className: "absolute inset-0 size-full object-cover transition-transform duration-1000 scale-102 opacity-90"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 436,
												columnNumber: 80
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
												src: clip.poster,
												alt: clip.title,
												loading: "lazy",
												className: "absolute inset-0 size-full object-cover transition-all duration-1000 scale-100 group-hover:scale-102"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 436,
												columnNumber: 247
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 439,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "absolute inset-x-6 top-6 flex items-start justify-between font-mono text-[8px] uppercase tracking-widest text-silver/50",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: clip.category }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 443,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
													"[ ",
													clip.year,
													" ]"
												] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 444,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 442,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "absolute inset-x-6 bottom-6 flex items-end justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-mono text-[8px] uppercase tracking-wider text-accent block mb-1",
													children: ["CLIENT: ", clip.client]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 450,
													columnNumber: 25
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
													className: "text-xl font-bold tracking-tight text-white uppercase",
													children: clip.title
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 453,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 449,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-3 fill-current ml-0.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 458,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 457,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 448,
												columnNumber: 21
											}, this)
										]
									}, clip.title, true, {
										fileName: _jsxFileName,
										lineNumber: 420,
										columnNumber: 51
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 419,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 418,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 399,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 398,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "services",
						className: "relative px-6 py-24 sm:py-32 md:px-16 bg-gradient-to-b from-black/20 to-transparent",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto max-w-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
										id: "// 03",
										children: "Capabilities"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 471,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white mt-4",
										children: "What We Offer"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 472,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-4 text-xs leading-relaxed text-silver/50 max-w-md",
										children: "A comprehensive production pipeline designed to handle demanding creative goals. From concept to Swiss-crafted final grade."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 475,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 470,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
								children: [servicesList.map((service, idx) => {
									const Icon = service.icon;
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
										initial: {
											opacity: 0,
											y: 20
										},
										whileInView: {
											opacity: 1,
											y: 0
										},
										viewport: { once: true },
										transition: {
											duration: .6,
											delay: idx * .05
										},
										className: "group relative border border-white/5 bg-white/[0.01] p-8 rounded-3xl transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.02]",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-radial-gradient(ellipse at center, rgba(212,176,98,0.02), transparent 70%) opacity-0 transition-opacity duration-500 group-hover:opacity-100" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 497,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mb-6 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-accent transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/10",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 500,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 499,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
												className: "font-display text-lg font-bold text-white uppercase tracking-tight",
												children: service.title
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 503,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "mt-3 text-xs leading-relaxed text-silver/60",
												children: service.description
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 507,
												columnNumber: 21
											}, this)
										]
									}, service.title, true, {
										fileName: _jsxFileName,
										lineNumber: 484,
										columnNumber: 22
									}, this);
								}), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: { once: true },
									transition: {
										duration: .6,
										delay: 6 * .05
									},
									className: "group relative border border-white/5 bg-white/[0.01] p-8 rounded-3xl transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.02] flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mb-6 flex size-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/5 text-accent",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-5 animate-pulse" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 528,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 527,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "font-display text-lg font-bold text-white uppercase tracking-tight",
											children: "And Much More"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 530,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-3 text-xs leading-relaxed text-silver/60",
											children: "Bespoke drone rigs, photogrammetry scanning, raw media transcoding, and customizable creative treatments calibrated to your exact vision."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 533,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 526,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-8",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
											href: "#contact",
											className: "inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-accent group-hover:text-white transition-colors",
											children: [
												"Discuss project",
												" ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 541,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 539,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 538,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 514,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 481,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 469,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 468,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "portfolio",
						className: "relative px-6 py-24 sm:py-32 md:px-16",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto max-w-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
									id: "// 03",
									children: "Case Study"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 555,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white",
									children: "Featured Work"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 556,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 554,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 553,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-8",
								children: projects.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid gap-12 sm:grid-cols-1",
									children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										onClick: () => setActiveCaseStudy(p),
										className: "group block cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "relative aspect-video overflow-hidden border border-white/5 bg-white/[0.01] rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.5)]",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
													src: p.cover,
													alt: p.title,
													loading: "lazy",
													className: "h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 567,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 569,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "absolute bottom-0 left-0 p-8 sm:p-12 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6 pointer-events-none",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-4",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
															className: "font-mono text-[10px] uppercase tracking-[0.3em] text-silver/80",
															children: [
																"ID: ",
																p.id,
																" · ",
																p.year
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 574,
															columnNumber: 29
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
															className: "font-display text-4xl sm:text-5xl font-bold text-white tracking-tight",
															children: p.title
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 577,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 573,
														columnNumber: 27
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 572,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-[4px]",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex flex-col items-center gap-4",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white",
															children: "View Case Study"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 586,
															columnNumber: 29
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-silver",
															children: ["Explore Project Details ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 590,
																columnNumber: 55
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 589,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 585,
														columnNumber: 27
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 584,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 566,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mt-6 flex items-start justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-silver/40 pl-4 pr-4",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex flex-col gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["CLIENT: ", p.client] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 599,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["DISCIPLINE: ", p.category] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 600,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 598,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: p.location }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 602,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 597,
											columnNumber: 23
										}, this)]
									}, p.slug, true, {
										fileName: _jsxFileName,
										lineNumber: 565,
										columnNumber: 38
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 564,
									columnNumber: 38
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
									initial: {
										opacity: 0,
										y: 15
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { duration: .8 },
									className: "flex flex-col items-center justify-center text-center py-24 border border-white/5 rounded-3xl bg-white/[0.01] px-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex size-14 items-center justify-center rounded-full bg-white/[0.03] border border-white/5 mb-6 animate-pulse text-white",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 616,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 615,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "text-lg font-bold uppercase tracking-widest text-white",
											children: "Active Pre-Production"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 618,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-3 text-sm leading-relaxed text-silver/50 max-w-sm",
											children: "Our next-generation FPV runs and cinematic brand film productions are currently in storyboard or early grade phases."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 621,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 606,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 563,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 551,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 550,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "team",
						className: "relative px-6 py-24 sm:py-32 md:px-16 border-t border-white/5 bg-gradient-to-b from-black/40 to-transparent",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto max-w-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
										id: "// 04",
										children: t("team.eyebrow")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 634,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white mt-4",
										children: t("team.title")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 635,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-4 text-xs leading-relaxed text-silver/50 max-w-md",
										children: t("team.intro")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 638,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 633,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black/40",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FounderImage, { className: "h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 646,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-mono text-[8px] uppercase tracking-[0.3em] text-accent",
													children: t("team.finn.role")
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 648,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
													className: "mt-2 font-display text-2xl font-bold text-white tracking-tight",
													children: "Finn Ryf"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 651,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "mt-3 text-xs leading-relaxed text-silver/60",
													children: t("team.finn.bio")
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 654,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "mt-6 flex gap-4 text-[9px] uppercase tracking-widest text-silver/40",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "font-mono",
															children: "CH · 2026"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 658,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-accent/40",
															children: "•"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 659,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
															href: site.social.finn.instagram,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "hover:text-accent transition-colors font-mono",
															children: "Instagram"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 660,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-accent/40",
															children: "•"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 663,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
															href: site.social.finn.youtube,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "hover:text-accent transition-colors font-mono",
															children: "YouTube"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 664,
															columnNumber: 21
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 657,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 647,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 645,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black/40",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MemberImage, {
											src: Nick_default,
											alt: "Nick Honstetter"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 673,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-mono text-[8px] uppercase tracking-[0.3em] text-accent",
													children: t("team.nick.role")
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 675,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
													className: "mt-2 font-display text-2xl font-bold text-white tracking-tight",
													children: "Nick Honstetter"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 678,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "mt-3 text-xs leading-relaxed text-silver/60",
													children: t("team.nick.bio")
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 681,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "mt-6 flex gap-4 text-[9px] uppercase tracking-widest text-silver/40",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "font-mono",
															children: "CH · 2026"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 685,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-accent/40",
															children: "•"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 686,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "font-mono text-accent",
															children: "CO-FOUNDER"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 687,
															columnNumber: 21
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 684,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 674,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 672,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black/40",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TeamMemberPlaceholder, {
											initials: "N",
											name: "Nicola",
											roleType: "pilot"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 694,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-mono text-[8px] uppercase tracking-[0.3em] text-accent",
													children: t("team.nicola.role")
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 696,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
													className: "mt-2 font-display text-2xl font-bold text-white tracking-tight",
													children: "Nicola"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 699,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "mt-3 text-xs leading-relaxed text-silver/60",
													children: t("team.nicola.bio")
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 702,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "mt-6 flex gap-4 text-[9px] uppercase tracking-widest text-silver/40",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "font-mono",
															children: "CH · 2026"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 706,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-accent/40",
															children: "•"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 707,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "font-mono text-accent",
															children: "FPV PILOT"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 708,
															columnNumber: 21
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 705,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 695,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 693,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black/40",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TeamMemberPlaceholder, {
											initials: "TR",
											name: "Tate Rittscher",
											roleType: "sfx"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 715,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-mono text-[8px] uppercase tracking-[0.3em] text-accent",
													children: t("team.tate.role")
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 717,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
													className: "mt-2 font-display text-2xl font-bold text-white tracking-tight",
													children: "Tate Rittscher"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 720,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "mt-3 text-xs leading-relaxed text-silver/60",
													children: t("team.tate.bio")
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 723,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "mt-6 flex gap-4 text-[9px] uppercase tracking-widest text-silver/40",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "font-mono",
															children: "CH · 2026"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 727,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-accent/40",
															children: "•"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 728,
															columnNumber: 21
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "font-mono text-accent",
															children: "CREW"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 729,
															columnNumber: 21
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 726,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 716,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 714,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										onClick: () => document.getElementById("careers")?.scrollIntoView({ behavior: "smooth" }),
										className: "group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-3xl border border-dashed border-accent/20 bg-accent/[0.01] hover:border-accent/50 hover:bg-accent/[0.03] transition-all duration-500 p-8 flex flex-col justify-between",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 bg-radial-gradient(ellipse at center, rgba(212,176,98,0.03), transparent 70%) opacity-0 transition-opacity duration-500 group-hover:opacity-100" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 739,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex justify-between items-start",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-mono text-[8px] uppercase tracking-[0.3em] text-silver/30",
													children: "Slot ID: OZ-VACANT"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 742,
													columnNumber: 19
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex size-10 items-center justify-center rounded-full border border-accent/20 bg-accent/5 text-accent group-hover:scale-110 transition-transform duration-500",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserPlus, { className: "size-4 animate-pulse" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 746,
														columnNumber: 21
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 745,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 741,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "space-y-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
														className: "font-display text-xl font-bold text-accent uppercase tracking-wider",
														children: t("team.vacant.title")
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 751,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-xs leading-relaxed text-silver/60",
														children: t("team.vacant.bio")
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 754,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "pt-2",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-white group-hover:text-accent transition-colors",
															children: [
																t("team.vacant.cta"),
																" ",
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 758,
																	columnNumber: 23
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 756,
															columnNumber: 21
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 755,
														columnNumber: 19
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 750,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 735,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 643,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 632,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 631,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "careers",
						className: "relative px-6 py-24 sm:py-32 md:px-16 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto max-w-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
										id: "// 05",
										children: t("careers.eyebrow")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 771,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white mt-4",
										children: t("careers.title")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 772,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-4 text-xs leading-relaxed text-silver/50 max-w-md",
										children: t("careers.intro")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 775,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 770,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-6",
								children: translatedJobRoles.map((job) => {
									const currentApps = applications[job.id] || [];
									const slotsTaken = currentApps.length;
									const remainingSlots = Math.max(0, 3 - slotsTaken);
									const isFormOpen = applyingJobId === job.id;
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "border border-white/5 bg-white/[0.01] p-8 rounded-3xl backdrop-blur-md transition-all duration-500 hover:border-white/10 hover:bg-white/[0.02]",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex flex-col md:flex-row md:items-start justify-between gap-6",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "flex flex-wrap items-center gap-3",
															children: [
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																	className: "font-mono text-[8px] uppercase tracking-widest text-silver/40",
																	children: job.department
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 790,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																	className: "text-white/10",
																	children: "•"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 793,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																	className: "font-mono text-[8px] uppercase tracking-widest text-accent",
																	children: job.location
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 794,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 789,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
															className: "font-display text-xl font-bold text-white tracking-tight",
															children: job.title
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 798,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
															className: "text-xs text-silver/60 leading-relaxed max-w-2xl",
															children: job.description
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 801,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 788,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex flex-col items-start md:items-end gap-3 shrink-0",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "font-mono text-[9px] uppercase tracking-wider bg-white/[0.02] border border-white/5 rounded-full px-3 py-1 text-silver/70",
														children: [
															t("careers.slotsAvailable"),
															":",
															" ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: remainingSlots > 0 ? "text-accent font-bold" : "text-destructive font-bold",
																children: [remainingSlots, " / 3 slots"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 810,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 808,
														columnNumber: 25
													}, this), !isFormOpen && (slotsTaken < 3 ? /* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => {
															setApplyingJobId(job.id);
															setFormError("");
															setFormSuccess(false);
														},
														className: "rounded-full bg-white px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-accent hover:text-black",
														children: t("careers.apply")
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 815,
														columnNumber: 59
													}, this) : /* @__PURE__ */ (void 0)("span", {
														className: "rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-silver/40 cursor-not-allowed",
														children: t("careers.slotsBooked")
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 821,
														columnNumber: 41
													}, this))]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 807,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 787,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mt-6 pt-6 border-t border-white/5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "font-mono text-[8px] uppercase tracking-widest text-silver/40 mb-3",
													children: t("careers.parameters")
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 829,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
													className: "grid gap-2 sm:grid-cols-2 text-xs text-silver/70",
													children: job.requirements.map((req, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
														className: "flex items-start gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-accent mt-1",
															children: "•"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 834,
															columnNumber: 29
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: req }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 835,
															columnNumber: 29
														}, this)]
													}, i, true, {
														fileName: _jsxFileName,
														lineNumber: 833,
														columnNumber: 59
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 832,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 828,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "mt-6 pt-6 border-t border-white/5 bg-black/25 -mx-8 -mb-8 p-8 rounded-b-3xl",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "font-mono text-[8px] uppercase tracking-widest text-silver/40 mb-4",
													children: t("careers.telemetry")
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 842,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "grid gap-4 sm:grid-cols-3",
													children: [
														0,
														1,
														2
													].map((slotIdx) => {
														const app = currentApps[slotIdx];
														if (app) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "flex items-center gap-3 border border-accent/25 bg-accent/[0.02] rounded-2xl p-4",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, { className: "size-4 text-accent shrink-0" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 850,
																columnNumber: 33
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: "min-w-0",
																children: [
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
																		className: "font-mono text-[7px] uppercase tracking-widest text-accent",
																		children: [
																			t("careers.slotClaimed"),
																			" ",
																			slotIdx + 1
																		]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 852,
																		columnNumber: 35
																	}, this),
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
																		className: "text-xs font-bold text-white truncate mt-0.5",
																		children: app.name
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 855,
																		columnNumber: 35
																	}, this),
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
																		className: "font-mono text-[8px] text-silver/40 truncate",
																		children: app.email
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 858,
																		columnNumber: 35
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 851,
																columnNumber: 33
															}, this)]
														}, slotIdx, true, {
															fileName: _jsxFileName,
															lineNumber: 849,
															columnNumber: 32
														}, this);
														else return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "flex items-center gap-3 border border-white/5 border-dashed bg-white/[0.01] rounded-2xl p-4",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-4 rounded-full border border-white/10 shrink-0" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 865,
																columnNumber: 33
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
																className: "font-mono text-[7px] uppercase tracking-widest text-silver/30",
																children: [
																	t("careers.slotOpen"),
																	" ",
																	slotIdx + 1
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 867,
																columnNumber: 35
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
																className: "text-xs font-medium text-silver/40 mt-0.5",
																children: t("careers.vacantTelemetry")
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 870,
																columnNumber: 35
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 866,
																columnNumber: 33
															}, this)]
														}, slotIdx, true, {
															fileName: _jsxFileName,
															lineNumber: 864,
															columnNumber: 32
														}, this);
													})
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 845,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 841,
												columnNumber: 21
											}, this),
											isFormOpen && /* @__PURE__ */ (void 0)(motion.div, {
												initial: {
													opacity: 0,
													height: 0
												},
												animate: {
													opacity: 1,
													height: "auto"
												},
												className: "mt-6 pt-6 border-t border-white/5 space-y-6",
												children: [/* @__PURE__ */ (void 0)("h5", {
													className: "font-display text-sm font-bold text-white uppercase tracking-wider",
													children: [
														t("form.claimSlot"),
														" - ",
														job.title
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 888,
													columnNumber: 25
												}, this), formSuccess ? /* @__PURE__ */ (void 0)("div", {
													className: "flex flex-col items-center justify-center p-8 border border-accent/20 bg-accent/[0.02] rounded-2xl text-center",
													children: [
														/* @__PURE__ */ (void 0)(CircleCheckBig, { className: "size-8 text-accent mb-3 animate-bounce" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 893,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("h6", {
															className: "font-display text-base font-bold text-white uppercase tracking-wider",
															children: t("form.secured")
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 894,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("p", {
															className: "mt-1 text-xs text-silver/60",
															children: t("form.stored")
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 897,
															columnNumber: 29
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 892,
													columnNumber: 40
												}, this) : /* @__PURE__ */ (void 0)("form", {
													onSubmit: (e) => handleApplySubmit(e, job.id),
													className: "space-y-6",
													children: [
														/* @__PURE__ */ (void 0)("div", {
															className: "grid gap-6 sm:grid-cols-2",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "space-y-1.5",
																children: [/* @__PURE__ */ (void 0)("label", {
																	className: "font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40",
																	children: t("form.yourName")
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 901,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("input", {
																	type: "text",
																	required: true,
																	placeholder: "e.g. Robin Ryf",
																	value: appForm.name,
																	onChange: (e) => setAppForm({
																		...appForm,
																		name: e.target.value
																	}),
																	className: "w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 904,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 900,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-1.5",
																children: [/* @__PURE__ */ (void 0)("label", {
																	className: "font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40",
																	children: t("form.email")
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 910,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("input", {
																	type: "email",
																	required: true,
																	placeholder: "e.g. robin@ryf.com",
																	value: appForm.email,
																	onChange: (e) => setAppForm({
																		...appForm,
																		email: e.target.value
																	}),
																	className: "w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 913,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 909,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 899,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "space-y-1.5",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40",
																children: t("form.portfolio")
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 921,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "url",
																placeholder: "e.g. https://vimeo.com/your-reel",
																value: appForm.portfolio,
																onChange: (e) => setAppForm({
																	...appForm,
																	portfolio: e.target.value
																}),
																className: "w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 924,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 920,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "space-y-1.5",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40",
																children: t("form.about")
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 931,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("textarea", {
																rows: 3,
																placeholder: "State your experience...",
																value: appForm.message,
																onChange: (e) => setAppForm({
																	...appForm,
																	message: e.target.value
																}),
																className: "w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors resize-none"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 934,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 930,
															columnNumber: 29
														}, this),
														formError && /* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2 text-destructive font-mono text-[10px] uppercase tracking-wider",
															children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-4 shrink-0" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 941,
																columnNumber: 33
															}, this), /* @__PURE__ */ (void 0)("span", { children: formError }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 942,
																columnNumber: 33
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 940,
															columnNumber: 43
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-4",
															children: [/* @__PURE__ */ (void 0)("button", {
																type: "submit",
																className: "rounded-full bg-accent text-black px-6 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors",
																children: t("form.submit")
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 946,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("button", {
																type: "button",
																onClick: () => setApplyingJobId(null),
																className: "rounded-full border border-white/10 text-white px-6 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors",
																children: t("form.cancel")
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 949,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 945,
															columnNumber: 29
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 898,
													columnNumber: 36
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 881,
												columnNumber: 36
											}, this)
										]
									}, job.id, true, {
										fileName: _jsxFileName,
										lineNumber: 786,
										columnNumber: 22
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 780,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 769,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 768,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						id: "partners",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PartnersClients, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 963,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 962,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						id: "contact",
						className: "relative px-6 py-24 sm:py-32 md:px-16",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto max-w-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-12 grid gap-8 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
									id: "// 05",
									children: "Contact Core"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 971,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-balance-tight text-3xl font-bold tracking-tight md:text-4xl text-white",
									children: "Initiate the Frame"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 972,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 970,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs leading-relaxed text-silver/50 md:mt-6",
									children: "Connect with us to plan your next cinematic project, coordinate drone logistics, or outline high-concept brand treatments. We provide full-service Swiss-crafted production."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 976,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 969,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-12 lg:grid-cols-12 items-start",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "lg:col-span-7 border border-white/5 bg-white/[0.01] p-8 md:p-10 backdrop-blur-md rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]",
									children: contactSuccess ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-col items-center justify-center py-12 text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "size-16 rounded-full bg-accent/20 flex items-center justify-center mb-6",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, { className: "size-8 text-accent" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 988,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 987,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
												className: "text-2xl font-bold text-white mb-3",
												children: "Transmission Successful"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 990,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-silver/60 text-sm max-w-sm",
												children: "Your project brief has been encrypted and sent to our production desk. Our crew will review the details and initiate contact within 24 hours."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 991,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
												onClick: () => setContactSuccess(false),
												className: "mt-8 text-[10px] uppercase tracking-widest text-accent hover:text-white transition-colors",
												children: "Send another brief"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 995,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 986,
										columnNumber: 35
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
										onSubmit: handleContactSubmit,
										className: "space-y-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "grid gap-6 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
														className: "font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40",
														children: "Your Name *"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1001,
														columnNumber: 25
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
														type: "text",
														name: "name",
														required: true,
														value: contactForm.name,
														onChange: (e) => setContactForm({
															...contactForm,
															name: e.target.value
														}),
														placeholder: "Finn Ryf",
														className: "w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1004,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1e3,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
														className: "font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40",
														children: "Email Address *"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1010,
														columnNumber: 25
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
														type: "email",
														name: "email",
														required: true,
														value: contactForm.email,
														onChange: (e) => setContactForm({
															...contactForm,
															email: e.target.value
														}),
														placeholder: "agency@brand.com",
														className: "w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1013,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1009,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 999,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "grid gap-6 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
														className: "font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40",
														children: "Phone"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1022,
														columnNumber: 25
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
														type: "tel",
														name: "phone",
														value: contactForm.phone,
														onChange: (e) => setContactForm({
															...contactForm,
															phone: e.target.value
														}),
														placeholder: "+41 00 000 00 00",
														className: "w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none transition-colors"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1025,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1021,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
														className: "font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40",
														children: "Project Discipline"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1031,
														columnNumber: 25
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
														name: "discipline",
														value: contactForm.discipline,
														onChange: (e) => setContactForm({
															...contactForm,
															discipline: e.target.value
														}),
														className: "w-full border-b border-white/10 bg-[#030303] py-2.5 text-xs tracking-wider text-white/50 focus:border-accent focus:outline-none transition-colors",
														children: [
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "FPV Cinematography" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1038,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Event Highlight Production" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1039,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Commercial Brand Film" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1040,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Photography" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1041,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Video Editing" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1042,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Others" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1043,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1034,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1030,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1020,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
													className: "font-mono text-[8px] uppercase tracking-[0.25em] text-silver/40",
													children: "Brief Narrative *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1049,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
													required: true,
													name: "message",
													rows: 3,
													value: contactForm.message,
													onChange: (e) => setContactForm({
														...contactForm,
														message: e.target.value
													}),
													placeholder: "Share the locations, timing, and aesthetic goals of the project...",
													className: "w-full border-b border-white/10 bg-transparent py-2.5 text-xs tracking-wider placeholder:text-white/10 focus:border-accent focus:outline-none resize-none transition-colors"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1052,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1048,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
												type: "submit",
												disabled: contactLoading,
												className: "group w-full rounded-full bg-white py-4.5 text-[9px] font-bold uppercase tracking-[0.25em] text-black transition-all hover:bg-accent hover:shadow-[0_0_20px_rgba(212,176,98,0.2)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
												children: contactLoading ? "Processing Transmission..." : "Submit Briefing Package"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1058,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 998,
										columnNumber: 28
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 985,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "lg:col-span-5 space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "border border-white/5 bg-white/[0.01] p-8 backdrop-blur-md rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] space-y-6 font-mono text-[10px] tracking-wider leading-relaxed",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
												className: "font-sans text-lg font-bold uppercase tracking-tight text-white mb-2",
												children: "ORYN ZERO Studio"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1067,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-3 text-silver/70",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-3.5 text-accent" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1071,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
													href: `mailto:${site.email}`,
													className: "hover:text-white transition-colors",
													children: site.email
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1072,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1070,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-start gap-3 text-silver/70",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-3.5 text-accent shrink-0 mt-0.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1077,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-sans tracking-normal leading-normal",
													children: [
														"Ebnetstrasse 25",
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1080,
															columnNumber: 23
														}, this),
														"8712 Stäfa",
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1082,
															columnNumber: 23
														}, this),
														"Zürich, Switzerland"
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1078,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1076,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex gap-4 border-t border-white/5 pt-5 text-[8px] uppercase tracking-widest text-silver/40",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
													href: site.social.instagram,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "hover:text-white flex items-center gap-1 transition-colors",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "size-3" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1089,
														columnNumber: 23
													}, this), " Instagram"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1088,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
													href: site.social.linkedin,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "hover:text-white flex items-center gap-1 transition-colors",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Linkedin, { className: "size-3" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1092,
														columnNumber: 23
													}, this), " LinkedIn"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1091,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1087,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1066,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative aspect-video overflow-hidden border border-white/5 bg-white/[0.01] rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] group",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
												title: "ORYN ZERO Studio Core Map",
												src: "https://maps.google.com/maps?q=Ebnetstrasse%2025,%208712%20St%C3%A4fa,%20Switzerland&t=&z=13&ie=UTF8&iwloc=&output=embed",
												className: "absolute inset-0 size-full grayscale invert contrast-[1.1] brightness-[0.65] opacity-50 transition-opacity duration-700 group-hover:opacity-75 border-none",
												loading: "lazy"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1099,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1100,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 border border-white/5 rounded-3xl pointer-events-none group-hover:border-accent/20 transition-colors duration-500" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1101,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "absolute bottom-4 left-4 flex items-center gap-2 bg-black/85 backdrop-blur-md border border-white/5 rounded-full px-3 py-1 font-mono text-[8px] uppercase tracking-widest text-accent",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-accent animate-pulse" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1105,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "STÄFA COORDINATES CORE" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1106,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1104,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1098,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1065,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 983,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 968,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 967,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 300,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: selectedVideo && /* @__PURE__ */ (void 0)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-md",
				onClick: () => setSelectedVideo(null),
				children: /* @__PURE__ */ (void 0)(motion.div, {
					initial: {
						scale: .95,
						filter: "blur(5px)"
					},
					animate: {
						scale: 1,
						filter: "blur(0px)"
					},
					exit: {
						scale: .95,
						filter: "blur(5px)"
					},
					transition: {
						duration: .5,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "relative w-full max-w-5xl aspect-video border border-white/5 bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (void 0)("button", {
						onClick: () => setSelectedVideo(null),
						className: "absolute -top-10 right-0 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-white hover:text-accent transition-colors",
						children: ["CLOSE FRAME ", /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1138,
							columnNumber: 29
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1137,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)(VideoPlayer, {
						src: selectedVideo,
						autoPlay: true,
						loop: true,
						muted: false
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1140,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1124,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1117,
				columnNumber: 27
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1116,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: activeCaseStudy && /* @__PURE__ */ (void 0)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl overflow-y-auto",
				onClick: () => setActiveCaseStudy(null),
				children: /* @__PURE__ */ (void 0)(motion.div, {
					initial: { x: "100%" },
					animate: { x: 0 },
					exit: { x: "100%" },
					transition: {
						type: "spring",
						damping: 38,
						stiffness: 220
					},
					onClick: (e) => e.stopPropagation(),
					className: "relative ml-auto w-full max-w-4xl min-h-screen bg-[#060606] border-l border-white/5 p-6 sm:p-10 md:p-12 shadow-[-20px_0_60px_rgba(0,0,0,0.8)]",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between border-b border-white/5 pb-6 mb-8 font-mono text-[9px] uppercase tracking-widest text-silver/50",
						children: [/* @__PURE__ */ (void 0)("button", {
							onClick: () => setActiveCaseStudy(null),
							className: "flex items-center gap-2 hover:text-accent transition-colors",
							children: "← BACK TO INDEX"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1167,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", { children: ["PROJECT ID // ", activeCaseStudy.id] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1170,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1166,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "space-y-10",
						children: [
							/* @__PURE__ */ (void 0)("div", { children: [
								/* @__PURE__ */ (void 0)("span", {
									className: "font-mono text-[9px] uppercase tracking-widest text-accent block mb-2",
									children: [
										activeCaseStudy.category,
										" · ",
										activeCaseStudy.year
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1176,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("h2", {
									className: "text-balance-tight font-display text-4xl font-black uppercase tracking-tight md:text-5xl text-white",
									children: activeCaseStudy.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1179,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "mt-5 text-sm leading-relaxed text-silver/70 max-w-2xl",
									children: activeCaseStudy.overview
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1182,
									columnNumber: 19
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1175,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "border border-white/5 bg-black rounded-3xl overflow-hidden aspect-video shadow-2xl",
								children: /* @__PURE__ */ (void 0)(VideoPlayer, {
									src: activeCaseStudy.video || "https://youtu.be/2bbwo-n7Lmo",
									poster: activeCaseStudy.cover,
									autoPlay: false,
									loop: true,
									muted: false
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1189,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1188,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "grid gap-10 md:grid-cols-12 items-start",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "md:col-span-8 space-y-8",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "grid gap-6 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-mono text-[8px] uppercase tracking-widest text-accent block",
													children: "// CHALLENGE"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1197,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs leading-relaxed text-silver/50",
													children: activeCaseStudy.challenge
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1200,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1196,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-mono text-[8px] uppercase tracking-widest text-accent block",
													children: "// CONCEPT"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1205,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs leading-relaxed text-silver/50",
													children: activeCaseStudy.concept
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1208,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1204,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-mono text-[8px] uppercase tracking-widest text-accent block",
													children: "// PRODUCTION"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1213,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs leading-relaxed text-silver/50",
													children: activeCaseStudy.production
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1216,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1212,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-mono text-[8px] uppercase tracking-widest text-accent block",
													children: "// RESULT"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1221,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs leading-relaxed text-silver/50",
													children: activeCaseStudy.result
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1224,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1220,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1195,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-3 pt-6 border-t border-white/5",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-mono text-[8px] uppercase tracking-widest text-accent block",
											children: "// BEHIND THE FRAME"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1232,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "grid gap-4 sm:grid-cols-3",
											children: [
												activeCaseStudy.cover,
												activeCaseStudy.cover,
												activeCaseStudy.cover
											].map((src, i) => /* @__PURE__ */ (void 0)("div", {
												className: "aspect-[4/3] overflow-hidden border border-white/5 rounded-2xl",
												children: /* @__PURE__ */ (void 0)("img", {
													src,
													alt: "BTS Frame Still",
													loading: "lazy",
													className: "h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-102"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1237,
													columnNumber: 31
												}, this)
											}, i, false, {
												fileName: _jsxFileName,
												lineNumber: 1236,
												columnNumber: 112
											}, this))
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1235,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1231,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1194,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("aside", {
									className: "md:col-span-4 border border-white/5 bg-white/[0.01] p-6 rounded-3xl space-y-5 font-mono text-[9px] tracking-widest leading-relaxed",
									children: [
										/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "block text-silver/40 uppercase text-[8px]",
											children: "CLIENT"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1246,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "mt-1 block text-white font-sans text-xs font-bold uppercase tracking-normal",
											children: activeCaseStudy.client
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1247,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1245,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "block text-silver/40 uppercase text-[8px]",
											children: "LOCATION"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1252,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "mt-1 block text-white font-sans text-xs font-bold uppercase tracking-normal",
											children: activeCaseStudy.location
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1253,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1251,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "block text-silver/40 uppercase text-[8px]",
											children: "YEAR"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1258,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "mt-1 block text-white font-sans text-xs font-bold uppercase tracking-normal",
											children: activeCaseStudy.year
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1259,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1257,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "border-t border-white/5 pt-4",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "block text-silver/40 uppercase text-[8px] mb-2",
												children: "SERVICES"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1265,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("ul", {
												className: "space-y-1 text-xs text-silver/60 font-sans tracking-normal font-light",
												children: activeCaseStudy.services.map((s) => /* @__PURE__ */ (void 0)("li", {
													className: "flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ (void 0)("span", { className: "size-1 rounded-full bg-accent" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1270,
															columnNumber: 29
														}, this),
														" ",
														s
													]
												}, s, true, {
													fileName: _jsxFileName,
													lineNumber: 1269,
													columnNumber: 60
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1268,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1264,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "border-t border-white/5 pt-4",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "block text-silver/40 uppercase text-[8px] mb-2",
												children: "EQUIPMENT"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1276,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("ul", {
												className: "space-y-1 text-xs text-silver/60 font-sans tracking-normal font-light",
												children: activeCaseStudy.equipment.map((e) => /* @__PURE__ */ (void 0)("li", {
													className: "flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ (void 0)("span", { className: "size-1 rounded-full bg-accent" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1281,
															columnNumber: 29
														}, this),
														" ",
														e
													]
												}, e, true, {
													fileName: _jsxFileName,
													lineNumber: 1280,
													columnNumber: 61
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1279,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1275,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1244,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1193,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "border-t border-white/5 pt-6 flex justify-between",
								children: [/* @__PURE__ */ (void 0)("button", {
									onClick: () => setActiveCaseStudy(null),
									className: "border border-white/10 px-6 py-3 rounded-full text-[8px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors",
									children: "CLOSE BRIEF"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1290,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("a", {
									href: "#contact",
									onClick: (e) => {
										setActiveCaseStudy(null);
										handleScrollToContact(e);
									},
									className: "bg-accent px-6 py-3 rounded-full text-[8px] font-bold uppercase tracking-widest text-black hover:bg-white transition-colors",
									children: "DISCUSS INITIATION"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1293,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1289,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1174,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1154,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1147,
				columnNumber: 29
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1146,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 288,
		columnNumber: 10
	}, this);
}
//#endregion
export { HomePage as component };
