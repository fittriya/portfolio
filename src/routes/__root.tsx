import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

import { EMAIL } from "@/data/portfolio";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {}, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { title: "Fittriya Nurul — Portfolio" },
      { name: "description", content: "Software portfolio of Fittriya Nurul Syuhada Binti Rosli." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const navItem =
  "shrink-0 rounded-full px-3 py-1.5 text-sm text-foreground/75 transition hover:bg-white/50 hover:text-foreground data-[status=active]:bg-primary data-[status=active]:font-medium data-[status=active]:text-primary-foreground";

function SiteNav() {
  return (
    <nav className="sticky top-4 z-20 mx-auto mt-6 flex w-fit max-w-[95vw] items-center gap-1 overflow-x-auto rounded-full glass px-4 py-2 text-foreground">
      <Link to="/" className="mr-3 shrink-0 font-bold" activeOptions={{ exact: true }}>
        fittriya<span className="text-primary/60">.</span>
      </Link>
      <Link to="/about" className={navItem}>
        About
      </Link>
      <Link to="/skills" className={navItem}>
        Skills
      </Link>
      <Link to="/education" className={navItem}>
        Education
      </Link>
      <Link to="/projects" className={navItem}>
        Projects
      </Link>
      <Link to="/activities" className={navItem}>
        Activities
      </Link>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-white/50 py-10 text-center text-sm text-muted-foreground">
      <a href={`mailto:${EMAIL}`} className="hover:text-primary">
        {EMAIL}
      </a>
      <p className="mt-2">© {new Date().getFullYear()} Fittriya Nurul Syuhada Binti Rosli</p>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <div aria-hidden className="glass-bg">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="relative flex min-h-screen flex-col overflow-hidden">
        <SiteNav />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
