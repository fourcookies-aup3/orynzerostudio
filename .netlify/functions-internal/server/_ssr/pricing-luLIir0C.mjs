import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useLocale } from "./LocaleContext-BdhTBtGq.mjs";
import { t as PageHero } from "./SectionHeader-9VaAjv67.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-luLIir0C.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pricing.tsx?tsr-split=component";
function PricingPage() {
	const { t, formatPrice } = useLocale();
	const packages = [
		{
			edition: "Edition 01",
			name: "Starter",
			price: formatPrice(2500),
			tagline: t("pricing.starter.tagline"),
			features: [
				t("pricing.starter.f1"),
				t("pricing.starter.f2"),
				t("pricing.starter.f3"),
				t("pricing.starter.f4")
			]
		},
		{
			edition: "Edition 02",
			name: "Business",
			price: formatPrice(5500),
			tagline: t("pricing.business.tagline"),
			features: [
				t("pricing.business.f1"),
				t("pricing.business.f2"),
				t("pricing.business.f3"),
				t("pricing.business.f4")
			],
			recommended: true
		},
		{
			edition: "Edition 03",
			name: "Premium",
			price: formatPrice("request"),
			tagline: t("pricing.premium.tagline"),
			features: [
				t("pricing.premium.f1"),
				t("pricing.premium.f2"),
				t("pricing.premium.f3"),
				t("pricing.premium.f4")
			]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
		eyebrow: t("pricing.eyebrow"),
		title: t("pricing.title"),
		intro: t("pricing.intro")
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-7xl border border-border bg-background md:grid-cols-3",
			children: packages.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex flex-col p-10 " + (i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""),
				children: [
					p.recommended && /* @__PURE__ */ (void 0)("div", {
						className: "absolute right-0 top-0 bg-silver px-3 py-1.5 text-[8px] font-bold uppercase tracking-widest text-background",
						children: t("pricing.recommended")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 33
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
						children: p.edition
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "mt-4 text-3xl font-bold italic",
						children: p.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 text-3xl font-bold tracking-tighter",
						children: p.price
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: p.tagline
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-8 flex-1 space-y-3 text-sm text-muted-foreground",
						children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: ["· ", f] }, f, true, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 38
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/contact",
						className: "mt-10 block w-full py-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] transition-colors " + (p.recommended ? "bg-foreground text-background hover:bg-silver" : "border border-border hover:bg-foreground hover:text-background"),
						children: t("pricing.requestQuote")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 15
					}, this)
				]
			}, p.name, true, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 35
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground",
			children: t("pricing.footerText")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 51,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 10
	}, this);
}
//#endregion
export { PricingPage as component };
