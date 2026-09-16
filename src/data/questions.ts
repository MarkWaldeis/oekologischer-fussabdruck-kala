import type { Question, ClimatePledge, PersonaProfile, UserAchievement } from '../types/calculator';

export const CATEGORIES = [
  { id: 'intro', title: 'Start', icon: '👋', description: 'Dein Profil & Einstieg' },
  { id: 'housing', title: 'Wohnen', icon: '🏠', description: 'Strom, Heizung & Zuhause' },
  { id: 'mobility', title: 'Mobilität', icon: '🚗', description: 'Auto, Bahn, E-Scooter & Flüge' },
  { id: 'consumption', title: 'Ernährung & Konsum', icon: '🍽️', description: 'Essen, Shopping & Vapes' },
  { id: 'tech_future', title: 'Digital & KI', icon: '🤖', description: 'KI-Workloads & Technik' },
  { id: 'results', title: 'Ergebnis', icon: '📊', description: 'Deine Auswertung & Versprechen' },
] as const;

export const QUESTIONS: Question[] = [
  // =================== HOUSING ===================
  {
    id: 'housing_area',
    categoryId: 'housing',
    title: 'Wie groß ist deine Wohnfläche?',
    subtitle: 'Die Größe deines Zuhauses bestimmt den Grundbedarf an Heizung und Strom.',
    icon: 'Home',
    type: 'single',
    options: [
      { id: 'xs', label: '< 40 m²', sublabel: 'Kleine Wohnung / Studio', valueImpact: 0.6 },
      { id: 'sm', label: '40–80 m²', sublabel: '2-3 Zimmer Wohnung', valueImpact: 1.1 },
      { id: 'md', label: '80–120 m²', sublabel: 'Große Wohnung oder Reihenhaus', valueImpact: 1.8 },
      { id: 'lg', label: '120–160 m²', sublabel: 'Geräumiges Einfamilienhaus', valueImpact: 2.5 },
      { id: 'xl', label: '> 160 m²', sublabel: 'Sehr großes Haus / Villa', valueImpact: 3.4 },
    ],
  },
  {
    id: 'housing_residents',
    categoryId: 'housing',
    title: 'Wie viele Personen leben in deinem Haushalt?',
    subtitle: 'Die Wohnemissionen werden durch die Anzahl der Bewohner geteilt.',
    icon: 'Users',
    type: 'single',
    options: [
      { id: '1', label: '1 Person (Single-Haushalt)', sublabel: 'Alle Emissionen entfallen auf dich', valueImpact: 1.0 },
      { id: '2', label: '2 Personen', sublabel: 'Emissionen werden geteilt', valueImpact: 0.6 },
      { id: '3', label: '3 Personen', sublabel: 'Kleine Familie oder WG', valueImpact: 0.45 },
      { id: '4', label: '4 Personen', sublabel: 'Familie / WG', valueImpact: 0.35 },
      { id: '5plus', label: '5 oder mehr Personen', sublabel: 'Große Familie / Mehrgenerationenhaus', valueImpact: 0.28 },
    ],
  },
  {
    id: 'housing_heating',
    categoryId: 'housing',
    title: 'Welche Art von Heizung wird genutzt?',
    subtitle: 'Heizen macht in Deutschland über 70 % des privaten Energieverbrauchs aus!',
    icon: 'Flame',
    type: 'single',
    options: [
      { id: 'heatpump', label: 'Wärmepumpe (Erd- oder Luftwärme)', sublabel: 'Hocheffizient & zukunftssicher (-80% CO₂)', valueImpact: 0.3 },
      { id: 'district', label: 'Fernwärme', sublabel: 'Zentrale Wärmeversorgung der Stadt', valueImpact: 0.7 },
      { id: 'pellets', label: 'Pellets / Holz / Biomasse', sublabel: 'Erneuerbare feste Brennstoffe', valueImpact: 0.5 },
      { id: 'gas', label: 'Erdgas-Heizung', sublabel: 'Sehr weit verbreitet in Deutschland', valueImpact: 1.5 },
      { id: 'oil', label: 'Heizöl', sublabel: 'Höchste CO₂-Emissionen pro kWh Wärme', valueImpact: 2.3 },
      { id: 'electric', label: 'Elektroheizung / Nachtspeicher', sublabel: 'Hoher Strombedarf', valueImpact: 2.0 },
    ],
  },
  {
    id: 'housing_insulation',
    categoryId: 'housing',
    title: 'Ist das Gebäude energetisch saniert oder gedämmt?',
    subtitle: 'Gute Fenster und Wanddämmung halten die Wärme im Haus.',
    icon: 'ShieldCheck',
    type: 'single',
    options: [
      { id: 'yes_modern', label: 'Ja, modern gedämmt / Neubau', sublabel: 'Sehr geringer Wärmeverlust', valueImpact: 0.7 },
      { id: 'partial', label: 'Teilweise (z.B. neue 3-fach-Fenster)', sublabel: 'Gute Isolierung', valueImpact: 0.9 },
      { id: 'no_old', label: 'Nein / Altbau ungedämmt', sublabel: 'Hohe Wärmeverluste über Wände & Dach', valueImpact: 1.3 },
    ],
  },
  {
    id: 'housing_green_power',
    categoryId: 'housing',
    title: 'Bezieht dein Haushalt echten Ökostrom?',
    subtitle: '100% Strom aus Wind, Sonne und Wasserkraft ohne Kohle & Gas.',
    icon: 'Zap',
    type: 'single',
    options: [
      { id: 'yes_pure', label: 'Ja, zertifizierter echter Ökostrom', sublabel: 'Greenpeace Energy, EWS Schönau etc. (-90% CO₂)', valueImpact: 0.1 },
      { id: 'standard', label: 'Nein, normaler Graustrom-Mix', sublabel: 'Enthält Kohle- und Erdgasstrom', valueImpact: 0.8 },
      { id: 'unknown', label: 'Weiß ich nicht genau', sublabel: 'Standard-Durchschnittswert', valueImpact: 0.6 },
    ],
  },
  {
    id: 'housing_solar',
    categoryId: 'housing',
    title: 'Habt ihr eine eigene Solaranlage oder ein Balkonkraftwerk?',
    subtitle: 'Selbst erzeugter Solarstrom vom eigenen Dach oder Balkon.',
    icon: 'Sun',
    type: 'single',
    options: [
      { id: 'yes_large', label: 'Ja, PV-Dachanlage (> 5 kWp)', sublabel: 'Deckt einen großen Teil des Eigenbedarfs', valueImpact: -0.4 },
      { id: 'yes_balcony', label: 'Ja, Balkonkraftwerk (Stecker-Solar)', sublabel: 'Spart 100–300 kg CO₂ pro Jahr', valueImpact: -0.15 },
      { id: 'no', label: 'Nein, keine eigene Solaranlage', sublabel: 'Strom kommt komplett aus dem Netz', valueImpact: 0.0 },
    ],
  },

  // =================== MOBILITY ===================
  {
    id: 'mobility_cars',
    categoryId: 'mobility',
    title: 'Wie viele Autos besitzt oder least dein Haushalt?',
    subtitle: 'Pkw-Mobilität ist einer der größten Treiber persönlicher Treibhausgase.',
    icon: 'Car',
    type: 'single',
    options: [
      { id: '0', label: 'Kein Auto (Autofrei!)', sublabel: 'Super für die Umwelt & den Geldbeutel', valueImpact: 0.0 },
      { id: '1', label: '1 Auto', sublabel: 'Typischer Haushalt', valueImpact: 1.0 },
      { id: '2', label: '2 Autos', sublabel: 'Zwei Fahrzeuge im Alltag', valueImpact: 1.8 },
      { id: '3plus', label: '3 oder mehr Autos', sublabel: 'Hohe Fahrzeugdichte', valueImpact: 2.5 },
    ],
  },
  {
    id: 'mobility_car_engine',
    categoryId: 'mobility',
    title: 'Welchen Antrieb hat das primäre Auto?',
    subtitle: 'Elektroautos stoßen lokal 0 g CO₂ aus und sind über den Lebenszyklus viel sauberer.',
    icon: 'Fuel',
    type: 'single',
    dependsOn: {
      questionId: 'mobility_cars',
      values: ['1', '2', '3plus'],
    },
    options: [
      { id: 'ev', label: 'Vollelektrisch (BEV)', sublabel: 'Batterieelektrisch mit Ökostrom geladen', valueImpact: 0.4 },
      { id: 'phev', label: 'Plug-in-Hybrid (PHEV)', sublabel: 'Kombination aus Verbrenner & Stecker', valueImpact: 0.9 },
      { id: 'diesel_petrol', label: 'Klassischer Benziner oder Diesel', sublabel: 'Verbrennung fossiler Kraftstoffe', valueImpact: 1.8 },
    ],
  },
  {
    id: 'mobility_car_km',
    categoryId: 'mobility',
    title: 'Wie viele Kilometer wird das Auto jährlich gefahren?',
    subtitle: 'Durchschnitt in Deutschland: ca. 12.500 km pro Pkw im Jahr.',
    icon: 'Navigation',
    type: 'single',
    dependsOn: {
      questionId: 'mobility_cars',
      values: ['1', '2', '3plus'],
    },
    options: [
      { id: 'low', label: '< 5.000 km / Jahr', sublabel: 'Wenigfahrer / nur am Wochenende', valueImpact: 0.5 },
      { id: 'med', label: '5.000–12.000 km / Jahr', sublabel: 'Normaler Alltagspendler', valueImpact: 1.0 },
      { id: 'high', label: '12.000–25.000 km / Jahr', sublabel: 'Regelmäßiger Pendler', valueImpact: 1.8 },
      { id: 'ultra', label: '> 25.000 km / Jahr', sublabel: 'Vielfahrer', valueImpact: 2.8 },
    ],
  },

  // --- E-SCOOTER & MIKRO-MOBILITÄT (Aus dem Gemini-Notebook-Bericht) ---
  {
    id: 'mobility_escooter_type',
    categoryId: 'mobility',
    title: 'Nutzt du E-Scooter (Elektroroller)?',
    subtitle: 'Mikro-Mobilität: Shared E-Scooter verursachen im Schnitt 82,8g CO₂e pro Fahrt.',
    infoExplanation: 'Gemini LCA Analyse: Bei Leih-Scootern entfallen 30–50g CO₂e allein auf die Logistik (Sammeln, Laden, Rebalancing). Durch Carbon-aware Smart Charging sinken die Ladeemissionen um 24,5 %!',
    icon: 'BatteryCharging',
    type: 'single',
    options: [
      { id: 'none', label: 'Nein, ich fahre keine E-Scooter', sublabel: 'Fahre Fahrrad, Bus oder gehe zu Fuß', valueImpact: 0.0 },
      { id: 'shared_rare', label: 'Gelegentlich Leih-Scooter (Tier, Voi, Bolt)', sublabel: 'Ca. 1–3 Fahrten im Monat', valueImpact: 0.05 },
      { id: 'shared_freq', label: 'Regelmäßig Leih-Scooter', sublabel: 'Mehrmals pro Woche für kurze Wege', valueImpact: 0.2 },
      { id: 'private', label: 'Ich besitze einen eigenen E-Scooter', sublabel: 'Laden zuhause, keine Flottenlogistik', valueImpact: 0.08 },
    ],
  },
  {
    id: 'mobility_escooter_charging',
    categoryId: 'mobility',
    title: 'Zu welcher Zeit lädst du deinen privaten E-Scooter?',
    subtitle: 'Die Grenzstrom-Kohlenstoffintensität γ(t) schwankt je nach Tageszeit drastisch!',
    infoExplanation: 'Carbon-aware Smart Charging: Nachts oder mittags bei starkem Wind/Sonnenschein ist der Strom im Netz besonders kohlenstoffarm (niedriges γ(t)). Zwischen 17–20 Uhr müssen oft Gas- und Kohlekraftwerke zugeschaltet werden.',
    icon: 'Clock',
    type: 'single',
    dependsOn: {
      questionId: 'mobility_escooter_type',
      values: ['private'],
    },
    options: [
      { id: 'carbon_aware', label: 'Carbon-aware (Nachts oder bei Sonnenschein)', sublabel: 'Niedrige Grenzstrom-Intensität (-25% CO₂)', valueImpact: 0.03 },
      { id: 'peak', label: 'Feierabend / Peak (17:00–21:00 Uhr)', sublabel: 'Höchste CO₂-Last im Stromnetz', valueImpact: 0.12 },
      { id: 'random', label: 'Einfach sobald der Akku leer ist', sublabel: 'Ungesteuertes Laden', valueImpact: 0.08 },
    ],
  },

  // --- ÖPNV & FLUGREISEN ---
  {
    id: 'mobility_transit',
    categoryId: 'mobility',
    title: 'Wie oft nutzt du öffentliche Verkehrsmittel (Bus, Bahn, Tram)?',
    subtitle: 'Zug und U-Bahn sind bis zu 80% klimafreundlicher als Pkw-Fahrten.',
    icon: 'Train',
    type: 'single',
    options: [
      { id: 'daily', label: 'Fast täglich (Pendeln mit ÖPNV)', sublabel: 'Super! Spart tausende Pkw-Kilometer', valueImpact: 0.3 },
      { id: 'weekly', label: '2–3 Tage pro Woche', sublabel: 'Kombiniert mit anderen Wegen', valueImpact: 0.2 },
      { id: 'rare', label: 'Selten / fast nie', sublabel: 'Vorwiegend Auto oder andere Verkehrsmittel', valueImpact: 0.05 },
    ],
  },
  {
    id: 'mobility_bike_walk',
    categoryId: 'mobility',
    title: 'Wie oft fährst du Fahrrad oder gehst zu Fuß?',
    subtitle: '0 Gramm CO₂-Emissionen – gesündeste und umweltfreundlichste Fortbewegung.',
    icon: 'Bike',
    type: 'single',
    options: [
      { id: 'hero', label: '4–7 Tage pro Woche (Fahrrad-Held!)', sublabel: 'Hauptverkehrsmittel für Alltagswege', valueImpact: -0.2 },
      { id: 'sometimes', label: '1–3 Tage pro Woche', sublabel: 'Bei schönem Wetter / für Besorgungen', valueImpact: 0.0 },
      { id: 'never', label: 'Selten oder nie', sublabel: 'Meist motorisiert unterwegs', valueImpact: 0.1 },
    ],
  },
  {
    id: 'mobility_flights_short',
    categoryId: 'mobility',
    title: 'Wie viele Inlands- oder Kurzstreckenflüge machst du pro Jahr?',
    subtitle: 'Flugstrecken unter 1.000 km (1 Flug = Hin- und Rückflug privat).',
    icon: 'PlaneTakeoff',
    type: 'single',
    options: [
      { id: '0', label: 'Keine Kurzstreckenflüge (0 Flüge)', sublabel: 'Großartig! Bahn statt Flugzeug', valueImpact: 0.0 },
      { id: '1', label: '1 Flug pro Jahr', sublabel: 'Ca. 300–500 kg CO₂e', valueImpact: 0.4 },
      { id: '2_3', label: '2–3 Flüge pro Jahr', sublabel: 'Ca. 1.000 kg CO₂e', valueImpact: 1.0 },
      { id: '4plus', label: '4 oder mehr Flüge pro Jahr', sublabel: 'Sehr hohe CO₂-Belastung', valueImpact: 1.8 },
    ],
  },
  {
    id: 'mobility_flights_long',
    categoryId: 'mobility',
    title: 'Wie viele Interkontinental- oder Langstreckenflüge machst du?',
    subtitle: 'Flüge nach Amerika, Asien, Afrika (> 3.500 km pro Strecke).',
    icon: 'Plane',
    type: 'single',
    options: [
      { id: '0', label: 'Keine Langstreckenflüge (0 Flüge)', sublabel: 'Spart bis zu mehrere Tonnen CO₂!', valueImpact: 0.0 },
      { id: '1', label: '1 Flug alle 1–2 Jahre', sublabel: 'Ca. 2,0–3,5 Tonnen CO₂e pro Reise', valueImpact: 1.8 },
      { id: '2plus', label: '1 oder mehr Flüge jedes Jahr', sublabel: 'Übersteigt oft das gesamte Pariser Klimaziel!', valueImpact: 3.8 },
    ],
  },

  // =================== CONSUMPTION & FOOD ===================
  {
    id: 'food_beef_freq',
    categoryId: 'consumption',
    title: 'Wie häufig isst du Rind- oder Lammfleisch?',
    subtitle: 'Wiederkäuer stoßen riesige Mengen Methangas aus (28-fach stärker als CO₂).',
    icon: 'Beef',
    type: 'single',
    options: [
      { id: 'never', label: 'Nie / fast nie', sublabel: 'Vegan, vegetarisch oder nur Geflügel/Fisch', valueImpact: 0.1 },
      { id: '1_2', label: '1–2 Mal pro Woche', sublabel: 'Gelegentlicher Fleischgenuss', valueImpact: 0.6 },
      { id: '3_4', label: '3–4 Mal pro Woche', sublabel: 'Häufiger Rindfleischkonsum', valueImpact: 1.2 },
      { id: 'daily', label: 'Täglich oder fast täglich', sublabel: 'Verursacht allein über 2 Tonnen CO₂e pro Jahr', valueImpact: 2.1 },
    ],
  },
  {
    id: 'food_diet_type',
    categoryId: 'consumption',
    title: 'Welche Ernährungsform beschreibt dich am besten?',
    subtitle: 'Pflanzliche Ernährung hat den größten Hebel gegen Entwaldung & Treibhausgase.',
    icon: 'Utensils',
    type: 'single',
    options: [
      { id: 'vegan', label: 'Vollständig vegan', sublabel: '100% pflanzlich, ohne Milch & Eier (-70% CO₂)', valueImpact: 0.5 },
      { id: 'vegetarian', label: 'Vegetarisch (Ovo-Lacto)', sublabel: 'Kein Fleisch/Fisch, aber Milchprodukte', valueImpact: 0.9 },
      { id: 'flexitarian', label: 'Flexitarisch (Wenig Fleisch)', sublabel: 'Bewusster, reduzierter Fleischkonsum', valueImpact: 1.3 },
      { id: 'omnivore', label: 'Klassische Mischkost', sublabel: 'Regelmäßig Fleisch & Wurstwaren', valueImpact: 1.9 },
    ],
  },
  {
    id: 'food_waste',
    categoryId: 'consumption',
    title: 'Wie gehst du mit Lebensmitteln um?',
    subtitle: 'Etwa 40% aller produzierten Lebensmittel landen weltweit im Müll!',
    icon: 'Trash2',
    type: 'single',
    options: [
      { id: 'zero', label: 'Ich vermeide Lebensmittelabfälle strikt', sublabel: 'Resteverwertung, Vorratsplanung, Kompost', valueImpact: 0.1 },
      { id: 'average', label: 'Ich bemühe mich, aber werfe ab und zu Reste weg', sublabel: 'Normaler Durchschnittshaushalt', valueImpact: 0.3 },
      { id: 'high', label: 'Ich kaufe oft zu viel und werfe einiges weg', sublabel: 'Hohe Verschwendung von Ressourcen', valueImpact: 0.6 },
    ],
  },

  // --- VAPING (Aus dem Gemini-Notebook-Bericht) ---
  {
    id: 'vaping_type',
    categoryId: 'consumption',
    title: 'Nutzt du Vapes oder E-Zigaretten?',
    subtitle: 'Ökobilanz-Warnung: Vaping ist eine gravierende Quelle von toxischem E-Waste.',
    infoExplanation: 'Gemini LCA Analyse: Ein einziges 30g Einweg-Gerät verursacht 150g CO₂e, enthält 10,2g Lithium-Batterie und verbraucht 900ml Wasser. Im UK verursachen weggeworfene Vapes jährlich 12.970 t CO₂e durch Abfallbrände (Waste Fires) und verseuchen Böden mit Barium, Chrom und Nikotin!',
    icon: 'Cigarette',
    type: 'single',
    options: [
      { id: 'none', label: 'Nein, ich vape oder rauche nicht', sublabel: 'Gesund für dich & sauber für den Planeten', valueImpact: 0.0 },
      { id: 'reusable', label: 'Mehrweg-System (Pods / nachfüllbar)', sublabel: 'Wiederaufladbarer Akku, deutlich weniger E-Waste', valueImpact: 0.08 },
      { id: 'disposable', label: 'Einweg-Vapes (Disposables)', sublabel: 'Kritisch: 100% Wegwerf-Lithium-Akkus & Plastik!', valueImpact: 0.35 },
    ],
  },
  {
    id: 'vaping_freq',
    categoryId: 'consumption',
    title: 'Wie viele Geräte bzw. Pods verbrauchst du pro Woche?',
    subtitle: 'Mengenabschätzung für das jährliche Abfallvolumen und Lithium-Verlust.',
    infoExplanation: '1 Einweg-Vape pro Woche = 52 Lithium-Batterien und Aluminium-Gehäuse im Restmüll jedes Jahr!',
    icon: 'AlertTriangle',
    type: 'single',
    dependsOn: {
      questionId: 'vaping_type',
      values: ['disposable', 'reusable'],
    },
    options: [
      { id: 'low', label: '1 Gerät / Pod pro Woche', sublabel: 'Ca. 50 Geräte im Jahr (~8 kg CO₂e + Brandrisiko)', valueImpact: 0.15 },
      { id: 'med', label: '2–3 Geräte / Pods pro Woche', sublabel: 'Über 100 Akkus im Jahr im Müll', valueImpact: 0.35 },
      { id: 'high', label: '4 oder mehr Geräte pro Woche', sublabel: 'Extremer Ressourcenverbrauch (Schweregrad 5/5)', valueImpact: 0.7 },
    ],
  },

  {
    id: 'shopping_habits',
    categoryId: 'consumption',
    title: 'Wie ist dein Einkaufsverhalten bei Kleidung & Konsumgütern?',
    subtitle: 'Herstellung von Textilien, Möbeln & Gadgets erfordert enorme Rohstoffe.',
    icon: 'ShoppingBag',
    type: 'single',
    options: [
      { id: 'minimalist', label: 'Minimalistisch / Selten Neukäufe', sublabel: 'Nur was wirklich kaputt ist oder gebraucht wird', valueImpact: 0.3 },
      { id: 'moderate', label: 'Moderat (Ab und zu Neues)', sublabel: 'Normales Kaufverhalten mit Qualitätsfokus', valueImpact: 0.7 },
      { id: 'fast_fashion', label: 'Viel Shopping / Fast Fashion & Trends', sublabel: 'Häufig neue Outfits und elektronische Gadgets', valueImpact: 1.4 },
    ],
  },
  {
    id: 'shopping_secondhand',
    categoryId: 'consumption',
    title: 'Kaufst du gebrauchte Dinge (Second-Hand / Rebuy / Vinted)?',
    subtitle: 'Second-Hand vermeidet 100% der energieintensiven Neuproduktion.',
    icon: 'Sparkles',
    type: 'single',
    options: [
      { id: 'frequent', label: 'Häufig (Second-Hand zuerst)', sublabel: 'Kleidung, Möbel, Bücher, Elektronik gebraucht', valueImpact: -0.2 },
      { id: 'sometimes', label: 'Gelegentlich bei manchen Dingen', sublabel: 'Mix aus Neu und Gebraucht', valueImpact: 0.0 },
      { id: 'never', label: 'Fast nie, kaufe fast immer Neuware', sublabel: 'Immer Originalverpackt', valueImpact: 0.2 },
    ],
  },

  // =================== DIGITAL & TECH ===================
  {
    id: 'tech_ai_hours',
    categoryId: 'tech_future',
    title: 'Wie viele Stunden nutzt du KI-Tools täglich?',
    subtitle: 'ChatGPT, Gemini, Claude, Bild-KI (Midjourney) oder Hausaufgaben-Assistenten.',
    infoExplanation: 'Gemini LCA Analyse: Rechenlast in Rechenzentren skaliert exponentiell. Ein komplexer KI-Prompt verbraucht bis zu 10-mal mehr Energie als eine Standard-Websuche. Hardware-Herstellung (GPUs) bindet zudem viel graue Energie.',
    icon: 'Cpu',
    type: 'single',
    options: [
      { id: 'none', label: 'Gar nicht oder extrem selten', sublabel: 'Nur ab und zu Google-Suche', valueImpact: 0.02 },
      { id: 'light', label: 'Bis zu 1 Stunde täglich', sublabel: 'Schnelle Fragen, Zusammenfassungen', valueImpact: 0.08 },
      { id: 'heavy', label: '2–4 Stunden täglich', sublabel: 'Regelmäßiges Arbeiten, Texten, Lernen mit KI', valueImpact: 0.2 },
      { id: 'power', label: 'Power-User (Über 4 Stunden / Bild- & Videogenerierung)', sublabel: 'Hohe Server-Rechenlasten & GPU-Inferenz', valueImpact: 0.45 },
    ],
  },
  {
    id: 'tech_ai_time',
    categoryId: 'tech_future',
    title: 'Zu welchen Zeiten nutzt du rechenintensive KI & Cloud-Dienste?',
    subtitle: 'Carbon-aware Workload Shifting: Die Uhrzeit entscheidet über die CO₂-Intensität!',
    infoExplanation: 'Infobox: Rechenzentren müssen während Spitzenlastzeiten (9–17 Uhr) Strom aus fossilen Grenzkraftwerken beziehen. Wer schwere Batches und Analysen in Off-Peak-Fenster legt, spart messbar Treibhausgase!',
    icon: 'Clock3',
    type: 'single',
    dependsOn: {
      questionId: 'tech_ai_hours',
      values: ['light', 'heavy', 'power'],
    },
    options: [
      { id: 'off_peak', label: 'Off-Peak / Abends oder am Wochenende', sublabel: 'Hoher Anteil erneuerbarer Energien im Strommix', valueImpact: 0.05 },
      { id: 'peak', label: 'Spitzenlast-Zeiten (Werktags 9:00–17:00 Uhr)', sublabel: 'Höchste Netzauslastung & fossile Grenzkraftwerke', valueImpact: 0.2 },
      { id: 'unaware', label: 'Mache mir darüber bisher keine Gedanken', sublabel: 'Standard-Verteilung', valueImpact: 0.12 },
    ],
  },
  {
    id: 'tech_device_life',
    categoryId: 'tech_future',
    title: 'Wie lange nutzt du dein Smartphone, bevor du ein neues kaufst?',
    subtitle: 'Amortisation: Über 75% der Gesamtemissionen eines Handys entstehen bei der Herstellung!',
    infoExplanation: 'Gemini LCA Analyse: Die Verlängerung der Nutzungsdauer von 2 auf 4 Jahre halbiert die jährliche embodied carbon Last von ca. 40 kg auf 20 kg CO₂e pro Jahr.',
    icon: 'Smartphone',
    type: 'single',
    options: [
      { id: '1_2yr', label: 'Alle 1–2 Jahre (Vertragswechsel)', sublabel: 'Sehr hohe Produktionsbelastung (Embodied Carbon)', valueImpact: 0.35 },
      { id: '3_4yr', label: '3–4 Jahre (solange alles funktioniert)', sublabel: 'Gute Amortisation der Herstellungsemissionen', valueImpact: 0.15 },
      { id: '5plus', label: '5+ Jahre oder Refurbished / Reparatur', sublabel: 'Vorbildlich! Schont seltene Erden & Rohstoffe', valueImpact: 0.05 },
    ],
  },
  {
    id: 'tech_streaming',
    categoryId: 'tech_future',
    title: 'Wie viel streamst du Filme, Serien & Gaming in HD/4K?',
    subtitle: 'Videodaten machen über 65% des weltweiten Internet-Datenverkehrs aus.',
    icon: 'Tv',
    type: 'single',
    options: [
      { id: 'light', label: '< 1 Stunde pro Tag', sublabel: 'Geringer Datenübertragungsaufwand', valueImpact: 0.05 },
      { id: 'med', label: '1–3 Stunden pro Tag', sublabel: 'Normaler Netflix / YouTube Konsum', valueImpact: 0.15 },
      { id: 'heavy', label: '> 3 Stunden täglich in 4K / Cloud-Gaming', sublabel: 'Ständige Auslastung von Rechenzentren & Netzknoten', valueImpact: 0.3 },
    ],
  },
];

