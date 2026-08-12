import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { OrynLogo } from "./OrynLogo";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-12 pt-24 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/5 bg-black/25 p-8 sm:p-12 backdrop-blur-md">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <OrynLogo size="md" />
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-silver/60">
              Swiss-crafted cinematography and high-velocity FPV visuals. Based in Stäfa,
              Switzerland. Available worldwide for selected creative collaborations.
            </p>
            <div className="mt-8">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block">
                Inquiries
              </span>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block text-sm font-semibold tracking-wider text-accent underline underline-offset-4 hover:text-white transition-colors"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="mb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              Social
            </span>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors"
            >
              YouTube
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="mb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              Studio
            </span>
            <Link
              to="/work"
              className="text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              to="/studio"
              className="text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors"
            >
              Studio
            </Link>
            <Link
              to="/services"
              className="text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-xs uppercase tracking-widest text-silver/70 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center">
          <span>© 2026 ORYN ZERO. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/legal/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link to="/legal/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
          <span className="italic text-accent/70 font-sans tracking-normal lowercase first-letter:uppercase">
            Visuals through movement.
          </span>
        </div>
      </div>
    </footer>
  );
}
