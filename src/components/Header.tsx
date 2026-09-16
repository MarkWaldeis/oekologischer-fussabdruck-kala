import React from 'react';
import { RotateCcw } from 'lucide-react';
import type { CategoryId } from '../types/calculator';
import { CATEGORIES } from '../data/questions';

interface HeaderProps {
  currentCategory: CategoryId;
  progressPercent: number;
  onReset: () => void;
  onSelectCategory: (cat: CategoryId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  progressPercent,
  onReset,
  onSelectCategory,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b-2 border-slate-900 shadow-sm transition-all">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand */}
        <div 
          onClick={() => onSelectCategory('intro')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-xl shadow-[0_3px_0_0_#0f172a] group-hover:rotate-6 transition-transform">
            🌍
          </div>
          <div>
            <h1 className="font-cartoon font-bold text-lg sm:text-xl text-slate-900 flex items-center gap-1 leading-none">
              Kala <span className="text-emerald-600">Klima-Rechner</span>
            </h1>
            <p className="text-[11px] font-semibold text-slate-500 tracking-wide uppercase">
              Ökologischer Fußabdruck 2.0
            </p>
          </div>
        </div>

        {/* Category step indicator on desktop */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border-2 border-slate-900">
          {CATEGORIES.filter(c => c.id !== 'intro' && c.id !== 'results').map((cat) => {
            const isActive = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Action button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            title="Rechner neu starten"
            className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 border-2 border-slate-900 shadow-[0_2px_0_0_#0f172a] active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1 text-xs font-bold"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Neustart</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 overflow-hidden border-t border-slate-900/10">
        <div
          className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 h-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
};
