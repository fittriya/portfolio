import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, type PointerEvent, type WheelEvent, type KeyboardEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { EMAIL, projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Fittriya Nurul Syuhada Binti Rosli" },
      {
        name: "description",
        content: "Project portfolio of Fittriya Nurul Syuhada Binti Rosli.",
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

/** How far (px) a drag must travel before it changes project. */
const SWIPE_THRESHOLD = 60;

function Projects() {
  const [active, setActive] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ startX: number; index: number | null } | null>(null);
  const wheelLock = useRef(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function hoverTo(i: number, e: PointerEvent<HTMLDivElement>) {
    // Mouse only: hovering a side project brings it to the middle.
    if (e.pointerType !== "mouse" || drag.current || i === active) return;
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => go(i), 150);
  }

  function cancelHover() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  }

  const count = projects.length;
  const go = (i: number) => setActive(((i % count) + count) % count);
  const next = () => go(active + 1);
  const prev = () => go(active - 1);

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (e.button !== 0) return;
    const card = (e.target as HTMLElement).closest<HTMLElement>("[data-index]");
    drag.current = { startX: e.clientX, index: card ? Number(card.dataset["index"]) : null };
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    setDragX(e.clientX - drag.current.startX);
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    drag.current = null;
    setDragging(false);
    setDragX(0);
    if (!d) return;
    const dx = e.clientX - d.startX;
    if (dx <= -SWIPE_THRESHOLD) next();
    else if (dx >= SWIPE_THRESHOLD) prev();
    else if (Math.abs(dx) < 6 && d.index !== null && d.index !== active) go(d.index);
  }

  function onWheel(e: WheelEvent<HTMLDivElement>) {
    // Sideways trackpad swipe; vertical scrolling keeps scrolling the page.
    if (Math.abs(e.deltaX) < 25 || Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
    const now = Date.now();
    if (now - wheelLock.current < 600) return;
    wheelLock.current = now;
    if (e.deltaX > 0) next();
    else prev();
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  }

  const current = projects[active] ?? projects[0];

  return (
    <div className="pb-24">
      <PageHero ghost="Projects" title="Projects" sub="Projects with purpose" />

      {!current ? (
        <p className="my-20 text-center text-muted-foreground">Projects will be added soon.</p>
      ) : (
        <>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Projects"
            tabIndex={0}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onWheel={onWheel}
            onKeyDown={onKeyDown}
            className={`relative mx-auto mt-10 aspect-[16/12] w-full max-w-6xl touch-pan-y select-none overflow-hidden outline-none [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] focus-visible:ring-2 focus-visible:ring-ring sm:aspect-[16/8.6] ${
              dragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {projects.map((p, i) => {
              const offset = i - active;
              const isActive = offset === 0;
              const hidden = Math.abs(offset) > 1;
              return (
                <div
                  key={p.title}
                  data-index={i}
                  aria-hidden={!isActive}
                  onPointerEnter={(e) => hoverTo(i, e)}
                  onPointerLeave={cancelHover}
                  className={`absolute left-1/2 top-1/2 w-[78%] sm:w-[66%] ${
                    dragging
                      ? ""
                      : "transition-all duration-500 ease-out motion-reduce:transition-none"
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${offset * 82}% + ${dragX}px), -50%) scale(${isActive ? 1 : 0.8})`,
                    opacity: hidden ? 0 : isActive ? 1 : 0.55,
                    zIndex: 10 - Math.abs(offset),
                    pointerEvents: hidden ? "none" : "auto",
                  }}
                >
                  <div
                    className={`overflow-hidden rounded-2xl glass ${
                      isActive ? "shadow-2xl" : "shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 px-2.5 pt-1 pb-2.5">
                      <span className="size-2 rounded-full bg-muted-foreground/30" />
                      <span className="size-2 rounded-full bg-muted-foreground/30" />
                      <span className="size-2 rounded-full bg-muted-foreground/30" />
                      <span className="ml-2 truncate text-[10px] text-muted-foreground">
                        {p.title}
                      </span>
                    </div>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`Screenshot of ${p.title}`}
                        draggable={false}
                        loading={i === 0 ? "eager" : "lazy"}
                        className="aspect-[16/10] w-full rounded-xl object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[16/10] items-center justify-center rounded-xl bg-gradient-brand p-8 text-center text-2xl font-bold text-primary-foreground">
                        {p.title}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <article
            key={current.title}
            aria-live="polite"
            className="glass mx-auto mt-8 max-w-3xl rounded-3xl p-6 md:p-8 animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-2xl font-bold md:text-3xl">{current.title}</h2>
              <span className="text-sm text-muted-foreground">{current.date}</span>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{current.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {current.links?.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === 0
                      ? "rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                      : "rounded-full glass px-5 py-2 text-sm font-medium transition hover:bg-white/60"
                  }
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {current.tags.map((t) => (
                <span key={t} className="rounded-full glass-chip px-3 py-1 text-xs text-primary">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </>
      )}

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-full bg-gradient-brand px-6 py-3 font-medium text-primary-foreground transition hover:scale-105"
        >
          ✉ Get in touch
        </a>
        <Link
          to="/skills"
          className="rounded-full glass px-6 py-3 font-medium transition hover:bg-white/60"
        >
          View skills
        </Link>
      </div>
    </div>
  );
}
