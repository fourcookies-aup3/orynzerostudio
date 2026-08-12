import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LocaleProvider } from "@/context/LocaleContext";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
          404 / Frame not found
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tighter">Off frame.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The scene you're looking for isn't here.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block border border-border px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background"
        >
          Return to studio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
          Playback error
        </p>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tighter">
          This scene didn't load.
        </h1>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-border bg-foreground px-6 py-3 text-[10px] uppercase tracking-widest text-background"
          >
            Retry
          </button>
          <a
            href="/"
            className="border border-border px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ORYN ZERO — Cinematic Films & FPV Experiences" },
      {
        name: "description",
        content:
          "ORYN ZERO is a Swiss cinematic production studio creating immersive brand films through FPV, aerial cinematography and storytelling.",
      },
      { name: "author", content: "ORYN ZERO" },
      { name: "theme-color", content: "#050505" },
      { property: "og:site_name", content: "ORYN ZERO" },
      { property: "og:title", content: "ORYN ZERO — Cinematic Films & FPV Experiences" },
      {
        property: "og:description",
        content: "A Swiss cinematic production studio. FPV, aerial cinematography, brand films.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ORYN ZERO" },
      {
        name: "twitter:description",
        content: "Cinematic Films & FPV Experiences — Switzerland.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.jpg", type: "image/jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ORYN ZERO",
          description:
            "Swiss cinematic production studio — FPV, aerial cinematography, brand films.",
          email: "studio@orynzero.ch",
          address: { "@type": "PostalAddress", addressCountry: "CH" },
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

if (typeof window !== "undefined") {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <SiteNav />
        <main className="min-h-screen bg-background text-foreground">
          <Outlet />
        </main>
        <SiteFooter />
      </LocaleProvider>
    </QueryClientProvider>
  );
}
