import React, { useState, useMemo } from 'react';
import type { UserResponses, CalculationBreakdown } from '../types/calculator';
import { getPersona, getApplicablePledgesAndAchievements } from '../data/questions';
import confetti from 'canvas-confetti';
import { Share2, Printer, RotateCcw, Award, Check, Sparkles, Download } from 'lucide-react';

interface ResultsDashboardProps {
  responses: UserResponses;
  breakdown: CalculationBreakdown;
  onRestart: () => void;
}

// Geometric helper for perfectly straight SVG semicircle arcs
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad),
  };
}

function createArcPath(cx: number, cy: number, r: number, startAngleDeg: number, endAngleDeg: number) {
  const start = polarToCartesian(cx, cy, r, startAngleDeg);
  const end = polarToCartesian(cx, cy, r, endAngleDeg);
  const largeArc = Math.abs(startAngleDeg - endAngleDeg) > 180 ? 1 : 0;
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  responses,
  breakdown,
  onRestart,
}) => {
  // Compute applicable pledges (only those NOT yet adhered to) and achievements
  const { applicablePledges, achievements } = useMemo(() => {
    return getApplicablePledgesAndAchievements(responses);
  }, [responses]);

  // Set of selected pledge IDs
  const [selectedPledges, setSelectedPledges] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  // Calculate total reduction from active selected pledges
  const totalReduction = selectedPledges.reduce((sum, pId) => {
    const pledge = applicablePledges.find((p) => p.id === pId);
    return sum + (pledge ? pledge.co2Reduction : 0);
  }, 0);

  const effectiveScore = Math.max(0.8, Number((breakdown.total - totalReduction).toFixed(2)));
  const persona = getPersona(effectiveScore);

  const togglePledge = (pledgeId: string) => {
    const isAdding = !selectedPledges.includes(pledgeId);
    if (isAdding) {
      setSelectedPledges([...selectedPledges, pledgeId]);
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
      });
    } else {
      setSelectedPledges(selectedPledges.filter((id) => id !== pledgeId));
    }
  };

  const handleShare = () => {
    const shareText = `🌍 Mein ökologischer Fußabdruck im Kala Rechner: ${effectiveScore} Tonnen CO₂e/Jahr (${persona.title})!\nMit meinen Klimaversprechen spare ich ${totalReduction.toFixed(1)}t CO₂ ein.\nBerechne deinen eigenen Fußabdruck hier: https://markwaldeis.github.io/oekologischer-fussabdruck-kala/`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Speedometer math for a TRUE, STRAIGHT SEMICIRCLE:
  // Center: (100, 95). Baseline: y = 95.
  // Scale: 0 to 15 tonnes.
  // Angle: -90° (left, 0t) to +90° (right, 15t).
  const maxScale = 15;
  const clampedScore = Math.min(Math.max(0, effectiveScore), maxScale);
  const needleRotation = -90 + (clampedScore / maxScale) * 180;

  // Arc Radii
  const cx = 100;
  const cy = 95;
  const arcRadius = 72;
  const strokeW = 18;
  const rInner = arcRadius - strokeW / 2; // 63
  const rOuter = arcRadius + strokeW / 2; // 81

  // Zone boundaries in degrees:
  // 0t -> 180°
  // 2t -> 180 - (2/15)*180 = 156°
  // 5t -> 180 - (5/15)*180 = 120°
  // 10t -> 180 - (10/15)*180 = 60°
  // 15t -> 0°
  const zone1 = createArcPath(cx, cy, arcRadius, 180, 156);
  const zone2 = createArcPath(cx, cy, arcRadius, 156, 120);
  const zone3 = createArcPath(cx, cy, arcRadius, 120, 60);
  const zone4 = createArcPath(cx, cy, arcRadius, 60, 0);

  // Border paths for clean cartoon outline
  const outerBorder = createArcPath(cx, cy, rOuter, 180, 0);
  const innerBorder = createArcPath(cx, cy, rInner, 180, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-8 print:p-0">
      
      {/* 1. Header & Persona Celebration Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border-3 border-slate-900 shadow-[0_8px_0_0_#0f172a] bg-gradient-to-br ${persona.bgGradient} text-white flex flex-col sm:flex-row items-center justify-between gap-6`}>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-4 h-4" /> Dein persönliches Ergebnis
          </div>
          <h2 className="font-cartoon text-3xl sm:text-4xl font-bold leading-tight">
            {responses.userName || 'Klima-Entdecker'}, du bist {persona.title}!
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-xl mt-1 font-medium">
            {persona.reactionMessage}
          </p>
        </div>

        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/20 backdrop-blur-md border-3 border-white flex items-center justify-center text-5xl sm:text-6xl shadow-inner shrink-0 animate-bounce">
          {persona.badge}
        </div>
      </div>

      {/* 2. Speedometer Gauge Card (Mathemathisch exakter, gerader Halbkreis) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-3 border-slate-900 shadow-[0_8px_0_0_#0f172a] flex flex-col items-center text-center">
        <h3 className="font-cartoon text-xl sm:text-2xl font-bold text-slate-900 mb-1">
          Dein jährlicher CO₂-Fußabdruck
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-4">
          Berechnet in Tonnen CO₂-Äquivalente pro Kopf und Jahr
        </p>

        {/* SVG Speedometer Gauge (Echter gerader Halbkreis) */}
        <div className="relative w-72 h-44 sm:w-80 sm:h-48 flex items-center justify-center overflow-hidden mb-1">
          <svg viewBox="0 0 200 115" className="w-full h-full select-none">
            {/* 4 Colored Segments with butt caps (ends are strictly flat on baseline) */}
            {/* Zone 1: Paris Target (0-2t: Emerald Green) */}
            <path
              d={zone1}
              fill="none"
              stroke="#10b981"
              strokeWidth={strokeW}
              strokeLinecap="butt"
            />
            {/* Zone 2: World Average (2-5t: Lime Green) */}
            <path
              d={zone2}
              fill="none"
              stroke="#84cc16"
              strokeWidth={strokeW}
              strokeLinecap="butt"
            />
            {/* Zone 3: German Average (5-10t: Sunny Amber) */}
            <path
              d={zone3}
              fill="none"
              stroke="#f59e0b"
              strokeWidth={strokeW}
              strokeLinecap="butt"
            />
            {/* Zone 4: High Emissions (>10t: Coral Red) */}
            <path
              d={zone4}
              fill="none"
              stroke="#ef4444"
              strokeWidth={strokeW}
              strokeLinecap="butt"
            />

            {/* Cartoon Inner & Outer Outlines */}
            <path d={outerBorder} fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <path d={innerBorder} fill="none" stroke="#0f172a" strokeWidth="2.5" />

            {/* Straight Horizontal Bottom Baseline on the exact diameter (y=95) */}
            <line x1={cx - rOuter} y1={cy} x2={cx - rInner} y2={cy} stroke="#0f172a" strokeWidth="2.5" strokeLinecap="square" />
            <line x1={cx + rInner} y1={cy} x2={cx + rOuter} y2={cy} stroke="#0f172a" strokeWidth="2.5" strokeLinecap="square" />
            <line x1="10" y1={cy} x2="190" y2={cy} stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Crisp Segment Dividers */}
            <line
              x1={polarToCartesian(cx, cy, rInner, 156).x}
              y1={polarToCartesian(cx, cy, rInner, 156).y}
              x2={polarToCartesian(cx, cy, rOuter, 156).x}
              y2={polarToCartesian(cx, cy, rOuter, 156).y}
              stroke="#0f172a"
              strokeWidth="2"
            />
            <line
              x1={polarToCartesian(cx, cy, rInner, 120).x}
              y1={polarToCartesian(cx, cy, rInner, 120).y}
              x2={polarToCartesian(cx, cy, rOuter, 120).x}
              y2={polarToCartesian(cx, cy, rOuter, 120).y}
              stroke="#0f172a"
              strokeWidth="2"
            />
            <line
              x1={polarToCartesian(cx, cy, rInner, 60).x}
              y1={polarToCartesian(cx, cy, rInner, 60).y}
              x2={polarToCartesian(cx, cy, rOuter, 60).x}
              y2={polarToCartesian(cx, cy, rOuter, 60).y}
              stroke="#0f172a"
              strokeWidth="2"
            />

            {/* Subtle Ticks & Labels */}
            <text x="14" y="108" fontSize="8" fontWeight="bold" fill="#64748b" textAnchor="middle" fontFamily="Fredoka">0t</text>
            <text x={polarToCartesian(cx, cy, 90, 156).x} y={polarToCartesian(cx, cy, 90, 156).y - 2} fontSize="8" fontWeight="bold" fill="#059669" textAnchor="middle" fontFamily="Fredoka">2t</text>
            <text x={polarToCartesian(cx, cy, 90, 120).x} y={polarToCartesian(cx, cy, 90, 120).y - 2} fontSize="8" fontWeight="bold" fill="#65a30d" textAnchor="middle" fontFamily="Fredoka">5t</text>
            <text x={polarToCartesian(cx, cy, 90, 60).x} y={polarToCartesian(cx, cy, 90, 60).y - 2} fontSize="8" fontWeight="bold" fill="#d97706" textAnchor="middle" fontFamily="Fredoka">10t</text>
            <text x="186" y="108" fontSize="8" fontWeight="bold" fill="#dc2626" textAnchor="middle" fontFamily="Fredoka">15t+</text>

            {/* Needle (Sleek pointed cartoon needle rotating around cx=100, cy=95) */}
            <g transform={`rotate(${needleRotation} ${cx} ${cy})`} className="transition-transform duration-700 ease-out">
              {/* Pointed Needle Shape */}
              <polygon
                points={`${cx - 2.5},${cy} ${cx + 2.5},${cy} ${cx},24`}
                fill="#0f172a"
              />
              {/* Subtle accent highlight on needle */}
              <circle cx={cx} cy="30" r="1.5" fill="#f59e0b" />
            </g>

            {/* Center Pivot Hub */}
            <circle cx={cx} cy={cy} r="8" fill="#0f172a" />
            <circle cx={cx} cy={cy} r="3.5" fill="#ffffff" />
          </svg>
        </div>

        {/* Big Score Display */}
        <div className="flex flex-col items-center">
          <div className="flex items-baseline gap-2">
            <span className="font-cartoon text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight">
              {effectiveScore}
            </span>
            <span className="font-cartoon text-xl sm:text-2xl font-bold text-slate-600">
              Tonnen CO₂e
            </span>
          </div>

          {totalReduction > 0 && (
            <span className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-600 text-emerald-800 text-xs font-bold animate-pulse">
              🎉 -{totalReduction.toFixed(1)}t durch deine {selectedPledges.length} Versprechen eingespart!
            </span>
          )}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-5 pt-5 border-t border-slate-200 text-xs">
          <div className="flex items-center gap-2 justify-center">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="text-slate-600 font-medium">Paris Ziel (&lt;2t)</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="w-3 h-3 rounded-full bg-lime-500 shrink-0"></span>
            <span className="text-slate-600 font-medium">Weltweit (~5t)</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0"></span>
            <span className="text-slate-600 font-medium">Deutschland (~10,5t)</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="w-3 h-3 rounded-full bg-rose-500 shrink-0"></span>
            <span className="text-slate-600 font-medium">Überdurchschnitt</span>
          </div>
        </div>
      </div>

      {/* 3. Comparison Chart */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-3 border-slate-900 shadow-[0_8px_0_0_#0f172a]">
        <h3 className="font-cartoon text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
          <span>📊</span> Der direkte Vergleich
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Wie schneidest du im Vergleich zum Pariser Klimaziel und Durchschnitt ab?
        </p>

        <div className="flex flex-col gap-4">
          {/* Dein Wert */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-slate-900">👉 Du ({responses.userName || 'Dein Wert'})</span>
              <span className="text-emerald-700">{effectiveScore} t</span>
            </div>
            <div className="w-full bg-slate-100 h-5 rounded-full overflow-hidden border-2 border-slate-900">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (effectiveScore / 15) * 100)}%` }}
              />
            </div>
          </div>

          {/* 1.5C Target */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-slate-600">🎯 1,5°C Pariser Ziel (Maximal verträglich)</span>
              <span className="text-emerald-600">1,5 – 2,0 t</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-300">
              <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${(2.0 / 15) * 100}%` }} />
            </div>
          </div>

          {/* World Average */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-slate-600">🌍 Weltweiter Durchschnitt pro Kopf</span>
              <span className="text-amber-600">5,0 t</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-300">
              <div className="bg-amber-400 h-full rounded-full" style={{ width: `${(5.0 / 15) * 100}%` }} />
            </div>
          </div>

          {/* Germany Average */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-slate-600">🇩🇪 Deutschland Durchschnitt pro Kopf</span>
              <span className="text-rose-600">10,5 t</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-300">
              <div className="bg-rose-400 h-full rounded-full" style={{ width: `${(10.5 / 15) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Category Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Housing */}
        <div className="bg-white p-5 rounded-3xl border-3 border-slate-900 shadow-[0_5px_0_0_#0f172a] flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 border-2 border-slate-900 flex items-center justify-center text-2xl shrink-0">
            🏠
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bereich</span>
            <h4 className="font-cartoon text-lg font-bold text-slate-900">Wohnen & Energie</h4>
            <p className="font-cartoon text-2xl font-bold text-amber-600">{breakdown.housing} t <span className="text-xs text-slate-500">CO₂e</span></p>
            <p className="text-xs text-slate-500 mt-1">Heizung, Wohnfläche & Haushaltsstrom.</p>
          </div>
        </div>

        {/* Mobility */}
        <div className="bg-white p-5 rounded-3xl border-3 border-slate-900 shadow-[0_5px_0_0_#0f172a] flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 border-2 border-slate-900 flex items-center justify-center text-2xl shrink-0">
            🚗
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bereich</span>
            <h4 className="font-cartoon text-lg font-bold text-slate-900">Mobilität & Reisen</h4>
            <p className="font-cartoon text-2xl font-bold text-sky-600">{breakdown.mobility} t <span className="text-xs text-slate-500">CO₂e</span></p>
            <p className="text-xs text-slate-500 mt-1">Pkw, Flüge, ÖPNV & E-Scooter.</p>
          </div>
        </div>

        {/* Food & Goods */}
        <div className="bg-white p-5 rounded-3xl border-3 border-slate-900 shadow-[0_5px_0_0_#0f172a] flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 border-2 border-slate-900 flex items-center justify-center text-2xl shrink-0">
            🍽️
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bereich</span>
            <h4 className="font-cartoon text-lg font-bold text-slate-900">Ernährung & Konsum</h4>
            <p className="font-cartoon text-2xl font-bold text-emerald-600">{breakdown.consumption} t <span className="text-xs text-slate-500">CO₂e</span></p>
            <p className="text-xs text-slate-500 mt-1">Fleisch, Shopping & Abfall.</p>
          </div>
        </div>

        {/* Digital & Tech */}
        <div className="bg-white p-5 rounded-3xl border-3 border-slate-900 shadow-[0_5px_0_0_#0f172a] flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 border-2 border-slate-900 flex items-center justify-center text-2xl shrink-0">
            🤖
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bereich</span>
            <h4 className="font-cartoon text-lg font-bold text-slate-900">KI, Technik & Vaping</h4>
            <p className="font-cartoon text-2xl font-bold text-purple-600">{(breakdown.tech + breakdown.vaping).toFixed(2)} t <span className="text-xs text-slate-500">CO₂e</span></p>
            <p className="text-xs text-slate-500 mt-1">Rechenzentren, Handys & Vaping-Akkus.</p>
          </div>
        </div>
      </div>

      {/* 5. Achievements Section: Was du bereits vorbildlich machst! */}
      {achievements.length > 0 && (
        <div className="bg-emerald-50/90 p-6 sm:p-7 rounded-3xl border-3 border-emerald-900/40 shadow-[0_6px_0_0_#065f46]">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h4 className="font-cartoon text-lg sm:text-xl font-bold text-emerald-950 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>Was du bereits vorbildlich machst! ({achievements.length} Erfolge)</span>
            </h4>
            <span className="px-3 py-1 rounded-full bg-emerald-200/70 text-emerald-900 text-xs font-bold">
              Bereits eingehalten ✅
            </span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-800 mb-4">
            Anhand deiner Antworten machst du diese wichtigen Dinge bereits richtig – weiter so!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {achievements.map((ach) => (
              <div key={ach.id} className="bg-white/90 p-3 rounded-2xl border-2 border-emerald-800/30 flex items-start gap-2.5 shadow-sm">
                <span className="text-2xl shrink-0">{ach.icon}</span>
                <div>
                  <strong className="block font-cartoon text-xs sm:text-sm text-slate-900 font-bold leading-snug">
                    {ach.title}
                  </strong>
                  <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                    {ach.praise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Special Scientific Spotlight from Gemini Notebook LCA Report */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 sm:p-7 rounded-3xl border-3 border-amber-900/40 shadow-[0_6px_0_0_#78350f]">
        <h4 className="font-cartoon text-lg sm:text-xl font-bold text-amber-950 flex items-center gap-2 mb-3">
          <span>🔬</span> Ökobilanz-Spotlight: Technik, KI, E-Scooter & Vaping
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-700">
          <div className="bg-white/80 p-3.5 rounded-2xl border border-amber-300">
            <strong className="block text-slate-900 font-cartoon text-sm mb-1">
              🚭 Vaping & Lithium-Müll
            </strong>
            Einweg-Vapes verursachen 150g CO₂e und vernichten kostbares Lithium. Unsachgemäß entsorgte Akkus entfachen Brände in Müllanlagen (12.970 t CO₂e).
          </div>
          <div className="bg-white/80 p-3.5 rounded-2xl border border-amber-300">
            <strong className="block text-slate-900 font-cartoon text-sm mb-1">
              🛴 E-Scooter Smart Charging
            </strong>
            Shared E-Scooter schlagen mit 82,8g CO₂e/Fahrt zu Buche (inkl. Transporter-Logistik). Wer nachts bei Windkraft lädt, senkt Emissionen um 24,5 %!
          </div>
          <div className="bg-white/80 p-3.5 rounded-2xl border border-amber-300">
            <strong className="block text-slate-900 font-cartoon text-sm mb-1">
              🤖 Carbon-aware KI-Workloads
            </strong>
            GPU-Cluster skalieren stark. Das Verschieben rechenintensiver Prompts in lastarme Off-Peak-Fenster entlastet fossile Grenzkraftwerke.
          </div>
        </div>
      </div>

      {/* 7. Interactive Action Plan / Klimaversprechen (NUR NOCH OFFENE VERSPECHEN) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-3 border-slate-900 shadow-[0_8px_0_0_#0f172a]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="font-cartoon text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>🌱</span> Deine persönlichen Klimaversprechen
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {applicablePledges.length > 0
                ? 'Hier siehst du Hebel, die du laut deinen Antworten noch nicht umsetzt. Wähle deine Vorsätze aus – dein CO₂-Wert sinkt sofort live!'
                : 'Fantastisch! Du setzt bereits alle in dieser Umfrage geprüften Hebel vorbildlich um!'}
            </p>
          </div>
          {applicablePledges.length > 0 && (
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 shrink-0">
              {selectedPledges.length} von {applicablePledges.length} aktiv
            </span>
          )}
        </div>

        {/* Pledges Grid - ONLY applicable pledges the user has NOT adhered to yet */}
        {applicablePledges.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {applicablePledges.map((pledge) => {
              const isChecked = selectedPledges.includes(pledge.id);
              return (
                <button
                  key={pledge.id}
                  type="button"
                  onClick={() => togglePledge(pledge.id)}
                  className={`text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3 group active:scale-[0.99] ${
                    isChecked
                      ? 'bg-emerald-50 border-emerald-600 shadow-[0_4px_0_0_#059669]'
                      : 'bg-white hover:bg-slate-50 border-slate-900 shadow-[0_3px_0_0_#0f172a]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-400 group-hover:border-slate-900 bg-white'
                  }`}>
                    {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-cartoon font-bold text-sm text-slate-900 flex items-center gap-1.5">
                        <span>{pledge.icon}</span> {pledge.title}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold shrink-0">
                        -{pledge.co2Reduction} t
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      {pledge.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-500 text-center flex flex-col items-center gap-2">
            <span className="text-4xl">🌟</span>
            <strong className="font-cartoon text-lg text-emerald-900">
              Keine offenen Versprechen nötig!
            </strong>
            <p className="text-xs sm:text-sm text-emerald-800 max-w-md">
              Du lebst bereits nach den höchsten Nachhaltigkeitsstandards und hältst alle Maßnahmen ein. Du bist ein echtes Vorbild!
            </p>
          </div>
        )}
      </div>

      {/* 8. Kala Klima-Pass (Printable Urkunde) */}
      <div className="bg-emerald-50 p-6 sm:p-8 rounded-3xl border-3 border-emerald-900/50 shadow-[0_8px_0_0_#064e3b] text-center relative overflow-hidden print:border print:shadow-none">
        <div className="absolute top-2 right-2 text-6xl opacity-10 pointer-events-none">
          🌍
        </div>
        <span className="inline-block px-3 py-1 rounded-full bg-white border-2 border-slate-900 text-xs font-bold text-slate-900 mb-3 shadow-sm">
          Offizielle Kala Klima-Urkunde
        </span>
        <h4 className="font-cartoon text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
          Klima-Pass: {responses.userName || 'Klima-Pionier'}
        </h4>
        <p className="text-xs text-slate-600 mb-3">
          Status: <strong>{persona.title}</strong> • Aktueller Jahres-Fußabdruck: <strong>{effectiveScore} Tonnen CO₂e</strong>
        </p>

        {/* Certificate Badge & QR-Code */}
        <div className="my-5 p-4 rounded-2xl bg-white/90 border-2 border-slate-900 shadow-[0_4px_0_0_#0f172a] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-lg mx-auto text-left">
          <div className="flex items-center gap-3.5">
            <img
              src="./qr-code.svg"
              alt="QR-Code zum Kala Klima-Rechner"
              className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl border-2 border-slate-900 bg-white p-1 shadow-sm shrink-0"
            />
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                📱 Rechner weitergeben
              </span>
              <p className="font-cartoon text-xs sm:text-sm font-bold text-slate-900 mt-1 leading-snug">
                Scanne den Code mit deinem Smartphone
              </p>
              <p className="text-[11px] text-slate-500 leading-tight">
                Teile deinen Klima-Pass mit Freunden & Mitschülern!
              </p>
            </div>
          </div>
          <div className="hidden sm:block text-right border-l-2 border-slate-200 pl-4 shrink-0">
            <span className="text-[10px] text-slate-400 font-bold block uppercase">Ausgestellt am</span>
            <span className="text-xs font-bold text-slate-700">{new Date().toLocaleDateString('de-DE')}</span>
          </div>
        </div>

        <div className="inline-flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleShare}
            className="px-5 py-2.5 cartoon-btn-primary text-sm flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            <span>{copied ? 'In die Zwischenablage kopiert! 👍' : 'Ergebnis teilen'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 cartoon-btn-secondary text-sm flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Klima-Pass drucken</span>
          </button>
          <a
            href="./whatsapp-klima-check.png"
            download="Kala-Klima-Rechner-WhatsApp.png"
            className="px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-amber-100 hover:bg-amber-200 text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-[0_3px_0_0_#0f172a] active:translate-y-0.5 transition-all"
          >
            <Download className="w-3.5 h-3.5 text-amber-800" />
            <span>WhatsApp-Bild</span>
          </a>
          <button
            onClick={onRestart}
            className="px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-slate-100 hover:bg-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-[0_3px_0_0_#0f172a] active:translate-y-0.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Antworten anpassen</span>
          </button>
        </div>
      </div>

    </div>
  );
};
