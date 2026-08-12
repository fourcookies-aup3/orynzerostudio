import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
        { title: `${p.title} — ORYN ZERO` },
        { name: "description", content: p.overview },
        { property: "og:title", content: `${p.title} — ORYN ZERO` },
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
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tighter">Off the slate.</h1>
        <Link
          to="/work"
          className="mt-8 inline-block border border-border px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background"
        >
          Return to index
        </Link>
      </div>
    </div>
  );
}

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const next = projects[(projects.findIndex((x) => x.slug === p.slug) + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="pt-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <Link to="/work" className="hover:text-silver">
                ← Selected Work
              </Link>
              <span>
                {p.id} · {p.year}
              </span>
            </div>
            <div className="mb-8 flex items-baseline gap-4 text-silver">
              <span className="font-mono text-[10px] uppercase tracking-widest">{p.category}</span>
              {p.status && (
                <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">
                  {p.status}
                </span>
              )}
            </div>
            <h1 className="text-balance-tight text-6xl font-bold leading-[0.9] md:text-8xl">
              {p.title}
            </h1>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6">
          <VideoPlayer src={showreel.src} poster={p.cover} aspect="cinemascope" />
        </div>
      </section>

      {/* Project meta grid */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold italic md:text-4xl">Project Overview</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.overview}</p>
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              <Block label="Challenge" body={p.challenge} />
              <Block label="Concept" body={p.concept} />
              <Block label="Production" body={p.production} />
              <Block label="Result" body={p.result} />
            </div>
          </div>

          <aside className="space-y-10 border border-white/5 rounded-3xl bg-white/[0.01] p-8">
            <Meta label="Production" value="ORYN ZERO" />
            <Meta label="Client" value={p.client} />
            <Meta label="Location" value={p.location} />
            <Meta label="Year" value={String(p.year)} />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Services
              </p>
              <ul className="mt-3 space-y-1 text-sm text-silver/60">
                {p.services.map((s: string) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Next */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto flex max-w-7xl items-end justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Next project
            </p>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="mt-4 flex items-center gap-4 text-4xl font-bold tracking-tighter hover:text-silver md:text-6xl"
            >
              {next.title} <ArrowUpRight className="size-8" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-silver">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}
