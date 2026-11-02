import React, { useState } from 'react';
import { SANSKRIT_WORDS } from '../data/contentData';
import { Sparkles, BookOpen, ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';

export default function SanskritWordWidget({ compact = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const word = SANSKRIT_WORDS[currentIndex];

  const nextWord = () => {
    setCurrentIndex((prev) => (prev + 1) % SANSKRIT_WORDS.length);
  };

  const prevWord = () => {
    setCurrentIndex((prev) => (prev - 1 + SANSKRIT_WORDS.length) % SANSKRIT_WORDS.length);
  };

  return (
    <div className={`relative bg-gradient-to-br from-[#173B32] to-[#0F2620] text-[#F8F5EE] rounded-2xl p-6 sm:p-8 border-2 border-[#B99858]/40 shadow-xl overflow-hidden ${
      compact ? 'max-w-md' : 'w-full'
    }`}>
      {/* Background traditional watermarked Sanskrit character */}
      <div className="absolute -right-6 -bottom-8 select-none pointer-events-none opacity-5 text-white font-serif text-[180px] leading-none">
        {word.word}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#B99858]/30 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#B99858]/20 border border-[#B99858]/40 text-[#DFCA95]">
            <BookOpen className="w-4 h-4 text-[#DFCA95]" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DFCA95] block">
              Sanskrit Word of the Day
            </span>
            <span className="text-[11px] text-[#A8B8A0]">
              ದಿನಕ್ಕೊಂದು ಸಂಸ್ಕೃತ ಪದ • Spoken Sanskrit Culture
            </span>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={prevWord}
            className="p-1.5 rounded-full bg-[#235246] hover:bg-[#B99858] text-[#F8F5EE] hover:text-[#173B32] transition-colors cursor-pointer"
            aria-label="Previous word"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-[#DFCA95] px-1">
            {currentIndex + 1}/{SANSKRIT_WORDS.length}
          </span>
          <button
            onClick={nextWord}
            className="p-1.5 rounded-full bg-[#235246] hover:bg-[#B99858] text-[#F8F5EE] hover:text-[#173B32] transition-colors cursor-pointer"
            aria-label="Next word"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Word Main Presentation */}
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-4">
        <h3 className="text-4xl sm:text-5xl font-bold font-serif text-[#DFCA95] tracking-wide">
          {word.word}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-serif italic text-[#F8F5EE]">
            ({word.transliteration})
          </span>
          <span className="px-2 py-0.5 rounded bg-[#B99858]/20 text-[#DFCA95] text-xs font-mono">
            {word.grammar}
          </span>
          <span className="text-xs text-[#A8B8A0] font-sans">
            ಕನ್ನಡ: <strong className="text-[#F8F5EE]">{word.kannada}</strong>
          </span>
        </div>
      </div>

      {/* Meaning & Details */}
      <div className="space-y-3 text-sm text-[#F8F5EE]/90">
        <p className="leading-relaxed">
          <strong className="text-[#DFCA95]">Meaning:</strong> {word.meaning}
        </p>

        <div className="p-3.5 rounded-xl bg-[#0F2620]/60 border border-[#B99858]/25 text-xs space-y-1.5">
          <p className="text-[#A8B8A0]">
            <strong className="text-[#DFCA95]">Etymology:</strong> {word.etymology}
          </p>
          <p className="text-[#DFCA95] italic font-serif text-sm">
            "{word.subhashita}"
          </p>
        </div>

        <p className="text-xs text-[#A8B8A0] leading-relaxed italic">
          💡 <strong className="text-[#DFCA95]">In Gurukula Practice:</strong> {word.usage}
        </p>
      </div>
    </div>
  );
}
