import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as Camera, S as Compass, o as Terminal, r as Volume2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Nick-C5RZgT9m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var Finn_default = "/assets/Finn-DyCf1K3e.jpeg";
var _jsxFileName$2 = "/app/applet/src/components/site/FounderImage.tsx";
function FounderImage({ alt = "Finn Ryf — Founder of ORYN ZERO", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
		src: Finn_default,
		alt,
		loading: "lazy",
		referrerPolicy: "no-referrer",
		className
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/site/TeamMemberPlaceholder.tsx";
function TeamMemberPlaceholder({ initials, name, roleType }) {
	const [signalStrength, setSignalStrength] = (0, import_react.useState)(98);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setSignalStrength(Math.floor(Math.random() * 5) + 95);
		}, 3e3);
		return () => clearInterval(interval);
	}, []);
	const getRoleDetails = () => {
		switch (roleType) {
			case "co-founder": return {
				label: "CO-PILOT LINKED",
				sublabel: "CREATIVE & BRAND STRATEGY",
				icon: Camera,
				code: "OZ-02-NICK"
			};
			case "pilot": return {
				label: "FPV LINK STANDBY",
				sublabel: "AERIAL RECONNAISSANCE",
				icon: Compass,
				code: "OZ-03-NICOLA"
			};
			case "sfx": return {
				label: "AV PASS LIVE",
				sublabel: "POST-PROD AUDIO/VIDEO",
				icon: Volume2,
				code: "OZ-04-TATE"
			};
			default: return {
				label: "FEED OFFLINE",
				sublabel: "COMPILING DIGITAL PROFILE",
				icon: Terminal,
				code: "OZ-0X-PENDING"
			};
		}
	};
	const details = getRoleDetails();
	const Icon = details.icon;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#080808] border border-white/5 p-6 select-none font-mono text-silver",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 59,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute top-4 left-4 flex flex-col gap-1 text-[8px] text-silver/40 tracking-wider",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["REF: ", details.code] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 63,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "SYS_STATUS: ACTIVE" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 64,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 62,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute top-4 right-4 flex items-center gap-1.5 text-[8px] text-accent font-bold tracking-wider",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "relative flex h-1.5 w-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/70 opacity-75" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 69,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 70,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 68,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
					"SIG: ",
					signalStrength,
					"%"
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 72,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 67,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-3 left-3 size-2 border-t border-l border-white/20" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 76,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-3 right-3 size-2 border-t border-r border-white/20" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 77,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-3 left-3 size-2 border-b border-l border-white/20" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 78,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-3 right-3 size-2 border-b border-r border-white/20" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 79,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 flex flex-col items-center gap-4 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative flex items-center justify-center size-20 rounded-full border border-white/10 bg-black/60 group-hover:border-accent/40 group-hover:scale-105 transition-all duration-500",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-2 rounded-full border border-dashed border-white/5 group-hover:border-accent/20 animate-[spin_60s_linear_infinite]" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 84,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display text-2xl font-bold text-white tracking-widest pl-1",
						children: initials
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 85,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 83,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col items-center text-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "inline-flex items-center gap-1.5 rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[8px] font-bold text-silver uppercase tracking-wider",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-3 text-accent" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 92,
							columnNumber: 13
						}, this), details.label]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 91,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "mt-1.5 text-[9px] text-silver/40 uppercase tracking-widest",
						children: details.sublabel
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 95,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 90,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 82,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute bottom-4 left-4 right-4 flex justify-between text-[7px] text-silver/30 font-mono tracking-widest",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "LOC: SWITZERLAND" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 103,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "IMAGE: PENDING_UPLOAD" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 104,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 102,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 57,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/site/MemberImage.tsx";
function MemberImage({ src, alt, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
		src,
		alt,
		loading: "lazy",
		referrerPolicy: "no-referrer",
		className: cn("h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]", className)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
var Nick_default = "/assets/Nick-CQXJt83m.jpeg";
//#endregion
export { TeamMemberPlaceholder as i, MemberImage as n, Nick_default as r, FounderImage as t };
