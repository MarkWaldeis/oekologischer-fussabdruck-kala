# Vollständiger Fragenkatalog von ClimateHero (Ökologischer Fußabdruck Rechner)

## 1. Einstieg & Basisdaten

### Frage 1: Hi, mein Name ist *ClimateBot* und ich wurde programmiert, um dir zu helfen, ein*e Klimaheld*in zu werden.

*Wie heißt du?* 
> **Beschreibung / Info:** Gib deinen Vornamen ein:

- **Typ:** `short_text`

### Frage 2: Hallo {{field:name}}, schön dich kennenzulernen!
Sag mir doch bitte auch, wie du dich selbst einordnest:
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Männlich
  - Weiblich
  - Roboter
  - Sonstiges

### Frage 3: Verzeihung, {{field:name}}!
> **Beschreibung / Info:** Dieser Test funktioniert nur für Menschen. Bist du ganz sicher, dass du ein Roboter bist oder möchtest du es nochmal versuchen?

- **Typ:** `statement`

### Frage 4: OK {{field:name}}, lass uns anfangen.
> **Beschreibung / Info:** Die CO2-Bilanz wird in CO2-Äquivalenten (CO2e) gemessen. Das ist eine Maßeinheit, die berücksichtigt, dass sich alle Treibhausgase (Kohlendioxid, Stickoxide, Methan usw.) unterschiedlich stark auf den Treibhauseffekt auswirken.

- **Typ:** `statement`

### Frage 5: Gut, {{field:name}},  lass uns mit ein paar Fragen zu deinem Zuhause anfangen. 
> **Beschreibung / Info:** Dies sind Fragen zu Strom, Heizung und Wohnen.

- **Typ:** `statement`

### Frage 6: Wie groß ist dein Zuhause?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - < 40 m²
  - 40–80 m²
  - 80–120 m²
  - 120–160 m²
  - > 160 m²

## 2. Kategorie: WOHNEN (Housing)

### Frage 7: Wohnst du in einer Wohnung oder in einem Haus?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Einfamilienhaus
  - Doppelhaus / Reihenhaus
  - Wohnung / Appartement
  - Bauernhaus / Landhaus
  - Wohnwagen

### Frage 8: In welchem Jahrzehnt wurde das Haus gebaut? 
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiß ich nicht
  - Vor 1940
  - 1941–1960
  - 1961–1970
  - 1971–1980
  - 1981–1990
  - 1991–2000
  - 2001–2010
  - 2011–

### Frage 9: Welche Art von Heizung wird für das Gebäude genutzt?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiß ich nicht
  - Heizöl
  - Erdgas
  - Fernwärme
  - Luft- oder Erdwärmepumpe
  - Biobrennstoff (Pellets / Feuerholz / Biogas)
  - Elektroheizung
  - Warmwasserbereitung mit Solarstrom
  - Eine Kombination aus verschiedenen Heizarten
  - Keine Heizung

### Frage 10: Wurde die Wärmedämmung des Gebäudes erneuert?
> **Beschreibung / Info:** Antworte nur mit „Ja“, wenn die Erneuerung innerhalb der letzten 10 Jahre durchgeführt wurde.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

### Frage 11: Hat das Gebäude ein eigenes System zur Stromerzeugung? 
> **Beschreibung / Info:** z. B. Solarzellen auf dem Dach

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

### Frage 12: Hat dein Haushalt Zugang zu umweltfreundlichem Strom?
> **Beschreibung / Info:** z. B. einen Stromvertrag ohne fossile Energieträger, der nur Strom aus Wind-, Sonnen-, Atomenergie oder Wasserkraft liefert

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein
  - Weiß ich nicht

### Frage 13: Hat dein Zuhause eine Klimaanlage?
> **Beschreibung / Info:** Dazu zählen unter anderem zentrale Klimaanlagen, Fenstereinheiten und Split-Klimaanlagen.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

### Frage 14: Wie viele Monate im Jahr ist die Klimaanlage im Einsatz?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - weniger als 1 Monat im Jahr
  - 1–2 Monate im Jahr
  - 3–4 Monate im Jahr
  - 5–6 Monate im Jahr
  - 7–11 Monate im Jahr
  - Das ganze Jahr über

### Frage 15: Wie viele Stunden am Tag wird die Klimaanlage während dieser Zeit genutzt?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - weniger als 4 Stunden am Tag
  - 4–8 Stunden am Tag
  - 8–12 Stunden am Tag
  - 12–23 Stunden am Tag
  - Rund um die Uhr

### Frage 16: Versuchst du aktiv, deinen Stromverbrauch zu reduzieren?
> **Beschreibung / Info:** z. B. indem du energiesparende Produkte wählst, die Lichter ausschaltest oder Waschmaschinen und Spülmaschinen im Eco-Modus laufen lässt

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

### Frage 17: Wie viele Erwachsene (18 Jahre oder älter) leben in deinem Haushalt?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - 1 Erwachsene*r
  - 2 Erwachsene
  - 3 Erwachsene
  - 4 Erwachsene
  - 5 oder mehr Erwachsene

### Frage 18: Wie viele Kinder leben in deinem Haushalt?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Keine Kinder
  - 1 Kind
  - 2 Kinder
  - 3 Kinder
  - 4 Kinder
  - 5 oder mehr Kinder

### Frage 19: Wie viele Tiere leben in deinem Haushalt?
> **Beschreibung / Info:** Es zählen nur *Hunde*, *Katzen* und größere Tiere.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Keine Haustiere
  - 1 Haustier
  - 2 Haustiere
  - 3 oder mehr Haustiere

### Frage 20: Hast du noch eine zweite Immobilie?
> **Beschreibung / Info:** z. B. ein Wochenendhaus, ein Ferienhaus, eine Ferienwohnung oder eine andere Immobilie zur Teilzeitnutzung

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

### Frage 21: Wie groß ist deine zweite Immobilie?
> **Beschreibung / Info:** Falls du mehr als eine hast, gib die Gesamtsumme aller deiner zusätzlichen Immobilien an.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - < 40 m²
  - 40–80 m²
  - 80–120 m²
  - 120–160 m²
  - > 160 m²

### Frage 22: Wie viele Erwachsene teilen die Immobilie?
> **Beschreibung / Info:** Gib hier auch Nutzer*innen an, die die Immobilie nur für einen Teil des Jahres mieten.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - 1 Erwachsene*r
  - 2 Erwachsene
  - 3 Erwachsene
  - 4 Erwachsene
  - 5 oder mehr Erwachsene

### Frage 23: Hat die Immobilie ein eigenes System zur Stromerzeugung? 
> **Beschreibung / Info:** z. B. Solarzellen auf dem Dach

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, der gesamte Strom kommt aus dem Netz
  - Das Anwesen hat keinen Stromanschluss

### Frage 24: Bezieht deine Immobilie umweltfreundlichen Strom?
> **Beschreibung / Info:** z. B. durch einen Stromvertrag ohne fossile Energieträger, der nur Strom aus Wind-, Sonnen-, Atomenergie oder Wasserkraft liefert

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein
  - Weiß ich nicht

### Frage 25: Prima, {{field:name}}! Du hast Teil 1 von 3 geschafft. Als Nächstes haben wir ein paar Fragen zu deinen Reisegewohnheiten.
> **Beschreibung / Info:** Die Fragen sind unterteilt in *Flüge*, *Autofahrten* und *andere motorisierte Fahrzeuge*.

- **Typ:** `statement`

### Frage 26: Wie häufig fliegst du pro Jahr? 
> **Beschreibung / Info:** *1 Flug = Hin- und Rückflug*. Diese Fragen beziehen sich ausschließlich auf *private Reisen*, zähle hier also bitte keine Geschäftsreisen mit.

- **Typ:** `group`
- **Unterfragen (Gruppe):**
  - **1. Inlandsflüge oder Flüge in Nachbarländer** (multiple_choice)
    - Keine Flüge
    - Maximal ein Flug pro Jahr
    - 1–2 Flüge pro Jahr
    - 2–3 Flüge pro Jahr
    - 3–5 Flüge pro Jahr
    - 5–10 Flüge pro Jahr
    - Mehr als 10 Flüge pro Jahr
  - **2. Flüge in andere Teile des gleichen Kontinents** (multiple_choice)
    - Keine Flüge
    - Maximal ein Flug pro Jahr
    - 1–2 Flüge pro Jahr
    - 2–3 Flüge pro Jahr
    - 3–5 Flüge pro Jahr
    - 5–10 Flüge pro Jahr
    - Mehr als 10 Flüge pro Jahr
  - **3. Interkontinentalflüge** (multiple_choice)
    - Keine Flüge
    - Maximal ein Flug pro Jahr
    - 1–2 Flüge pro Jahr
    - 2–3 Flüge pro Jahr
    - 3–5 Flüge pro Jahr
    - 5–10 Flüge pro Jahr
    - Mehr als 10 Flüge pro Jahr

