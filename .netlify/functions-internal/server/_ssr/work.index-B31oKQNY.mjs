import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as PageHero } from "./SectionHeader-9VaAjv67.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as projects } from "./projects-DleLoEdc.mjs";
import { O as ArrowUpRight, l as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.index-B31oKQNY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/work.index.tsx?tsr-split=component";
var categories = [
	"All",
	"FPV",
	"Brand Films",
	"Real Estate",
	"Events",
	"Commercial"
];
function WorkIndex() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const current = projects.filter((p) => p.status === "Pre-production" || p.status === "Production");
	const past = projects.filter((p) => !p.status || p.status === "Released" || p.status === "Post-production");
	const filtered = (0, import_react.useMemo)(() => {
		return past.filter((p) => {
			const matchCat = cat === "All" || p.category.toLowerCase().includes(cat.toLowerCase()) || cat === "FPV" && p.category.includes("FPV");
			const matchQ = !q || [
				p.title,
				p.category,
				p.client,
				p.location
			].join(" ").toLowerCase().includes(q.toLowerCase());
			return matchCat && matchQ;
		});
	}, [
		q,
		cat,
		past
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			eyebrow: "// Index",
			title: "Selected Work",
			intro: "A living index of cinematic productions — FPV, aerial, and brand films crafted with restraint."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-b border-border px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-10 flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-3xl font-bold italic tracking-tighter md:text-4xl",
						children: "Current Projects"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: "[ In production ]"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-px bg-border md:grid-cols-2",
					children: current.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-background p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-mono text-[10px] uppercase tracking-widest text-silver",
								children: p.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "mt-3 text-2xl font-bold tracking-tight",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: [
									p.category,
									" · ",
									p.location
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-6 text-sm leading-relaxed text-muted-foreground",
								children: p.overview
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/work/$slug",
								params: { slug: p.slug },
								className: "mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest hover:text-silver",
								children: ["Follow the production ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 41
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 17
							}, this)
						]
					}, p.slug, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 31
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-3xl font-bold italic tracking-tighter md:text-4xl",
						children: "Previous Work"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col gap-4 md:flex-row md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 border border-border px-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-3.5 text-muted-foreground" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Search projects",
								className: "bg-transparent py-2 text-xs uppercase tracking-widest outline-none placeholder:text-muted-foreground"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap gap-1",
							children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setCat(c),
								className: "border border-border px-3 py-2 text-[10px] uppercase tracking-widest transition-colors " + (cat === c ? "bg-foreground text-background" : "text-silver hover:bg-foreground/5"),
								children: c
							}, c, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 38
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
					children: [filtered.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/work/$slug",
						params: { slug: p.slug },
						className: "group block",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative aspect-[4/3] overflow-hidden border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: p.cover,
									alt: p.title,
									loading: "lazy",
									className: "h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 79,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute bottom-4 left-4 right-4 flex items-end justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-mono text-[10px] uppercase tracking-widest text-white/70",
										children: [
											p.id,
											" · ",
											p.year
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 82,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "mt-1 text-lg font-bold",
										children: p.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 85,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 81,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 87,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: [
								p.category,
								" · ",
								p.location
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 17
						}, this)]
					}, p.slug, true, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 32
					}, this)), filtered.length === 0 && /* @__PURE__ */ (void 0)("p", {
						className: "col-span-full py-16 text-center text-sm text-muted-foreground",
						children: "No projects match this filter."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 39
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 10
	}, this);
}
//#endregion
export { WorkIndex as component };