// Master calculation formulas based on ClimateHero + Gemini DLCA Report
export function calculateFootprint(responses: Record<string, string>): {
  housing: number;
  mobility: number;
  consumption: number;
  tech: number;
  vaping: number;
  total: number;
} {
  // 1. HOUSING
  const areaImpact = { xs: 0.6, sm: 1.1, md: 1.8, lg: 2.5, xl: 3.4 }[responses.housing_area] || 1.8;
  const residentsDiv = { '1': 1.0, '2': 0.6, '3': 0.45, '4': 0.35, '5plus': 0.28 }[responses.housing_residents] || 0.6;
  const heatingImpact = { heatpump: 0.3, district: 0.7, pellets: 0.5, gas: 1.5, oil: 2.3, electric: 2.0 }[responses.housing_heating] || 1.5;
  const insulationMult = { yes_modern: 0.7, partial: 0.9, no_old: 1.3 }[responses.housing_insulation] || 1.0;
  const powerImpact = { yes_pure: 0.1, standard: 0.8, unknown: 0.6 }[responses.housing_green_power] || 0.7;
  const solarBonus = { yes_large: -0.4, yes_balcony: -0.15, no: 0.0 }[responses.housing_solar] || 0.0;

  const housingScore = Math.max(0.3, ((areaImpact * heatingImpact * insulationMult) + powerImpact) * residentsDiv + solarBonus);

  // 2. MOBILITY
  const carCount = responses.mobility_cars || '1';
  let carScore = 0;
  if (carCount !== '0') {
    const engineMult = { ev: 0.4, phev: 0.9, diesel_petrol: 1.8 }[responses.mobility_car_engine] || 1.6;
    const kmMult = { low: 0.5, med: 1.0, high: 1.8, ultra: 2.8 }[responses.mobility_car_km] || 1.0;
    const countMult = carCount === '2' ? 1.7 : carCount === '3plus' ? 2.4 : 1.0;
    carScore = 1.2 * engineMult * kmMult * countMult;
  }

  // E-Scooter DLCA
  let escooterScore = 0;
  if (responses.mobility_escooter_type === 'shared_rare') escooterScore = 0.05;
  else if (responses.mobility_escooter_type === 'shared_freq') escooterScore = 0.22;
  else if (responses.mobility_escooter_type === 'private') {
    escooterScore = responses.mobility_escooter_charging === 'carbon_aware' ? 0.04 : 0.09;
  }

  // Public transport & bike
  const transitScore = { daily: 0.3, weekly: 0.2, rare: 0.05 }[responses.mobility_transit] || 0.15;
  const bikeBonus = { hero: -0.2, sometimes: 0.0, never: 0.1 }[responses.mobility_bike_walk] || 0.0;

  // Flights
  const flightsShort = { '0': 0.0, '1': 0.4, '2_3': 1.0, '4plus': 1.8 }[responses.mobility_flights_short] || 0.0;
  const flightsLong = { '0': 0.0, '1': 1.8, '2plus': 3.8 }[responses.mobility_flights_long] || 0.0;

  const mobilityScore = Math.max(0.2, carScore + escooterScore + transitScore + bikeBonus + flightsShort + flightsLong);

  // 3. CONSUMPTION & FOOD
  const beefImpact = { never: 0.1, '1_2': 0.6, '3_4': 1.2, daily: 2.1 }[responses.food_beef_freq] || 0.8;
  const dietImpact = { vegan: 0.5, vegetarian: 0.9, flexitarian: 1.3, omnivore: 1.9 }[responses.food_diet_type] || 1.4;
  const wasteImpact = { zero: 0.1, average: 0.3, high: 0.6 }[responses.food_waste] || 0.3;
  const shoppingImpact = { minimalist: 0.3, moderate: 0.7, fast_fashion: 1.4 }[responses.shopping_habits] || 0.7;
  const secondHandBonus = { frequent: -0.2, sometimes: 0.0, never: 0.2 }[responses.shopping_secondhand] || 0.0;

  // Vaping DLCA
  let vapingScore = 0;
  if (responses.vaping_type === 'disposable') {
    const freqMult = { low: 0.15, med: 0.35, high: 0.7 }[responses.vaping_freq] || 0.3;
    vapingScore = freqMult;
  } else if (responses.vaping_type === 'reusable') {
    vapingScore = 0.05;
  }

  const consumptionScore = Math.max(0.4, (beefImpact * 0.7 + dietImpact * 0.5) + wasteImpact + shoppingImpact + secondHandBonus);

  // 4. TECH & AI
  const aiHours = { none: 0.02, light: 0.08, heavy: 0.2, power: 0.45 }[responses.tech_ai_hours] || 0.08;
  const aiTime = responses.tech_ai_time === 'off_peak' ? 0.8 : responses.tech_ai_time === 'peak' ? 1.3 : 1.0;
  const deviceLife = { '1_2yr': 0.35, '3_4yr': 0.15, '5plus': 0.05 }[responses.tech_device_life] || 0.15;
  const streaming = { light: 0.05, med: 0.15, heavy: 0.3 }[responses.tech_streaming] || 0.15;

  const techScore = (aiHours * aiTime) + deviceLife + streaming;

  // Total
  const total = Number((housingScore + mobilityScore + consumptionScore + techScore + vapingScore).toFixed(2));

  return {
    housing: Number(housingScore.toFixed(2)),
    mobility: Number(mobilityScore.toFixed(2)),
    consumption: Number(consumptionScore.toFixed(2)),
    tech: Number(techScore.toFixed(2)),
    vaping: Number(vapingScore.toFixed(2)),
    total,
  };
}

