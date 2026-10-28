import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { EMAIL, stats } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fittriya Nurul Syuhada Rosli" },
      {
        name: "description",
        content:
          "Third-year Computer Science & Engineering student at Korea University, passionate about efficient, secure, user-focused systems.",
      },
      { property: "og:title", content: "About — Fittriya Nurul Syuhada Rosli" },
      {
        property: "og:description",
        content: "Third-year CSE student at Korea University seeking a software internship (Jan–Feb 2027).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="pb-24">
      <PageHero ghost="About" title="About Me" sub="More about me" />

      <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
        <div className="mx-auto grid size-64 place-items-center rounded-full bg-gradient-brand p-1.5 md:size-80">
          <div className="grid size-full place-items-center rounded-full bg-card text-7xl font-bold">
            <span className="text-gradient">FN</span>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold">
            Hey! I'm <span className="text-gradient">FITTRIYA</span>
          </h3>
          <div className="mt-4 h-1 w-16 rounded bg-gradient-brand" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A third-year Computer Science & Engineering student at Korea University with a strong academic
            foundation and hands-on project experience. I'm particularly interested in software engineering and quality assurance
            testing, with a strong interest in building efficient, secure, user-focused systems — and eager
            to contribute to innovative projects in collaborative teams.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map(([v, l]) => (
              <div key={l} className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="text-2xl font-bold text-gradient">{v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/projects"
          className="rounded-full bg-gradient-brand px-6 py-3 font-medium text-primary-foreground transition hover:scale-105"
        >
          See my projects
        </Link>
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-full border border-input px-6 py-3 font-medium transition hover:bg-secondary"
        >
          ✉ Get in touch
        </a>
      </div>
    </div>
  );
}
