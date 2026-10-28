import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { EMAIL, activities } from "@/data/portfolio";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — Fittriya Nurul Syuhada Binti Rosli" },
      {
        name: "description",
        content:
          "Volunteering at the QS Higher Ed Summit and a career symposium, plus Korea University bike team and KUISA.",
      },
      { property: "og:title", content: "Activities — Fittriya Nurul Syuhada Binti Rosli" },
      {
        property: "og:description",
        content: "Volunteering, clubs and community work beyond the class.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Activities,
});

function Activities() {
  return (
    <div className="pb-24">
      <PageHero ghost="Activities" title="Activities" sub="Community &amp; Involvement" />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {activities.map((a) => (
          <div key={a.title} className="rounded-2xl border border-border bg-card p-6">
            <span className="text-xs text-primary">{a.year}</span>
            <h3 className="mt-1 font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-full bg-gradient-brand px-6 py-3 font-medium text-primary-foreground transition hover:scale-105"
        >
          ✉ Let's Connect
        </a>
        <Link
          to="/"
          className="rounded-full border border-input px-6 py-3 font-medium transition hover:bg-secondary"
        >
          Back to top
        </Link>
      </div>
    </div>
  );
}
