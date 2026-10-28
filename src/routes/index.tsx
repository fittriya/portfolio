import { createFileRoute, Link } from "@tanstack/react-router";
import { EMAIL, skills, stats } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fittriya Nurul Syuhada Binti Rosli — CS Portfolio" },
      {
        name: "description",
        content:
          "Computer Science & Engineering student at Korea University seeking software engineering and QA internships (Jan–Feb 2027).",
      },
      { property: "og:title", content: "Fittriya Nurul Syuhada Binti Rosli — CS Portfolio" },
      {
        property: "og:description",
        content: "Systems, compilers, verification and web projects by a Korea University CSE student.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const explore = [
  { to: "/about", title: "About", sub: "Who I am" },
  { to: "/skills", title: "Skills", sub: "What I work with" },
  { to: "/education", title: "Education", sub: "Where I learn" },
  { to: "/projects", title: "Projects", sub: "Things I've built" },
  { to: "/activities", title: "Activities", sub: "Community & Involvement" },
] as const;

function Index() {
  return (
    <div className="pb-16">
      <header className="flex flex-col items-center pb-10 pt-24 text-center">
        <p className="mb-6 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Seeking internship · Jan – Feb 2027
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Fittriya Nurul Syuhada<br />
          <span className="text-gradient">Binti Rosli</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
          Computer Science and Engineering Student
        </p>
        <p className="mt-3 text-muted-foreground">Korea University, Seoul</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-full bg-gradient-brand px-8 py-4 font-medium text-primary-foreground shadow-lg transition hover:scale-105"
        >
          ✉ Let's Connect
        </a>
        </div>
      </header>

      <section className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-4">
        {stats.map(([v, l]) => (
          <div key={l} className="rounded-xl border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-gradient">{v}</div>
            <div className="mt-1 text-xs text-muted-foreground">{l}</div>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <h2 className="text-center text-2xl font-semibold">Explore</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {explore.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{e.sub}</span>
              <span className="mt-2 block text-lg font-semibold group-hover:text-primary">{e.title} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-border bg-card p-8 text-center">
        <h2 className="text-2xl font-semibold">Let's build something together</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Open to software engineering and quality assurance internships in January – February 2027. Reach out and I'll get back to you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-gradient-brand px-6 py-3 font-medium text-primary-foreground transition hover:scale-105"
          >
            ✉ {EMAIL}
          </a>
          <Link
            to="/projects"
            className="rounded-full border border-input px-6 py-3 font-medium transition hover:bg-secondary"
          >
            Projects
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {skills.Languages.slice(0, 6).map((s) => (
            <span key={s} className="rounded-full bg-secondary px-3 py-1 text-sm">
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
