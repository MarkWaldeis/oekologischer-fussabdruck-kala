import React, { useState } from 'react';
import { CartoonGlobe3D } from './CartoonGlobe3D';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroIntroProps {
  userName: string;
  onStart: (name: string) => void;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({ userName, onStart }) => {
  const [name, setName] = useState(userName || '');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(true);
      return;
    }
    setError(false);
    onStart(name.trim());
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center text-center">
      {/* 3D Floating Cartoon Globe */}
      <div className="mb-4 relative">
        <CartoonGlobe3D size="hero" interactive={true} />
      </div>

      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border-2 border-slate-900 text-emerald-900 text-xs sm:text-sm font-bold shadow-[0_3px_0_0_#0f172a] mb-4 animate-bounce">
        <Sparkles className="w-4 h-4 text-emerald-600" />
        <span>Der moderne Nachhaltigkeitsrechner für Schule & Alltag</span>
      </div>

      {/* Heading */}
      <h1 className="font-cartoon text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-4">
        Wie groß ist dein <br className="hidden sm:inline" />
        <span className="text-emerald-600 underline decoration-amber-400 decoration-wavy decoration-2">
          ökologischer Fußabdruck?
        </span>
      </h1>

      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
        Finde in nur <strong>5 Minuten</strong> heraus, wie viele Tonnen CO₂ dein Lebensstil verursacht – und wie du mit cleveren Alltagsentscheidungen zum echten <strong>Klimahelden</strong> wirst!
      </p>

      {/* Feature Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-3xl mb-8">
        <div className="bg-white/80 p-3 rounded-2xl border-2 border-slate-900 shadow-[0_3px_0_0_#0f172a] flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🏠</span>
          <span className="font-cartoon font-bold text-xs sm:text-sm text-slate-800">Wohnen & Strom</span>
          <span className="text-[11px] text-slate-500">Heizung & Dämmung</span>
        </div>
        <div className="bg-white/80 p-3 rounded-2xl border-2 border-slate-900 shadow-[0_3px_0_0_#0f172a] flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🛴</span>
          <span className="font-cartoon font-bold text-xs sm:text-sm text-slate-800">E-Scooter & Bahn</span>
          <span className="text-[11px] text-slate-500">Smart Charging</span>
        </div>
        <div className="bg-white/80 p-3 rounded-2xl border-2 border-slate-900 shadow-[0_3px_0_0_#0f172a] flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🚭</span>
          <span className="font-cartoon font-bold text-xs sm:text-sm text-slate-800">Vaping-Ökobilanz</span>
          <span className="text-[11px] text-slate-500">Lithium & Giftmüll</span>
        </div>
        <div className="bg-white/80 p-3 rounded-2xl border-2 border-slate-900 shadow-[0_3px_0_0_#0f172a] flex flex-col items-center text-center">
          <span className="text-2xl mb-1">🤖</span>
          <span className="font-cartoon font-bold text-xs sm:text-sm text-slate-800">KI & Technik</span>
          <span className="text-[11px] text-slate-500">GPU-Workloads</span>
        </div>
      </div>

      {/* Name Input Form */}
      <div className="w-full max-w-md bg-white p-6 sm:p-7 rounded-3xl border-3 border-slate-900 shadow-[0_8px_0_0_#0f172a]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="text-left">
            <label htmlFor="user-name-input" className="font-cartoon font-bold text-base text-slate-900 block mb-1">
              Wie dürfen wir dich nennen? 😊
            </label>
            <p className="text-xs text-slate-500 mb-2">
              Dein Vorname wird für deine persönliche Auswertung und deinen Klima-Pass verwendet.
            </p>
            <input
              id="user-name-input"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Z.B. Alex, Mia oder Sam"
              className={`w-full px-4 py-3 rounded-xl border-2 font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all ${
                error ? 'border-rose-500 bg-rose-50' : 'border-slate-900 bg-slate-50'
              }`}
            />
            {error && (
              <p className="text-xs text-rose-600 font-bold mt-1.5 flex items-center gap-1">
                <span>⚠️</span> Bitte gib deinen Namen ein, um zu starten!
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 cartoon-btn-primary text-lg flex items-center justify-center gap-2 group"
          >
            <span>Jetzt Fußabdruck berechnen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-center gap-4 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Kostenlos
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Keine Anmeldung
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Wissenschaftlich
          </span>
        </div>
      </div>
    </div>
  );
};
