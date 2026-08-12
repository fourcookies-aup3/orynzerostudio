import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useLocale } from "./LocaleContext-BdhTBtGq.mjs";
import { t as PageHero } from "./SectionHeader-9VaAjv67.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-cx7EkJCZ.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/booking.tsx?tsr-split=component";
function BookingPage() {
	const { t } = useLocale();
	const options = [
		{
			id: "B/01",
			title: t("booking.b01.title"),
			duration: "30 min",
			body: t("booking.b01.body")
		},
		{
			id: "B/02",
			title: t("booking.b02.title"),
			duration: "60 min",
			body: t("booking.b02.body")
		},
		{
			id: "B/03",
			title: t("booking.b03.title"),
			duration: "45 min",
			body: t("booking.b03.body")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			eyebrow: t("booking.eyebrow"),
			title: t("booking.title"),
			intro: t("booking.intro")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-b border-border px-6 py-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-3",
				children: options.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "bg-background p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: [
								o.id,
								" · ",
								o.duration
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mt-3 text-2xl font-bold tracking-tight",
							children: o.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: o.body
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 15
						}, this)
					]
				}, o.id, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 29
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-4xl",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border border-border",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex aspect-[4/3] items-center justify-center bg-graphite/40 text-center",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "max-w-md p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-mono text-[10px] uppercase tracking-widest text-silver",
									children: "Calendar embed"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 49,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "mt-4 text-2xl font-bold italic",
									children: t("booking.embed.title")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: t("booking.embed.desc")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/contact",
									className: "mt-8 inline-block border border-border px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background",
									children: t("booking.embed.cta")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 54,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 10
	}, this);
}
//#endregion
export { BookingPage as component };
