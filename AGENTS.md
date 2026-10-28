<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

<!-- PROJECT:BEGIN -->
> [!IMPORTANT]
> Portfolio sections are separate routes (`/about`, `/skills`, `/education`, `/projects`,
> `/activities`), each with its own `head()` metadata; the shared pill nav and footer live in
> `src/routes/__root.tsx` around `<Outlet />`, and menu items use `<Link>` — never anchor
> links that scroll within one long page — so URLs, refreshes and the back button work per section.
> Shared content (projects, skills, education, activities, email) lives in `src/data/portfolio.ts`.
<!-- PROJECT:END -->