### Frage 27: Aber was ist mit meinem Privatjet?
> **Beschreibung / Info:** Die Fragen in diesem CO₂-Rechner sind auf die 10 Prozent der Weltbevölkerung zugeschnitten, deren Verbrauch [[laut Oxfam](https://www.oxfam.org/en/press-releases/worlds-richest-10-produce-half-carbon-emissions-while-poorest-35-billion-account)] 50 Prozent der globalen Treibhausgasemissionen verursacht. Dazu gehören im Grunde alle Menschen in der westlichen Welt, die ein Haus und ein monatliches Einkommen haben.  Wenn du jedoch über ein Vermögen verfügst, das dem Wert von mehr als einer Million Dollar entspricht, gehörst du zu den obersten 1 Prozent (die eventuell sogar einen Privatjet nutzen können). Wenn das der Fall ist, ist dein ökologischer Fußabdruck und deine Möglichkeit, einen Beitrag zu leisten, wahrscheinlich viel höher. [Kontaktiere uns](https://climatehero.me/contact-us/), und wir helfen dir mit einem maßgeschneiderten Plan, einen Beitrag zur Lösung des Klimawandels zu leisten.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ok, weiter geht's

### Frage 28: Besitzt oder least du ein Auto?
> **Beschreibung / Info:** Antworte auch mit „Ja“, falls du einen Firmenwagen hast, den du teilweise privat nutzt.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

## 3. Kategorie: REISEN & MOBILITÄT (Travel)

### Frage 29: Ein paar Fragen zu deinem Auto:
- **Typ:** `group`
- **Unterfragen (Gruppe):**
  - **1. Was für einen Motor hat dein Auto?** (multiple_choice)
    - Verbrennung fossiler Brennstoffe (Benzin/Gas/Diesel)
    - Verbrennung von Biokraftstoffen (Biogas/Ethanol/HVO usw.)
    - Mild-Hybrid (MHEV)
    - Plug-in-Hybrid (PHEV)
    - Vollelektrisch (EV)
  - **2. Wie viele Kilometer wird das Auto jährlich gefahren?** (multiple_choice)
    - < 10.000 km
    - 10.000–20.000 km
    - 20.000–30.000 km
    - 30.000–40.000 km
    - 40.000–50.000 km
    - > 50.000 km
  - **3. Welches Baujahr ist dein Auto?** (multiple_choice)
    - Älter als 2005
    - 2005–2009
    - 2010–2014
    - 2015–2019
    - 2020 oder neuer
  - **4. Wie groß ist dein Auto?** (multiple_choice)
    - Klein
    - Mittel
    - Groß
    - Geländewagen / Lieferwagen

### Frage 30: Bist du bei einem Carsharing-Dienst angemeldet?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

### Frage 31: Welche Art von Autos werden beim Carsharing genutzt?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Batteriebetriebene Elektrofahrzeuge (EV)
  - Autos mit Verbrennungsmotor (Benzin/Gas/Diesel)
  - Mischung aus Elektro- und Verbrennungsmotor (einschließlich Hybriden)

### Frage 32: An etwa wie vielen Tagen im Jahr nutzt du Autos eines Carsharing-Dienstes?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - 1–10 Tage pro Jahr
  - 10–20 Tage pro Jahr
  - 20–30 Tage pro Jahr
  - 30–60 Tage pro Jahr
  - 60–180 Tage pro Jahr
  - 180–365 Tage pro Jahr

### Frage 33: Mietest du gelegentlich ein Auto?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, nie

### Frage 34: Welche Art von Autos mietest du?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Batteriebetriebene Elektrofahrzeuge (EV)
  - Autos mit Verbrennungsmotor (Benzin/Gas/Diesel)
  - Mischung aus Elektro- und Verbrennungsmotor (einschließlich Hybriden)

### Frage 35: Wie oft mietest du ein Auto?
> **Beschreibung / Info:** An etwa wie vielen *Tagen im Jahr* mietest du ein Auto?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - 1–10 Tage pro Jahr
  - 10–20 Tage pro Jahr
  - 20–30 Tage pro Jahr
  - 30–60 Tage pro Jahr
  - 60–180 Tage pro Jahr
  - 180–365 Tage pro Jahr

### Frage 36: Fährst du gelegentlich mit dem Taxi?
> **Beschreibung / Info:** Hier beziehen wir uns auf die Nutzung sowohl traditioneller Taxis als auch neuerer Dienste wie Uber und Lyft.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, nie

### Frage 37: Welche Art von Taxis nutzt du?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Batteriebetriebene Elektrofahrzeuge (EV)
  - Autos mit Verbrennungsmotor (Benzin/Gas/Diesel)
  - Mischung aus Elektro- und Verbrennungsmotor (einschließlich Hybriden)

### Frage 38: Wie oft fährst du mit dem Taxi?
> **Beschreibung / Info:** Etwa wie viele *Taxifahrten* unternimmst du *pro Jahr*?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - 1–10 Taxifahrten
  - 10–20 Taxifahrten
  - 20–30 Taxifahrten
  - 30–60 Taxifahrten
  - 60–180 Taxifahrten
  - 180–365 Taxifahrten
  - > 365 Taxifahrten

### Frage 39: Wie oft nimmst du eine Fähre oder ein Kreuzfahrtschiff?
> **Beschreibung / Info:** An wie vielen *Tagen pro Jahr*?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - 0 Tage
  - 1–10 Tage pro Jahr
  - 10–20 Tage pro Jahr
  - 20–30 Tage pro Jahr
  - 30–60 Tage pro Jahr
  - 60–180 Tage pro Jahr
  - 180–365 Tage pro Jahr

### Frage 40: Wie oft nutzt du öffentliche Verkehrsmittel?
> **Beschreibung / Info:** z. B. Bus, Zug, U-Bahn oder Straßenbahn

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Nie / fast nie
  - 1–2 Tage die Woche
  - 2–3 Tage die Woche
  - 3–4 Tage die Woche
  - 4–7 Tage die Woche

### Frage 41: Wie oft gehst du zu Fuß oder nimmst das Fahrrad?
> **Beschreibung / Info:** Hierzu zählen Wege zwischen deinem Zuhause und der Arbeit, Schule, Freizeitaktivitäten usw.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Nie / fast nie
  - 1–2 Tage die Woche
  - 2–3 Tage die Woche
  - 3–4 Tage die Woche
  - 4–7 Tage die Woche

### Frage 42: Besitzt, mietet oder least dein Haushalt die folgenden Fahrzeuge:
- **Typ:** `group`
- **Unterfragen (Gruppe):**
  - **1. Motorrad?** (multiple_choice)
    - Ja
    - Nein
  - **2. Wie weit fährst du mit dem Motorrad pro Jahr?** (multiple_choice)
    - < 5.000 km
    - 5.000–10.000 km
    - 10.000–20.000 km
    - 20.000–40.000 km
    - > 40.000 km
  - **3. Was für einen Motor hat das Motorrad?** (multiple_choice)
    - Großer Benzin-/Dieselmotor (> 125 cc)
    - Kleiner Benzin-/Dieselmotor (< 125 cc)
    - Elektrisch / Biotreibstoff / Hybrid
  - **4. Moped oder Motorroller?** (multiple_choice)
    - Ja
    - Nein
  - **5. Wie weit fährst du damit pro Jahr?** (multiple_choice)
    - < 5.000 km
    - 5.000–10.000 km
    - 10.000–20.000 km
    - 20.000–40.000 km
    - > 40.000 km
  - **6. Was für einen Motor hat das Fahrzeug?** (multiple_choice)
    - Benzin / Diesel
    - Biotreibstoff
    - Hybrid
    - Elektro
  - **7. Motorboot?** (multiple_choice)
    - Ja
    - Nein
  - **8. Ungefähr wie viele Tage pro Jahr nutzt du das Motorboot?** (multiple_choice)
    - Weniger als 15 Tage pro Jahr
    - 15–30 Tage pro Jahr
    - 30–60 Tage pro Jahr
    - Mehr als 60 Tage pro Jahr
  - **9. Was für einen Motor hat das Boot?** (multiple_choice)
    - Großer Benzin-/Dieselmotor (> 50 PS)
    - Kleiner Benzin-/Dieselmotor (< 50 PS)
    - Elektro / Biotreibstoff / Hybrid

### Frage 43: Wie viele Autos besitzt oder least dein Haushalt?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Keines
  - 1 Auto
  - 2 Autos
  - 3 oder mehr Autos

### Frage 44: Hoppla! Entschuldigung, {{field:name}}, aber der Klimarechner schafft nur ein oder zwei Autos.
> **Beschreibung / Info:** Keine Sorge, wir haben eine Lösung für dich. Klicke statt „3 oder mehr Autos“ einfach „2 Autos“ an und rechne später die Kilometerzahl des dritten (und vierten etc.) Autos zu der des zweiten dazu.

- **Typ:** `statement`

### Frage 45: Ein paar Fragen zu deinem Auto:
- **Typ:** `group`
- **Unterfragen (Gruppe):**
  - **1. Was für einen Motor hat dein Auto?** (multiple_choice)
    - Verbrennung fossiler Brennstoffe (Benzin/Gas/Diesel)
    - Verbrennung von Biokraftstoffen (Biogas/Ethanol/HVO usw.)
    - Mild-Hybrid (MHEV)
    - Plug-in-Hybrid (PHEV)
    - Vollelektrisch (EV)
  - **2. Wie viele Kilometer wird das Auto jährlich gefahren?** (multiple_choice)
    - < 10.000 km
    - 10.000–20.000 km
    - 20.000–30.000 km
    - 30.000–40.000 km
    - 40.000–50.000 km
    - > 50.000 km
  - **3. Welches Baujahr ist dein Auto?** (multiple_choice)
    - Älter als 2005
    - 2005–2009
    - 2010–2014
    - 2015–2019
    - 2020 oder neuer
  - **4. Wie groß ist dein Auto?** (multiple_choice)
    - Klein
    - Mittel
    - Groß
    - Geländewagen / Lieferwagen

### Frage 46: Ein paar Fragen zu deinem zweiten Auto:
- **Typ:** `group`
- **Unterfragen (Gruppe):**
  - **1. Was für einen Motor hat dein Auto?** (multiple_choice)
    - Verbrennung fossiler Brennstoffe (Benzin/Gas/Diesel)
    - Verbrennung von Biokraftstoffen (Biogas/Ethanol/HVO usw.)
    - Mild-Hybrid (MHEV)
    - Plug-in-Hybrid (PHEV)
    - Vollelektrisch (EV)
  - **2. Wie viele Kilometer wird das Auto jährlich gefahren? ** (multiple_choice)
    - < 10.000 km
    - 10.000–20.000 km
    - 20.000–30.000 km
    - 30.000–40.000 km
    - 40.000–50.000 km
    - > 50.000 km
  - **3. Welches Baujahr ist dein Auto?** (multiple_choice)
    - Älter als 2005
    - 2005–2009
    - 2010–2014
    - 2015–2019
    - 2020 oder neuer
  - **4. Wie groß ist dein Auto?** (multiple_choice)
    - Klein
    - Mittel
    - Groß
    - Geländewagen / Lieferwagen

### Frage 47: Bist du bei einem Carsharing-Dienst angemeldet?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

### Frage 48: Welche Art von Autos werden beim Carsharing genutzt?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Batteriebetriebene Elektrofahrzeuge (EV)
  - Autos mit Verbrennungsmotor (Benzin/Gas/Diesel)
  - Mischung aus Elektro- und Verbrennungsmotor (einschließlich Hybriden)

### Frage 49: An etwa wie vielen Tagen im Jahr nutzt du Autos eines Carsharing-Dienstes?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - 1–10 Tage pro Jahr
  - 10–20 Tage pro Jahr
  - 20–30 Tage pro Jahr
  - 30–60 Tage pro Jahr
  - 60–180 Tage pro Jahr
  - 180–365 Tage pro Jahr

### Frage 50: Mietest du gelegentlich ein Auto?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, nie

### Frage 51: Welche Art von Autos mietest du?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Batteriebetriebene Elektrofahrzeuge (EV)
  - Autos mit Verbrennungsmotor (Benzin/Gas/Diesel)
  - Mischung aus Elektro- und Verbrennungsmotor (einschließlich Hybriden)

### Frage 52: Wie oft mietest du ein Auto?
> **Beschreibung / Info:** An etwa wie vielen *Tagen im Jahr* mietest du ein Auto?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - 1–10 Tage pro Jahr
  - 10–20 Tage pro Jahr
  - 20–30 Tage pro Jahr
  - 30–60 Tage pro Jahr
  - 60–180 Tage pro Jahr
  - 180–365 Tage pro Jahr

### Frage 53: Fährst du gelegentlich mit dem Taxi?
> **Beschreibung / Info:** Hier beziehen wir uns auf die Nutzung sowohl traditioneller Taxis als auch neuerer Dienste wie Uber und Lyft.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, nie

### Frage 54: Welche Art von Taxis nutzt du?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Batteriebetriebene Elektrofahrzeuge (EV)
  - Autos mit Verbrennungsmotor (Benzin/Gas/Diesel)
  - Mischung aus Elektro- und Verbrennungsmotor (einschließlich Hybriden)

### Frage 55: Wie oft fährst du mit dem Taxi?
> **Beschreibung / Info:** Etwa wie viele *Taxifahrten* unternimmst du *pro Jahr*?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - 1–10 Taxifahrten
  - 10–20 Taxifahrten
  - 20–30 Taxifahrten
  - 30–60 Taxifahrten
  - 60–180 Taxifahrten
  - 180–365 Taxifahrten
  - > 365 Taxifahrten

### Frage 56: Wie oft nimmst du eine Fähre oder ein Kreuzfahrtschiff?
> **Beschreibung / Info:** An wie vielen *Tagen pro Jahr*?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - 0 Tage
  - 1–10 Tage pro Jahr
  - 10–20 Tage pro Jahr
  - 20–30 Tage pro Jahr
  - 30–60 Tage pro Jahr
  - 60–180 Tage pro Jahr
  - 180–365 Tage pro Jahr

### Frage 57: Wie oft nutzt du öffentliche Verkehrsmittel?
> **Beschreibung / Info:** z. B. Bus, Zug, U-Bahn oder Straßenbahn

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Nie / fast nie
  - 1–2 Tage die Woche
  - 2–3 Tage die Woche
  - 3–4 Tage die Woche
  - 4–7 Tage die Woche

### Frage 58: Wie oft gehst du zu Fuß oder nimmst das Fahrrad?
> **Beschreibung / Info:** Hierzu zählen Wege zwischen deinem Zuhause und der Arbeit, Schule, Freizeitaktivitäten usw.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Nie / fast nie
  - 1–2 Tage die Woche
  - 2–3 Tage die Woche
  - 3–4 Tage die Woche
  - 4–7 Tage die Woche

### Frage 59: Besitzt, mietet oder least dein Haushalt die folgenden Fahrzeuge:
- **Typ:** `group`
- **Unterfragen (Gruppe):**
  - **1. Motorrad?** (multiple_choice)
    - Ja
    - Nein
  - **2. Wie weit fährst du mit dem Motorrad pro Jahr?** (multiple_choice)
    - < 5.000 km
    - 5.000–10.000 km
    - 10.000–20.000 km
    - 20.000–40.000 km
    - > 40.000 km
  - **3. Was für einen Motor hat das Motorrad?** (multiple_choice)
    - Großer Benzin-/Dieselmotor (> 125 cc)
    - Kleiner Benzin-/Dieselmotor (< 125 cc)
    - Elektrisch / Biotreibstoff / Hybrid
  - **4. Moped oder Motorroller?** (multiple_choice)
    - Ja
    - Nein
  - **5. Wie weit fährst du damit pro Jahr?** (multiple_choice)
    - < 5.000 km
    - 5.000–10.000 km
    - 10.000–20.000 km
    - 20.000–40.000 km
    - > 40.000 km
  - **6. Was für einen Motor hat das Fahrzeug?** (multiple_choice)
    - Benzin / Diesel
    - Biotreibstoff
    - Hybrid
    - Elektro
  - **7. Motorboot?** (multiple_choice)
    - Ja
    - Nein
  - **8. Ungefähr wie viele Tage pro Jahr nutzt du das Motorboot?** (multiple_choice)
    - Weniger als 15 Tage pro Jahr
    - 15–30 Tage pro Jahr
    - 30–60 Tage pro Jahr
    - Mehr als 60 Tage pro Jahr
  - **9. Was für einen Motor hat das Boot?** (multiple_choice)
    - Großer Benzin-/Dieselmotor (> 50 PS)
    - Kleiner Benzin-/Dieselmotor (< 50 PS)
    - Elektro / Biotreibstoff / Hybrid

### Frage 60: Gut gemacht, {{field:name}}! Du hast nun Teil 2 von 3 geschafft. Als Nächstes werde ich dir ein paar Fragen zu deinem Konsumverhalten stellen.
> **Beschreibung / Info:** Diese sind unterteilt in *Essen* und *Shopping* (Kleidung, Geräte usw.).

- **Typ:** `statement`

## 4. Kategorie: VERBRAUCH & ERNÄHRUNG (Consumption & Diet)

### Frage 61: Wie häufig isst du *Rind* oder *Lamm*?
> **Beschreibung / Info:** zum Mittag- oder Abendessen

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Nie / fast nie
  - 1–2 Tage die Woche
  - 2–3 Tage die Woche
  - 3–4 Tage die Woche
  - 4–7 Tage die Woche

### Frage 62: Wie häufig isst du eine auf pflanzlichen Produkten basierende Mahlzeit?
> **Beschreibung / Info:** Hier beziehen wir uns auf Mahlzeiten, die kein Fleisch, Geflügel, Fisch oder Meeresfrüchte enthalten.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Nie / fast nie
  - 1–2 Tage die Woche
  - 2–3 Tage die Woche
  - 3–4 Tage die Woche
  - 4–7 Tage die Woche
  - Immer

### Frage 63: Wie viel von deiner ovo-lacto-vegetarischen Ernährung ist auch vegan?
> **Beschreibung / Info:** Sprich ohne Eier und Milchprodukte.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weniger als die Hälfte
  - Mehr als die Hälfte, aber nicht alles
  - Alles, ich bin Veganer*in

### Frage 64: Wählst du bewusst saisonale Produkte?
> **Beschreibung / Info:** Das bedeutet, dass du frische Lebensmittel kaufst, die gerade in Saison sind, statt Konserven, gefrorener oder importierter Produkte – z. B. Äpfel, Beeren und Pilze im Herbst.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

### Frage 65: Wählst du bewusst lokale Produkte?
> **Beschreibung / Info:** Das bedeutet, dass du lokal produzierte Lebensmittel importierten Produkten vorziehst.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

### Frage 66: Versorgst du dich (teilweise) selbst mit Essen?
> **Beschreibung / Info:** Gemeint sind Lebensmittel, die du aus *eigenem Anbau*, durch *Jagd* oder *Fischen* gewinnst und die du zu Hause isst, anstatt Lebensmittel zu kaufen.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein

### Frage 67: Wie viel von deinem Essen erhältst du aus eigenem Anbau, Jagd und Fischen?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - < 10 %
  - 10–20 %
  - 20–50 %
  - > 50 %

### Frage 68: Welche Aussage beschreibt deine Einstellung zu Lebensmittelabfällen am Besten?
> **Beschreibung / Info:** Beispiele für Lebensmittelabfälle sind: – sich mehr Essen auf den Teller zu tun, als man isst – Reste einer Mahlzeit wegzuwerfen – Lebensmittel wegzuwerfen, deren Mindesthaltbarkeitsdatum abgelaufen ist

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ich tue alles, um Lebensmittelabfälle zu vermeiden.
  - Ich versuche, sie zu vermeiden, könnte aber mehr tun.
  - Ehrlich gesagt denke ich nicht wirklich darüber nach.

### Frage 69: Was tust du mit anfallenden Lebensmittelabfällen?
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ich entsorge Lebensmittelabfälle mit dem Restmüll.
  - Ich entsorge Lebensmittelabfälle separat (z. B. auf dem Kompost).

### Frage 70: Wie würdest du deinen Konsum von Palmöl beschreiben?
> **Beschreibung / Info:** Palmöl ist ein sehr günstiges Rohmaterial, das in vielen industriellen Lebensmitteln verarbeitet ist, einschließlich in: – Süßigkeiten – Kräckern – Keksen – Nutella – Margarine

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ich tue alles, um Palmöl zu vermeiden.
  - Ich versuche, Palmöl zu vermeiden, könnte aber mehr tun.
  - Ehrlich gesagt denke ich nicht wirklich darüber nach.

### Frage 71: Wie würdest du deinen Verbrauch von Einwegprodukten aus Plastik beschreiben?
> **Beschreibung / Info:** Beispiele für solche Produkte sind: – Plastiktüten – Plastikflaschen – Plastikverpackungen von Lebensmitteln – Plastikbecher, Strohhalme und Plastikbesteck

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ich tue alles, um Einwegprodukte aus Plastik zu vermeiden.
  - Ich versuche, sie zu vermeiden, könnte aber mehr tun.
  - Ehrlich gesagt denke ich nicht wirklich darüber nach.

### Frage 72: Welche Aussagen über das Kaufverhalten passen am besten zu dir?
> **Beschreibung / Info:** Die folgenden Fragen beziehen sich auf das Kaufen von Konsumgütern, die *keine Lebensmittel* sind, wie zum Beispiel Kleidung, Elektronik, Sportausrüstung, Kosmetik und Haushaltsgeräte\*.

- **Typ:** `group`
- **Unterfragen (Gruppe):**
  - **1. Neukäufe?** (multiple_choice)
    - Ich kaufe wirklich selten neue Dinge.
    - Ich kaufe ab und zu etwas. Das ist mir weder besonders wichtig, noch vermeide ich es.
    - Shopping ist mir sehr wichtig. Ich liebe es, neue Dinge zu kaufen.
  - **2. Qualität oder Preis?** (multiple_choice)
    - Ich lege Wert auf Qualitäts- und/oder Umweltkennzeichnung.
    - Manchmal achte ich auf Qualität, manchmal entscheide ich mich für niedrigere Kosten.
    - Normalerweise kaufe ich eher Waren mit einem niedrigen Preis, als auf hohe Qualität zu achten.
  - **3. Second-Hand-Käufe?** (multiple_choice)
    - Viele Dinge, die ich kaufe, sind gebraucht.
    - Ich kaufe ab und zu Second-Hand-Ware, aber nicht sehr bewusst.
    - Ich möchte lieber nichts Gebrauchtes benutzten. Fast alles, was ich kaufe, ist neu.
  - **4. Verschenken und Verkaufen von gebrauchten Produkten?** (multiple_choice)
    - Ich gebe regelmäßig Sachen weg oder verkaufe Dinge, die ich nicht mehr brauche.
    - Ich verkaufe oder verschenke manchmal etwas, aber ich denke nicht viel darüber nach.
    - Normalerweise werfe ich Dinge, die ich nicht mehr brauche, weg oder lagere sie ein.
  - **5. Recycling?** (multiple_choice)
    - Ich bemühe mich sehr, alles richtig zu recyceln.
    - Ich recycle die meisten Sachen, aber manche Recycling-Produkte landen im Restmüll.
    - Ich werfe ziemlich häufig Recycling-Produkte in den Restmüll.

### Frage 73: Gleichst du deine CO2-Bilanz oder einen Teil davon aus?
> **Beschreibung / Info:** CO2-Ausgleich bedeutet, dass du Geld an Projekte spendest, die CO2-Emissionen reduzieren.  Diese Klimaprojekte sind meistens in Entwicklungsländern angesiedelt, um dort von fossilen Brennstoffen zu erneuerbaren Energien (wie Solar- oder Windenergie) zu wechseln oder durch Aufforstung oder Waldschutz CO2 zu binden.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Nein, ich habe noch nie meine Emissionen ausgeglichen.
  - Ja, ich tue das gelegentlich für einzelne Reisen.
  - Ja, ich kompensiere für meinen gesamten Lebensstil.

### Frage 74: Wunderbar {{field:name}}, das war die letzte Frage!
> **Beschreibung / Info:** Ich berechne nun deinen * ökologischen Fußabdruck *, ohne dabei einen Kohlenstoffausgleich vorzunehmen.  Dann mache ich Vorschläge, was du tun kannst, um deinen Fußabdruck zu verringern. Die Vorschläge, auf die du mit *Ja* antwortest, werden als dein *Klimaversprechen* zusammengestellt.  Abschließend zeige ich auf, wie groß dein CO2-Fußabdruck nach wie vor ist und was es kosten würde, ihn durch die *Unterstützung klimafreundlicher Projekte* auszugleichen.

- **Typ:** `statement`

## 5. Auswertung & Feedback (Ergebnis-Berechnung)

### Frage 75: Wir haben deine Ergebnisse!
> **Beschreibung / Info:** *Aber zuerst darfst du selbst deine CO2-Bilanz einschätzen.*  Menschen, die in der westlichen Welt leben, haben typischerweise eine Bilanz von etwa *10 Tonnen CO2e* pro Jahr und der derzeitige globale Durchschnitt liegt bei *5 Tonnen CO2e* pro Person und Jahr. Um die Auswirkungen des Klimawandels zu reduzieren, müssen wir diesen Durchschnitt bis zum Jahr 2030 auf *2 Tonnen CO2e* pro Person senken.  Basierend auf diesen Informationen, *was glaubst du, in welcher Kategorie du bist?*

- **Typ:** `picture_choice`
- **Antwortoptionen:**
  - Klimaschurke (> 10 Tonnen)
  - Klimakonsument (5–10 Tonnen)
  - Klimafreund (2–5 Tonnen)
  - Klimaheld (< 2 Tonnen)

### Frage 76: Wir haben deine Ergebnisse!
> **Beschreibung / Info:** *Aber zuerst darfst du selbst deine CO2-Bilanz einschätzen.*  Menschen, die in der westlichen Welt leben, haben typischerweise eine Bilanz von etwa *10 Tonnen CO2e* pro Jahr und der derzeitige globale Durchschnitt liegt bei *5 Tonnen CO2e* pro Person und Jahr. Um die Auswirkungen des Klimawandels zu reduzieren, müssen wir diesen Durchschnitt bis zum Jahr 2030 auf *2 Tonnen CO2e* pro Person senken.  Basierend auf diesen Informationen, *was glaubst du, in welcher Kategorie du bist?*

- **Typ:** `picture_choice`
- **Antwortoptionen:**
  - Klimaschurkin (> 10 Tonnen)
  - Klimakonsument (5–10 Tonnen)
  - Klimafreundin (2–5 Tonnen)
  - Klimaheldin (< 2 Tonnen)

### Frage 77: Die Antwort ist {{var:score}} Tonnen CO2e pro Jahr.
> **Beschreibung / Info:** Das bedeutet, du bist ein *Klimaschurke*. Aber du hast bereits erste gute Schritte gemacht. Weiter so! Möchtest du sehen, was du schon gut machst? Oder sollen wir ein paar einfache Wege entdecken, wie du dich verbessern kannst?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Zeig mir zuerst, was ich gut mache
  - Überspringen und sehen, wie ich mich verbessern kann

### Frage 78: Die Antwort ist {{var:score}} Tonnen CO2e pro Jahr.
> **Beschreibung / Info:** Das bedeutet, dass du *Klimakonsument* bist. Du machst bereits einiges richtig, weiter so. Möchtest du sehen, was du schon gut machst? Oder sollen wir entdecken, wie du es noch besser machen kannst?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Zeig mir zuerst, was ich gut mache
  - Überspringen und sehen, wie ich es noch besser machen kann

### Frage 79: Die Antwort ist {{var:score}} Tonnen CO2e pro Jahr.
> **Beschreibung / Info:** Das bedeutet, du bist ein *Klimafreund*. Du machst schon vieles richtig, richtig gut! Möchtest du sehen, was bereits gut funktioniert? Oder sollen wir ein paar kleine Wege entdecken, wie du noch weiter gehen kannst?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Zeig mir zuerst, was ich gut mache
  - Überspringen und sehen, wie ich noch weiter gehen kann

### Frage 80: Die Antwort ist {{var:score}} Tonnen CO2e pro Jahr.
> **Beschreibung / Info:** Das bedeutet, du bist ein *Klimaheld*. Du machst das großartig, wirklich beeindruckend. Möchtest du sehen, was du schon gut machst? Oder sollen wir ein paar kleine Wege entdecken, wie du noch weiter gehen kannst?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Zeig mir zuerst, was ich gut mache
  - Überspringen und sehen, wie ich noch weiter gehen kann

### Frage 81: Die Antwort ist {{var:score}} Tonnen CO2e pro Jahr.
> **Beschreibung / Info:** Das bedeutet, du bist eine *Klimaschurkin*. Aber du hast bereits erste gute Schritte gemacht. Weiter so! Möchtest du sehen, was du schon gut machst? Oder sollen wir ein paar einfache Wege entdecken, wie du dich verbessern kannst?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Zeig mir zuerst, was ich gut mache
  - Überspringen und sehen, wie ich mich verbessern kann

### Frage 82: Die Antwort ist {{var:score}} Tonnen CO2e pro Jahr.
> **Beschreibung / Info:** Das bedeutet, dass du *Klimakonsument* bist. Du machst bereits einiges richtig, weiter so. Möchtest du sehen, was du schon gut machst? Oder sollen wir entdecken, wie du es noch besser machen kannst?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Zeig mir zuerst, was ich gut mache
  - Überspringen und sehen, wie ich es noch besser machen kann

### Frage 83: Die Antwort ist {{var:score}} Tonnen CO2e pro Jahr.
> **Beschreibung / Info:** Das bedeutet, du bist eine *Klimafreundin*. Du machst schon vieles richtig, richtig gut! Möchtest du sehen, was bereits gut funktioniert? Oder sollen wir ein paar kleine Wege entdecken, wie du noch weiter gehen kannst?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Zeig mir zuerst, was ich gut mache
  - Überspringen und sehen, wie ich noch weiter gehen kann

### Frage 84: Die Antwort ist {{var:score}} Tonnen CO2e pro Jahr.
> **Beschreibung / Info:** Das bedeutet, du bist eine *Klimaheldin*. Du machst das großartig, wirklich beeindruckend. Möchtest du sehen, was du schon gut machst? Oder sollen wir ein paar kleine Wege entdecken, wie du noch weiter gehen kannst?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Zeig mir zuerst, was ich gut mache
  - Überspringen und sehen, wie ich noch weiter gehen kann

### Frage 85: Kleinere Haushalte verursachen weniger CO2-Belastung.
> **Beschreibung / Info:** Unsere Gesamtauswirkungen auf das Klima ergeben sich sowohl aus der Menge der von uns (pro Kopf) verursachten Treibhausgasemissionen als auch aus der Anzahl der Menschen auf dem Planeten. Ein Haushalt mit vielen Kindern hat einen deutlich größeren ökologischen Fußabdruck.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>

### Frage 86: Die Verbesserung der Wärmedämmung hat die CO2-Bilanz deines Zuhauses beträchtlich gesenkt.
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>

### Frage 87: Gratuliere {{field:name}}, dein Zuhause hat eine klimafreundliche Heizung. Verglichen mit Gebäuden, die mit Öl oder Gas beheizt werden, ist deine CO2-Bilanz im Bereich Heizung mindestens *80 %* niedriger.
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>

### Frage 88: Dass du über deinen Energieverbrauch nachdenkst, macht einen Unterschied – sowohl für deine Brieftasche als auch für die Umwelt.
> **Beschreibung / Info:** In Haushalten, die aktiv versuchen, ihren Energieverbrauch zu reduzieren, ist dieser mindestens 20 % geringer als der Durchschnitt.  Die Hälfte erreichst du bereits mit alltäglichen Gewohnheiten, wie z. B. die Lichter auszuschalten oder Spül- und Waschmaschinen im Eco-Modus laufen zu lassen.  Die andere Hälfte besteht daraus, bewusst energiesparende Glühbirnen, Geräte und Elektronik für dein Zuhause zu kaufen.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 89: Mit einer eigenen Stromversorgung bist du deiner Zeit weit voraus. Gut gemacht, {{field:name}}! 
> **Beschreibung / Info:** Das bedeutet, dass deine CO2-Bilanz im Bereich Stromverbrauch fast bei Null ist.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 90: Dein umweltfreundlicher Stromvertrag macht einen deutlichen Unterschied, {{field:name}}!
Deine Emissionen aus Stromerzeugung sind gut 90 % geringer als bei einem normalen Vertrag.
- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 91: Sehr gut, du lebst in einem Land, das das Pariser Abkommen unterzeichnet hat.
> **Beschreibung / Info:** Bei diesem globalen Abkommen haben sich die unterzeichnenden Staaten verpflichtet, Treibhausgasemissionen zu verringern und das Problem des Klimawandels zu bewältigen.  Für dich persönlich bedeutet das, dass die Emissionen der Dienstleistungen und Produkte, die du in deinem Land nutzt, über die kommenden Jahre reduziert werden.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 92: Toll,{{field:name}}, du unternimmst keine Inlands- oder Kurzstreckenflüge.
> **Beschreibung / Info:** Jeder Kurzstreckenflug (Hin- und Rückflug) erhöht deine CO2-Bilanz um rund *300 kg CO2e*. Indem du stattdessen den Zug oder Bus, die Fähre oder das Auto (mit mehreren Fahrgästen) nimmst, kannst du dies um *50–99 %* reduzieren.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 93: Du unternimmst keine Langstreckenflüge. Das macht einen gewaltigen Unterschied.
> **Beschreibung / Info:** Jeder Flug über 8 Stunden (Hin- und Rückflug) erhöht deine CO2-Bilanz um mehr als *2 Tonnen CO2e*. Das ist dein gesamtes nachhaltiges Emissionsbudget für ein ganzes Jahr.  Den Urlaub auf dem eigenen Kontinent zu verbringen, anstatt um die halbe Welt zu reisen, ist die effektivste Maßnahme, um die eigene CO2-Bilanz zu reduzieren.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 94: Du hast kein Auto.
> **Beschreibung / Info:** Gut gemacht, {{field:name}}! Ohne eigenen PKW verursachst du im Jahr etwa *1,1 Tonnen CO2e* weniger Emissionen als der durchschnittliche Autobesitzer. Das macht einen großen Unterschied in deiner CO2-Bilanz.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 95: Fantastisch, {{field:name}}! Mit einem Elektroauto bist du deiner Zeit weit voraus.
> **Beschreibung / Info:** Dein Auto belastet unser Klima circa *90 %* weniger als ein vergleichbares Benzin- oder Diesel-Fahrzeug.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 96: Deine Entscheidung für ein Hybrid-Auto ist ein wichtiger Schritt auf dem Weg zum klimafreundlichen Autofahren.
> **Beschreibung / Info:** Dein Hybrid-Auto reduziert deine Emissionen beim Fahren um *30–70 %*, verglichen mit einem konventionellen Benzin- oder Diesel-Motor.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 97: Du kannst ohne fossile Brennstoffe tanken
> **Beschreibung / Info:** Indem du auf fossile Brennstoffe verzichtest und dein Auto stattdessen mit Biokraftstoffen betankst, verringerst du deinen ökologischen Fußabdruck im Vergleich zu einem herkömmlichen Benzinmotor erheblich.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>

### Frage 98: Auf die Größe kommt es an.
> **Beschreibung / Info:** Dein kleines Auto verursacht rund *20 %* weniger Emissionen als ein durchschnittlicher PKW.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 99: Großartig, {{field:name}}! Deine Entscheidung fürs Carsharing ist vernünftig.
> **Beschreibung / Info:** Da du am Carsharing teilnimmst, benutzt du wahrscheinlich nur dann ein Auto, wenn du es wirklich brauchst.  Auch gibt dir das tendenziell Zugang zu neueren Autos, die entweder elektrisch betrieben sind oder weniger Treibstoff verbrauchen.  Du hast außerdem jedes Mal die Möglichkeit, ein Auto mit der richtigen Größe für den jeweiligen Zweck deiner Fahrt zu wählen.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 100: Bravo! Du nimmst dir Zeit für diesen Test.
> **Beschreibung / Info:** Der erste Schritt, um Emissionen zu vermeiden, ist mehr darüber zu erfahren, wie sie entstehen. Und genau jetzt bist du hier und findest heraus, wie sich deine eigene CO2-Bilanz zusammensetzt und was du tun kannst, um sie zu reduzieren.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 101: Der Verzicht auf Rindfleisch hat großen Einfluss auf deine CO2-Bilanz.
> **Beschreibung / Info:** Kühe und Schafe sind Wiederkäuer, die beim Verdauen große Mengen Methangas produzieren.  Ein Kilogramm Methangas hat den gleichen Treibhauseffekt wie 28 Kilogramm CO2. Das bedeutet, dass Rind- und Lammfleisch eine viel größere CO2-Bilanz haben als andere Proteinquellen.  Jedes Kilogramm Rind oder Lamm auf dem Teller verursacht Emissionen von 15–20 kg CO2e. Das ist ein Vielfaches der Emissionen aus anderen Proteinquellen (z. B. Geflügel, Fisch, Schweinefleisch, Eier, Milchprodukte, Hülsenfrüchte), die eine Bilanz von 1–6 kg CO2e pro Kilogramm haben.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 102: Deine Entscheidung, dich vegetarisch zu ernähren, macht einen großen Unterschied für das Klima.
> **Beschreibung / Info:** In der westlichen Welt beträgt die durchschnittliche CO2-Bilanz im Bereich Nahrungsmittel etwa *1,7 Tonnen CO2e* pro Jahr. Durch eine komplett vegetarische Ernährung kann dies nahezu halbiert werden.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 103: Beeindruckend, {{field:name}}! Dass du bevorzugt vegane Mahlzeiten isst, hat sogar noch größere Vorteile.
> **Beschreibung / Info:** Eine vollständig vegane Ernährung hat eine etwa 15 % geringere CO2-Bilanz als eine vegetarische, die Eier und Milchprodukte beinhaltet.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 104: Dass du über die Herkunft deines Essens nachdenkst, ist gut fürs Klima.
> **Beschreibung / Info:** Indem du konsequent *lokale* oder *saisonale* Produkte wählst, reduzierst du die CO2-Bilanz deiner Ernährung um mehr als *10 %.*

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 105: Lebensmittelabfälle sind eine wahre Klimafalle. Toll, dass du versuchst, das zu vermeiden.
> **Beschreibung / Info:** Etwa 40 % aller produzierten Lebensmittel landen im Abfall: Die Hälfte davon während der Produktion und Auslieferung, der Rest wird zu Hause weggeworfen.  Das bedeutet, dass du beim Versuch, Lebensmittelabfälle zu vermeiden und auch nur halb so viel wegzuwerfen wie deine Nachbarn, deine CO2-Bilanz im Bereich Lebensmittel bereits um *10 %* reduzieren kannst!

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 106: Prima, {{field:name}}! Die Entscheidung, deinen Plastikverbrauch zu minimieren, hilft dem Klima.
> **Beschreibung / Info:** Jedes produzierte Kilogramm Plastik erzeugt etwa 3–6 kg CO2e.  Bei einem durchschnittlichen Plastikverbrauch in der westlichen Welt von etwa 50 kg pro Person macht das eine CO2-Bilanz von etwa *150–300 kg* pro Person und Jahr.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 107: Du vermeidest Palmöl. Das hat eine große Wirkung. 
> **Beschreibung / Info:** Im Durchschnitt konsumieren wir etwa 15 kg Palmöl pro Person und Jahr.  Da aktuell fast das gesamte produzierte Palmöl von Plantagen kommt, die für die Abholzung des Regenwaldes verantwortlich sind, liegen die Auswirkungen bei etwa 30 kg CO2e pro Kilogramm Öl.  Selbst ohne Berücksichtigung der Abholzung hat Palmöl immer noch eine CO2-Bilanz von circa 3 kg CO2e pro Kilogramm Öl.  Bei wohlwollender Schätzung und der Annahme, dass nur die Hälfte des produzierten Palmöls die Abholzung von Regenwäldern verursacht hat, liegt die durchschnittliche Auswirkung immer noch bei 240 kg CO2e pro Person und Jahr.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 108: Weniger einkaufen macht einen deutlichen Unterschied.
> **Beschreibung / Info:** Der Verzicht auf Neuanschaffungen bedeutet, dass weniger Dinge produziert werden müssen, wodurch deren Emissionen vollständig entfallen.  Etwa 15 % unseres CO2-Fußabdrucks stammen aus dem Einkauf von Geräten und Kleidung, was etwa *1,5 Tonnen CO2e* pro Person und Jahr ausmacht.  Wenn du zum Beispiel 20 % weniger einkaufst, würdest du etwa *0,3 Tonnen CO2e* pro Jahr vermeiden.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 109: Prima, {{field:name}}! Deine Haltung zu Second-Hand hat große Vorteile.
> **Beschreibung / Info:** Mit dem Kauf oder Verkauf von gebrauchten Sachen senkst du sowohl deine eigene CO2-Bilanz als auch die der anderen Person.  Dabei spielt es keine Rolle, ob du deine Sachen verschenkst oder verkaufst. Entscheidend ist, dass sie weiterverwendet werden und dadurch die Abgabe von CO2-Emissionen in die Atmosphäre verhindert wird, die bei der Herstellung neuer Produkte entstehen würden.  Auch Dinge zu leihen oder zu mieten hat übrigens einen ähnlichen Effekt.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 110: Du bist ein Recycling-Star!
> **Beschreibung / Info:** Dank Alltagsheld*innen wie dir, die versuchen, alles richtig zu recyceln, kommen wir dem Ziel einer klimafreundlichen Gesellschaft näher.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Weiter >>
  - Zum Ende springen >>

### Frage 111: Okay {{field:name}}, sicher fragst du dich nun, was du tun kannst, um Klimaheld*in zu werden?
> **Beschreibung / Info:** Dein CO2-Fußabdruck beträgt *{{var:start}}** Tonnen CO2e/Jahr*, bestehend aus: - Zuhause: {{var:housing}} Tonnen - Reisen: {{var:travel}} Tonnen - Verbrauch: {{var:consumption}} Tonnen

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja, zeig mir wie ich meine CO2-Bilanz verbessern kann.

## 6. Klimaversprechen & Reduktions-Ziele (Pledges / Hebel zur CO2-Senkung)

### Frage 112: Reduziere den Energieverbrauch deiner Klimaanlage!
> **Beschreibung / Info:** Dein CO2-Fußabdruck: {{var:score}} Tonnen Deine Klimabemühungen: *0.1 Tonnen*  Wäre es dir möglich, die Nutzung von Klimaanlagen zu reduzieren? Nutze beispielsweise eine Zeitschaltuhr, so dass sie sich nach 1-2 Stunden automatisch abschaltet.  Du kannst den Energieverbrauch auch senken, indem du eine Mindesttemperatur festlegst. Jedes Grad reduziert den Energieverbrauch um etwa 6 %. Auch die regelmäßige Reinigung des Filters kann den Energieverbrauch senken.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das geht nicht

### Frage 113: Fange an, deinen eigenen Strom zu erzeugen.
> **Beschreibung / Info:** Dein CO2-Fußabdruck: {{var:score}} Tonnen Deine Klimabemühungen : *0.5 Tonnen*  Hast du ein Haus, das mit Sonnenkollektoren ausgestattet werden könnte? Indem du deinen eigenen Strom produzierst, kannst du sowohl deinen CO2-Fußabdruck verringern als auch deine Stromversorgung sichern.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das ist keine Option für mich

### Frage 114: Wechsle zu einem umweltfreundlichen Stromvertrag.
> **Beschreibung / Info:**  Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.5 Tonnen*  Bist du dabei?  Wenn Sie mit *„Ja“* antworten, wird die Reduzierung auf Ihren Klimafußabdruck angerechnet.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, ich bin noch nicht soweit

### Frage 115: Wenn du eine zusätzliche Wärmedämmung in deinem Haus installierst, kann das die durch Heizung entstehenden CO2-Emissionen um 10–50 % senken.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.1 Tonnen*  Bist du dabei?  Wenn Sie mit *„Ja“* antworten, wird die Reduzierung auf Ihren Klimafußabdruck angerechnet.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das kann ich nicht

### Frage 116: Wechsle zu einer anderen Art der Heizung und senke deine Emissionen um mehr als 80 %.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *1.2 Tonnen*  Es macht keinen großen Unterschied, ob du zu einer Luft- oder Erdreich-Wärmepumpe, zu Biogas, Fernwärme oder einer Stromheizung wechselst. Der größte Vorteil liegt darin, von fossilen Brennstoffen wegzukommen.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das ist nicht möglich

### Frage 117: Vermeide Langstreckenflüge.
> **Beschreibung / Info:**  Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *1.3 Tonnen* (wenn du einen Langstreckenflug durch einen Mittelstreckenflug ersetzt)  Bei Langstreckenflügen zu anderen Kontinenten (>8 Stunden) werden mehr als *2 Tonnen CO2e* pro Person verursacht, während ein Flug in Nachbarländer maximal *0.7 Tonnen CO2e* ausmacht.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das muss ich mir noch überlegen

### Frage 118: Reduziere deine Mittelstreckenflüge.
> **Beschreibung / Info:**  Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.4 Tonnen* (wenn du einen *Mittelstreckenflug (3–6 Stunden)* durch eine Reise auf dem Landweg ersetzt)  Alles, was du tun musst, ist mit Zug, Bus, Fähre oder Auto (mit mehreren Fahrgästen) zu deinem Urlaubsort zu reisen, anstatt zu fliegen. Ist es zu weit, um auf dem Landweg zu reisen? Wie wäre es dann, den nächsten Urlaub mal in der Nähe zu planen?  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, ich bin noch nicht soweit.

### Frage 119: Vermeide Inlandsflüge.
> **Beschreibung / Info:**  Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.3 Tonnen* (wenn du einen Inlandsflug durch eine Reise auf dem Landweg ersetzt)  Kann das Ziel stattdessen mit der Bahn, dem Bus, dem Auto oder der Fähre erreicht werden?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das ist nicht möglich.

### Frage 120: Werde Mitglied bei einem Carsharing-Dienst, statt ein Auto zu leasen oder zu kaufen.
> **Beschreibung / Info:**  Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.8 Tonnen*  Wenn du eine Kombination aus öffentlichen Verkehrsmitteln und Carsharing nutzt, wirst du nur dann mit dem Auto fahren, wenn es wirklich nötig ist. Außerdem bekommst du oftmals Zugang zu umweltfreundlicheren Fahrzeugen und kannst für jede Fahrt die passende Autogröße wählen.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das funktioniert in meiner Situation nicht

### Frage 121: Steige auf ein umweltfreundlicheres Auto um.
> **Beschreibung / Info:**  Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.7 Tonnen*  Autofahrten machen einen Großteil deiner CO2-Bilanz aus. Wenn du dein jetziges Auto durch ein umweltfreundlicheres (Elektro, Hybrid oder Biotreibstoff) ersetzen würdest, könntest du deine Bilanz deutlich verringern!  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das kann ich im Moment nicht

### Frage 122: Frag immer nach einem umweltfreundlichen Auto, wenn du eines mietest.
> **Beschreibung / Info:**  Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.1 Tonnen*  Die Autoverleiher sind beim Thema klimafreundliche Treibstoffe noch etwas hinterher, aber indem du jedes Mal um ein umweltfreundliches Fahrzeug bittest, kannst du darauf Einfluss nehmen.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das ist mir zu viel Aufwand.

### Frage 123: Frag immer nach einem umweltfreundlichen Auto, wenn du ein Taxi bestellst.
> **Beschreibung / Info:**  Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.1 Tonnen*  In vielen Ländern hat die Taxi-Branche mit der Umstellung auf Fuhrparks ohne fossile Brennstoffe begonnen und bei den meisten Unternehmen kann man ein umweltfreundliches Fahrzeug wählen. Indem du das jedes Mal tust, verringerst du deine eigene CO2-Bilanz und animierst die Unternehmen dazu, ihr Angebot an klimafreundlichen Fahrzeugen auszubauen.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das werde ich bestimmt vergessen.

### Frage 124: Wäre es für dich möglich, mehr mit dem Rad zu fahren oder zu Fuß zu gehen?
> **Beschreibung / Info:** Dein CO2-Fußabdruck: {{var:score}} Tonnen Deine Klimabemühungen: *0.1 Tonnen*  Die umweltfreundlichste Art, sich fortzubewegen, ist zu Fuß oder mit dem Fahrrad.  Ist es eine Option für dich (oder andere Erwachsene in deinem Haushalt), mehr mit dem Fahrrad zu fahren oder zu Fuß zu gehen?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das ist keine Option für mich

### Frage 125: Iss weniger Rind- und Lammfleisch.
> **Beschreibung / Info:** Dein CO2-Fußabdruck: {{var:score}} Tonnen Deine Klimabemühungen : *0.5 Tonnen*  Kühe und Schafe sind Wiederkäuer, die große Mengen an Methangas ausstoßen, das einen 28-mal höheren Treibhauseffekt hat als Kohlendioxid.  Der Verzehr von Rind- und Lammfleisch verursacht Emissionen von *15–30 kg CO2e pro kg Lebensmittel*. Das ist um ein Vielfaches höher als bei anderen Proteinquellen (Geflügel, Fisch, Schweinefleisch, Eier, Milchprodukte, Hülsenfrüchte), die einen Fußabdruck von 1–6 kg CO2e pro kg Lebensmittel haben.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das schaffe ich nicht. Ich esse viel zu gerne Fleisch.

### Frage 126: Iss häufiger vegetarisch.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.2 Tonnen* (wenn du wöchentlich 2–3 Mahlzeiten auf vegetarisch umstellst)  Bist du dabei?  Indem du mit *„Ja“* antwortest, gibst du dir selbst das Versprechen, diese Veränderung durchzuführen, und der Klimabeitrag wird von deiner aktuellen CO2-Bilanz abgezogen.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das ist ein zu großer Schritt für mich

### Frage 127: Iss häufiger vegan.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.1 Tonnen* (wenn du wöchentlich 2–3 Mahlzeiten auf vegan umstellst)  Vegetarisches Essen hat viel weniger schlechten Einfluss auf das Klima als Fleisch, aber du kannst deine CO2-Bilanz sogar noch weiter verbessern, indem du öfter mal vegan isst. Die größte Wirkung erreichst du durch das Einschränken des Konsums von Hartkäse aus Kuh-, Schafs- und Ziegenmilch.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, es ist schon schwer genug, meinen vegetarischen Speiseplan einzuhalten.

### Frage 128: Versuche, saisonal zu essen.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.1 Tonnen*  Versuche, Lebensmittel einzukaufen, die gerade in Saison sind. Diese erfordern weniger Ressourcen in der Herstellung und erzeugen außerdem weniger Lebensmittelabfälle in der Produktionskette.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, da muss ich zu viel beachten

### Frage 129: Kaufe möglichst lokale Produkte.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.1 Tonnen*  Wenn du mehr Lebensmittel kaufst, die lokal angebaut wurden, reduziert das die Emissionen des Transports. Kürzere Transportwege bedeuten außerdem auch frischeres Essen und besserer Geschmack!  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, da muss ich zu viel beachten.

### Frage 130: Vermeide Lebensmittelabfälle.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.2 Tonnen*  Etwa 40 % aller produzierten Lebensmittel landen im Abfall. Die Hälfte davon geschieht während der Produktion und Verteilung, die andere Hälfte wird zu Hause in der Küche weggeworfen.  Das bedeutet, wenn du versuchst, deine Lebensmittelabfälle auch nur um die Hälfte zu reduzieren, kannst du deine CO2-Bilanz im Bereich Lebensmittel bereits um *10 %* senken!  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das kann ich unmöglich schaffen

### Frage 131: Lege dir einen Kompost zu.
> **Beschreibung / Info:** Dein CO2-Fußabdruck : {{var:score}} Tonnen Deine Klimabemühungen : *0.1 Tonnen*  Wenn Lebensmittelabfälle in deiner Gemeinde nicht getrennt gesammelt werden, ist die nächstbeste Möglichkeit die Herstellung eines eigenen Komposts: Dieser kann sowohl deinen CO2-Fußabdruck verringern als auch als Bodenverbesserung für die Pflanzen in deinem Garten dienen.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das ist nicht möglich

### Frage 132: Entscheide dich für klimafreundliche Tiernahrung.
> **Beschreibung / Info:** Dein Kohlenstoff-Fußabdruck : {{var:score}} Tonnen Deine Klimabemühungen: *0.1 Tonnen*  Die Klimabelastung durch unsere Haustiere ergibt sich hauptsächlich aus dem Futter, das wir für sie kaufen. Zu den klimafreundlichen Futtermitteln gehören Tiernahrung aus pflanzlichen Proteinen sowie Futter aus Lebensmittelabfällen, die sonst im Abfall landen würden.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das muss ich erst noch etwas genauer untersuchen

### Frage 133: Vermeide Produkte, die Palmöl enthalten.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0,1 Tonnen*  Palmöl ist ein günstiges Rohmaterial, das in vielen industriellen Lebensmitteln enthalten ist (z. B. Knabbereien, Kekse, Speiseeis, Süßigkeiten, Nutella etc.). Jedes Jahr konsumieren wir rund 15 kg Palmöl pro Person.  Nahezu das gesamte Palmöl stammt von Plantagen, die für die Abholzung von Regenwäldern verantwortlich sind – es macht also einen großen Unterschied, wenn du Produkte mit Palmöl vermeidest und Produkte wählst, die das RSPO-Umweltzeichen tragen!  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, dafür mag ich billige Süßigkeiten zu sehr

### Frage 134: Reduziere deinen Plastikverbrauch.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.1 Tonnen* (wenn du bewusst deinen Verbrauch von Einwegplastik, wie z. B. Tüten, Flaschen, Verpackungen, Strohhalmen, Besteck usw. reduzierst)  Plastik wird aus Erdöl hergestellt und jedes Kilogramm produziertes Plastik erzeugt etwa 3–6 Kilogramm CO2-Emissionen. Da unser durchschnittlicher Jahresverbrauch von Plastik bei rund 50 kg pro Person liegt, ergibt sich daraus eine Bilanz von circa 150–300 kg CO2e pro Person und Jahr.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das ist mir zu aufwendig

### Frage 135: Entscheide dich bevorzugt für Produkte aus Holz, Hanf und Bambus.
> **Beschreibung / Info:** Dein CO2-Fußabdruck : {{var:score}} Tonnen Deine Klimabemühungen : *0.1 Tonnen*  Die Wahl des Rohmaterials hat einen großen Einfluss auf den Kauf von Dingen wie *Möbel, Heimdekoration, Gebrauchsgegenstände, Baumaterialien, Spielzeug, Textilien* und vielem mehr.  Produkte aus Metall, Glas, Plastik, Baumwolle oder Stein verursachen große Kohlenstoffemissionen, während Produkte aus Holz, Hanf oder Bambus oft mehr CO2 binden, als zu ihrer Herstellung benötigt wird.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, da muss ich zu viel beachten.

### Frage 136: Kauf weniger.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.3 Tonnen* (wenn du deine Käufe von Kleidung und Geräten um 20 % reduzierst)  Ist es wirklich nötig, diesen einen Artikel zu besitzen, den du als nächstes kaufen möchtest? Oder könntest du ihn stattdessen vielleicht auch *mieten* oder *ausleihen*?  Wenn du wirklich etwas kaufen musst, entscheide dich lieber für *Qualität* als für billige Produkte, die sich schnell abnutzen. Es ist die Anzahl der Dinge, die einen Unterschied in deiner CO2-Bilanz macht, nicht der Preis, den du für sie bezahlst.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das ist zu schwer für mich

### Frage 137: Kauf mehr Gebrauchtwaren.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.2 Tonnen*  *Second-Hand-Artikel* zu kaufen ist eine einfache Möglichkeit, deine Emissionen zu verringern, denn es bedeutet, dass weniger neue Dinge produziert werden müssen.  Genauso kann es ein großer Gewinn für das Klima sein, Dinge, die man nicht mehr braucht, zu verkaufen oder zu spenden.  Bist du dabei?

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, darüber muss ich erst einmal nachdenken

### Frage 138: Optimiere dein Recycling.
> **Beschreibung / Info:** Deine CO2-Bilanz: {{var:score}} Tonnen Dein Klima-Beitrag: *0.1 Tonnen*  Bist du bereit, dich ein bisschen anzustrengen und dafür zu sorgen, dass wirklich alles, was du wegwirfst, korrekt recycelt wird?  Indem du mit *„Ja“* antwortest, gibst du dir selbst das Versprechen, diese Veränderung durchzuführen, und der Klimabeitrag wird von deiner aktuellen CO2-Bilanz abgezogen.

- **Typ:** `multiple_choice`
- **Antwortoptionen:**
  - Ja
  - Nein, das scheint mir den Aufwand nicht wert zu sein

