import React, { useState } from 'react';
import { SANSKRIT_WORDS, THOUGHTS_OF_DAY } from '../data/contentData';
import { Sparkles, BookOpen, ArrowRight, RefreshCw, Feather } from 'lucide-react';

export default function SanskritWisdomPavilion() {
  const [wordIdx, setWordIdx] = useState(0);
  const [thoughtIdx, setThoughtIdx] = useState(0);
  const [tab, setTab] = useState('subhashita'); // 'subhashita' | 'sanskrit-word'

  const currentWord = SANSKRIT_WORDS[wordIdx];
  const currentThought = THOUGHTS_OF_DAY[thoughtIdx];

  const nextWord = () => setWordIdx((prev) => (prev + 1) % SANSKRIT_WORDS.length);
  const nextThought = () => setThoughtIdx((prev) => (prev + 1) % THOUGHTS_OF_DAY.length);

  return (
    <div className="w-full relative select-none space-y-10">
      
      {/* Header and Minimalist Tab Switcher (Zero Box Shapes) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#D5B989]/30 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1.5px] bg-[#D5B989]" />
            <span className="typography-eyebrow text-[#702E42]">
              Vedic Living Wisdom • ನಿತ್ಯ ಸುಭಾಷಿತ
            </span>
          </div>
          <h3 className="typography-secondary-heading text-[#090D16] font-black">
            The Sanskrit Thought of the Day
          </h3>
          <p className="typography-supporting text-[#687386] mt-1">
            Every morning at Gurukula begins with contemplation of timeless civilizational wisdom.
          </p>
        </div>

        {/* Minimalist Underline Tabs (No box containers) */}
        <div className="flex items-center gap-6 self-start sm:self-auto">
          <button
            onClick={() => setTab('subhashita')}
            className={`text-sm font-sans tracking-wider pb-2 relative transition-colors cursor-pointer ${
              tab === 'subhashita'
                ? 'text-[#702E42] font-bold'
                : 'text-[#687386] hover:text-[#17243B]'
            }`}
          >
            Subhāṣita Verse
            {tab === 'subhashita' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#702E42]" />
            )}
          </button>
          <button
            onClick={() => setTab('sanskrit-word')}
            className={`text-sm font-sans tracking-wider pb-2 relative transition-colors cursor-pointer ${
              tab === 'sanskrit-word'
                ? 'text-[#702E42] font-bold'
                : 'text-[#687386] hover:text-[#17243B]'
            }`}
          >
            Sanskrit Word
            {tab === 'sanskrit-word' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#702E42]" />
            )}
          </button>
        </div>
      </div>

      {/* Main Display: Open Manuscript Layout (No Boxes) */}
      {tab === 'subhashita' ? (
        <div className="space-y-8 animate-fade-in">
          
          {/* Classical Calligraphy Verse */}
          <div className="text-center py-6 space-y-4">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] font-bold tracking-wide leading-relaxed whitespace-pre-line">
              {currentThought.sanskrit || currentThought.verse}
            </p>
            <p className="text-sm sm:text-base font-serif italic text-[#702E42] tracking-wider whitespace-pre-line max-w-3xl mx-auto">
              {currentThought.transliteration}
            </p>
            {currentThought.source && (
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#B45309]">
                Source: {currentThought.source}
              </span>
            )}
          </div>

          {/* Dual Bilingual Columns Separated by Hairline (No Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-6 border-t border-[#D5B989]/30">
            <div className="space-y-3 md:border-r md:border-[#D5B989]/30 md:pr-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42] block">
                Philosophical Meaning (English)
              </span>
              <p className="typography-body text-[#1E293B] text-base sm:text-lg leading-relaxed font-normal">
                {currentThought.english || currentThought.meaning}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42] block">
                ಕನ್ನಡ ಭಾವಾರ್ಥ (Kannada Meaning)
              </span>
              <p className="typography-body text-[#1E293B] text-base sm:text-lg leading-relaxed font-normal">
                {currentThought.kannada || currentThought.meaningKn}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-[#D5B989]/25 text-xs text-[#1E293B]">
            <span className="font-mono font-semibold">
              Verse {thoughtIdx + 1} of {THOUGHTS_OF_DAY.length}
            </span>
            <button
              onClick={nextThought}
              className="inline-flex items-center gap-2 font-sans font-bold text-[#702E42] hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#B45309]" />
              <span>Next Sacred Verse</span>
            </button>
          </div>

        </div>
      ) : (
        /* Sanskrit Word of the Day Pane (Open, Unboxed) */
        <div className="space-y-10 animate-fade-in">
          
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-[#D5B989]/30 pb-6">
            <div>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-[#17243B]">
                  {currentWord.word}
                </span>
                <span className="text-2xl font-serif italic text-[#702E42]">
                  ({currentWord.transliteration})
                </span>
                <span className="text-xl font-serif text-[#D5B989]">
                  {currentWord.kannada}
                </span>
              </div>
              <p className="text-xs font-mono text-[#687386] mt-2">
                {currentWord.grammar} • {currentWord.etymology}
              </p>
            </div>

            <button
              onClick={nextWord}
              className="inline-flex items-center gap-2 text-xs font-sans font-bold text-[#702E42] hover:text-[#17243B] transition-colors cursor-pointer self-start"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Next Sanskrit Word</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-3 md:border-r md:border-[#D5B989]/30 md:pr-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42] block">
                Significance & Meaning
              </span>
              <p className="typography-body text-[#252A33] text-lg leading-relaxed">
                {currentWord.meaning}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42] block">
                Gurukula Living Context
              </span>
              <p className="typography-body text-[#252A33] text-lg leading-relaxed">
                {currentWord.usage}
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
