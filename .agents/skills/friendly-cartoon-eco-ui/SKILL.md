---
name: friendly-cartoon-eco-ui
description: >
  Erstellt lebendige, freundliche, schultaugliche Web-Apps und Dashboards im "Friendly Cartoon & Neo-Tactile" Design.
  Perfekt für Bildungs-, Umwelt-, Nachhaltigkeits-, Quiz- und Rechner-Anwendungen.
  Kombiniert Fredoka + Plus Jakarta Sans Typografie, dicke Konturen (3px solid #0f172a), taktile Offset-Schatten (0 8px 0 #0f172a),
  interaktive 3D-Three.js-Cartoon-Elemente (z.B. rotierender Cartoon-Globus), exakte Semicircle-Gauges (Halbkreis-Tachometer),
  klickbare Fragekarten mit Feedback, Persona-Gamification und Confetti-Aktionen.
  Trigger: "friendly cartoon ui", "cartoon design", "schultaugliches design", "cartoon eco ui", "kala design", "tactile cartoon web", "cartoon dashboard", "3d cartoon globus".
---

# 🌍 Friendly Cartoon & Neo-Tactile UI System

Dieses Skill-System definiert Richtlinien, Komponenten-Architekturen, CSS-Token und Three.js-3D-Muster zur Erstellung von Web-Apps im **freundlichen Cartoon- und Neo-Tactile-Stil**. 

Es eignet sich besonders für interaktive Rechner, Bildungs-Apps, Schulprojekte, Quiz-Systeme und Nachhaltigkeits-Tools, die Spaß machen, einladend wirken und auf allen Geräten (vor allem Mobilgeräten) tadellos bedienbar sind.

---

## 🎨 1. Design-Philosophie & Kern-Prinzipien

1. **Freundlich, Einladend & Schultauglich:** Keine einschüchternden grauen Formulare oder kühles Corporate-Design. Stattdessen warme Farben, abgerundete Ecken (`rounded-2xl` bis `rounded-3xl`) und motivierende Gamification.
2. **Neo-Tactile Haptik (Physisches Feedback):** 
   - Fette dunkle Konturen (`border: 3px solid #0f172a`)
   - Solide Offset-Schatten ohne Weichzeichner (`box-shadow: 0 8px 0px 0px #0f172a`)
   - Taktiler Klickeffekt: Beim Drücken (`:active`) verschiebt sich der Button um `translateY(3px)` und der Schatten verringert sich – fühlt sich wie ein echter physischer Knopf an!
3. **Zweiklang der Typografie:**
   - **Überschriften & Zahlen:** `Fredoka` (rundlich, heiter, modern und extrem lesbar).
   - **Fließtext & UI-Labels:** `Plus Jakarta Sans` oder `Outfit` (klar, modern, geometrisch und auch bei kleinen Schriftgrößen gestochen scharf).
4. **Interaktive 3D-Elemente:** Einbindung von Three.js mit Toon-Shading (Cel-Shading), weichem Ambient Light und prozeduralen Texturen (z. B. 3D-Cartoon-Erde mit Wölkchen und Keimling).
5. **100 % Mobil-Optimiert:** Touch-Targets mindestens 48 px hoch, responsive SVG-Gauges und flüssige Ein-Klick-Navigation.

---

## 🌈 2. Farb-Palette & Design-Tokens

### Farb-Rollen
* **Hintergrund:** Heller, sanfter Verlauf (`from-sky-100 via-emerald-50 to-amber-50`).
* **Kontur / Text-Basis:** Tiefes Schieferblau (`#0f172a`).
* **Primär-Aktion (Grün/Smaragd):** `#10b981` (Hover: `#059669`, Aktiv: `#047857`).
* **Sekundär-Aktion (Weiß/Grau):** `#ffffff` (Hover: `#f8fafc`).
* **Warnung / Energie (Bernstein):** `#f59e0b` (Hover: `#d97706`).
* **Gefahr / Hoher Ausstoß (Koralle/Rot):** `#ef4444`.
* **Wasser / Himmel (Himmelblau):** `#38bdf8` / `#0284c7`.

### CSS Klassen & Utilities

```css
/* Haupt-Karte */
.cartoon-card {
  background-color: rgba(255, 255, 255, 0.95);
  border: 3px solid #0f172a;
  box-shadow: 0 8px 0px 0px #0f172a;
  border-radius: 1.5rem;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cartoon-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 0px 0px #0f172a;
}

/* Ausgewählte Option */
.cartoon-card-selected {
  background-color: #ecfdf5;
  border: 3px solid #059669;
  box-shadow: 0 6px 0px 0px #047857;
}

/* Primär-Button */
.cartoon-btn-primary {
  background-color: #10b981;
  color: #ffffff;
  border: 3px solid #0f172a;
  box-shadow: 0 5px 0px 0px #0f172a;
  border-radius: 1rem;
  font-family: 'Fredoka', cursive, sans-serif;
  font-weight: 600;
  transition: all 0.15s ease;
}

.cartoon-btn-primary:hover {
  background-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 7px 0px 0px #0f172a;
}

.cartoon-btn-primary:active {
  transform: translateY(3px);
  box-shadow: 0 2px 0px 0px #0f172a;
}
```

---

## 🧭 3. Das Semicircle Speedometer Gauge (Halbkreis-Tacho)

Ein häufiger Fehler bei SVG-Tachos sind runde Kappen (`strokeLinecap="round"`), die den Halbkreis nach unten krümmen und wie ein Hufeisen verziehen.

### Die mathematisch exakte Halbkreis-Regel
1. Der Halbkreis beginnt bei $180^\circ$ (links) und endet bei $0^\circ$ (rechts) exakt auf der horizontalen Grundlinie $y = cy$.
2. Verwende `strokeLinecap="butt"` für die Farbzonen, sodass die Enden exakt flach an der Grundlinie abschließen.
3. Die Nadel rotiert von $-90^\circ$ (linker Endpunkt, Wert 0) bis $+90^\circ$ (rechter Endpunkt, Maximalwert).

```tsx
// Helper für exakte Kreisbögen
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
```

---

## 🌍 4. Three.js 3D Cartoon Globus

Der 3D-Globus verwendet Toon-Shading (Cel-Shading), ein zartes Backside-Inverted-Mesh für den Cartoon-Außenrand und prozedurale Texturen:

1. **SphereGeometry:** Stilisierte Erde mit `MeshToonMaterial`.
2. **Backside Outline Mesh:** Etwas größere Kugel (`radius * 1.02`) mit `MeshBasicMaterial({ color: 0x0f172a, side: THREE.BackSide })`.
3. **Fluffige Wölkchen (Puffy Clouds):** Cluster aus kleinen Halbkugeln/Sphären, die mit leicht unterschiedlicher Geschwindigkeit im Orbit rotieren.
4. **Keimling / Sprout am Pol:** Zarter Stängel und zwei Blätter mit sanftem Wippen (`Math.sin(time * 2) * 0.08`).
5. **Touch & Drag:** Per Maus oder Touchscreen frei rotierbar.

---

## 🎯 5. Umfrage- & Gamification-Architektur

1. **Personalisierung:** Nutzer gibt zu Beginn seinen Namen ein, der in Fragen, Auswertungen und Urkunden eingebettet wird.
2. **Bedingtes Routing (Conditional Logic):** Irrelevante Fragen überspringen (z. B. keine Autofragen bei Autofreien).
3. **Wissenschaftliche Infoboxen:** Kurze, verständliche Fakten zu jeder Frage mit Glühbirnen-Icon 💡.
4. **Dynamische Versprechen-Filterung:**
   - Zeige im Aktionsplan **nur Maßnahmen an, die der Nutzer laut seinen Antworten noch nicht einhält**.
   - Belohne bestehende gute Gewohnheiten in einem eigenen Erfolgs-Bereich („Was du bereits vorbildlich machst! 🌟“).
5. **Kala Klima-Pass (Urkunde):** Druckbare Zusammenfassung mit offiziellem Stempel, Rang, Datum und QR-Code zum Weitersagen.

---

## 📱 6. Mobile & QR-Code Integration

* Integriere immer einen QR-Code für die Live-URL in:
  - Header-Modal („Am Smartphone öffnen“)
  - Die gedruckte Urkunde / den Klima-Pass
* Sicherstellen, dass alle Buttons mindestens 48 px hoch sind und auf Touch-Displays sofortiges visuelles Feedback geben.
