import React, { useState, useEffect, useMemo } from 'react';
import type { CategoryId, UserResponses } from './types/calculator';
import { QUESTIONS, CATEGORIES, calculateFootprint } from './data/questions';
import { Header } from './components/Header';
import { HeroIntro } from './components/HeroIntro';
import { QuestionCard } from './components/QuestionCard';
import { ResultsDashboard } from './components/ResultsDashboard';
import { CartoonGlobe3D } from './components/CartoonGlobe3D';

const STORAGE_KEY = 'kala_co2_calculator_v1';

export const App: React.FC = () => {
  // Load saved state or default
  const [responses, setResponses] = useState<UserResponses>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load responses from localStorage', e);
    }
    return {
      userName: '',
      gender: '',
      housing_area: 'md',
      housing_type: 'flat',
      housing_heating: 'gas',
      housing_insulation: 'partial',
      housing_green_power: 'standard',
      housing_solar: 'no',
      housing_residents: '2',
      mobility_cars: '1',
      mobility_car_engine: 'diesel_petrol',
      mobility_car_km: 'med',
      mobility_car_size: 'med',
      mobility_transit: 'weekly',
      mobility_bike_walk: 'sometimes',
      mobility_flights_short: '0',
      mobility_flights_med: '0',
      mobility_flights_long: '0',
      mobility_cruises: '0',
      mobility_escooter_type: 'none',
      mobility_escooter_trips: '1_2',
      mobility_escooter_charging: 'carbon_aware',
      food_beef_freq: '1_2',
      food_diet_type: 'flexitarian',
      food_regional: 'yes',
      food_waste: 'average',
      shopping_habits: 'moderate',
      shopping_secondhand: 'sometimes',
      shopping_recycling: 'yes',
      vaping_type: 'none',
      vaping_freq: 'low',
      tech_ai_hours: 'light',
      tech_ai_time: 'off_peak',
      tech_device_life: '3_4yr',
      tech_streaming: 'med',
    };
  });

  const [currentCategory, setCurrentCategory] = useState<CategoryId>('intro');
  const [questionIndex, setQuestionIndex] = useState(0);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [responses]);

  // Filter active questions depending on previous answers (conditional routing)
  const activeQuestions = useMemo(() => {
    return QUESTIONS.filter((q) => {
      if (!q.dependsOn) return true;
      const parentValue = responses[q.dependsOn.questionId];
      return q.dependsOn.values.includes(parentValue);
    });
  }, [responses]);

  // Questions for the current category
  const categoryQuestions = useMemo(() => {
    if (currentCategory === 'intro' || currentCategory === 'results') return [];
    return activeQuestions.filter((q) => q.categoryId === currentCategory);
  }, [activeQuestions, currentCategory]);

  const currentQuestion = categoryQuestions[questionIndex] || categoryQuestions[0];

  // Global question progress percentage
  const globalIndex = useMemo(() => {
    if (!currentQuestion) return 0;
    return activeQuestions.findIndex((q) => q.id === currentQuestion.id);
  }, [activeQuestions, currentQuestion]);

  const progressPercent = useMemo(() => {
    if (currentCategory === 'intro') return 0;
    if (currentCategory === 'results') return 100;
    return Math.round(((globalIndex + 1) / activeQuestions.length) * 100);
  }, [currentCategory, globalIndex, activeQuestions.length]);

  // Handlers
  const handleSelectOption = (questionId: string, optionId: string) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleNext = () => {
    if (questionIndex < categoryQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Transition to next category
      const categoriesOrder: CategoryId[] = ['housing', 'mobility', 'consumption', 'tech_future'];
      const currentCatIdx = categoriesOrder.indexOf(currentCategory);
      if (currentCatIdx !== -1 && currentCatIdx < categoriesOrder.length - 1) {
        const nextCat = categoriesOrder[currentCatIdx + 1];
        setCurrentCategory(nextCat);
        setQuestionIndex(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Last question reached -> go to results!
        setCurrentCategory('results');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Transition to previous category
      const categoriesOrder: CategoryId[] = ['housing', 'mobility', 'consumption', 'tech_future'];
      const currentCatIdx = categoriesOrder.indexOf(currentCategory);
      if (currentCatIdx > 0) {
        const prevCat = categoriesOrder[currentCatIdx - 1];
        const prevCatQuestions = activeQuestions.filter((q) => q.categoryId === prevCat);
        setCurrentCategory(prevCat);
        setQuestionIndex(Math.max(0, prevCatQuestions.length - 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentCategory('intro');
      }
    }
  };

  const handleStart = (name: string) => {
    setResponses((prev) => ({ ...prev, userName: name }));
    setCurrentCategory('housing');
    setQuestionIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (cat: CategoryId) => {
    setCurrentCategory(cat);
    setQuestionIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (window.confirm('Möchtest du den Rechner wirklich zurücksetzen und von vorn beginnen?')) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  };

  // Calculated footprint breakdown
  const breakdown = useMemo(() => {
    return calculateFootprint(responses);
  }, [responses]);

  const currentCatMeta = CATEGORIES.find((c) => c.id === currentCategory) || CATEGORIES[1];

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-x-hidden">
      {/* Background Decor Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-emerald-200/40 blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-sky-200/40 blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-[40%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-amber-200/30 blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <Header
        currentCategory={currentCategory}
        progressPercent={progressPercent}
        onReset={handleReset}
        onSelectCategory={handleCategorySelect}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {currentCategory === 'intro' && (
          <HeroIntro userName={responses.userName} onStart={handleStart} />
        )}

        {currentCategory !== 'intro' && currentCategory !== 'results' && currentQuestion && (
          <div className="relative">
            {/* Floating Mini 3D Globe in background corner for ambiance */}
            <div className="hidden lg:block fixed bottom-6 right-6 z-10 pointer-events-none opacity-80 hover:opacity-100 transition-opacity">
              <div className="pointer-events-auto bg-white/70 backdrop-blur-md p-2 rounded-3xl border-2 border-slate-900 shadow-[0_4px_0_0_#0f172a]">
                <CartoonGlobe3D size="sm" interactive={true} />
              </div>
            </div>

            <QuestionCard
              question={currentQuestion}
              currentValue={responses[currentQuestion.id]}
              onSelect={handleSelectOption}
              onNext={handleNext}
              onPrev={handlePrev}
              isFirst={globalIndex === 0}
              isLast={globalIndex === activeQuestions.length - 1}
              questionNumber={globalIndex + 1}
              totalQuestions={activeQuestions.length}
              categoryTitle={currentCatMeta.title}
              categoryIcon={currentCatMeta.icon}
            />
          </div>
        )}

        {currentCategory === 'results' && (
          <ResultsDashboard
            responses={responses}
            breakdown={breakdown}
            onRestart={() => setCurrentCategory('housing')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-white/80 border-t-2 border-slate-900 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-cartoon font-bold text-slate-800">
            <span>🌍</span> Ökologischer Fußabdruck Kala © {new Date().getFullYear()}
          </div>
          <p className="text-slate-500 text-[11px]">
            Wissenschaftlich fundiert • Mit Daten aus ClimateHero & Gemini DLCA • Für Schule & Alltag
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MarkWaldeis/oekologischer-fussabdruck-kala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-emerald-600 font-semibold underline decoration-dotted"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
