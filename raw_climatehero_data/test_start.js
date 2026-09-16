async function testStart() {
  const form = new URLSearchParams();
  form.append('country', 'de');
  form.append('language', 'de');
  form.append('source', 'web');

  const res = await fetch('https://oekologischer-fussabdruck.climatehero.org/?/startCalculator', {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'origin': 'https://oekologischer-fussabdruck.climatehero.org',
      'referer': 'https://oekologischer-fussabdruck.climatehero.org/',
      'x-sveltekit-action': 'true'
    },
    body: form.toString(),
    redirect: 'manual'
  });

  console.log('Status:', res.status);
  console.log('Headers:', Object.fromEntries(res.headers.entries()));
  const text = await res.text();
  console.log('Body:', text);
}

testStart().catch(console.error);
