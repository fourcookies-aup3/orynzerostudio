import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useLocale } from "./LocaleContext-BdhTBtGq.mjs";
import { n as SectionLabel, t as PageHero } from "./SectionHeader-9VaAjv67.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as site } from "./site-Csma6-ee.mjs";
import { i as TeamMemberPlaceholder, n as MemberImage, r as Nick_default, t as FounderImage } from "./Nick-C5RZgT9m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-D-Ainmwg.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/studio.tsx?tsr-split=component";
function StudioPage() {
	const { t } = useLocale();
	const skills = [
		t("studio.skills.founder"),
		t("studio.skills.pilot"),
		t("studio.skills.editor")
	];
	const futureRoles = [
		t("studio.future.role1"),
		t("studio.future.role2"),
		t("studio.future.role3"),
		t("studio.future.role4"),
		t("studio.future.role5")
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			eyebrow: t("studio.eyebrow"),
			title: t("studio.title"),
			intro: t("studio.intro")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-b border-border px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group relative aspect-[4/5] overflow-hidden border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FounderImage, { className: "h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-mono text-[10px] uppercase tracking-widest text-silver",
							children: t("team.finn.role")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 font-display text-2xl font-bold",
							children: "Finn Ryf"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-mono text-[10px] uppercase tracking-widest",
							children: "CH · 2026"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
						id: "// 01",
						children: t("studio.team.eyebrow")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "mt-6 text-balance-tight text-4xl font-bold leading-[1.05] md:text-5xl",
						children: t("studio.team.title")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-8 text-base leading-relaxed text-muted-foreground",
						children: t("studio.team.bio")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: t("studio.skills")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-4 grid grid-cols-2 gap-2 text-sm",
							children: skills.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "border border-border px-3 py-2",
								children: s
							}, s, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 34
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-10 flex gap-4 text-[11px] uppercase tracking-widest text-silver",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: site.social.finn.instagram,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-foreground",
								children: "Instagram"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: site.social.finn.youtube,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-foreground",
								children: "YouTube"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: site.social.finn.linkedin,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-foreground",
								children: "LinkedIn"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-b border-border px-6 py-24 bg-[#0a0a0a]/50",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
					id: "// 02",
					children: "THE CREW"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "group",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative aspect-[4/5] overflow-hidden border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MemberImage, {
									src: Nick_default,
									alt: "Nick Honstetter"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 77,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end opacity-0 transition-opacity duration-500 group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[10px] text-accent font-mono uppercase tracking-[0.2em]",
										children: t("team.nick.role")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 79,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "font-display text-xl font-bold tracking-tight",
										children: "Nick Honstetter"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 85,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: t("team.nick.role")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 86,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-4 text-sm leading-relaxed text-silver/60",
										children: t("team.nick.bio")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 89,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "group",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative aspect-[4/5] overflow-hidden border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TeamMemberPlaceholder, {
									initials: "N",
									name: "Nicola",
									roleType: "pilot"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end opacity-0 transition-opacity duration-500 group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[10px] text-accent font-mono uppercase tracking-[0.2em]",
										children: t("team.nicola.role")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 98,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 95,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "font-display text-xl font-bold tracking-tight",
										children: "Nicola"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 104,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: t("team.nicola.role")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 105,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-4 text-sm leading-relaxed text-silver/60",
										children: t("team.nicola.bio")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 108,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 103,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "group",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative aspect-[4/5] overflow-hidden border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TeamMemberPlaceholder, {
									initials: "TR",
									name: "Tate Rittscher",
									roleType: "sfx"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 117,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end opacity-0 transition-opacity duration-500 group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[10px] text-accent font-mono uppercase tracking-[0.2em]",
										children: t("team.tate.role")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 119,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 116,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "font-display text-xl font-bold tracking-tight",
										children: "Tate Rittscher"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 125,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: t("team.tate.role")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 126,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-4 text-sm leading-relaxed text-silver/60",
										children: t("team.tate.bio")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 129,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 115,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 70,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-b border-border px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, {
						id: "// 03",
						children: t("studio.future.eyebrow")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 139,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "mt-6 max-w-3xl text-balance-tight text-3xl font-bold italic md:text-4xl",
						children: t("studio.future.title")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-10 grid gap-px bg-border md:grid-cols-5",
						children: futureRoles.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "bg-background p-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
								children: t("studio.future.open")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-lg font-bold tracking-tight",
								children: r
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 17
							}, this)]
						}, r, true, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 35
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/careers",
						className: "mt-10 inline-block border border-border px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background",
						children: t("studio.future.cta")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 138,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 137,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-6 py-32",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-4xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: t("studio.focus.eyebrow") }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-8 text-balance-tight text-3xl font-bold italic leading-tight md:text-5xl",
					children: t("studio.focus.text")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 161,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 158,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 10
	}, this);
}
//#endregion
export { StudioPage as component };
