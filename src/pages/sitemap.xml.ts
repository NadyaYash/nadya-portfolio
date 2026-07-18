import {
  gameLandings,
  getGamePath,
  getLaunchPath,
  getProjectPath,
  projects,
  storeLaunches,
} from "../App.jsx";
import { withLocalePath } from "../i18n.js";

export const prerender = true;

const site = "https://nadzeyayashchuk.com";

const withTrailingSlash = (path: string) => {
  if (path === "/") {
    return path;
  }

  return path.endsWith("/") ? path : `${path}/`;
};

const buildUrl = (path: string) => `${site}${withTrailingSlash(path)}`;

const gameTitles = new Set(gameLandings.map((game) => game.title));

const baseUrls = [
  "/",
  "/impressum/",
  "/privacy/",
  ...projects.map((project) => getProjectPath(project)),
  ...storeLaunches.filter((item) => !gameTitles.has(item.title)).map((item) => getLaunchPath(item)),
  ...gameLandings.flatMap((game) => [
    getGamePath(game),
    `${getGamePath(game)}/privacy`,
    `${getGamePath(game)}/terms`,
    `${getGamePath(game)}/support`,
  ]),
].map(withTrailingSlash);

const urls = [...baseUrls, ...baseUrls.map((path) => withTrailingSlash(withLocalePath(path, "de")))];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${buildUrl(path)}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

export function GET() {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
