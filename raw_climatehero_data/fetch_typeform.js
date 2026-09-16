async function fetchTypeform() {
  const formId = 'kk9iYm41';
  const urls = [
    `https://form.typeform.com/to/${formId}`,
    `https://form.typeform.com/forms/${formId}`,
    `https://api.typeform.com/forms/${formId}`
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, {
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      console.log(url, 'Status:', res.status, 'Type:', res.headers.get('content-type'));
      const text = await res.text();
      console.log('Length:', text.length);
      if (text.includes('form') || text.includes('fields') || text.includes('title')) {
        require('fs').writeFileSync(`typeform_${url.replace(/[^a-zA-Z0-9]/g, '_')}.html`, text);
      }
    } catch (e) {
      console.error(url, e.message);
    }
  }
}

fetchTypeform().catch(console.error);
