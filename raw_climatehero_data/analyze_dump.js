const fs = require('fs');

const dump = fs.readFileSync('all_code_dump.js', 'utf8');

// Let's search for German strings or question objects
// Commonly strings like "Wohnen", "Reisen", "Verbrauch", "Ernährung", "Strom", "Auto", "Flug"
const keywords = ['Wohnen', 'Reisen', 'Verbrauch', 'Flug', 'Fleisch', 'Strom', 'Heizung', 'Haushalt'];

console.log('Searching for questions...');

// Find occurrences of German question phrases or translation tables
// Let's search for question keys or strings with "?" in German
const regex = /"([^"\\]{5,120}\?)"/g;
let match;
const questions = new Set();
while ((match = regex.exec(dump)) !== null) {
  questions.add(match[1]);
}

console.log('Questions found with "?":', Array.from(questions));

// Let's also look for arrays or objects defining question models or steps
const chunks = fs.readdirSync('.');
// Let's inspect which files in the dump have the richest question data
fs.writeFileSync('questions_extracted.json', JSON.stringify(Array.from(questions), null, 2));
