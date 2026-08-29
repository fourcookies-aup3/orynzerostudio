import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { PageHero } from "@/components/site/SectionHeader";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — ORYN ZERO" },
      {
        name: "description",
        content:
          "Selected cinematic films, FPV projects, brand films and aerial productions by ORYN ZERO.",
      },
      { property: "og:title", content: "Selected Work — ORYN ZERO" },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

const categories = ["All", "FPV", "Brand Films", "Real Estate", "Events", "Commercial"] as const;

function WorkIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const current = projects.filter(
    (p) => p.status === "Pre-production" || p.status === "Production",
  );
  const past = projects.filter(
    (p) => !p.status || p.status === "Released" || p.status === "Post-production",
  );

  const filtered = useMemo(() => {
    return past.filter((p) => {
      const matchCat =
        cat === "All" ||
        p.category.toLowerCase().includes(cat.toLowerCase()) ||
        (cat === "FPV" && p.category.includes("FPV"));
      const matchQ =
        !q ||
        [p.title, p.category, p.client, p.location]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat, past]);

  return (
    <>
      <PageHero
        eyebrow="// Index"
        title="Selected Work"
        intro="A living index of cinematic productions — FPV, aerial, and brand films crafted with restraint."
      />

      {/* Current productions */}
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="text-3xl font-bold italic tracking-tighter md:text-4xl">
              Current Projects
            </h2>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [ In production ]
            </span>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {current.map((p) => (
              <div key={p.slug} className="bg-background p-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-silver">
                  {p.status}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.category} · {p.location}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.overview}</p>
                <Link
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest hover:text-silver"
                >
                  Follow the production <ArrowUpRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous work — filter/search */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold italic tracking-tighter md:text-4xl">
              Previous Work
            </h2>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex items-center gap-2 border border-border px-3">
                <Search className="size-3.5 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search projects"
                  className="bg-transparent py-2 text-xs uppercase tracking-widest outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={
                      "border border-border px-3 py-2 text-[10px] uppercase tracking-widest transition-colors " +
                      (cat === c
                        ? "bg-foreground text-background"
                        : "text-silver hover:bg-foreground/5")
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Link key={p.slug} to="/work/$slug" params={{ slug: p.slug }} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden border border-border rounded-2xl transition-all duration-700 ease-out group-hover:border-accent/40 group-hover:shadow-[0_15px_40px_rgba(212,176,98,0.15)]">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out scale-100 group-hover:scale-110 group-hover:-translate-y-1 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                        {p.id} · {p.year}
                      </p>
                      <h3 className="mt-1 text-lg font-bold">{p.title}</h3>
                    </div>
                    <ArrowUpRight className="size-5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {p.category} · {p.location}
                </p>
                {p.credits && (
                  <p className="mt-1 font-mono text-[9px] text-accent/80">
                    Main Recording/Editing: {p.credits.mainRecordingEditing} · Co-Filming/Drone Shots: {p.credits.coFilmingDroneShots}
                  </p>
                )}
              </Link>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full py-16 text-center text-sm text-muted-foreground">
                No projects match this filter.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
