import { mkdir, writeFile, rename } from 'node:fs/promises';

const developer = '99d754d0-1b13-4e24-b3af-833f50bc1ad1';
const origin = 'https://apps.garmin.com';
const pageSize = 20;
const apps = [];
const ids = new Set();
async function request(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  return response;
}
for (let offset = 0; ; offset += pageSize) {
  if (offset >= 2000) throw new Error('Catalog pagination limit exceeded');
  const url = `${origin}/api/appsLibraryExternalServices/api/asw/apps/developer/${developer}?startPageIndex=${offset}&pageSize=${pageSize}`;
  const batch = await (await request(url)).json();
  if (!Array.isArray(batch)) throw new Error('Unexpected Garmin response');
  for (const app of batch) {
    if (ids.has(app.id)) throw new Error(`Duplicate Garmin ID: ${app.id}`);
    ids.add(app.id);
    if (app.status === 'APPROVED') apps.push(app);
  }
  if (batch.length < pageSize) break;
}
if (!apps.length) throw new Error('Empty Garmin catalog; keeping existing data');
await mkdir('public/garmin', { recursive: true });
await mkdir('src/data', { recursive: true });
const entries = new Array(apps.length);
let next = 0;
await Promise.all(Array.from({ length: 6 }, async () => {
  while (next < apps.length) {
    const index = next++;
    const app = apps[index];
    const localized = app.appLocalizations.find((entry) => entry.locale === 'en') || app.appLocalizations[0];
    const response = await request(`https://services.garmin.com/appsLibraryExternalServices/api/icons/${app.iconFileId}`);
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.startsWith('image/')) throw new Error(`Invalid icon: ${app.id}`);
    const extension = contentType.includes('jpeg') ? 'jpg' : contentType.includes('webp') ? 'webp' : 'png';
    const image = `/garmin/${app.id}.${extension}`;
    await writeFile(`public${image}`, Buffer.from(await response.arrayBuffer()));
    entries[index] = {
      id: app.id,
      name: localized.name,
      type: app.typeId === '1' ? 'watch-face' : 'app',
      image,
      // Public Garmin counts are bucketed lower bounds, not exact install totals.
      downloads: Number.isSafeInteger(app.downloadCount) && app.downloadCount >= 0 ? app.downloadCount : 0,
      link: `${origin}/apps/${app.id}`,
      ...(app.reviewCount > 0 ? { rating: app.averageRating.toFixed(1) } : {}),
    };
  }
}));
const catalog = { developer, syncedAt: new Date().toISOString(), entries };
await writeFile('src/data/garmin.json.tmp', JSON.stringify(catalog, null, 2) + '\n');
await rename('src/data/garmin.json.tmp', 'src/data/garmin.json');
console.log(`Synced ${entries.length} Garmin apps (${entries.filter((entry) => entry.type === 'watch-face').length} watch faces).`);
