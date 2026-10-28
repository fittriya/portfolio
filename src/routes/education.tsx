import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { education } from "@/data/portfolio";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Fittriya Nurul Syuhada Binti Rosli" },
      {
        name: "description",
        content:
          "B.S. Computer Science and Engineering at Korea University (CGPA 3.64/4.50), Foundation at UniKL (3.95/4.00).",
      },
      { property: "og:title", content: "Education — Fittriya Nurul Syuhada Binti Rosli" },
      {
        property: "og:description",
        content: "Korea University CSE, UniKL Foundation and SPM results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Education,
});

function Education() {
  return (
    <div className="pb-24">
      <PageHero ghost="Education" title="Education" sub="Where I learn" />

      <div className="mt-16 space-y-6">
        {education.map((e) => (
          <div key={e.school} className="rounded-2xl border-l-4 border-primary bg-card p-6">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="text-lg font-semibold">{e.school}</h3>
              <span className="text-sm text-primary">{e.years}</span>
            </div>
            <p className="mt-1">{e.degree}</p>
            <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        <Link
          to="/projects"
          className="rounded-full bg-gradient-brand px-6 py-3 font-medium text-primary-foreground transition hover:scale-105"
        >
          Coursework in action
        </Link>
        <Link
          to="/activities"
          className="rounded-full border border-input px-6 py-3 font-medium transition hover:bg-secondary"
        >
          Activities
        </Link>
      </div>
    </div>
  );
}
