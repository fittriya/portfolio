import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { EMAIL, projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Fittriya Nurul Syuhada Binti Rosli" },
      {
        name: "description",
        content:
          "Project portfolio of Fittriya Nurul Syuhada Binti Rosli.",
      },
      { property: "og:title", content: "Projects — Fittriya Nurul Syuhada Binti Rosli" },
      {
        property: "og:description",
        content: "Projects and contributions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="pb-24">
      <PageHero ghost="Projects" title="Projects" sub="My work" />

      {projects.length === 0 && (
        <p className="my-20 text-center text-muted-foreground">Projects will be added soon.</p>
      )}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold group-hover:text-primary">{p.title}</h3>
              <span className="shrink-0 text-xs text-muted-foreground">{p.date}</span>
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            {p.links && p.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-primary/40 px-3 py-1 text-xs text-primary">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-full bg-gradient-brand px-6 py-3 font-medium text-primary-foreground transition hover:scale-105"
        >
          ✉ Get in touch
        </a>
        <Link
          to="/skills"
          className="rounded-full border border-input px-6 py-3 font-medium transition hover:bg-secondary"
        >
          View skills
        </Link>
      </div>
    </div>
  );
}
