import QRCode from 'qrcode';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const TARGET_URL = 'https://markwaldeis.github.io/oekologischer-fussabdruck-kala/';
const BRAIN_DIR = 'C:\\Users\\Mark Waldeis\\.gemini\\antigravity\\brain\\2b91365a-b3aa-4fc5-b910-8cecabd4fc7f';

async function generateWhatsAppCards() {
  // 1. Generate High-Res QR Code PNG Buffer
  const qrBuffer = await QRCode.toBuffer(TARGET_URL, {
    errorCorrectionLevel: 'H',
    type: 'png',
    margin: 2,
    width: 600,
    color: {
      dark: '#0f172a',
      light: '#ffffff'
    }
  });

  fs.writeFileSync('public/qr-code.png', qrBuffer);

  // -------------------------------------------------------------
  // 2. DESIGN: WhatsApp Flyer (1080 x 1350 Portrait)
  // -------------------------------------------------------------
  const width = 1080;
  const height = 1350;

  const svgPortrait = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e0f2fe" />
        <stop offset="40%" stop-color="#ecfdf5" />
        <stop offset="100%" stop-color="#fef3c7" />
      </linearGradient>

      <!-- Drop Shadows -->
      <filter id="cardShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="12" stdDeviation="0" flood-color="#0f172a" />
      </filter>
      <filter id="btnShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="7" stdDeviation="0" flood-color="#0f172a" />
      </filter>
      <filter id="badgeShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="0" flood-color="#0f172a" />
      </filter>
    </defs>

    <!-- Base Canvas -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

    <!-- Playful Background Dots -->
    <g opacity="0.10" fill="#0f172a">
      ${Array.from({ length: 12 }).map((_, i) => 
        Array.from({ length: 15 }).map((_, j) => 
          `<circle cx="${60 + i * 85}" cy="${60 + j * 85}" r="3.5" />`
        ).join('')
      ).join('')}
    </g>

    <!-- Decorative Stars & Sparkles -->
    <path d="M 120 120 Q 120 145 95 145 Q 120 145 120 170 Q 120 145 145 145 Q 120 145 120 120 Z" fill="#10b981" />
    <circle cx="150" cy="115" r="4" fill="#059669" />
    <path d="M 960 140 Q 960 165 935 165 Q 960 165 960 190 Q 960 165 985 165 Q 960 165 960 140 Z" fill="#f59e0b" />
    <circle cx="925" cy="130" r="4" fill="#d97706" />

    <!-- Outer Border -->
    <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="40" fill="none" stroke="#0f172a" stroke-width="6" />

    <!-- Top Badge -->
    <g filter="url(#badgeShadow)" transform="translate(540, 88)">
      <rect x="-170" y="-24" width="340" height="48" rx="24" fill="#ffffff" stroke="#0f172a" stroke-width="4" />
      <text x="0" y="7" font-family="'Segoe UI', 'Trebuchet MS', sans-serif" font-weight="900" font-size="20" fill="#059669" text-anchor="middle" letter-spacing="2">
        KALA KLIMA-RECHNER 2.0
      </text>
    </g>

    <!-- Headline & Subtitle -->
    <g transform="translate(540, 185)">
      <text x="0" y="0" font-family="'Segoe UI', 'Arial Rounded MT Bold', sans-serif" font-weight="900" font-size="44" fill="#0f172a" text-anchor="middle">
        Wie groß ist dein
      </text>
      <text x="0" y="54" font-family="'Segoe UI', 'Arial Rounded MT Bold', sans-serif" font-weight="900" font-size="50" fill="#059669" text-anchor="middle">
        ökologischer Fußabdruck?
      </text>
      <text x="0" y="105" font-family="'Segoe UI', 'Trebuchet MS', sans-serif" font-weight="600" font-size="23" fill="#475569" text-anchor="middle">
        Finde dein CO₂-Ergebnis in nur 3 Minuten heraus!
      </text>
    </g>

    <!-- Main Card Container for QR Code (Centered at 540, 670) -->
    <g filter="url(#cardShadow)" transform="translate(540, 670)">
      <!-- Outer Card -->
      <rect x="-320" y="-345" width="640" height="690" rx="36" fill="#ffffff" stroke="#0f172a" stroke-width="6" />

      <!-- Scan Callout Ribbon -->
      <g transform="translate(0, -300)">
        <rect x="-220" y="-22" width="440" height="44" rx="22" fill="#ecfdf5" stroke="#059669" stroke-width="3" />
        <text x="0" y="7" font-family="'Segoe UI', 'Trebuchet MS', sans-serif" font-weight="800" font-size="18" fill="#065f46" text-anchor="middle" letter-spacing="1">
          MIT DER HANDY-KAMERA SCANNEN
        </text>
      </g>

      <!-- Inner Border for QR placement (center at 0, -10, size 460x460) -->
      <rect x="-230" y="-245" width="460" height="460" rx="26" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2.5" />

      <!-- Web Link Badge below QR -->
      <g filter="url(#badgeShadow)" transform="translate(0, 275)">
        <rect x="-295" y="-24" width="590" height="48" rx="24" fill="#f8fafc" stroke="#0f172a" stroke-width="3.5" />
        <text x="0" y="7" font-family="'Segoe UI', 'Trebuchet MS', sans-serif" font-weight="700" font-size="17" fill="#0f172a" text-anchor="middle">
          markwaldeis.github.io/oekologischer-fussabdruck-kala
        </text>
      </g>
    </g>

    <!-- 4 Feature Highlights / Pills (Two Columns) -->
    <g transform="translate(100, 1070)">
      <!-- Pill 1: Schule & Kostenlos -->
      <g filter="url(#badgeShadow)" transform="translate(0, 0)">
        <rect x="0" y="0" width="420" height="58" rx="18" fill="#ffffff" stroke="#0f172a" stroke-width="4" />
        <text x="24" y="38" font-size="24">🎓</text>
        <text x="64" y="36" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="18" fill="#0f172a">
          100% Kostenlos &amp; Schulreif
        </text>
      </g>

      <!-- Pill 2: KI & Tech Check -->
      <g filter="url(#badgeShadow)" transform="translate(460, 0)">
        <rect x="0" y="0" width="420" height="58" rx="18" fill="#ffffff" stroke="#0f172a" stroke-width="4" />
        <text x="24" y="38" font-size="24">🤖</text>
        <text x="64" y="36" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="18" fill="#0f172a">
          Inkl. KI- &amp; Technik-Ökobilanz
        </text>
      </g>

      <!-- Pill 3: Vaping & Lithium -->
      <g filter="url(#badgeShadow)" transform="translate(0, 75)">
        <rect x="0" y="0" width="420" height="58" rx="18" fill="#ffffff" stroke="#0f172a" stroke-width="4" />
        <text x="24" y="38" font-size="24">🚭</text>
        <text x="64" y="36" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="18" fill="#0f172a">
          Vaping- &amp; Akkumüll-Analyse
        </text>
      </g>

      <!-- Pill 4: Offizieller Klima-Pass -->
      <g filter="url(#badgeShadow)" transform="translate(460, 75)">
        <rect x="0" y="0" width="420" height="58" rx="18" fill="#ffffff" stroke="#0f172a" stroke-width="4" />
        <text x="24" y="38" font-size="24">🏆</text>
        <text x="64" y="36" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="18" fill="#0f172a">
          Mit druckbarem Klima-Pass
        </text>
      </g>
    </g>

    <!-- Bottom Action Banner -->
    <g filter="url(#btnShadow)" transform="translate(540, 1265)">
      <rect x="-380" y="-30" width="760" height="60" rx="30" fill="#10b981" stroke="#0f172a" stroke-width="5" />
      <text x="0" y="10" font-family="'Segoe UI', sans-serif" font-weight="900" font-size="22" fill="#ffffff" text-anchor="middle" letter-spacing="1">
        JETZT SCANNEN &amp; MIT FREUNDEN VERGLEICHEN!
      </text>
    </g>
  </svg>
  `;

  const qrResized = await sharp(qrBuffer).resize(420, 420).toBuffer();

  const flyerImage = await sharp(Buffer.from(svgPortrait))
    .composite([
      {
        input: qrResized,
        top: 445,
        left: 330,
      }
    ])
    .png({ quality: 95 })
    .toBuffer();

  const flyerPath = path.resolve('public/whatsapp-klima-check.png');
  fs.writeFileSync(flyerPath, flyerImage);
  if (fs.existsSync(BRAIN_DIR)) {
    fs.writeFileSync(path.join(BRAIN_DIR, 'whatsapp-klima-check.png'), flyerImage);
  }
  console.log(`Saved WhatsApp Flyer to ${flyerPath}`);

  // -------------------------------------------------------------
  // 3. DESIGN: Square Version (1080 x 1080)
  // -------------------------------------------------------------
  const svgSquare = `
  <svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sqBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e0f2fe" />
        <stop offset="50%" stop-color="#ecfdf5" />
        <stop offset="100%" stop-color="#fef3c7" />
      </linearGradient>
      <filter id="sqCardShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="10" stdDeviation="0" flood-color="#0f172a" />
      </filter>
      <filter id="sqBadgeShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="0" flood-color="#0f172a" />
      </filter>
    </defs>

    <rect width="1080" height="1080" fill="url(#sqBgGrad)" />

    <!-- Playful Background Dots -->
    <g opacity="0.10" fill="#0f172a">
      ${Array.from({ length: 12 }).map((_, i) => 
        Array.from({ length: 12 }).map((_, j) => 
          `<circle cx="${70 + i * 85}" cy="${70 + j * 85}" r="3.5" />`
        ).join('')
      ).join('')}
    </g>

    <!-- Outer Frame -->
    <rect x="20" y="20" width="1040" height="1040" rx="36" fill="none" stroke="#0f172a" stroke-width="6" />

    <!-- Top Badge -->
    <g filter="url(#sqBadgeShadow)" transform="translate(540, 75)">
      <rect x="-160" y="-22" width="320" height="44" rx="22" fill="#ffffff" stroke="#0f172a" stroke-width="4" />
      <text x="0" y="7" font-family="'Segoe UI', sans-serif" font-weight="900" font-size="18" fill="#059669" text-anchor="middle" letter-spacing="1.5">
        KALA KLIMA-RECHNER
      </text>
    </g>

    <!-- Title -->
    <g transform="translate(540, 160)">
      <text x="0" y="0" font-family="'Segoe UI', 'Arial Rounded MT Bold', sans-serif" font-weight="900" font-size="40" fill="#0f172a" text-anchor="middle">
        Wie groß ist dein CO₂-Fußabdruck?
      </text>
      <text x="0" y="44" font-family="'Segoe UI', sans-serif" font-weight="600" font-size="22" fill="#475569" text-anchor="middle">
        Scanne den Code mit deinem Smartphone!
      </text>
    </g>

    <!-- QR Card Container centered at 540, 520 -->
    <g filter="url(#sqCardShadow)" transform="translate(540, 525)">
      <rect x="-280" y="-280" width="560" height="560" rx="34" fill="#ffffff" stroke="#0f172a" stroke-width="6" />
      <!-- Scan Banner inside Card -->
      <rect x="-180" y="-250" width="360" height="36" rx="18" fill="#ecfdf5" stroke="#059669" stroke-width="2.5" />
      <text x="0" y="-226" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="15" fill="#065f46" text-anchor="middle">
        MIT KAMERA SCANNEN
      </text>
      <!-- QR frame -->
      <rect x="-220" y="-200" width="440" height="440" rx="22" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" />
    </g>

    <!-- Link Pill -->
    <g filter="url(#sqBadgeShadow)" transform="translate(540, 875)">
      <rect x="-290" y="-24" width="580" height="48" rx="24" fill="#ffffff" stroke="#0f172a" stroke-width="3.5" />
      <text x="0" y="7" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="17" fill="#0f172a" text-anchor="middle">
        markwaldeis.github.io/oekologischer-fussabdruck-kala
      </text>
    </g>

    <!-- Bottom Features -->
    <g transform="translate(540, 975)">
      <g filter="url(#sqBadgeShadow)">
        <rect x="-400" y="-30" width="800" height="60" rx="30" fill="#10b981" stroke="#0f172a" stroke-width="5" />
        <text x="0" y="8" font-family="'Segoe UI', sans-serif" font-weight="900" font-size="20" fill="#ffffff" text-anchor="middle">
          🌱 3 Min. Check • Inkl. KI- &amp; Vaping-Bilanz • Kostenlos
        </text>
      </g>
    </g>
  </svg>
  `;

  const qrSquare = await sharp(qrBuffer).resize(400, 400).toBuffer();
  const squareImage = await sharp(Buffer.from(svgSquare))
    .composite([{ input: qrSquare, top: 345, left: 340 }])
    .png({ quality: 95 })
    .toBuffer();

  const squarePath = path.resolve('public/whatsapp-klima-square.png');
  fs.writeFileSync(squarePath, squareImage);
  if (fs.existsSync(BRAIN_DIR)) {
    fs.writeFileSync(path.join(BRAIN_DIR, 'whatsapp-klima-square.png'), squareImage);
  }
  console.log(`Saved Square WhatsApp Card to ${squarePath}`);
}

generateWhatsAppCards().catch(console.error);
