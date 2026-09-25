import { cn } from "@/lib/utils";

export function SectionLabel({ children, id }: { children: string; id?: string }) {
  const cleanId = id ? id.replace(/^\/\/\s*/, "").trim() : null;
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-silver/80">
      {cleanId ? <span className="mr-2 text-accent font-semibold">{cleanId} ·</span> : null}
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-border px-6 pb-16 pt-40 md:pb-24 md:pt-48", className)}>
      <div className="mx-auto max-w-7xl">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mt-6 max-w-5xl text-balance-tight text-5xl font-bold leading-[0.95] md:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
