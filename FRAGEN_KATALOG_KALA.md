# 🌿 Fragenkatalog & Systemkonzept: Ökologischer Fußabdruck Kala

Dieses Dokument definiert den vollständigen Fragenkatalog, das Berechnungsmodell und die geplanten Erweiterungen für das Projekt **Ökologischer Fußabdruck Kala**.

---

## 📌 Übersicht & Kernlogik

Der Rechner ermittelt den persönlichen CO₂-Fußabdruck in **Tonnen CO₂-Äquivalente (t CO₂e) pro Jahr** und vergleicht diesen mit den drei weltweiten Referenzwerten:
- **Globaler Durchschnitt:** ca. 5 Tonnen CO₂e
- **Westlicher Durchschnitt (Deutschland/DACH):** ca. 10–11 Tonnen CO₂e
- **Klimaziel (Paris 1,5°C):** unter **2 Tonnen CO₂e** bis 2030

### Einstufung / Persona-System:
1. **🚨 Stufe 1: Klimaschurke / Klimaschurkin** (> 10 t CO₂e)
2. **⚖️ Stufe 2: Klimakonsument / Klimakonsumentin** (5 – 10 t CO₂e)
3. **🌱 Stufe 3: Klimafreund / Klimafreundin** (2 – 5 t CO₂e)
4. **🦸 Stufe 4: Klimaheld / Klimaheldin** (< 2 t CO₂e)

---

## 🗂️ Teil 1: Die 4 Kernbereiche der Berechnung

### 🏠 BEREICH 1: WOHNEN & ENERGIE (Housing)
*Verantwortlich für ca. 20–35 % des durchschnittlichen Fußabdrucks.*

1. **Wohnfläche des Zuhauses:**
   - `< 40 m²` | `40–80 m²` | `80–120 m²` | `120–160 m²` | `> 160 m²`
2. **Gebäudeart:**
   - Einfamilienhaus | Doppelhaus / Reihenhaus | Wohnung / Appartement | Bauernhaus / Landhaus | Wohnwagen / Tiny House
3. **Baujahr des Gebäudes:**
   - Vor 1940 | 1941–1960 | 1961–1970 | 1971–1980 | 1981–1990 | 1991–2000 | 2001–2010 | 2011 und neuer
4. **Wärmedämmung:**
   - Modernisiert / saniert in den letzten 10 Jahren: Ja / Nein
5. **Heizsystem:**
   - Wärmepumpe (Luft/Erde/Wasser) | Fernwärme | Pellets / Biomasse / Holz | Erdgas | Heizöl | Elektro-Direktheizung | Solarthermie-Unterstützung | Keine Heizung
6. **Eigene Stromerzeugung:**
   - Photovoltaikanlage / Balkonkraftwerk vorhanden: Ja / Nein
7. **Stromtarif:**
   - Echter Ökostrom (100 % erneuerbar) | Konventioneller Strommix | Weiß nicht
8. **Klimaanlage & Kühlung:**
   - Vorhanden: Ja / Nein
   - Wenn Ja: Einsatzmonate (1-2, 3-4, 5-6, ganzjährig) & tägliche Stunden (<4h, 4-8h, >8h)
9. **Stromspargewohnheiten:**
   - Aktives Stromsparen (Eco-Modi, LED, Standby ausschalten): Ja / Nein
10. **Haushaltsgröße (Umlagefaktor):**
    - Anzahl Erwachsene (1, 2, 3, 4, 5+)
    - Anzahl Kinder (0, 1, 2, 3, 4, 5+)
    - Haustiere (Hunde/Katzen: 0, 1, 2, 3+)
11. **Zweitimmobilie / Ferienhaus:**
    - Vorhanden: Ja / Nein (wenn Ja: Fläche, Mitnutzer, Energieversorgung)

---

### 🚗 BEREICH 2: MOBILITÄT & REISEN (Mobility & Travel)
*Verantwortlich für ca. 25–40 % des durchschnittlichen Fußabdrucks.*

