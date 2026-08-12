import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getProject } from "./projects-DleLoEdc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-DrTUsBni.js
var $$splitNotFoundComponentImporter = () => import("./work._slug-BDXzq9je.mjs");
var $$splitComponentImporter = () => import("./work._slug-CJRcZ1M6.mjs");
var Route = createFileRoute("/work/$slug")({
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Project not found — ORYN ZERO" }, {
			name: "robots",
			content: "noindex"
		}] };
		const p = loaderData.project;
		return {
			meta: [
				{ title: `${p.title} — ORYN ZERO` },
				{
					name: "description",
					content: p.overview
				},
				{
					property: "og:title",
					content: `${p.title} — ORYN ZERO`
				},
				{
					property: "og:description",
					content: p.overview
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:image",
					content: p.cover
				},
				{
					property: "og:url",
					content: `/work/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/work/${params.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
