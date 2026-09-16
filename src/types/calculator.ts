export type CategoryId = 'intro' | 'housing' | 'mobility' | 'consumption' | 'tech_future' | 'results';

export interface AnswerOption {
  id: string;
  label: string;
  sublabel?: string;
  icon?: string;
  valueImpact: number; // impact or factor
  infoNote?: string;
}

export interface Question {
  id: string;
  categoryId: CategoryId;
  title: string;
  subtitle?: string;
  infoExplanation?: string; // School/educational context, e.g. explaining the Gemini LCA data
  icon: string;
  type: 'single' | 'number' | 'slider';
  options: AnswerOption[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  dependsOn?: {
    questionId: string;
    values: string[];
  };
}

export interface UserResponses {
  userName: string;
  gender: string;
  // Housing
  housing_area: string;
  housing_type: string;
  housing_heating: string;
  housing_insulation: string;
  housing_green_power: string;
  housing_solar: string;
  housing_residents: string;
  // Mobility
  mobility_cars: string;
  mobility_car_engine: string;
  mobility_car_km: string;
  mobility_car_size: string;
  mobility_transit: string;
  mobility_bike_walk: string;
  mobility_flights_short: string;
  mobility_flights_med: string;
  mobility_flights_long: string;
  mobility_cruises: string;
  // E-Scooter (Gemini LCA)
  mobility_escooter_type: string;
  mobility_escooter_trips: string;
  mobility_escooter_charging: string;
  // Consumption & Food
  food_beef_freq: string;
  food_diet_type: string;
  food_regional: string;
  food_waste: string;
  shopping_habits: string;
  shopping_secondhand: string;
  shopping_recycling: string;
  // Vaping (Gemini LCA)
  vaping_type: string;
  vaping_freq: string;
  // Tech & AI (Gemini LCA)
  tech_ai_hours: string;
  tech_ai_time: string;
  tech_device_life: string;
  tech_streaming: string;
  // Generic map
  [key: string]: string;
}

export interface CalculationBreakdown {
  housing: number;
  mobility: number;
  consumption: number;
  tech: number;
  vaping: number;
  total: number;
}

export interface ClimatePledge {
  id: string;
  title: string;
  description: string;
  co2Reduction: number; // Tonnes CO2 saved per year
  category: 'Wohnen' | 'Mobilität' | 'Ernährung' | 'Tech & Lifestyle';
  icon: string;
  scienceNote?: string;
}

export interface PersonaProfile {
  level: 1 | 2 | 3 | 4;
  title: string;
  badge: string;
  color: string;
  bgGradient: string;
  summary: string;
  reactionMessage: string;
}
