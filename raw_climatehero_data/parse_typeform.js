const fs = require('fs');

async function parseForm() {
  const res = await fetch('https://form.typeform.com/forms/kk9iYm41');
  const data = await res.json();
  fs.writeFileSync('form_full.json', JSON.stringify(data, null, 2));

  console.log('Form title:', data.title);
  console.log('Total fields:', data.fields ? data.fields.length : 0);

  const parsedFields = (data.fields || []).map((f, index) => {
    return {
      index: index + 1,
      id: f.id,
      title: f.title,
      type: f.type,
      properties: {
        description: f.properties?.description,
        choices: f.properties?.choices?.map(c => c.label),
        labels: f.properties?.labels
      },
      validations: f.validations
    };
  });

  fs.writeFileSync('parsed_questions.json', JSON.stringify(parsedFields, null, 2));
  console.log('Parsed fields count:', parsedFields.length);

  parsedFields.forEach(f => {
    console.log(`\n[#${f.index}] (${f.type}) ${f.title}`);
    if (f.properties.description) console.log(`   Desc: ${f.properties.description}`);
    if (f.properties.choices) {
      f.properties.choices.forEach(c => console.log(`   - ${c}`));
    }
  });

  // Let's also inspect logic or variables if any
  if (data.logic) {
    console.log('\nLogic rules count:', data.logic.length);
    fs.writeFileSync('form_logic.json', JSON.stringify(data.logic, null, 2));
  }
  if (data.variables) {
    console.log('\nVariables:', data.variables);
    fs.writeFileSync('form_variables.json', JSON.stringify(data.variables, null, 2));
  }
}

parseForm().catch(console.error);
