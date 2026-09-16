const fs = require('fs');

const form = JSON.parse(fs.readFileSync('form_full.json', 'utf8'));

function formatField(f, index) {
  let out = `### Frage ${index}: ${f.title}\n`;
  if (f.properties?.description) {
    out += `> **Beschreibung / Info:** ${f.properties.description.replace(/\n/g, ' ')}\n\n`;
  }
  out += `- **Typ:** \`${f.type}\`\n`;
  if (f.properties?.choices && f.properties.choices.length > 0) {
    out += `- **Antwortoptionen:**\n`;
    f.properties.choices.forEach(c => {
      out += `  - ${c.label}\n`;
    });
  }
  if (f.properties?.fields && f.properties.fields.length > 0) {
    out += `- **Unterfragen (Gruppe):**\n`;
    f.properties.fields.forEach((sub, subIdx) => {
      out += `  - **${subIdx + 1}. ${sub.title}** (${sub.type})\n`;
      if (sub.properties?.choices) {
        sub.properties.choices.forEach(sc => {
          out += `    - ${sc.label}\n`;
        });
      }
    });
  }
  out += '\n';
  return out;
}

let md = '# Vollständiger Fragenkatalog von ClimateHero (Ökologischer Fußabdruck Rechner)\n\n';

md += '## 1. Einstieg & Basisdaten\n\n';
for (let i = 0; i < 6; i++) {
  if (form.fields[i]) md += formatField(form.fields[i], i + 1);
}

md += '## 2. Kategorie: WOHNEN (Housing)\n\n';
for (let i = 6; i < 28; i++) {
  if (form.fields[i]) md += formatField(form.fields[i], i + 1);
}

md += '## 3. Kategorie: REISEN & MOBILITÄT (Travel)\n\n';
for (let i = 28; i < 60; i++) {
  if (form.fields[i]) md += formatField(form.fields[i], i + 1);
}

md += '## 4. Kategorie: VERBRAUCH & ERNÄHRUNG (Consumption & Diet)\n\n';
for (let i = 60; i < 74; i++) {
  if (form.fields[i]) md += formatField(form.fields[i], i + 1);
}

md += '## 5. Auswertung & Feedback (Ergebnis-Berechnung)\n\n';
for (let i = 74; i < 111; i++) {
  if (form.fields[i]) md += formatField(form.fields[i], i + 1);
}

md += '## 6. Klimaversprechen & Reduktions-Ziele (Pledges / Hebel zur CO2-Senkung)\n\n';
for (let i = 111; i < form.fields.length; i++) {
  if (form.fields[i]) md += formatField(form.fields[i], i + 1);
}

fs.writeFileSync('FRAGEN_KATALOG_CLIMATEHERO.md', md, 'utf8');
console.log('Saved FRAGEN_KATALOG_CLIMATEHERO.md. Total bytes:', md.length);
