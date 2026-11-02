import React, { useState } from 'react';
import { THOUGHTS_OF_DAY } from '../data/contentData';
import { Sparkles, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ThoughtOfDayWidget() {
  const [index, setIndex] = useState(0);
  const thought = THOUGHTS_OF_DAY[index];

  const nextThought = () => {
    setIndex((prev) => (prev + 1) % THOUGHTS_OF_DAY.length);
  };

  const prevThought = () => {
    setIndex((prev) => (prev - 1 + THOUGHTS_OF_DAY.length) % THOUGHTS_OF_DAY.length);
  };

  return (
    <div className="bg-[#FAF6EE] text-[#242824] rounded-2xl p-6 sm:p-8 border-2 border-[#B99858]/35 shadow-lg relative overflow-hidden">
      {/* Decorative top pattern */}
      <div className="flex items-center justify-between border-b border-[#B99858]/20 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#173B32] text-[#DFCA95]">
            <Quote className="w-4 h-4 text-[#DFCA95]" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#173B32] block">
              Subhashita of the Day
            </span>
            <span className="text-[11px] text-[#242824]/60">
              ದಿನಕ್ಕೊಂದು ಸುಭಾಷಿತ • Timeless Vedic Wisdom
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={prevThought}
            className="p-1.5 rounded-full bg-[#173B32]/10 hover:bg-[#173B32] text-[#173B32] hover:text-[#F8F5EE] transition-colors cursor-pointer"
            aria-label="Previous thought"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-[#8E7036] px-1 font-semibold">
            {index + 1}/{THOUGHTS_OF_DAY.length}
          </span>
          <button
            onClick={nextThought}
            className="p-1.5 rounded-full bg-[#173B32]/10 hover:bg-[#173B32] text-[#173B32] hover:text-[#F8F5EE] transition-colors cursor-pointer"
            aria-label="Next thought"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sanskrit Verse */}
      <div className="mb-4">
        <p className="font-serif text-lg sm:text-xl font-bold text-[#173B32] leading-relaxed whitespace-pre-line text-center sm:text-left">
          {thought.sanskrit}
        </p>
        <p className="text-xs text-[#8E7036] italic mt-1 font-serif text-center sm:text-left">
          {thought.transliteration}
        </p>
      </div>

      {/* English Interpretation */}
      <div className="bg-white/80 border border-[#E6DFD1] p-4 rounded-xl space-y-2 mb-3">
        <p className="text-xs font-bold uppercase tracking-wider text-[#173B32]">
          Meaning:
        </p>
        <p className="text-sm text-[#242824]/90 leading-relaxed">
          {thought.english}
        </p>
      </div>

      {/* Kannada Meaning */}
      <div className="bg-[#173B32]/5 border border-[#173B32]/15 p-3.5 rounded-xl space-y-1">
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#B46D4D]">
          ಕನ್ನಡ ಸಾರಾಂಶ:
        </p>
        <p className="text-xs text-[#242824] leading-relaxed font-sans">
          {thought.kannada}
        </p>
      </div>

      {/* Source attribution */}
      <div className="mt-4 flex items-center justify-between text-[11px] text-[#242824]/60 pt-2 border-t border-[#B99858]/15">
        <span>Source: <strong className="text-[#173B32]">{thought.source}</strong></span>
        <span className="text-[#B99858] font-medium">Recited at Morning Pratasmaran</span>
      </div>
    </div>
  );
}
