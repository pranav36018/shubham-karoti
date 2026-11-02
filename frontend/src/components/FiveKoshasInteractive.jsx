import React, { useState } from 'react';
import { FIVE_KOSHAS } from '../data/contentData';
import { Sparkles, Check, ArrowRight, Compass } from 'lucide-react';

export default function FiveKoshasInteractive() {
  const [activeId, setActiveId] = useState('annamaya');

  const selected = FIVE_KOSHAS.find((k) => k.id === activeId) || FIVE_KOSHAS[0];

  return (
    <div className="w-full relative overflow-hidden select-none">
      
      {/* 5-Layer Stage Grid (Expansive 12 Columns, Zero Box Shapes) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
        
        {/* Left Column: Concentric Celestial Sheaths (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          
          {/* Concentric rings stage */}
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center select-none">
            
            {/* Outer Ring 1 - Annamaya (Physical - Royal Burgundy) */}
            <div
              onClick={() => setActiveId('annamaya')}
              className={`absolute inset-0 rounded-full border-2 transition-all duration-500 cursor-pointer flex items-start justify-center pt-2.5 ${
                activeId === 'annamaya'
                  ? 'border-[#702E42] bg-[#702E42]/10 scale-102 shadow-lg ring-4 ring-[#702E42]/20'
                  : 'border-[#702E42]/40 hover:border-[#702E42] bg-transparent'
              }`}
            >
              <span className={`text-[11px] font-sans font-bold uppercase tracking-widest ${
                activeId === 'annamaya' ? 'text-[#702E42]' : 'text-[#702E42]'
              }`}>
                1. Annamaya (Physical)
              </span>
            </div>

            {/* Ring 2 - Pranamaya (Vital Energy - Rich Amber) */}
            <div
              onClick={() => setActiveId('pranamaya')}
              className={`absolute inset-8 rounded-full border-2 transition-all duration-500 cursor-pointer flex items-start justify-center pt-2.5 ${
                activeId === 'pranamaya'
                  ? 'border-[#B45309] bg-[#B45309]/15 scale-102 shadow-lg ring-4 ring-[#B45309]/30'
                  : 'border-[#B45309]/50 hover:border-[#B45309] bg-transparent'
              }`}
            >
              <span className={`text-[11px] font-sans font-bold uppercase tracking-widest ${
                activeId === 'pranamaya' ? 'text-[#B45309]' : 'text-[#B45309]'
              }`}>
                2. Prāṇamaya (Vital)
              </span>
            </div>

            {/* Ring 3 - Manomaya (Mental / Emotional - Deep Burgundy) */}
            <div
              onClick={() => setActiveId('manomaya')}
              className={`absolute inset-16 rounded-full border-2 transition-all duration-500 cursor-pointer flex items-start justify-center pt-2.5 ${
                activeId === 'manomaya'
                  ? 'border-[#702E42] bg-[#702E42]/15 scale-102 shadow-lg ring-4 ring-[#702E42]/20'
                  : 'border-[#702E42]/40 hover:border-[#702E42] bg-transparent'
              }`}
            >
              <span className={`text-[11px] font-sans font-bold uppercase tracking-widest ${
                activeId === 'manomaya' ? 'text-[#702E42]' : 'text-[#702E42]'
              }`}>
                3. Manomaya (Mental)
              </span>
            </div>

            {/* Ring 4 - Vijnanamaya (Intellect & Wisdom - Midnight Navy) */}
            <div
              onClick={() => setActiveId('vijnanamaya')}
              className={`absolute inset-24 rounded-full border-2 transition-all duration-500 cursor-pointer flex items-start justify-center pt-2.5 ${
                activeId === 'vijnanamaya'
                  ? 'border-[#0F172A] bg-[#0F172A]/15 scale-102 shadow-lg ring-4 ring-[#0F172A]/20'
                  : 'border-[#0F172A]/40 hover:border-[#0F172A] bg-transparent'
              }`}
            >
              <span className={`text-[11px] font-sans font-bold uppercase tracking-widest ${
                activeId === 'vijnanamaya' ? 'text-[#0F172A]' : 'text-[#0F172A]'
              }`}>
                4. Vijñānamaya (Intellect)
              </span>
            </div>

            {/* Core 5 - Anandamaya (Inner Spiritual Bliss - Midnight Navy) */}
            <div
              onClick={() => setActiveId('anandamaya')}
              className={`absolute inset-32 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-500 cursor-pointer ${
                activeId === 'anandamaya'
                  ? 'border-[#F59E0B] bg-[#0F172A] text-white scale-105 shadow-xl ring-4 ring-[#F59E0B]/30'
                  : 'border-[#0F172A] bg-[#0F172A] text-white hover:scale-102'
              }`}
            >
              <span className="font-serif font-bold text-2xl sm:text-3xl leading-none text-[#F59E0B]">आनन्द</span>
              <span className="text-[10px] font-mono tracking-wider uppercase font-semibold mt-1 text-white">Core Bliss</span>
            </div>

          </div>

          <p className="typography-supporting text-[#1E293B] text-center mt-8 font-medium">
            Click any concentric celestial layer to explore that dimension of human consciousness.
          </p>

          {/* Quick text switchers (NO box shapes) */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            {FIVE_KOSHAS.map((k) => (
              <button
                key={k.id}
                onClick={() => setActiveId(k.id)}
                className={`text-xs font-sans font-semibold tracking-wider transition-colors cursor-pointer pb-1 relative ${
                  activeId === k.id
                    ? 'text-[#702E42] font-bold'
                    : 'text-[#1E293B] hover:text-[#702E42]'
                }`}
              >
                {k.name}
                {activeId === k.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#702E42]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Deep Holistic Narrative (7 cols, Open Editorial) */}
        <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-[#D5B989]/30 lg:pl-12 xl:pl-16">
          
          {/* Header */}
          <div className="border-b border-[#D5B989]/30 pb-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="typography-eyebrow text-[#702E42]">
                Sheath {selected.number} of 5
              </span>
              <span className="h-[1px] w-6 bg-[#D5B989]" />
              <span className="text-xs font-sans font-bold text-[#17243B] uppercase tracking-wider">
                {selected.dimension}
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="typography-section-title text-[#17243B]">
                {selected.name}
              </h3>
              <span className="text-2xl sm:text-3xl font-serif text-[#B45309] font-bold">
                ({selected.sanskrit})
              </span>
            </div>

            <p className="text-lg sm:text-xl font-serif italic text-[#702E42] mt-2">
              "{selected.tagline}"
            </p>
          </div>

          {/* 1. Gurukula Daily Practice */}
          <div className="space-y-2">
            <h4 className="typography-eyebrow text-[#17243B] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#702E42]" />
              How It Is Cultivated Daily at Gurukula
            </h4>
            <p className="typography-body text-[#1E293B] text-lg leading-relaxed pl-4 border-l-2 border-[#702E42]">
              {selected.gurukulaPractice}
            </p>
          </div>

          {/* 2. Transformational Impact */}
          <div className="space-y-2">
            <h4 className="typography-eyebrow text-[#17243B] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#17243B]" />
              Lifelong Transformational Impact
            </h4>
            <p className="typography-body text-[#1E293B] text-lg leading-relaxed pl-4 border-l-2 border-[#17243B]">
              {selected.impact}
            </p>
          </div>

          {/* Upanishadic Axiom */}
          <div className="pt-3 border-t border-[#D5B989]/25">
            <p className="typography-supporting text-[#1E293B] font-serif italic text-sm">
              Taittirīya Upaniṣad: "From food springs life, sustained by breath, illumined by mind, perfected by wisdom, fulfilled in bliss."
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
