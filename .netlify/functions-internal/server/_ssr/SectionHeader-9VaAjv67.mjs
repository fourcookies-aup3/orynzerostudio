import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeader-9VaAjv67.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/site/SectionHeader.tsx";
function SectionLabel({ children, id }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "font-mono text-[10px] uppercase tracking-[0.3em] text-silver",
		children: [id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "mr-3 text-muted-foreground",
			children: id
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 13
		}, this) : null, children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
function PageHero({ eyebrow, title, intro, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: cn("border-b border-border px-6 pb-16 pt-40 md:pb-24 md:pt-48", className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionLabel, { children: eyebrow }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-6 max-w-5xl text-balance-tight text-5xl font-bold leading-[0.95] md:text-7xl",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				intro ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground",
					children: intro
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 11
				}, this) : null
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
//#endregion
export { SectionLabel as n, PageHero as t };
