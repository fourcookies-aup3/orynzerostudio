import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as showreel } from "./site-Csma6-ee.mjs";
import { n as projects } from "./projects-DleLoEdc.mjs";
import { t as Route } from "./work._slug-DrTUsBni.mjs";
import { O as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as VideoPlayer } from "./VideoPlayer-Ckge9L1M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-CJRcZ1M6.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/work.$slug.tsx?tsr-split=component";
function ProjectPage() {
	const { project: p } = Route.useLoaderData();
	const next = projects[(projects.findIndex((x) => x.slug === p.slug) + 1) % projects.length];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "pt-28",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mb-6 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/work",
								className: "hover:text-silver",
								children: "← Selected Work"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 18,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
								p.id,
								" · ",
								p.year
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 21,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 17,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mb-8 flex items-baseline gap-4 text-silver",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-[10px] uppercase tracking-widest",
								children: p.category
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 26,
								columnNumber: 15
							}, this), p.status && /* @__PURE__ */ (void 0)("span", {
								className: "border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest",
								children: p.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 27,
								columnNumber: 28
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "text-balance-tight text-6xl font-bold leading-[0.9] md:text-8xl",
							children: p.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto mt-16 max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VideoPlayer, {
					src: showreel.src,
					poster: p.cover,
					aspect: "cinemascope"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-t border-border px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto grid max-w-7xl gap-16 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-3xl font-bold italic md:text-4xl",
							children: "Project Overview"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-6 text-lg leading-relaxed text-muted-foreground",
							children: p.overview
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-16 grid gap-12 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
									label: "Challenge",
									body: p.challenge
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 49,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
									label: "Concept",
									body: p.concept
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 50,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
									label: "Production",
									body: p.production
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
									label: "Result",
									body: p.result
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
					className: "space-y-10 border border-white/5 rounded-3xl bg-white/[0.01] p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {
							label: "Production",
							value: "ORYN ZERO"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {
							label: "Client",
							value: p.client
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {
							label: "Location",
							value: p.location
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {
							label: "Year",
							value: String(p.year)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: "Services"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-3 space-y-1 text-sm text-silver/60",
							children: p.services.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: ["· ", s] }, s, true, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 48
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-t border-border px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-8 flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-2xl font-bold italic md:text-3xl",
						children: "Behind the frame"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: "[ Stills · BTS ]"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						p.cover,
						p.cover,
						p.cover
					].map((src, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "aspect-[4/3] overflow-hidden border border-border",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src,
							alt: `${p.title} still ${i + 1}`,
							loading: "lazy",
							className: "h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 17
						}, this)
					}, i, false, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 58
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 74,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-t border-border px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto flex max-w-7xl items-end justify-between",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
					children: "Next project"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/work/$slug",
					params: { slug: next.slug },
					className: "mt-4 flex items-center gap-4 text-4xl font-bold tracking-tighter hover:text-silver md:text-6xl",
					children: [
						next.title,
						" ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-8" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 28
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 91,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
function Block({ label, body }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "font-mono text-[10px] uppercase tracking-widest text-silver",
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 115,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "mt-3 text-sm leading-relaxed text-muted-foreground",
		children: body
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 116,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 114,
		columnNumber: 10
	}, this);
}
function Meta({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 127,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "mt-1 text-sm",
		children: value
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 130,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 126,
		columnNumber: 10
	}, this);
}
//#endregion
export { ProjectPage as component };
