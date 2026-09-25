import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { OrynLogo } from "./OrynLogo";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-12 pt-20 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-black/40 p-8 sm:p-12 backdrop-blur-md">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <OrynLogo size="md" />
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-silver/70">
              Boutique film studio based in Stäfa, Switzerland. Combining dynamic FPV flying,
              ground cinematography, and post-production for brands, events, and places.
            </p>
            <div className="mt-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-silver/50 block">
                Direct Inquiries
              </span>
              <a
                href={`mailto:${site.email}`}
                className="mt-1.5 inline-block text-sm font-semibold tracking-wider text-accent underline underline-offset-4 hover:text-white transition-colors"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="mb-1 font-mono text-[9px] uppercase tracking-widest text-silver/50">
              Studio
            </span>
            <Link
              to="/work"
              className="text-xs uppercase tracking-widest text-silver/80 hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              to="/services"
              className="text-xs uppercase tracking-widest text-silver/80 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              to="/studio"
              className="text-xs uppercase tracking-widest text-silver/80 hover:text-white transition-colors"
            >
              Studio
            </Link>
            <Link
              to="/contact"
              className="text-xs uppercase tracking-widest text-silver/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/careers"
              className="text-xs uppercase tracking-widest text-silver/80 hover:text-white transition-colors"
            >
              Careers
            </Link>
            <a
              href="https://www.crowdify.net/de/projekt/orynzero-studio-am-start"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-accent/90 hover:text-white transition-colors"
            >
              Crowdfunding ↗
            </a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="mb-1 font-mono text-[9px] uppercase tracking-widest text-silver/50">
              Connect
            </span>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-silver/80 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-silver/80 hover:text-white transition-colors"
            >
              YouTube
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-silver/80 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-xs uppercase tracking-widest text-silver/80 hover:text-white transition-colors"
            >
              studio@orynzero.ch
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-silver/50 sm:flex-row sm:items-center">
          <span>© 2026 ORYN ZERO Studio. All rights reserved. Stäfa, Switzerland.</span>
          <div className="flex gap-6">
            <Link to="/legal/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link to="/legal/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
          <span className="italic text-accent/80 font-sans tracking-normal lowercase first-letter:uppercase text-xs">
            Films built around movement.
          </span>
        </div>
      </div>
    </footer>
  );
}
