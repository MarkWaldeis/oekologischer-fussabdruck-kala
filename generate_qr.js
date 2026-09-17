import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

const url = 'https://markwaldeis.github.io/oekologischer-fussabdruck-kala/';

async function run() {
  const options = {
    errorCorrectionLevel: 'H',
    type: 'png',
    quality: 0.95,
    margin: 2,
    color: {
      dark: '#0f172a',
      light: '#ffffff',
    },
    width: 600,
  };

  // 1. Generate PNG in public/
  await QRCode.toFile('public/qr-code.png', url, options);
  console.log('Saved public/qr-code.png');

  // 2. Generate SVG in public/
  const svgString = await QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 2,
    color: {
      dark: '#0f172a',
      light: '#ffffff',
    },
  });
  fs.writeFileSync('public/qr-code.svg', svgString);
  console.log('Saved public/qr-code.svg');

  // 3. Save to artifacts folder so it can be viewed in the UI
  const artifactDir = 'C:/Users/Mark Waldeis/.gemini/antigravity/brain/2b91365a-b3aa-4fc5-b910-8cecabd4fc7f';
  if (fs.existsSync(artifactDir)) {
    fs.copyFileSync('public/qr-code.png', path.join(artifactDir, 'qr-code.png'));
    console.log('Copied to artifact directory');
  }
}

run().catch(console.error);
