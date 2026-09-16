import React from 'react';
import type { Question } from '../types/calculator';
import { ArrowLeft, ArrowRight, Lightbulb, Check } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentValue?: string;
  onSelect: (questionId: string, optionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  questionNumber: number;
  totalQuestions: number;
  categoryTitle: string;
  categoryIcon: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentValue,
  onSelect,
  onNext,
  onPrev,
  isFirst,
  isLast,
  questionNumber,
  totalQuestions,
  categoryTitle,
  categoryIcon,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6">
      {/* Question Container Card */}
      <div className="bg-white p-5 sm:p-8 rounded-3xl border-3 border-slate-900 shadow-[0_8px_0_0_#0f172a]">
        
        {/* Category Header & Progress Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border-2 border-slate-900 text-emerald-900 text-xs font-bold shadow-[0_2px_0_0_#0f172a]">
            <span>{categoryIcon}</span>
            <span>{categoryTitle}</span>
          </div>
          <span className="text-xs font-cartoon font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-300">
            Frage {questionNumber} von {totalQuestions}
          </span>
        </div>

        {/* Question Title & Subtitle */}
        <h2 className="font-cartoon text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-snug">
          {question.title}
        </h2>
        {question.subtitle && (
          <p className="text-sm text-slate-600 mb-5 leading-relaxed">
            {question.subtitle}
          </p>
        )}

        {/* Educational Info Box (e.g. Gemini Notebook LCA report) */}
        {question.infoExplanation && (
          <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-amber-50 border-2 border-amber-400 text-amber-950 flex items-start gap-3 text-xs sm:text-sm leading-relaxed shadow-sm">
            <div className="p-1.5 bg-amber-200 rounded-xl shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4 text-amber-800" />
            </div>
            <div>
              <strong className="block font-cartoon text-amber-900 mb-0.5">
                Wissenschaftlicher Fakt:
              </strong>
              {question.infoExplanation}
            </div>
          </div>
        )}

        {/* Options List */}
        <div className="flex flex-col gap-2.5 sm:gap-3 mb-8">
          {question.options.map((opt) => {
            const isSelected = currentValue === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  onSelect(question.id, opt.id);
                }}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 group active:scale-[0.99] ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-600 shadow-[0_4px_0_0_#059669]'
                    : 'bg-white hover:bg-slate-50 border-slate-900 shadow-[0_3px_0_0_#0f172a]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-400 group-hover:border-slate-900 bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <div>
                    <span className={`block font-cartoon text-sm sm:text-base font-bold ${
                      isSelected ? 'text-emerald-900' : 'text-slate-800'
                    }`}>
                      {opt.label}
                    </span>
                    {opt.sublabel && (
                      <span className="block text-xs text-slate-500 font-medium mt-0.5">
                        {opt.sublabel}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t-2 border-slate-100">
          <button
            type="button"
            onClick={onPrev}
            disabled={isFirst}
            className={`px-4 py-2.5 rounded-xl border-2 border-slate-900 font-cartoon font-bold text-sm flex items-center gap-1.5 transition-all ${
              isFirst
                ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                : 'bg-white hover:bg-slate-100 text-slate-800 shadow-[0_3px_0_0_#0f172a] active:translate-y-0.5 active:shadow-none'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück</span>
          </button>

          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2.5 rounded-xl cartoon-btn-primary font-cartoon font-bold text-sm sm:text-base flex items-center gap-2"
          >
            <span>{isLast ? 'Zur Auswertung' : 'Weiter'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
