import { o as __toESM } from "../_runtime.mjs";
import { r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useLocale, t as LocaleProvider } from "./LocaleContext-BdhTBtGq.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as site } from "./site-Csma6-ee.mjs";
import { n as projects } from "./projects-DleLoEdc.mjs";
import { t as Route$15 } from "./work._slug-DrTUsBni.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { C as Coins, b as Globe, p as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C06Wg_n2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-Bqk9ofe8.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var _jsxFileName$4 = "/app/applet/src/components/site/OrynLogo.tsx";
function OrynLogo({ className, iconOnly = false, size = "md", animated = true }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("flex items-center gap-2.5 select-none group cursor-pointer", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
			viewBox: "0 0 100 100",
			className: cn({
				xs: "h-4",
				sm: "h-5",
				md: "h-7",
				lg: "h-10",
				xl: "h-16"
			}[size], "aspect-square fill-none transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:rotate-180"),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
					id: "goldGradient",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
							offset: "0%",
							stopColor: "#F9E29B"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 31,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
							offset: "35%",
							stopColor: "#D4B062"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 32,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
							offset: "70%",
							stopColor: "#B48E42"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 33,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
							offset: "100%",
							stopColor: "#8A6726"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 34,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 30,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("radialGradient", {
					id: "goldGlow",
					cx: "50%",
					cy: "50%",
					r: "50%",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
						offset: "0%",
						stopColor: "#D4B062",
						stopOpacity: "0.3"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 37,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
						offset: "100%",
						stopColor: "#D4B062",
						stopOpacity: "0"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 38,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 36,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					cx: "50%",
					cy: "50%",
					r: "45",
					fill: "url(#goldGlow)",
					className: "opacity-40 group-hover:opacity-100 transition-opacity duration-700"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 43,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					cx: "50%",
					cy: "50%",
					r: "38",
					stroke: "url(#goldGradient)",
					strokeWidth: "5",
					strokeLinecap: "round",
					strokeDasharray: "200 40",
					className: "origin-center transition-all duration-1000 ease-out group-hover:rotate-90"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					d: "M34 34 H66 L34 66 H66",
					stroke: "url(#goldGradient)",
					strokeWidth: "6.5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					className: "transition-all duration-700 ease-out"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 64,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					cx: "50%",
					cy: "50%",
					r: "4.5",
					fill: "#FFFFFF",
					className: animated ? "animate-pulse" : "",
					style: { filter: "drop-shadow(0px 0px 4px rgba(212, 176, 98, 0.8))" }
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 74,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 22,
			columnNumber: 7
		}, this), !iconOnly && /* @__PURE__ */ (void 0)("span", {
			className: "font-display font-black uppercase tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-accent",
			children: ["ORYN ", /* @__PURE__ */ (void 0)("span", {
				className: "font-light text-silver",
				children: "ZERO"
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 86,
				columnNumber: 16
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 85,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/site/SiteNav.tsx";
var nav = [
	{
		href: "#storytelling",
		label: "Philosophy"
	},
	{
		href: "#showreel",
		label: "Showreel"
	},
	{
		href: "#portfolio",
		label: "Portfolio"
	},
	{
		href: "#team",
		label: "Team"
	},
	{
		href: "#careers",
		label: "Jobs & Career"
	},
	{
		href: "#partners",
		label: "Network"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [activeSection, setActiveSection] = (0, import_react.useState)("");
	const currentPath = useRouterState().location.pathname;
	const { language, setLanguage, currency, setCurrency, t } = useLocale();
	const getNavLabel = (href) => {
		if (href === "#storytelling") return t("nav.philosophy");
		if (href === "#showreel") return t("nav.showreel");
		if (href === "#portfolio") return t("nav.portfolio");
		if (href === "#team") return t("nav.team");
		if (href === "#careers") return t("nav.careers");
		if (href === "#partners") return t("nav.network");
		if (href === "#contact") return t("nav.contact");
		return "";
	};
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20);
			if (currentPath === "/") {
				const sections = nav.map((n) => n.href.substring(1));
				let current = "";
				for (const section of sections) {
					const element = document.getElementById(section);
					if (element) {
						const rect = element.getBoundingClientRect();
						if (rect.top <= 250 && rect.bottom >= 250) current = section;
					}
				}
				setActiveSection(current);
			}
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [currentPath]);
	const handleScrollTo = (e, href) => {
		if (currentPath !== "/") return;
		if (href.startsWith("#")) {
			e.preventDefault();
			const target = document.getElementById(href.substring(1));
			if (target) {
				target.scrollIntoView({ behavior: "smooth" });
				setOpen(false);
			}
		}
	};
	(0, import_react.useEffect)(() => {
		if (open) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.header, {
		initial: {
			y: -50,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: 1,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: cn("fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-500", scrolled ? "top-4 sm:top-6" : "top-6 sm:top-8"),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("flex w-full max-w-5xl items-center justify-between border border-white/5 px-4 sm:px-6 py-3 transition-all duration-500", scrolled ? "rounded-full bg-black/40 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl border-white/10" : "rounded-full bg-black/10 backdrop-blur-sm"),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "flex items-center pl-1",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrynLogo, { size: "sm" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 105,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 104,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: nav.map((n) => {
						const isActive = activeSection === n.href.substring(1);
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: currentPath === "/" ? n.href : `/${n.href}`,
							onClick: (e) => handleScrollTo(e, n.href),
							className: "relative rounded-full px-3 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-silver/70 transition-colors hover:text-white",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "relative z-10",
								children: getNavLabel(n.href)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 119,
								columnNumber: 19
							}, this), isActive && /* @__PURE__ */ (void 0)(motion.span, {
								layoutId: "nav-active-pill",
								className: "absolute inset-0 z-0 rounded-full bg-white/10 border border-white/5",
								transition: {
									type: "spring",
									stiffness: 380,
									damping: 30
								}
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 121,
								columnNumber: 21
							}, this)]
						}, n.href, true, {
							fileName: _jsxFileName$3,
							lineNumber: 113,
							columnNumber: 17
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 109,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "hidden lg:flex items-center gap-1.5 border-r border-white/5 pr-4 font-mono text-[8px] uppercase tracking-[0.2em] text-silver/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setLanguage("en"),
									className: cn("hover:text-white transition-colors py-1 px-0.5", language === "en" && "text-accent font-bold"),
									children: "EN"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 136,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 145,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setLanguage("de"),
									className: cn("hover:text-white transition-colors py-1 px-0.5", language === "de" && "text-accent font-bold"),
									children: "DE"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 146,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 155,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setLanguage("fr"),
									className: cn("hover:text-white transition-colors py-1 px-0.5", language === "fr" && "text-accent font-bold"),
									children: "FR"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 156,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 135,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "hidden lg:flex items-center gap-1.5 border-r border-white/5 pr-4 font-mono text-[8px] uppercase tracking-[0.2em] text-silver/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setCurrency("CHF"),
									className: cn("hover:text-white transition-colors py-1 px-0.5", currency === "CHF" && "text-accent font-bold"),
									children: "CHF"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 169,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 178,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setCurrency("USD"),
									className: cn("hover:text-white transition-colors py-1 px-0.5", currency === "USD" && "text-accent font-bold"),
									children: "USD"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 179,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 188,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setCurrency("EUR"),
									className: cn("hover:text-white transition-colors py-1 px-0.5", currency === "EUR" && "text-accent font-bold"),
									children: "EUR"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 189,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 198,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setCurrency("GBP"),
									className: cn("hover:text-white transition-colors py-1 px-0.5", currency === "GBP" && "text-accent font-bold"),
									children: "GBP"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 199,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 168,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/booking",
							className: "hidden rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-black hover:border-transparent md:inline-block shadow-[0_0_15px_rgba(212,176,98,0.05)]",
							children: t("nav.schedule")
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 210,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/15 md:hidden",
							"aria-label": "Open menu",
							onClick: () => setOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 224,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 218,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 133,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 95,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 86,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: open && /* @__PURE__ */ (void 0)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .4 },
		className: "fixed inset-0 z-[60] flex flex-col justify-between bg-black/95 p-8 backdrop-blur-2xl md:hidden",
		children: [
			/* @__PURE__ */ (void 0)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (void 0)(Link, {
					to: "/",
					onClick: () => setOpen(false),
					className: "flex items-center",
					children: /* @__PURE__ */ (void 0)(OrynLogo, { size: "md" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 242,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 241,
					columnNumber: 15
				}, this), /* @__PURE__ */ (void 0)("button", {
					type: "button",
					className: "flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white",
					"aria-label": "Close menu",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 250,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 244,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 240,
				columnNumber: 13
			}, this),
			/* @__PURE__ */ (void 0)("nav", {
				className: "flex flex-col gap-1 py-6",
				children: nav.map((n, idx) => {
					const isActive = activeSection === n.href.substring(1);
					return /* @__PURE__ */ (void 0)(motion.div, {
						initial: {
							x: -20,
							opacity: 0
						},
						animate: {
							x: 0,
							opacity: 1
						},
						transition: {
							delay: idx * .04,
							duration: .5,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						children: /* @__PURE__ */ (void 0)("a", {
							href: currentPath === "/" ? n.href : `/${n.href}`,
							onClick: (e) => handleScrollTo(e, n.href),
							className: cn("block py-2 text-xl font-bold uppercase tracking-widest transition-colors", isActive ? "text-accent" : "text-silver/60 hover:text-white"),
							children: getNavLabel(n.href)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 264,
							columnNumber: 21
						}, this)
					}, n.href, false, {
						fileName: _jsxFileName$3,
						lineNumber: 258,
						columnNumber: 19
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 254,
				columnNumber: 13
			}, this),
			/* @__PURE__ */ (void 0)(motion.div, {
				initial: {
					y: 20,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: { delay: .25 },
				className: "space-y-6 border-t border-white/10 pt-6",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-silver/40",
							children: [/* @__PURE__ */ (void 0)(Globe, { className: "size-3" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 289,
								columnNumber: 19
							}, this), " Language"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 288,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-silver/60",
							children: [
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setLanguage("en"),
									className: cn("hover:text-white transition-colors py-1", language === "en" && "text-accent font-bold"),
									children: "English"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 292,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 301,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setLanguage("de"),
									className: cn("hover:text-white transition-colors py-1", language === "de" && "text-accent font-bold"),
									children: "Deutsch"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 302,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 311,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setLanguage("fr"),
									className: cn("hover:text-white transition-colors py-1", language === "fr" && "text-accent font-bold"),
									children: "Français"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 312,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 291,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 287,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-silver/40",
							children: [/* @__PURE__ */ (void 0)(Coins, { className: "size-3" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 327,
								columnNumber: 19
							}, this), " Currency"]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 326,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-silver/60",
							children: [
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setCurrency("CHF"),
									className: cn("hover:text-white transition-colors py-1", currency === "CHF" && "text-accent font-bold"),
									children: "CHF"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 330,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 339,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setCurrency("USD"),
									className: cn("hover:text-white transition-colors py-1", currency === "USD" && "text-accent font-bold"),
									children: "USD"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 340,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 349,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setCurrency("EUR"),
									className: cn("hover:text-white transition-colors py-1", currency === "EUR" && "text-accent font-bold"),
									children: "EUR"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 350,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("span", { children: "/" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 359,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setCurrency("GBP"),
									className: cn("hover:text-white transition-colors py-1", currency === "GBP" && "text-accent font-bold"),
									children: "GBP"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 360,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 329,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 325,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)(Link, {
						to: "/booking",
						onClick: () => setOpen(false),
						className: "block w-full rounded-full bg-accent py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-black shadow-[0_4px_20px_rgba(212,176,98,0.2)]",
						children: t("nav.scheduleCall")
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 372,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 280,
				columnNumber: 13
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 233,
		columnNumber: 11
	}, this) }, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 231,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 84,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/site/SiteFooter.tsx";
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "px-4 pb-12 pt-24 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-5xl rounded-3xl border border-white/5 bg-black/25 p-8 sm:p-12 backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-12 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrynLogo, { size: "md" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 11,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 max-w-sm text-xs leading-relaxed text-silver/60",
								children: "Swiss-crafted cinematography and high-velocity FPV visuals. Based in Stäfa, Switzerland. Available worldwide for selected creative collaborations."
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 12,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground block",
									children: "Inquiries"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 17,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `mailto:${site.email}`,
									className: "mt-2 inline-block text-sm font-semibold tracking-wider text-accent underline underline-offset-4 hover:text-white transition-colors",
									children: site.email
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 20,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 16,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 10,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
								children: "Social"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 30,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: site.social.instagram,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors",
								children: "Instagram"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 33,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: site.social.youtube,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors",
								children: "YouTube"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 41,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: site.social.linkedin,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors",
								children: "LinkedIn"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 49,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
								children: "Studio"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 60,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/work",
								className: "text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors",
								children: "Work"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 63,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/studio",
								className: "text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors",
								children: "Studio"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 69,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/services",
								className: "text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors",
								children: "Services"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 75,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/contact",
								className: "text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors",
								children: "Contact"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 81,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 59,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 9,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "© 2026 ORYN ZERO. All rights reserved." }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 91,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/legal/impressum",
							className: "hover:text-white transition-colors",
							children: "Impressum"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 93,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/legal/datenschutz",
							className: "hover:text-white transition-colors",
							children: "Datenschutz"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 96,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 92,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "italic text-accent/70 font-sans tracking-normal lowercase first-letter:uppercase",
						children: "Visuals through movement."
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 100,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 90,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 8,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/site/DroneIntro.tsx";
/**
* Luxury cinematic typographic loader.
* Counts up from 0 to 100 with dynamic camera state indicators.
* Fades out with a premium lens blur and scale effect.
* Runs once per session to maintain excellent usability.
*/
function DroneIntro() {
	const [percent, setPercent] = (0, import_react.useState)(0);
	const [complete, setComplete] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (sessionStorage.getItem("oryn-intro-played") === "1") {
			setComplete(true);
			return;
		}
		setMounted(true);
		document.body.style.overflow = "hidden";
		let current = 0;
		const interval = setInterval(() => {
			current += Math.floor(Math.random() * 8) + 3;
			if (current >= 100) {
				current = 100;
				clearInterval(interval);
				setTimeout(() => {
					setComplete(true);
					sessionStorage.setItem("oryn-intro-played", "1");
					document.body.style.overflow = "";
				}, 800);
			}
			setPercent(current);
		}, 60);
		return () => {
			clearInterval(interval);
			document.body.style.overflow = "";
		};
	}, []);
	if (complete || !mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: !complete && /* @__PURE__ */ (void 0)(motion.div, {
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			filter: "blur(20px)",
			scale: 1.05,
			transition: {
				duration: 1.2,
				ease: [
					.76,
					0,
					.24,
					1
				]
			}
		},
		className: "fixed inset-0 z-[100] flex flex-col justify-between bg-black p-8 md:p-12",
		children: [
			/* @__PURE__ */ (void 0)("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(212,176,98,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,176,98,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 65,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (void 0)("div", {
				className: "relative z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.4em] text-silver/60",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 animate-pulse rounded-full bg-accent" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 70,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", { children: "SYSTEM ON / ORYN_INIT" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 71,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 69,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "hidden sm:block",
						children: "TC 00:00:00:00"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 73,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", { children: "SHUTTER 180°" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 74,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 68,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (void 0)("div", {
				className: "relative z-10 flex flex-col items-center justify-center text-center",
				children: [
					/* @__PURE__ */ (void 0)(motion.div, {
						initial: {
							y: 30,
							opacity: 0,
							filter: "blur(5px)"
						},
						animate: {
							y: 0,
							opacity: 1,
							filter: "blur(0px)"
						},
						transition: {
							duration: 1,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mb-3",
						children: /* @__PURE__ */ (void 0)("span", {
							className: "font-mono text-[10px] uppercase tracking-[0.6em] text-silver/40",
							children: "SWISS CINEMATOGRAPHY STUDIO"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 85,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 79,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)(motion.h1, {
						initial: {
							y: 40,
							opacity: 0
						},
						animate: {
							y: 0,
							opacity: 1
						},
						transition: {
							duration: 1.2,
							delay: .1,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "font-display text-4xl font-extrabold uppercase tracking-[-0.05em] text-white sm:text-6xl md:text-8xl",
						children: ["ORYN ", /* @__PURE__ */ (void 0)("span", {
							className: "text-accent italic font-normal",
							children: "ZERO"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 96,
							columnNumber: 20
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 90,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)(motion.div, {
						initial: { width: 0 },
						animate: { width: "160px" },
						transition: {
							duration: 1.5,
							delay: .4,
							ease: "easeInOut"
						},
						className: "mt-6 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 99,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 78,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (void 0)("div", {
				className: "relative z-10 flex flex-col gap-4",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-end justify-between font-mono text-[10px] uppercase tracking-widest text-silver/50",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "text-white/30",
							children: "MODULE // PERSPECTIVE"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 111,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", { children: ["STATE // ", percent < 100 ? "LOADING" : "READY"] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 112,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 110,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "font-sans text-5xl font-light text-white tabular-nums tracking-tighter md:text-7xl",
							children: percent
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 115,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "ml-1 text-xs text-accent",
							children: "%"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 118,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 114,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 109,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "h-[1px] w-full bg-white/10 overflow-hidden",
					children: /* @__PURE__ */ (void 0)(motion.div, {
						className: "h-full bg-accent",
						initial: { width: "0%" },
						animate: { width: `${percent}%` },
						transition: { duration: .1 }
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 124,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 123,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 108,
				columnNumber: 11
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 54,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 52,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.3em] text-silver",
					children: "404 / Frame not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-6 font-display text-5xl font-bold tracking-tighter",
					children: "Off frame."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "The scene you're looking for isn't here."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "mt-8 inline-block border border-border px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background",
					children: "Return to studio"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.3em] text-silver",
					children: "Playback error"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-6 font-display text-4xl font-bold tracking-tighter",
					children: "This scene didn't load."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 flex justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "border border-border bg-foreground px-6 py-3 text-[10px] uppercase tracking-widest text-background",
						children: "Retry"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "border border-border px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background",
						children: "Home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 5
	}, this);
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ORYN ZERO — Cinematic Films & FPV Experiences" },
			{
				name: "description",
				content: "ORYN ZERO is a Swiss cinematic production studio creating immersive brand films through FPV, aerial cinematography and storytelling."
			},
			{
				name: "author",
				content: "ORYN ZERO"
			},
			{
				name: "theme-color",
				content: "#050505"
			},
			{
				property: "og:site_name",
				content: "ORYN ZERO"
			},
			{
				property: "og:title",
				content: "ORYN ZERO — Cinematic Films & FPV Experiences"
			},
			{
				property: "og:description",
				content: "A Swiss cinematic production studio. FPV, aerial cinematography, brand films."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "ORYN ZERO"
			},
			{
				name: "twitter:description",
				content: "Cinematic Films & FPV Experiences — Switzerland."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "ORYN ZERO",
				description: "Swiss cinematic production studio — FPV, aerial cinematography, brand films.",
				email: "studio@orynzero.ch",
				address: {
					"@type": "PostalAddress",
					addressCountry: "CH"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 144,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 143,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 148,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 142,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LocaleProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DroneIntro, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 160,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteNav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 161,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "min-h-screen bg-background text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 163,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 162,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteFooter, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 159,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 158,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$12 = () => import("./routes-DJ-hg5v3.mjs");
var Route$13 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "ORYN ZERO Studio — Premium Swiss Cinematography & FPV" },
			{
				name: "description",
				content: "Swiss premium cinematic production studio based in Stäfa, Zürich. Creating high-end brand films, elite FPV cinematography, and commercial visual stories."
			},
			{
				property: "og:title",
				content: "ORYN ZERO Studio — Premium Swiss Cinematography & FPV"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./booking-cx7EkJCZ.mjs");
var Route$12 = createFileRoute("/booking")({
	head: () => ({
		meta: [
			{ title: "Book a Meeting — ORYN ZERO" },
			{
				name: "description",
				content: "Schedule a discovery call, project meeting or consultation with ORYN ZERO."
			},
			{
				property: "og:title",
				content: "Book a Meeting — ORYN ZERO"
			},
			{
				property: "og:url",
				content: "/booking"
			}
		],
		links: [{
			rel: "canonical",
			href: "/booking"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./careers-vaCwbd8G.mjs");
var Route$11 = createFileRoute("/careers")({
	head: () => ({
		meta: [
			{ title: "Careers — ORYN ZERO" },
			{
				name: "description",
				content: "Join the ORYN ZERO network. Open applications welcome from cinematographers, FPV pilots, editors and motion designers."
			},
			{
				property: "og:title",
				content: "Careers — ORYN ZERO"
			},
			{
				property: "og:url",
				content: "/careers"
			}
		],
		links: [{
			rel: "canonical",
			href: "/careers"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./contact-D9EIZeSH.mjs");
var Route$10 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — ORYN ZERO" },
			{
				name: "description",
				content: "Enquire about a cinematic production, brand film or FPV project with ORYN ZERO."
			},
			{
				property: "og:title",
				content: "Contact — ORYN ZERO"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./legal-CDjP6RX1.mjs");
var Route$9 = createFileRoute("/legal")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./pricing-luLIir0C.mjs");
var Route$8 = createFileRoute("/pricing")({
	head: () => ({
		meta: [
			{ title: "Pricing — ORYN ZERO" },
			{
				name: "description",
				content: "Three production editions — Starter, Business, and Premium — for cinematic film work."
			},
			{
				property: "og:title",
				content: "Pricing — ORYN ZERO"
			},
			{
				property: "og:url",
				content: "/pricing"
			}
		],
		links: [{
			rel: "canonical",
			href: "/pricing"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./services-DUA0oCOe.mjs");
var Route$7 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Services — ORYN ZERO" },
			{
				name: "description",
				content: "FPV cinematography, aerial drone films, brand films, event films, and social media content."
			},
			{
				property: "og:title",
				content: "Services — ORYN ZERO"
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var BASE_URL = "";
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const staticPaths = [
		"/",
		"/work",
		"/studio",
		"/services",
		"/pricing",
		"/contact",
		"/booking",
		"/careers",
		"/legal/impressum",
		"/legal/datenschutz",
		"/legal/agb"
	];
	const dynamicPaths = projects.map((p) => `/work/${p.slug}`);
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[...staticPaths, ...dynamicPaths].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$5 = () => import("./studio-D-Ainmwg.mjs");
var Route$5 = createFileRoute("/studio")({
	head: () => ({
		meta: [
			{ title: "Studio — ORYN ZERO" },
			{
				name: "description",
				content: "Founder-led Swiss cinematic production studio specialising in FPV, aerial and brand films."
			},
			{
				property: "og:title",
				content: "Studio — ORYN ZERO"
			},
			{
				property: "og:url",
				content: "/studio"
			}
		],
		links: [{
			rel: "canonical",
			href: "/studio"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./work-weu3s0zA.mjs");
var Route$4 = createFileRoute("/work")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./legal.agb-3YJMMUQ4.mjs");
var Route$3 = createFileRoute("/legal/agb")({
	head: () => ({
		meta: [
			{ title: "AGB — ORYN ZERO" },
			{
				name: "description",
				content: "Allgemeine Geschäftsbedingungen von ORYN ZERO."
			},
			{
				property: "og:url",
				content: "/legal/agb"
			}
		],
		links: [{
			rel: "canonical",
			href: "/legal/agb"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./legal.datenschutz-DuVvpJuV.mjs");
var Route$2 = createFileRoute("/legal/datenschutz")({
	head: () => ({
		meta: [
			{ title: "Datenschutz — ORYN ZERO" },
			{
				name: "description",
				content: "Datenschutzerklärung für die Website von ORYN ZERO."
			},
			{
				property: "og:url",
				content: "/legal/datenschutz"
			}
		],
		links: [{
			rel: "canonical",
			href: "/legal/datenschutz"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./legal.impressum-BV_cV72-.mjs");
var Route$1 = createFileRoute("/legal/impressum")({
	head: () => ({
		meta: [
			{ title: "Impressum — ORYN ZERO" },
			{
				name: "description",
				content: "Impressum · Legal information for ORYN ZERO."
			},
			{
				property: "og:url",
				content: "/legal/impressum"
			}
		],
		links: [{
			rel: "canonical",
			href: "/legal/impressum"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work.index-B31oKQNY.mjs");
var Route = createFileRoute("/work/")({
	head: () => ({
		meta: [
			{ title: "Selected Work — ORYN ZERO" },
			{
				name: "description",
				content: "Selected cinematic films, FPV projects, brand films and aerial productions by ORYN ZERO."
			},
			{
				property: "og:title",
				content: "Selected Work — ORYN ZERO"
			},
			{
				property: "og:url",
				content: "/work"
			}
		],
		links: [{
			rel: "canonical",
			href: "/work"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var BookingRoute = Route$12.update({
	id: "/booking",
	path: "/booking",
	getParentRoute: () => Route$14
});
var CareersRoute = Route$11.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$14
});
var ContactRoute = Route$10.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$14
});
var LegalRoute = Route$9.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => Route$14
});
var PricingRoute = Route$8.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$14
});
var ServicesRoute = Route$7.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$14
});
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$14
});
var StudioRoute = Route$5.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => Route$14
});
var WorkRoute = Route$4.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$14
});
var LegalAgbRoute = Route$3.update({
	id: "/agb",
	path: "/agb",
	getParentRoute: () => LegalRoute
});
var LegalDatenschutzRoute = Route$2.update({
	id: "/datenschutz",
	path: "/datenschutz",
	getParentRoute: () => LegalRoute
});
var LegalImpressumRoute = Route$1.update({
	id: "/impressum",
	path: "/impressum",
	getParentRoute: () => LegalRoute
});
var WorkIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => WorkRoute
});
var WorkSlugRoute = Route$15.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => WorkRoute
});
var LegalRouteChildren = {
	LegalAgbRoute,
	LegalDatenschutzRoute,
	LegalImpressumRoute
};
var LegalRouteWithChildren = LegalRoute._addFileChildren(LegalRouteChildren);
var WorkRouteChildren = {
	WorkSlugRoute,
	WorkIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	BookingRoute,
	CareersRoute,
	ContactRoute,
	LegalRoute: LegalRouteWithChildren,
	PricingRoute,
	ServicesRoute,
	SitemapDotxmlRoute,
	StudioRoute,
	WorkRoute: WorkRoute._addFileChildren(WorkRouteChildren)
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
