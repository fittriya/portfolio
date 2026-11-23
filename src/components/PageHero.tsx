export function PageHero({ ghost, title, sub }: { ghost: string; title: string; sub: string }) {
  return (
    <header className="relative pt-28 text-center md:pt-40">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-4 select-none text-7xl leading-none font-extrabold uppercase tracking-tight text-ghost md:top-2 md:text-[9rem]"
      >
        {ghost}
      </span>
      <h1 className="relative text-4xl font-bold md:text-5xl">{title}</h1>
      <div className="relative mt-4 flex items-center justify-center gap-2">
        <span className="h-0.5 w-10 bg-primary" />
        <span className="size-2 rounded-full bg-primary" />
        <span className="h-0.5 w-10 bg-primary" />
      </div>
      <p className="relative mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {sub}
      </p>
    </header>
  );
}
