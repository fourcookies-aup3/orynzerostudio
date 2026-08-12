import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useLocale } from "./LocaleContext-BdhTBtGq.mjs";
import { t as PageHero } from "./SectionHeader-9VaAjv67.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-vaCwbd8G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/careers.tsx?tsr-split=component";
var schema = objectType({
	name: stringType().trim().min(1).max(100),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().max(40).optional(),
	city: stringType().trim().max(100).optional(),
	position: stringType(),
	portfolio: stringType().trim().max(500).optional(),
	message: stringType().trim().min(10).max(2e3)
});
function CareersPage() {
	const { t } = useLocale();
	const [sent, setSent] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const positions = [
		t("job.fpv.title"),
		t("job.editor.title"),
		t("job.cameraman.title"),
		t("job.sound.title"),
		t("job.vfx.title"),
		t("job.creative.title")
	];
	const onSubmit = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const data = Object.fromEntries(form.entries());
		const parsed = schema.safeParse(data);
		if (!parsed.success) {
			const errs = {};
			parsed.error.issues.forEach((i) => {
				errs[String(i.path[0])] = i.message;
			});
			setErrors(errs);
			return;
		}
		setErrors({});
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			eyebrow: t("page.careers.eyebrow"),
			title: t("page.careers.title"),
			intro: t("page.careers.intro")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-b border-border px-6 py-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mb-8 flex items-baseline justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-2xl font-bold italic md:text-3xl",
							children: t("page.careers.openPositions")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: "[ Updated 2026 ]"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border border-border p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-mono text-[10px] uppercase tracking-widest text-silver",
								children: t("page.careers.currently")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-2xl font-bold italic md:text-3xl",
								children: t("page.careers.noPositions")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: t("page.careers.welcome")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: t("page.careers.planToGrow")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: positions.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "border border-border px-3 py-2 text-xs uppercase tracking-widest text-silver",
								children: p
							}, p, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 35
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-3xl font-bold italic md:text-4xl",
						children: t("page.careers.openApplication")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-muted-foreground",
						children: t("page.careers.details")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 11
					}, this),
					sent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-10 border border-border p-10 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-mono text-[10px] uppercase tracking-widest text-silver",
							children: t("page.careers.received")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mt-4 text-2xl font-bold italic",
							children: t("page.careers.thankYou")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 19
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						onSubmit,
						className: "mt-10 space-y-6",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-6 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, {
										label: t("page.careers.yourName"),
										name: "name",
										error: errors.name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 87,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, {
										label: t("page.careers.yourEmail"),
										name: "email",
										type: "email",
										error: errors.email
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 88,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, {
										label: t("page.careers.phone"),
										name: "phone",
										type: "tel"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 89,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, {
										label: t("page.careers.city"),
										name: "city"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 90,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
								label: t("page.careers.position"),
								name: "position",
								options: positions
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, {
								label: t("page.careers.portfolio"),
								name: "portfolio"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "font-mono text-[10px] uppercase tracking-widest text-silver",
									children: t("page.careers.about")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
									name: "message",
									rows: 6,
									className: "mt-2 w-full resize-none border border-border bg-transparent p-4 text-sm outline-none focus:border-silver"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 17
								}, this),
								errors.message && /* @__PURE__ */ (void 0)("p", {
									className: "mt-1 text-xs text-destructive",
									children: errors.message
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 36
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "submit",
								className: "w-full bg-foreground py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-background hover:bg-silver md:w-auto md:px-16",
								children: t("page.careers.send")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 101,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 22
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 73,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
}
function F({ label, name, type = "text", error }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
			className: "font-mono text-[10px] uppercase tracking-widest text-silver",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 121,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			name,
			type,
			className: "mt-2 w-full border border-border bg-transparent p-3 text-sm outline-none focus:border-silver"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 122,
			columnNumber: 7
		}, this),
		error && /* @__PURE__ */ (void 0)("p", {
			className: "mt-1 text-xs text-destructive",
			children: error
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 123,
			columnNumber: 17
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 120,
		columnNumber: 10
	}, this);
}
function Select({ label, name, options }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "font-mono text-[10px] uppercase tracking-widest text-silver",
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 136,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
		name,
		defaultValue: options[0],
		className: "mt-2 w-full border border-border bg-background p-3 text-sm outline-none focus:border-silver",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: o }, o, false, {
			fileName: _jsxFileName,
			lineNumber: 138,
			columnNumber: 27
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 137,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 135,
		columnNumber: 10
	}, this);
}
//#endregion
export { CareersPage as component };
