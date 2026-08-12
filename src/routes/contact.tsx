import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/SectionHeader";
import { useLocale } from "@/context/LocaleContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ORYN ZERO" },
      {
        name: "description",
        content: "Enquire about a cinematic production, brand film or FPV project with ORYN ZERO.",
      },
      { property: "og:title", content: "Contact — ORYN ZERO" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional(),
  projectType: z.string(),
  budget: z.string(),
  message: z.string().trim().min(10, "Please add a short brief").max(2000),
});

function ContactPage() {
  const { t, formatPrice } = useLocale();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes = [
    t("contact.project.event"),
    t("contact.project.hotel"),
    t("contact.project.realestate"),
    t("contact.project.advertising"),
    t("contact.project.brandfilm"),
    t("contact.project.social"),
    t("contact.project.other"),
  ];

  // Dynamically format budgets using formatPrice and strip any trailing plus sign for clean range formatting
  const p1000 = formatPrice(1000).replace(/\+$/, "");
  const p3000 = formatPrice(3000).replace(/\+$/, "");
  const p7000 = formatPrice(7000).replace(/\+$/, "");

  const budgets = [
    t("contact.budget.under").replace("{amount}", p1000),
    `${p1000} – ${p3000}`,
    `${p3000} – ${p7000}`,
    t("contact.budget.above").replace("{amount}", p7000),
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        intro={t("contact.intro")}
      />
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {t("contact.aside.studio")}
              </p>
              <p className="mt-2 text-sm">{t("contact.aside.studioVal")}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {t("contact.aside.email")}
              </p>
              <a
                href="mailto:studio@orynzero.ch"
                className="mt-2 block text-lg underline decoration-border underline-offset-8 hover:text-silver"
              >
                studio@orynzero.ch
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {t("contact.aside.response")}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{t("contact.aside.responseVal")}</p>
            </div>
          </aside>

          {sent ? (
            <div className="border border-border p-12 text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-silver">
                {t("contact.success.received")}
              </p>
              <h2 className="mt-6 text-3xl font-bold italic md:text-4xl">
                {t("contact.success.title")}
              </h2>
              <p className="mt-4 text-muted-foreground">{t("contact.success.desc")}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label={t("contact.form.name")} name="name" required error={errors.name} />
                <Field label={t("contact.form.company")} name="company" />
                <Field
                  label={t("contact.form.email")}
                  name="email"
                  type="email"
                  required
                  error={errors.email}
                />
                <Field label={t("contact.form.phone")} name="phone" type="tel" />
              </div>

              <SelectField
                label={t("contact.form.projectType")}
                name="projectType"
                options={projectTypes}
              />
              <SelectField label={t("contact.form.budget")} name="budget" options={budgets} />

              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-silver">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full resize-none border border-border bg-transparent p-4 text-sm outline-none focus:border-silver"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-foreground py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-background transition-colors hover:bg-silver md:w-auto md:px-16"
              >
                {t("contact.form.send")}
              </button>
              <p className="text-xs text-muted-foreground">{t("contact.form.consent")}</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-silver">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-border bg-transparent p-3 text-sm outline-none focus:border-silver"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-silver">{label}</label>
      <select
        name={name}
        defaultValue={options[0]}
        className="mt-2 w-full border border-border bg-background p-3 text-sm outline-none focus:border-silver"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
