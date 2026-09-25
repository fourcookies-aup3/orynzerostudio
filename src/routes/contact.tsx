import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/SectionHeader";
import { CheckCircle, Mail, Phone, MapPin, Clock, ArrowUpRight, Loader2, Send } from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Project Brief — ORYN ZERO Studio" },
      {
        name: "description",
        content:
          "Start a project or send a project brief to ORYN ZERO Studio in Stäfa, Switzerland. Hear directly from the founder within one working day.",
      },
      { property: "og:title", content: "Contact & Project Brief — ORYN ZERO Studio" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(40).optional(),
  projectType: z.string(),
  budget: z.string(),
  message: z.string().trim().min(10, "Please share a brief description (at least 10 characters)").max(2000),
});

const PROJECT_TYPES = [
  "Event Filming & FPV Coverage",
  "Commercial / Brand Film",
  "Architectural & Location FPV",
  "Automotive & Sport Chase Lines",
  "Post-Production & Color Grading",
  "Other / Custom Collaboration",
];

const BUDGET_OPTIONS = [
  "Not sure yet",
  "CHF 2,500 – 5,000",
  "CHF 5,000 – 10,000",
  "CHF 10,000+",
  "Custom Budget",
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_OPTIONS[0],
    message: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(formData);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Project Inquiry: ${formData.projectType} from ${formData.name}`,
        }),
      });
    } catch {
      // Allow user experience to proceed
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <PageHero
        eyebrow="Direct Inquiries"
        title="Start a Project"
        intro="Tell us what you're planning, where it takes place, and when you need it. You'll hear directly from the founder within one working day."
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 items-start">
          {/* Left: Contact Info & Response Promise */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 space-y-6">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-silver/40 block">
                  Studio Location
                </span>
                <p className="mt-1 text-sm font-semibold text-white">Stäfa, Zürich, Switzerland</p>
                <p className="text-xs text-silver/60 mt-0.5">Available across Switzerland and Europe</p>
              </div>

              <div className="border-t border-white/5 pt-5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-silver/40 block">
                  Official Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1.5 inline-block text-base font-semibold text-accent underline underline-offset-4 hover:text-white transition-colors"
                >
                  {site.email}
                </a>
              </div>

              <div className="border-t border-white/5 pt-5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-silver/40 block">
                  Response Commitment
                </span>
                <p className="mt-1 text-xs text-silver/80 font-light leading-relaxed">
                  We review every brief personally. You will receive a direct reply from founder Finn Ryf within one working day.
                </p>
              </div>

              <div className="border-t border-white/5 pt-5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-silver/40 block mb-2">
                  Direct Call
                </span>
                <a
                  href="/booking"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-accent transition-colors"
                >
                  <span>Book a 30-Minute Intro Call</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Credibility badges */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 space-y-3 font-mono text-[9px] text-silver/60">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" />
                <span>Swiss BAZL / FOCA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" />
                <span>EASA Certified Drone Pilots (A1/A3, A2)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" />
                <span>Commercial Aviation Liability Insurance</span>
              </div>
            </div>
          </aside>

          {/* Right: Project Brief Form */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/10 bg-[#0a0a0d] p-8 sm:p-12 shadow-2xl">
              {sent ? (
                <div className="py-14 text-center space-y-4">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent/10 border border-accent/30 text-accent">
                    <CheckCircle className="size-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">
                    Project Brief Received
                  </h2>
                  <p className="text-sm text-silver/70 max-w-md mx-auto font-light leading-relaxed">
                    Thank you for reaching out. We have received your project details and will review your timeline and requirements. Finn will get back to you within one working day.
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          projectType: PROJECT_TYPES[0],
                          budget: BUDGET_OPTIONS[0],
                          message: "",
                        });
                      }}
                      className="rounded-full border border-white/20 px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-silver hover:text-white hover:border-white transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Project Brief
                    </h2>
                    <p className="mt-1 text-xs text-silver/60 font-light">
                      Fill out the fields below or email us directly at {site.email}.
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-widest text-silver/60 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Finn Ryf"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-widest text-silver/60 block mb-1.5">
                        Company or Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Brand / Agency / Venue"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-widest text-silver/60 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hello@company.ch"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
                      />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-widest text-silver/60 block mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+41 00 000 00 00"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-widest text-silver/60 block mb-1.5">
                        Project Scope / Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#0d0d10] px-4 py-3 text-sm text-white focus:border-accent focus:outline-none transition-colors"
                      >
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-widest text-silver/60 block mb-1.5">
                        Anticipated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#0d0d10] px-4 py-3 text-sm text-white focus:border-accent focus:outline-none transition-colors"
                      >
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-silver/60 block mb-1.5">
                      Tell us about your project *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Where does the shoot take place? What are your key dates, goals, or desired visual references?"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white placeholder:text-white/20 focus:border-accent focus:outline-none resize-none transition-colors"
                    />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(212,176,98,0.2)] disabled:opacity-70 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="size-4 animate-spin text-black" />
                          <span>Sending Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <Send className="size-3.5" />
                        </>
                      )}
                    </button>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-silver/40">
                      Response within 1 working day
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
