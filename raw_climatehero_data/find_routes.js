const fs = require('fs');

const dump = fs.readFileSync('all_code_dump.js', 'utf8');

// Find route definitions in SvelteKit
// SvelteKit defines routes like: [ [/(?:...)/, [node_ids], [optional_node_ids] ] ]
const appFile = dump.split('// --- FILE: https://oekologischer-fussabdruck.climatehero.org/_app/immutable/entry/app.BxKMkB7B.js ---')[1].split('// --- FILE: ')[0];

// Let's print the routes definition in app.js
const routeSection = appFile.match(/routes:\s*\[[\s\S]*?\]\s*,\s*/);
if (routeSection) {
  console.log('Routes section:\n', routeSection[0].slice(0, 3000));
} else {
  // Find regexes in appFile
  const regexes = [...appFile.matchAll(/(\/\^(?:[^\/]|\\\/)+\$\/)/g)].map(m => m[1]);
  console.log('Route regexes:', regexes);
}