1. **Flugreisen (Privatflüge, Hin- und Rückflug = 1 Flug):**
   - Inlands- & Nahbereichsflüge (< 1.000 km)
   - Europäische Mittelstreckenflüge (1.000 – 3.500 km)
   - Interkontinental- / Langstreckenflüge (> 3.500 km)
   *(Stufen: Keine, max 1, 1-2, 2-3, 3-5, 5-10, >10 Flüge pro Jahr)*
2. **Pkw-Besitz:**
   - Anzahl Autos im Haushalt: Keines | 1 Auto | 2 Autos | 3+ Autos
3. **Pkw-Details (für Auto 1 & 2):**
   - Motorisierung: Vollelektrisch (EV) | Plug-in-Hybrid (PHEV) | Mild-Hybrid | Biokraftstoff | Verbrenner (Benzin/Diesel)
   - Jährliche Fahrleistung: < 10.000 km | 10.000–20.000 km | 20.000–30.000 km | 30.000–40.000 km | > 50.000 km
   - Fahrzeugklasse: Kleinwagen | Kompakt-/Mittelklasse | Oberklasse/SUV/Van
   - Baujahr: Älter als 2005 | 2005–2014 | 2015–2019 | 2020 oder neuer
4. **Carsharing:**
   - Nutzung: Ja / Nein
   - Flotte: Elektro | Verbrenner | Mix
   - Nutzungstage pro Jahr: 1–10, 10–20, 20–60, >60 Tage
5. **Mietwagen & Taxis / Ride-Hailing (Uber):**
   - Häufigkeit und Antriebsart
6. **Öffentlicher Verkehr (ÖPNV & Bahn):**
   - Nutzung Bus, Straßenbahn, U-Bahn & Zug (Tage pro Woche: Nie, 1-2, 2-3, 3-4, 5-7 Tage)
7. **Aktive Mobilität:**
   - Fahrrad / E-Bike / Zufußgehen für Alltagswege (Tage pro Woche: Nie, 1-2, 3-4, 5-7 Tage)
8. **Motorräder, Roller & Motorboote:**
   - Besitz, Fahrleistung & Motorart
9. **Fähren & Kreuzfahrten:**
   - Reisetage pro Jahr: 0, 1-10, 10-20, 20-30, >30 Tage

---

### 🍽️ BEREICH 3: ERNÄHRUNG & LEBENSMITTEL (Food & Diet)
*Verantwortlich für ca. 15–25 % des durchschnittlichen Fußabdrucks.*

1. **Fleischkonsum Rind & Lamm (Methan-Emittenten):**
   - Nie / fast nie | 1–2 Tage/Woche | 2–3 Tage/Woche | 3–4 Tage/Woche | Täglich
2. **Pflanzenbasierte Mahlzeiten:**
   - Häufigkeit fleischfreier Tage (Nie, 1-2, 2-3, 3-4, 4-7 Tage, Immer)
3. **Anteil veganer Ernährung:**
   - Wie viel der Ernährung ist frei von Milch- und Eiprodukten? (<50 %, >50 %, 100 % vegan)
4. **Saisonale & regionale Lebensmittel:**
   - Bewusste Bevorzugung: Ja / Nein
5. **Selbstversorgung:**
   - Eigenanbau im Garten/Balkon, Angeln oder Sammeln: Anteil <10 %, 10–20 %, >20 %
6. **Lebensmittelverschwendung:**
   - Umgang mit Resten: Vermeidest du aktiv Müll? (Vollständig, Versuche es, Selten)
   - Trennung: Restmüll vs. Bio-Tonne / Kompost
7. **Palmöl & verarbeitete Produkte:**
   - Bewusstes Meiden von Produkten mit nicht-nachhaltigem Palmöl
8. **Tierfutter / Haustiere:**
   - Klimafreundliches Futter (Insektenprotein, pflanzlich, Reste)

