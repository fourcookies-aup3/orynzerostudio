import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useLocale } from "./LocaleContext-BdhTBtGq.mjs";
import { t as PageHero } from "./SectionHeader-9VaAjv67.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DUA0oCOe.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/services.tsx?tsr-split=component";
function ServicesPage() {
	const { t } = useLocale();
	const services = [
		{
			id: "S/01",
			title: t("services.s01.title"),
			body: t("services.s01.body")
		},
		{
			id: "S/02",
			title: t("services.s02.title"),
			body: t("services.s02.body")
		},
		{
			id: "S/03",
			title: t("services.s03.title"),
			body: t("services.s03.body")
		},
		{
			id: "S/04",
			title: t("services.s04.title"),
			body: t("services.s04.body")
		},
		{
			id: "S/05",
			title: t("services.s05.title"),
			body: t("services.s05.body")
		},
		{
			id: "S/06",
			title: t("services.s06.title"),
			body: t("services.s06.body")
		},
		{
			id: "S/07",
			title: t("services.s07.title"),
			body: t("services.s07.body")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
		eyebrow: t("services.eyebrow"),
		title: t("services.title"),
		intro: t("services.intro")
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl divide-y divide-border border-y border-border",
			children: services.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "group grid grid-cols-12 items-start gap-6 py-10 transition-colors hover:bg-foreground/[0.02]",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "col-span-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:col-span-1",
						children: s.id
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "col-span-10 md:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-3xl font-bold tracking-tight transition-transform group-hover:translate-x-2 md:text-4xl",
							children: s.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "col-span-12 md:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-base leading-relaxed text-muted-foreground",
							children: s.body
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 15
					}, this)
				]
			}, s.id, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 30
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-16 text-center",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/contact",
				className: "border border-border px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-foreground hover:text-background",
				children: t("services.cta")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 55,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 39,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
}
//#endregion
export { ServicesPage as component };
