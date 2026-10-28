import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const pages = [
    ["/", "/"],
    ["/about", "/about"],
    ["/skills", "/skills"],
    ["/education", "/education"],
    ["/projects", "/projects"],
    ["/activities", "/activities"],
  ] as const;

  it.each(pages)("serves %s as its own page", (path, routeId) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(path);

    expect(matches.at(-1)?.routeId).toBe(routeId);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
