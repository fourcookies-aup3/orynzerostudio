import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useLocale } from "./LocaleContext-BdhTBtGq.mjs";
import { t as PageHero } from "./SectionHeader-9VaAjv67.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D9EIZeSH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/contact.tsx?tsr-split=component";
var schema = objectType({
	name: stringType().trim().min(1, "Required").max(100),
	company: stringType().trim().max(120).optional(),
	email: stringType().trim().email("Invalid email").max(255),
	phone: stringType().trim().max(40).optional(),
	projectType: stringType(),
	budget: stringType(),
	message: stringType().trim().min(10, "Please add a short brief").max(2e3)
});
function ContactPage() {
	const { t, formatPrice } = useLocale();
	const [sent, setSent] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const projectTypes = [
		t("contact.project.event"),
		t("contact.project.hotel"),
		t("contact.project.realestate"),
		t("contact.project.advertising"),
		t("contact.project.brandfilm"),
		t("contact.project.social"),
		t("contact.project.other")
	];
	const p1000 = formatPrice(1e3).replace(/\+$/, "");
	const p3000 = formatPrice(3e3).replace(/\+$/, "");
	const p7000 = formatPrice(7e3).replace(/\+$/, "");
	const budgets = [
		t("contact.budget.under").replace("{amount}", p1000),
		`${p1000} – ${p3000}`,
		`${p3000} – ${p7000}`,
		t("contact.budget.above").replace("{amount}", p7000)
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
		eyebrow: t("contact.eyebrow"),
		title: t("contact.title"),
		intro: t("contact.intro")
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: t("contact.aside.studio")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-sm",
						children: t("contact.aside.studioVal")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: t("contact.aside.email")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "mailto:studio@orynzero.ch",
						className: "mt-2 block text-lg underline decoration-border underline-offset-8 hover:text-silver",
						children: "studio@orynzero.ch"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: t("contact.aside.response")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t("contact.aside.responseVal")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 11
			}, this), sent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border border-border p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-mono text-[10px] uppercase tracking-widest text-silver",
						children: t("contact.success.received")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "mt-6 text-3xl font-bold italic md:text-4xl",
						children: t("contact.success.title")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-muted-foreground",
						children: t("contact.success.desc")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 19
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit,
				className: "space-y-6",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
								label: t("contact.form.name"),
								name: "name",
								required: true,
								error: errors.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
								label: t("contact.form.company"),
								name: "company"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
								label: t("contact.form.email"),
								name: "email",
								type: "email",
								required: true,
								error: errors.email
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
								label: t("contact.form.phone"),
								name: "phone",
								type: "tel"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectField, {
						label: t("contact.form.projectType"),
						name: "projectType",
						options: projectTypes
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectField, {
						label: t("contact.form.budget"),
						name: "budget",
						options: budgets
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "font-mono text-[10px] uppercase tracking-widest text-silver",
							children: t("contact.form.message")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							name: "message",
							rows: 6,
							required: true,
							className: "mt-2 w-full resize-none border border-border bg-transparent p-4 text-sm outline-none focus:border-silver"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 17
						}, this),
						errors.message && /* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-xs text-destructive",
							children: errors.message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 36
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "submit",
						className: "w-full bg-foreground py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-background transition-colors hover:bg-silver md:w-auto md:px-16",
						children: t("contact.form.send")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground",
						children: t("contact.form.consent")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 22
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 10
	}, this);
}
function Field({ label, name, type = "text", required, error }) {
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
			required,
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
function SelectField({ label, name, options }) {
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
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
			value: o,
			children: o
		}, o, false, {
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
export { ContactPage as component };