---

### 🛍️ BEREICH 4: KONSUM & GÜTER (Consumption & Goods)
*Verantwortlich für ca. 15–25 % des durchschnittlichen Fußabdrucks.*

1. **Kaufverhalten bei Neuwaren:**
   - Selten neue Dinge | Gelegentlich | Regelmäßiges Shopping als Hobby
2. **Qualität vs. Wegwerfartikel:**
   - Fokus auf Langlebigkeit & Reparierbarkeit vs. billige Schnellkäufe
3. **Second-Hand & Kreislauf:**
   - Gebrauchtkauf von Möbeln, Elektronik, Fahrrädern
   - Weitergeben, Verkaufen oder Spenden alter Gegenstände
4. **Plastik & Einwegverpackungen:**
   - Aktive Reduktion von Einwegplastik (Flaschen, Becher, Tüten)
5. **Mülltrennung & Recycling-Disziplin:**
   - Konsequentes Recycling von Papier, Glas, Metall, Wertstoffen

---

## ✨ BEREICH 5: KALA-SPEZIFISCHE ERWEITERUNGEN (Neu & Modern)
*Diese Fragen existieren nicht im alten Rechner und machen Kala einzigartig:*

1. **📱 Digitaler Fußabdruck & Cloud:**
   - Video-Streaming (Netflix, YouTube etc.) in 4K: Wie viele Stunden täglich?
   - Cloud-Speicher & Datensparsamkeit (Löschen alter Backups, Mails)
   - Nutzung von KI-Diensten & Hardware-Austauschzyklen (Handy jedes Jahr vs. 4+ Jahre)
2. **👗 Textilien & Fast Fashion:**
   - Wie viele neue Kleidungsstücke kaufst du pro Monat/Jahr?
   - Bevorzugung von Bio-Baumwolle, Leinen, Tencel, Wolle vs. Polyester/Acryl
3. **💳 Grünes Geld & Finanzen:**
   - Liegt dein Geld auf einem nachhaltigen Bankkonto (z. B. GLS, Triodos, Tomorrow), das keine Kohle-/Waffenprojekte finanziert?
4. **💧 Warmwasser- & Duschgewohnheiten:**
   - Duschdauer (<5 Min, 5-10 Min, >10 Min) & Sparduschkopf vorhanden

---

## 🎯 Teil 2: Die Klimaversprechen (Persönlicher Aktionsplan)

Nach der Berechnung wählt die Person konkrete Versprechen aus, die den Fußabdruck interaktiv reduzieren:
- 🚴 Mehr Rad & Fußwege statt Kurzstrecken-Auto (-0.3 t)
- 🥗 2–3x wöchentlich vegetarisch essen (-0.2 t)
- 🌱 2–3x wöchentlich vegan essen (-0.1 t)
- 🥩 Rind- und Lammfleisch um 50% reduzieren (-0.5 t)
- 🔌 Auf echten Ökostrom-Tarif wechseln (-0.4 t)
- ✈️ Auf Inlandsflüge verzichten (-0.5 t)
- 🌍 Fernreisen durch Zug- oder Regionalurlaube ersetzen (-1.5 t)
- ♻️ Lebensmittelabfälle halbieren (-0.2 t)
- 👕 Keine Fast Fashion mehr kaufen, mehr Second-Hand (-0.2 t)
- 🏦 Zu einer nachhaltigen Bank wechseln (-0.3 t indirekt)

---

## 💻 Technischer Realisierungsplan

1. **Engine:** Single-Page Application (SPA) mit vollständiger Client-Side-Logik (keine Datenbank nötig, schnell und DSGVO-konform).
2. **Design:** Minimalistisches, edles Apple Liquid Glass Design mit interaktivem Tachometer / Kreisdiagramm.
3. **Deployment:** Automatischer GitHub Pages Build via GitHub Actions.
