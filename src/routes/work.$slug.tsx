import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Play, CheckCircle2, ShieldCheck } from "lucide-react";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { getProject, projects } from "@/data/projects";
import { showreel } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — ORYN ZERO" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Case Study — ORYN ZERO Studio` },
        { name: "description", content: p.overview },
        { property: "og:title", content: `${p.title} — Case Study — ORYN ZERO Studio` },
        { property: "og:description", content: p.overview },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.cover },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
          Project not found
        </p>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight">Case Study Not Found.</h1>
        <Link
          to="/work"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-black hover:bg-white"
        >
          Return to Work
        </Link>
      </div>
    </div>
  );
}

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const currentIndex = projects.findIndex((x) => x.slug === p.slug);
  const otherProjects = projects.filter((x) => x.slug !== p.slug);
  const nextProject = otherProjects.length > 0 ? otherProjects[0] : null;

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-silver/50">
            <Link to="/work" className="hover:text-accent transition-colors">
              ← Back to Selected Work
            </Link>
            <span>
              {p.id} · {p.year}
            </span>
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
              {p.category}
            </span>
            <span className="size-1 rounded-full bg-white/20" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-silver/60">
              {p.location}
            </span>
          </div>

          <h1 className="text-balance-tight text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
            {p.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-silver/80 font-light max-w-3xl leading-relaxed">
            {p.overview}
          </p>
        </div>

        {/* Video Player */}
        <div className="mx-auto mt-12 max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
            <VideoPlayer src={p.video || showreel.src} poster={p.cover} aspect="cinemascope" />
          </div>

          {/* Transparent Credits Bar */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 font-mono text-[10px]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="uppercase tracking-widest text-accent font-bold">
                Production Credits:
              </span>
              <span className="text-white">
                <strong className="text-silver/50 font-normal">Main Recording / Editing:</strong> VISURE GMBH
              </span>
              <span className="text-white">
                <strong className="text-silver/50 font-normal">Co-Filming / FPV Aerials:</strong> Finn Ryf (ORYN ZERO)
              </span>
            </div>
            <span className="text-silver/50 uppercase tracking-widest shrink-0">
              Released 2026
            </span>
          </div>
        </div>
      </section>

      {/* Case Study Details Grid */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 items-start">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent block mb-2">
                Project Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Objective & Challenge
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-silver/80 font-light">
                {p.objective || p.overview}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 space-y-2">
                <span className="font-mono text-[8px] uppercase tracking-widest text-accent block">
                  Production Challenge
                </span>
                <p className="text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
                  {p.challenge}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 space-y-2">
                <span className="font-mono text-[8px] uppercase tracking-widest text-accent block">
                  Visual Concept
                </span>
                <p className="text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
                  {p.concept}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 space-y-2">
                <span className="font-mono text-[8px] uppercase tracking-widest text-accent block">
                  On-Site Execution
                </span>
                <p className="text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
                  {p.production}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 space-y-2">
                <span className="font-mono text-[8px] uppercase tracking-widest text-accent block">
                  Final Output & Result
                </span>
                <p className="text-xs sm:text-sm text-silver/70 font-light leading-relaxed">
                  {p.result}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Metadata */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 space-y-5">
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-4 space-y-1.5">
                <span className="font-mono text-[8px] uppercase tracking-widest text-accent font-bold block">
                  ORYN ZERO Exact Role
                </span>
                <p className="text-xs font-semibold text-white">
                  {p.exactRole}
                </p>
              </div>

              <div className="space-y-4 pt-2 font-mono text-[10px]">
                <div>
                  <span className="text-silver/40 uppercase block text-[8px]">Client</span>
                  <span className="text-white font-sans text-sm font-bold block mt-0.5">
                    {p.client}
                  </span>
                </div>
                <div>
                  <span className="text-silver/40 uppercase block text-[8px]">Location</span>
                  <span className="text-white font-sans text-sm block mt-0.5">
                    {p.location}
                  </span>
                </div>
                <div>
                  <span className="text-silver/40 uppercase block text-[8px]">Year</span>
                  <span className="text-white font-sans text-sm block mt-0.5">
                    {p.year}
                  </span>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                <span className="font-mono text-[8px] uppercase tracking-widest text-silver/40 block mb-2">
                  Delivered Services
                </span>
                <ul className="space-y-1.5 text-xs text-silver/80">
                  {p.services.map((s: string) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-accent" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 font-mono text-[9px] font-bold uppercase tracking-widest text-black hover:bg-white transition-colors"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Next Project / Return navigation */}
      <section className="border-t border-white/10 px-6 py-20 bg-gradient-to-b from-transparent to-black/60">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {nextProject ? (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-silver/50">
                Next Case Study
              </p>
              <Link
                to="/work/$slug"
                params={{ slug: nextProject.slug }}
                className="mt-2 flex items-center gap-3 text-2xl sm:text-4xl font-bold tracking-tight text-white hover:text-accent transition-colors"
              >
                {nextProject.title} <ArrowUpRight className="size-6 text-accent" />
              </Link>
            </div>
          ) : (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-silver/50">
                Studio Archive
              </p>
              <Link
                to="/work"
                className="mt-2 flex items-center gap-3 text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-accent transition-colors"
              >
                Explore Selected Work & Showreel <ArrowUpRight className="size-5 text-accent" />
              </Link>
            </div>
          )}

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black hover:bg-accent transition-all shrink-0"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
