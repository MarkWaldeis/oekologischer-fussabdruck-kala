const fs = require('fs');

const form = JSON.parse(fs.readFileSync('form_full.json', 'utf8'));
const logic = JSON.parse(fs.readFileSync('form_logic.json', 'utf8'));

console.log('Total fields:', form.fields.length);

const categorizedQuestions = [];

for (let i = 0; i < form.fields.length; i++) {
  const f = form.fields[i];
  const item = {
    index: i + 1,
    id: f.id,
    ref: f.ref,
    title: f.title,
    type: f.type,
    description: f.properties?.description || '',
    choices: f.properties?.choices ? f.properties.choices.map(c => ({ id: c.id, label: c.label })) : []
  };

  // Find logic associated with this field
  const fieldLogic = logic.find(l => l.ref === f.ref);
  if (fieldLogic) {
    item.actions = fieldLogic.actions;
  }

  categorizedQuestions.push(item);
}

fs.writeFileSync('detailed_questions.json', JSON.stringify(categorizedQuestions, null, 2));

// Summary of questions by index / title
console.log('Summary of all fields:');
categorizedQuestions.forEach(q => {
  console.log(`[${q.index}] (${q.type}) ${q.title}`);
});
