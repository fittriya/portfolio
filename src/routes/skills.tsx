import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { skills } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Fittriya Nurul Syuhada Rosli" },
      {
        name: "description",
        content:
          "Programming languages, tools, soft skills and spoken languages: Java, Python, C++, C, OCaml, Linux, Git, Docker, eBPF and more.",
      },
      { property: "og:title", content: "Skills — Fittriya Nurul Syuhada Rosli" },
      {
        property: "og:description",
        content: "Programming languages, tools, soft skills and spoken languages.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <div className="pb-24">
      <PageHero ghost="Skills" title="Skills" sub="What I work with" />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([k, v]) => (
          <div key={k} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold">{k}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {v.map((s) => (
                <span key={s} className="rounded-full bg-secondary px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        <Link
          to="/projects"
          className="rounded-full bg-gradient-brand px-6 py-3 font-medium text-primary-foreground transition hover:scale-105"
        >
          Where I've used them
        </Link>
        <Link
          to="/education"
          className="rounded-full border border-input px-6 py-3 font-medium transition hover:bg-secondary"
        >
          My studies
        </Link>
      </div>
    </div>
  );
}