export function getPersona(totalScore: number): PersonaProfile {
  if (totalScore < 2.0) {
    return {
      level: 4,
      title: 'Klimaheld*in',
      badge: '🦸',
      color: '#10b981',
      bgGradient: 'from-emerald-500 to-teal-600',
      summary: 'Phänomenal! Du liegst bereits voll im Pariser 1,5°C-Klimaziel!',
      reactionMessage: 'Du lebst extrem vorbildlich und beweist, dass ein zukunftsfähiger Lebensstil machbar ist. Weiter so!',
    };
  } else if (totalScore < 5.0) {
    return {
      level: 3,
      title: 'Klimafreund*in',
      badge: '🌱',
      color: '#22c55e',
      bgGradient: 'from-green-500 to-emerald-600',
      summary: 'Starke Leistung! Du liegst unter dem weltweiten Durchschnitt!',
      reactionMessage: 'Du machst bereits sehr vieles richtig und hast deinen CO₂-Ausstoß gut im Griff. Mit ein paar Hebeln schaffst du die 2-Tonnen-Grenze!',
    };
  } else if (totalScore <= 10.0) {
    return {
      level: 2,
      title: 'Klimakonsument*in',
      badge: '⚖️',
      color: '#f59e0b',
      bgGradient: 'from-amber-500 to-orange-600',
      summary: 'Du liegst im typischen deutschen Durchschnitt (5–10 Tonnen).',
      reactionMessage: 'Du führst ein normales Leben im westlichen Raum, hast aber enormes Potenzial, durch kleine Alltagsanpassungen Tonnen an CO₂ einzusparen!',
    };
  } else {
    return {
      level: 1,
      title: 'Klimasünder*in',
      badge: '🚨',
      color: '#ef4444',
      bgGradient: 'from-rose-500 to-red-600',
      summary: 'Achtung: Dein Fußabdruck liegt deutlich über dem Durchschnitt (> 10 Tonnen).',
      reactionMessage: 'Keine Panik! Der erste Schritt ist Einsicht. Vor allem Flüge, Fleisch oder hohe Pkw-Fahrten treiben die Bilanz. Schau dir unten die Hebel an!',
    };
  }
}

