import React, { useState } from 'react';
import { RotateCcw, QrCode, X, Copy, Check, ExternalLink, Download } from 'lucide-react';
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
  const [showQrModal, setShowQrModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const liveUrl = 'https://markwaldeis.github.io/oekologischer-fussabdruck-kala/';

  const handleCopy = () => {
    navigator.clipboard.writeText(liveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
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

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowQrModal(true)}
              title="QR-Code anzeigen"
              className="p-2 sm:px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border-2 border-slate-900 shadow-[0_2px_0_0_#0f172a] active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1.5 text-xs font-bold"
            >
              <QrCode className="w-4 h-4 text-emerald-700" />
              <span className="hidden sm:inline font-cartoon">📱 QR-Code</span>
            </button>

            <button
              onClick={onReset}
              title="Rechner neu starten"
              className="p-2 sm:px-3 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 border-2 border-slate-900 shadow-[0_2px_0_0_#0f172a] active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1.5 text-xs font-bold"
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

      {/* QR-Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl border-3 border-slate-900 shadow-[0_10px_0_0_#0f172a] max-w-sm w-full p-6 relative flex flex-col items-center text-center animate-scale-up">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 border-2 border-slate-900 text-slate-700 active:scale-95 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-emerald-100 border-2 border-slate-900 flex items-center justify-center text-2xl mb-3 shadow-[0_3px_0_0_#0f172a]">
              📱
            </div>

            <h3 className="font-cartoon text-xl font-bold text-slate-900 mb-1">
              Am Smartphone öffnen
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Scanne den QR-Code mit deiner Handykamera, um den Kala Klima-Rechner direkt auf deinem Smartphone zu nutzen oder mit Freunden zu teilen!
            </p>

            <div className="p-3 bg-slate-50 rounded-2xl border-2 border-slate-900 shadow-[0_4px_0_0_#0f172a] mb-4 group relative">
              <img
                src="./qr-code.svg"
                alt="QR-Code zum Kala Klima-Rechner"
                className="w-48 h-48 sm:w-52 sm:h-52 object-contain rounded-lg"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <button
                onClick={handleCopy}
                className="w-full py-2.5 px-4 cartoon-btn-primary text-xs flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 stroke-[3]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Link kopiert!' : 'Website-Link kopieren'}</span>
              </button>

              <a
                href="./whatsapp-klima-check.png"
                download="Kala-Klima-Rechner-WhatsApp.png"
                className="w-full py-2 px-3 rounded-xl border-2 border-slate-900 bg-amber-100 hover:bg-amber-200 text-[11px] font-bold text-slate-900 flex items-center justify-center gap-1.5 shadow-[0_2px_0_0_#0f172a] active:translate-y-0.5 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-amber-800" />
                <span>WhatsApp-Bild herunterladen</span>
              </a>

              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 rounded-xl border-2 border-slate-900 bg-slate-100 hover:bg-slate-200 text-[11px] font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Im neuen Tab öffnen</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
