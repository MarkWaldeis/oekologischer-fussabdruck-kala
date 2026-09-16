const fs = require('fs');

async function main() {
  const baseUrl = 'https://oekologischer-fussabdruck.climatehero.org';

  const entryStart = `${baseUrl}/_app/immutable/entry/start.C9yYc44G.js`;
  const entryApp = `${baseUrl}/_app/immutable/entry/app.BxKMkB7B.js`;

  const queue = [entryStart, entryApp];
  const visited = new Set();
  const allTexts = {};

  while (queue.length > 0) {
    const url = queue.shift();
    if (visited.has(url)) continue;
    visited.add(url);
    console.log('Fetching:', url);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log('Failed status:', res.status, url);
        continue;
      }
      const text = await res.text();
      allTexts[url] = text;

      // Extract all references to chunks / nodes / entry
      // Example: "../chunks/scheduler.xxxx.js" or "/_app/immutable/nodes/1.xxxx.js"
      const matches = text.matchAll(/["']([^"']*\.js)["']/g);
      for (const m of matches) {
        let link = m[1];
        if (link.includes('gtm') || link.includes('google') || link.includes('plausible')) continue;
        if (link.startsWith('./') || link.startsWith('../') || link.startsWith('/_app/') || link.startsWith('_app/')) {
          const resolved = new URL(link, url).href;
          if (!visited.has(resolved)) {
            queue.push(resolved);
          }
        }
      }
    } catch (e) {
      console.error('Error fetching', url, e.message);
    }
  }

  console.log('Fetched total JS files:', visited.size);
  fs.writeFileSync('all_scripts.json', JSON.stringify({
    urls: Array.from(visited),
    count: visited.size
  }, null, 2));

  // Search inside all texts for questions, carbon footprint logic, categories, options
  let combined = '';
  for (const [url, text] of Object.entries(allTexts)) {
    combined += `\n\n// --- FILE: ${url} ---\n` + text;
  }
  fs.writeFileSync('all_code_dump.js', combined);
  console.log('Dump written. Total size:', combined.length);
}

main().catch(console.error);