// Master list of Action Pledges (Klimaversprechen)
export const CLIMATE_PLEDGES: ClimatePledge[] = [
  {
    id: 'pledge_vape',
    title: 'Einweg-Vapes stoppen oder auf Mehrweg umsteigen',
    description: 'Verhindert Giftmüll, schützt wertvolle Lithium-Akkus vor Bränden in Entsorgungsanlagen und stoppt Mikroplastik.',
    co2Reduction: 0.35,
    category: 'Tech & Lifestyle',
    icon: '🚭',
    scienceNote: 'Gemini LCA: Spart bis zu 150g CO₂e pro Gerät, schützt Grundwasser vor Barium/Schwermetallen und stoppt Waste Fires.',
  },
  {
    id: 'pledge_escooter_smart',
    title: 'Carbon-aware E-Scooter Laden & Fahrten bündeln',
    description: 'E-Scooter nur außerhalb der Spitzenzeiten (Off-Peak / nachts mit Windkraft) laden und Kurzstrecken lieber zu Fuß gehen.',
    co2Reduction: 0.1,
    category: 'Mobilität',
    icon: '⚡',
    scienceNote: 'Senkt Lade-Emissionen um 24,5 % dank strombörsenoptimierter Grenzstrom-Intensität γ(t).',
  },
  {
    id: 'pledge_ai_efficient',
    title: 'Smarte & zeitoptimierte KI-Nutzung',
    description: 'Prompts gezielt formulieren, sinnlose Dauergenerierungen vermeiden und rechenintensive Abfragen in verbrauchsarme Stunden legen.',
    co2Reduction: 0.1,
    category: 'Tech & Lifestyle',
    icon: '🤖',
    scienceNote: 'Workload Shifting: Reduziert Last auf fossile Grenzkraftwerke der Rechenzentren.',
  },
  {
    id: 'pledge_phone_long',
    title: 'Smartphone mindestens 4 Jahre nutzen',
    description: 'Widerstehe dem jährlichen Upgrade-Druck und nutze Schutzhüllen oder Reparatur-Dienste.',
    co2Reduction: 0.2,
    category: 'Tech & Lifestyle',
    icon: '📱',
    scienceNote: 'Halbiert den Herstellungs-Footprint (Embodied Carbon von ~75 kg CO₂e).',
  },
  {
    id: 'pledge_beef_half',
    title: 'Rind- und Lammfleisch um 50 % reduzieren',
    description: 'Rindfleisch durch pflanzliche Alternativen, Hülsenfrüchte oder Geflügel ersetzen.',
    co2Reduction: 0.5,
    category: 'Ernährung',
    icon: '🥗',
    scienceNote: 'Rindfleisch verursacht 15–30 kg CO₂e pro kg Fleisch – 10-mal mehr als pflanzliche Proteine.',
  },
  {
    id: 'pledge_veggie_days',
    title: '2–3 feste Veggie- oder Vegan-Tage pro Woche',
    description: 'Leckere pflanzliche Gerichte in den Wochenplan integrieren.',
    co2Reduction: 0.25,
    category: 'Ernährung',
    icon: '🌱',
    scienceNote: 'Spart jährlich Hunderttausende Liter virtuelles Wasser und verringert Landverbrauch.',
  },
  {
    id: 'pledge_green_power',
    title: 'Zu echtem Ökostrom wechseln',
    description: 'Wechsel zu einem unabhängigen Ökostromanbieter ohne Beteiligung an Kohlekonzernen.',
    co2Reduction: 0.4,
    category: 'Wohnen',
    icon: '🔌',
    scienceNote: 'Senkt die Strom-Emissionen des Haushalts um mindestens 85–90 %.',
  },
  {
    id: 'pledge_bike_short',
    title: 'Kurzstrecken unter 3 km nur zu Fuß oder per Rad',
    description: 'Motor auslassen auf Kurzstrecken – spart Benzin bei kaltem Motor.',
    co2Reduction: 0.3,
    category: 'Mobilität',
    icon: '🚴',
    scienceNote: 'Kalter Motor stößt auf den ersten Kilometern bis zu 30 % mehr Treibhausgase aus.',
  },
  {
    id: 'pledge_no_flights_short',
    title: 'Auf Inlands- und Kurzstreckenflüge verzichten',
    description: 'Reisen innerhalb Deutschlands und Nachbarländern mit der Bahn oder dem Nachtzug machen.',
    co2Reduction: 0.5,
    category: 'Mobilität',
    icon: '🚆',
    scienceNote: 'Zugfahrten stoßen pro Personenkilometer 80–90 % weniger CO₂e aus als Flugzeuge.',
  },
  {
    id: 'pledge_food_waste',
    title: 'Lebensmittelabfälle halbieren',
    description: 'Planvolles Einkaufen mit Einkaufszettel und gute Resteverwertung im Kühlschrank.',
    co2Reduction: 0.2,
    category: 'Ernährung',
    icon: '🥘',
    scienceNote: 'Vermeidet sinnlose Zersetzungsemissionen und Ressourcenverschwendung.',
  },
  {
    id: 'pledge_secondhand',
    title: 'Second-Hand first bei Kleidung & Technik',
    description: 'Zuerst bei Vinted, Kleinanzeigen oder Rebuy schauen, bevor neu gekauft wird.',
    co2Reduction: 0.2,
    category: 'Tech & Lifestyle',
    icon: '👕',
    scienceNote: 'Verlängert Produktlebenszyklen und spart die Rohstoffgewinnung.',
  },
  {
    id: 'pledge_shower',
    title: '5-Minuten-Dusche & Sparduschkopf',
    description: 'Kürzer duschen und Durchflussbegrenzer anbringen – spart Warmwasser und Energie.',
    co2Reduction: 0.15,
    category: 'Wohnen',
    icon: '🚿',
    scienceNote: 'Warmwasserbereitung ist der zweitgrößte Energieverbraucher im Privathaushalt.',
  },
];

