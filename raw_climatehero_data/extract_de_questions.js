const fs = require('fs');

const dump = fs.readFileSync('all_code_dump.js', 'utf8');

// Find German texts or objects related to calculator steps
// In SvelteKit / i18n, translations are usually objects like { "question": "...", "options": [...] } or key-value pairs
// Let's search for German strings containing question words: "Wie", "Welche", "Wie viele", "Was", "Hast", "Fährst", "Wohnst", "Isst"
const deQuestions = new Set();
const deRegex = /"((?:Wie|Welche|Welcher|Welches|Wie viele|Wie oft|Was|Hast|Fährst|Wohnst|Isst|Besitzt|Fliegst|Nutzt|Heizt)[^"\\]+\?)"/g;

let m;
while ((m = deRegex.exec(dump)) !== null) {
  deQuestions.add(m[1]);
}

console.log('German Questions found:', Array.from(deQuestions));
fs.writeFileSync('de_questions.json', JSON.stringify(Array.from(deQuestions), null, 2));

// Also let's find the files or chunks containing the calculator flow
const files = dump.split('// --- FILE: ');
console.log('Number of files in dump:', files.length);

const relevantFiles = [];
for (const file of files) {
  if (file.includes('Wohnen') || file.includes('Ernährung') || file.includes('housing') || file.includes('diet') || file.includes('transport') || file.includes('consumption')) {
    const firstLine = file.split('\n')[0];
    relevantFiles.push(firstLine);
  }
}
console.log('Relevant files:', relevantFiles);