export function getApplicablePledgesAndAchievements(responses: Record<string, string>): {
  applicablePledges: ClimatePledge[];
  achievements: UserAchievement[];
} {
  const applicablePledges: ClimatePledge[] = [];
  const achievements: UserAchievement[] = [];

  const pledgeMap = new Map(CLIMATE_PLEDGES.map(p => [p.id, p]));

  // 1. Vaping
  if (responses.vaping_type === 'disposable') {
    const p = pledgeMap.get('pledge_vape');
    if (p) applicablePledges.push(p);
  } else if (responses.vaping_type === 'none') {
    achievements.push({
      id: 'ach_vape_none',
      title: 'Rauch- & Vape-frei',
      icon: '🚭',
      praise: 'Du vermeidest gefährlichen Lithium-Batteriemüll, Brandrisiken und toxische Schwermetalle!',
    });
  } else if (responses.vaping_type === 'reusable') {
    achievements.push({
      id: 'ach_vape_reusable',
      title: 'Wiederaufladbare Mehrweg-Pods',
      icon: '♻️',
      praise: 'Du nutzt kein Wegwerf-Lithium und sparst enorme Mengen Elektronikschrott.',
    });
  }

  // 2. E-Scooter Smart Charging
  if (responses.mobility_escooter_type === 'shared_freq' || responses.mobility_escooter_type === 'shared_rare') {
    const p = pledgeMap.get('pledge_escooter_smart');
    if (p) applicablePledges.push(p);
  } else if (responses.mobility_escooter_type === 'private') {
    if (responses.mobility_escooter_charging !== 'carbon_aware') {
      const p = pledgeMap.get('pledge_escooter_smart');
      if (p) applicablePledges.push(p);
    } else {
      achievements.push({
        id: 'ach_escooter_smart',
        title: 'Carbon-aware E-Scooter Lader',
        icon: '⚡',
        praise: 'Du lädst deinen Roller nachts oder bei viel Ökostrom – das spart 24,5 % CO₂e!',
      });
    }
  } else if (responses.mobility_escooter_type === 'none') {
    achievements.push({
      id: 'ach_escooter_none',
      title: 'Keine E-Scooter-Flottenlast',
      icon: '🚶',
      praise: 'Du gehst zu Fuß oder fährst Rad – ganz ohne Sammel- und Ladelogistik.',
    });
  }

  // 3. KI-Nutzung
  if (responses.tech_ai_hours !== 'none' && responses.tech_ai_time !== 'off_peak') {
    const p = pledgeMap.get('pledge_ai_efficient');
    if (p) applicablePledges.push(p);
  } else if (responses.tech_ai_time === 'off_peak') {
    achievements.push({
      id: 'ach_ai_offpeak',
      title: 'Carbon-aware KI-Pionier',
      icon: '🤖',
      praise: 'Du nutzt KI in lastarmen Zeiten (Off-Peak) und entlastest fossile Grenzkraftwerke!',
    });
  } else if (responses.tech_ai_hours === 'none') {
    achievements.push({
      id: 'ach_ai_none',
      title: 'Minimaler Server-Footprint',
      icon: '🌳',
      praise: 'Du erzeugst fast keine Rechenzentren-Last durch KI-Prompts.',
    });
  }

  // 4. Smartphone-Lebensdauer
  if (responses.tech_device_life === '1_2yr') {
    const p = pledgeMap.get('pledge_phone_long');
    if (p) applicablePledges.push(p);
  } else if (responses.tech_device_life === '5plus') {
    achievements.push({
      id: 'ach_phone_super',
      title: 'Technik-Champion (5+ Jahre)',
      icon: '📱',
      praise: 'Hervorragend! Du halbierst den Herstellungs-Footprint deines Smartphones.',
    });
  } else if (responses.tech_device_life === '3_4yr') {
    achievements.push({
      id: 'ach_phone_good',
      title: 'Nachhaltige Techniknutzung',
      icon: '📱',
      praise: '3–4 Jahre Nutzungsdauer schonen seltene Erden und Goldkontakte spürbar.',
    });
  }

  // 5. Rind- & Lammfleisch
  if (responses.food_beef_freq !== 'never' && responses.food_diet_type !== 'vegan' && responses.food_diet_type !== 'vegetarian') {
    const p = pledgeMap.get('pledge_beef_half');
    if (p) applicablePledges.push(p);
  } else if (responses.food_beef_freq === 'never') {
    achievements.push({
      id: 'ach_no_beef',
      title: 'Kein Rind- oder Lammfleisch',
      icon: '🥗',
      praise: 'Du sparst riesige Mengen des starken Treibhausgases Methan ein!',
    });
  }

  // 6. Veggie / Vegan Tage
  if (responses.food_diet_type === 'omnivore') {
    const p = pledgeMap.get('pledge_veggie_days');
    if (p) applicablePledges.push(p);
  } else if (responses.food_diet_type === 'vegan') {
    achievements.push({
      id: 'ach_vegan',
      title: '100% Pflanzlich (Vegan)',
      icon: '🌱',
      praise: 'Die klimaschonendste Ernährungsform überhaupt – spart bis zu 70% Food-CO₂!',
    });
  } else if (responses.food_diet_type === 'vegetarian') {
    achievements.push({
      id: 'ach_vegetarian',
      title: 'Vegetarischer Lebensstil',
      icon: '🧀',
      praise: 'Fleischfrei essen schützt Regenwälder und spart virtuelles Wasser.',
    });
  } else if (responses.food_diet_type === 'flexitarian') {
    achievements.push({
      id: 'ach_flexi',
      title: 'Flexitarische Ernährung',
      icon: '🥦',
      praise: 'Du isst bereits sehr bewusst wenig Fleisch – ein toller Schritt!',
    });
  }

  // 7. Ökostrom
  if (responses.housing_green_power === 'standard' || responses.housing_green_power === 'unknown') {
    const p = pledgeMap.get('pledge_green_power');
    if (p) applicablePledges.push(p);
  } else if (responses.housing_green_power === 'yes_pure') {
    achievements.push({
      id: 'ach_green_power',
      title: '100% Echter Ökostrom',
      icon: '🔌',
      praise: 'Kein Kohlestrom aus deiner Steckdose – das senkt Stromemissionen um 90%!',
    });
  }

  // 8. Fahrrad & Zufußgehen
  if (responses.mobility_cars !== '0' && responses.mobility_bike_walk !== 'hero') {
    const p = pledgeMap.get('pledge_bike_short');
    if (p) applicablePledges.push(p);
  }
  if (responses.mobility_cars === '0') {
    achievements.push({
      id: 'ach_car_free',
      title: 'Autofreier Lebensstil',
      icon: '🚲',
      praise: 'Du lebst ohne eigenes Auto – das spart jedes Jahr mehrere Tonnen CO₂!',
    });
  } else if (responses.mobility_bike_walk === 'hero') {
    achievements.push({
      id: 'ach_bike_hero',
      title: 'Fahrrad-Alltagsheld*in',
      icon: '🚴',
      praise: '4–7 Tage pro Woche Rad & Fußwege – gesünder und sauberer geht es nicht!',
    });
  }

  // 9. Kurzstreckenflüge
  if (responses.mobility_flights_short !== '0') {
    const p = pledgeMap.get('pledge_no_flights_short');
    if (p) applicablePledges.push(p);
  } else {
    achievements.push({
      id: 'ach_no_short_flights',
      title: 'Keine Inlands- / Kurzflüge',
      icon: '🚆',
      praise: 'Du nimmst die Bahn statt das Flugzeug – spart bis zu 1.000 kg CO₂!',
    });
  }

  // 10. Langstreckenflüge Achievement
  if (responses.mobility_flights_long === '0') {
    achievements.push({
      id: 'ach_no_long_flights',
      title: 'Keine Fernflüge',
      icon: '🌍',
      praise: 'Du vermeidest die emissionsträchtigste Reiseform der Welt.',
    });
  }

  // 11. Lebensmittelabfälle
  if (responses.food_waste !== 'zero') {
    const p = pledgeMap.get('pledge_food_waste');
    if (p) applicablePledges.push(p);
  } else {
    achievements.push({
      id: 'ach_zero_waste',
      title: 'Zero Food Waste',
      icon: '🥘',
      praise: 'Du wirfst fast nie Lebensmittel weg – vorbildliche Wertschätzung!',
    });
  }

  // 12. Second-Hand
  if (responses.shopping_secondhand !== 'frequent') {
    const p = pledgeMap.get('pledge_secondhand');
    if (p) applicablePledges.push(p);
  } else {
    achievements.push({
      id: 'ach_secondhand',
      title: 'Second-Hand-Pionier*in',
      icon: '👕',
      praise: 'Gebrauchtkauf vermeidet 100% der industriellen Neuproduktion.',
    });
  }

  // 13. Solarenergie Achievement
  if (responses.housing_solar === 'yes_large' || responses.housing_solar === 'yes_balcony') {
    achievements.push({
      id: 'ach_solar',
      title: 'Eigene Solarenergie',
      icon: '☀️',
      praise: 'Du erzeugst deinen eigenen sauberen Sonnenstrom auf Dach oder Balkon!',
    });
  }

  // 14. Dusch-Pledge (immmer ein guter Hebel, sofern noch nicht Paris-Level erreicht)
  const showerPledge = pledgeMap.get('pledge_shower');
  if (showerPledge) applicablePledges.push(showerPledge);

  return { applicablePledges, achievements };
}
