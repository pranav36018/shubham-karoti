import React, { useState, useEffect } from 'react';
import { DAILY_ROUTINE } from '../data/contentData';
import { 
  Sun, 
  Sunrise, 
  Sunset, 
  Moon, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Compass,
  Heart,
  BookOpen,
  Music,
  Activity,
  SlidersHorizontal,
  Flame
} from 'lucide-react';

// Enhanced contextual metadata for the Dinacharya phases
const DETAILED_ROUTINE = DAILY_ROUTINE.map((item, idx) => {
  const enrichments = [
    {
      sanskrit: "ब्राह्ममुहूर्त जागरणम्",
      solarPhase: "Usha Kala • Before Dawn",
      solarIcon: Sunrise,
      kosha: "Anandamaya (Inner Spiritual Consciousness)",
      atmosphere: "Morning temple bell, cool dawn breeze, stillness of nature",
      insight: "Waking at Brahma Muhurta (96 minutes before sunrise) coincides with peak atmospheric ozone and high pineal gland synchronization, instilling profound mental clarity."
    },
    {
      sanskrit: "योगासन प्राणायामश्च",
      solarPhase: "Pratahkala • Golden Sunrise",
      solarIcon: Sun,
      kosha: "Pranamaya (Vital Bio-Energy Sheath)",
      atmosphere: "Open-air green lawns, rising sun warmth, synchronized breathing",
      insight: "12 Surya Namaskar cycles paired with Nadi Shodhana pranayama balance autonomic nervous system tone and foster spinal flexibility for young girls."
    },
    {
      sanskrit: "दीपपूजा वेदमन्त्रपठनम्",
      solarPhase: "Pratah Sandhya • Morning Adoration",
      solarIcon: Flame,
      kosha: "Vijnanamaya (Higher Discriminating Intellect)",
      atmosphere: "Brass oil lamps glowing, fragrant camphor, resonant Sanskrit cadence",
      insight: "Chanting Sri Suktam and Purusha Suktam in unison conditions the vagus nerve and activates acoustic resonance across cranial nerve pathways."
    },
    {
      sanskrit: "सात्त्विक उपाहारः",
      solarPhase: "Pratah Ahara • Morning Nutrition",
      solarIcon: Heart,
      kosha: "Annamaya (Physical Nourishment Sheath)",
      atmosphere: "Annakshetra dining hall, silent food prayers (Brahmarpanam), fresh farm milk",
      insight: "Sattvic vegetarian meals prepared with unrefined grains, indigenous cow milk, and garden vegetables provide sustained glycemic stability for study."
    },
    {
      sanskrit: "संस्कृत विद्याभ्यासः",
      solarPhase: "Poorvahna • Peak Cognitive Morning",
      solarIcon: BookOpen,
      kosha: "Manomaya & Vijnanamaya (Mind & Intellect)",
      atmosphere: "Tree-shaded outdoor classes, spoken Sanskrit discussions, science labs",
      insight: "Immersion in Paninian Sanskrit grammar as a spoken tongue rewires neural connectivity, fostering extraordinary auditory memory and analytical reasoning."
    },
    {
      sanskrit: "मध्याह्न भोजनं विश्रान्तिश्च",
      solarPhase: "Madhyahna • Solar Meridian",
      solarIcon: Sun,
      kosha: "Annamaya & Pranamaya (Nourishment & Digestion)",
      atmosphere: "Lush shade of sacred banyan grove, quiet digestion, reflective stillness",
      insight: "Midday meal consumed when digestive fire (Jatharagni) peaks with the sun, followed by 30 minutes of restful quiet contemplation."
    },
    {
      sanskrit: "शास्त्रीयकला भरतनाट्यम्",
      solarPhase: "Aparahna • Afternoon Expression",
      solarIcon: Music,
      kosha: "Pranamaya & Manomaya (Sensory & Artistic Agility)",
      atmosphere: "Rhythmic ghungroos ringing, harmonium notes, expressive Sanskrit drama",
      insight: "Rigorous Bharatanatyam and Carnatic music train emotional emotional mastery (Rasabhinaya) and bilateral bodily coordination."
    },
    {
      sanskrit: "देसीक्रीडा श्रमदानम्",
      solarPhase: "Sayankala • Late Afternoon Vitality",
      solarIcon: Activity,
      kosha: "Pranamaya & Annamaya (Physical Vitality & Seva)",
      atmosphere: "Laughter across open playfields, garden soil, cow care at Gaushala",
      insight: "Traditional Indian games like Kho-Kho and Lagori build agility, while joyful campus maintenance instills the dignity of selfless labor (Shramadaan)."
    },
    {
      sanskrit: "सन्ध्यावन्दनं गीताभजनम्",
      solarPhase: "Sayana Sandhya • Twilight Meditation",
      solarIcon: Sunset,
      kosha: "Vijnanamaya & Anandamaya (Twilight Stillness)",
      atmosphere: "Evening lamps lit across walkways, soul-stirring bhajans, deep introspection",
      insight: "Sandhyavandana at dusk harmonizes the transition from active daylight to reflective night, anchoring emotional equilibrium and peace."
    },
    {
      sanskrit: "रात्रि स्वाध्यायः",
      solarPhase: "Pradosha • Night Academic Consolidation",
      solarIcon: Moon,
      kosha: "Manomaya (Consolidation & Review)",
      atmosphere: "Warm incandescent study lights, open books, Acharya guidance",
      insight: "Self-directed Swadhyaya allows students to review the day's insights and formulate tomorrow's inquiries under resident Matrushree mentorship."
    },
    {
      sanskrit: "शान्तिशयनम्",
      solarPhase: "Nisheetha • Sacred Night Rest",
      solarIcon: Moon,
      kosha: "Anandamaya (Deep Restorative Silence)",
      atmosphere: "Final prayer, warm spiced herbal milk, gentle silence enveloping campus",
      insight: "Retiring by 9:00 PM ensures full deep-sleep non-REM restoration, enabling effortless rising at dawn."
    }
  ];

  return {
    ...item,
    ...(enrichments[idx] || enrichments[0]),
    index: idx
  };
});

export default function DayAtGurukula() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState('dial'); // 'dial' (interactive cinema) or 'river' (open editorial stream)
  const [isAnimating, setIsAnimating] = useState(false);

  const activeItem = DETAILED_ROUTINE[selectedIndex];
  const IconComponent = activeItem.solarIcon || Sun;

  const goToIndex = (idx) => {
    if (idx < 0) idx = DETAILED_ROUTINE.length - 1;
    if (idx >= DETAILED_ROUTINE.length) idx = 0;
    setIsAnimating(true);
    setSelectedIndex(idx);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Keyboard arrow keys navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode !== 'dial') return;
      if (e.key === 'ArrowRight') goToIndex(selectedIndex + 1);
      if (e.key === 'ArrowLeft') goToIndex(selectedIndex - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, viewMode]);

  return (
    <div className="w-full space-y-12 select-none">
      
      {/* View Switcher: Interactive Solar Horizon vs Continuous River of Hours */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#D5B989]/30 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#702E42] animate-pulse" />
          <span className="typography-eyebrow text-[#17243B]">
            Dinacharya Circadian Flow • {activeItem.solarPhase}
          </span>
        </div>

        <div className="flex items-center gap-1 bg-[#17243B]/5 p-1 rounded-full border border-[#D5B989]/30">
          <button
            onClick={() => setViewMode('dial')}
            className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
              viewMode === 'dial'
                ? 'bg-[#17243B] text-[#D5B989] shadow-sm'
                : 'text-[#252A33]/70 hover:text-[#17243B]'
            }`}
          >
            Interactive Solar Dial
          </button>
          <button
            onClick={() => setViewMode('river')}
            className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
              viewMode === 'river'
                ? 'bg-[#17243B] text-[#D5B989] shadow-sm'
                : 'text-[#252A33]/70 hover:text-[#17243B]'
            }`}
          >
            Continuous River of Time
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* VIEW 1: INTERACTIVE SOLAR DIAL (Cinematic Unboxed Experience) */}
      {/* ========================================================= */}
      {viewMode === 'dial' && (
        <div className="space-y-12">
          
          {/* Continuous Solar Time Ribbon across the full width (Zero Boxes) */}
          <div className="relative py-4 border-b border-[#D5B989]/25 overflow-x-auto scrollbar-none">
            {/* Ambient solar tracking line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#702E42] via-[#D5B989] to-[#17243B] -translate-y-1/2 z-0 opacity-40" />
            
            <div className="relative z-10 flex items-center justify-between min-w-[850px] px-4">
              {DETAILED_ROUTINE.map((item, idx) => {
                const isActive = idx === selectedIndex;
                const NodeIcon = item.solarIcon || Sun;
                return (
                  <button
                    key={idx}
                    onClick={() => goToIndex(idx)}
                    className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 relative focus:outline-none"
                  >
                    {/* Time Label */}
                    <span className={`text-[11px] font-mono tracking-wider transition-colors duration-300 ${
                      isActive 
                        ? 'text-[#702E42] font-bold scale-110' 
                        : 'text-[#1E293B] font-semibold hover:text-[#702E42]'
                    }`}>
                      {item.time.split(' - ')[0]}
                    </span>

                    {/* Solar Ray Node (No box, pure light dot) */}
                    <div className={`relative flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'scale-125' 
                        : 'hover:scale-110'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive 
                          ? 'bg-[#702E42] text-[#D5B989] shadow-lg ring-4 ring-[#D5B989]/40' 
                          : 'bg-[#FAF9F6] text-[#1E293B] border border-[#D5B989]/60 hover:border-[#702E42]'
                      }`}>
                        <NodeIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Phase Name snippet */}
                    <span className={`text-[10px] font-sans text-center transition-colors truncate max-w-[80px] ${
                      isActive 
                        ? 'text-[#702E42] font-bold' 
                        : 'text-[#1E293B] font-medium hover:text-[#702E42]'
                    }`}>
                      {item.title.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Hour Cinema Showcase (Completely Free of Box Shapes) */}
          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-40' : 'opacity-100'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
              
              {/* Media Half: Borderless, Naturally Blended Authentic Photograph */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-none shadow-none">
                  {/* Organic Ambient Edge Vignette instead of box borders */}
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-102"
                    onError={(e) => {
                      e.target.src = '/assets/images/banner.jpg';
                    }}
                  />
                  {/* Atmospheric gradient overlay blending into page background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17243B]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#D5B989]/30 pointer-events-none" />

                  {/* Devanagari Inscription Overlay */}
                  <div className="absolute top-6 left-6 text-white drop-shadow-md">
                    <span className="font-serif italic text-sm text-[#D5B989] block tracking-wide">
                      {activeItem.sanskrit}
                    </span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-[#D5B989] uppercase block">
                        Phase {activeItem.index + 1} of {DETAILED_ROUTINE.length}
                      </span>
                      <span className="font-serif text-lg text-white font-medium">
                        {activeItem.solarPhase}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => goToIndex(selectedIndex - 1)}
                        className="p-3 rounded-full bg-[#17243B]/80 hover:bg-[#702E42] text-[#D5B989] border border-[#D5B989]/40 transition-all cursor-pointer shadow-md"
                        title="Previous Hour (Left Arrow)"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => goToIndex(selectedIndex + 1)}
                        className="p-3 rounded-full bg-[#17243B]/80 hover:bg-[#702E42] text-[#D5B989] border border-[#D5B989]/40 transition-all cursor-pointer shadow-md"
                        title="Next Hour (Right Arrow)"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Typographic Half: Spacious, Open, Editorial Narrative (No Boxes) */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Time Display in Classical Cormorant Garamond Numerals */}
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-[#090D16] leading-none">
                    {activeItem.time}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#881337] font-extrabold">
                    {activeItem.category}
                  </span>
                </div>

                {/* Classical Sanskrit Title & Kannada Subtitle */}
                <div className="space-y-1.5 pt-1">
                  <h3 className="typography-section-title text-[#090D16] leading-snug font-black">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm font-sans font-bold text-[#881337] tracking-wide">
                    {activeItem.titleKn}
                  </p>
                </div>

                {/* Narrative Description (Open, generous leading) */}
                <p className="typography-body text-[#252A33] text-lg leading-relaxed pt-2">
                  {activeItem.desc}
                </p>

                {/* Scientific & Ayurvedic Circadian Insight */}
                <div className="py-4 border-t border-b border-[#D5B989]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#702E42] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#D5B989]" />
                    <span>Ayurvedic Circadian Science & Neurobiology</span>
                  </div>
                  <p className="typography-supporting text-[#1E293B] italic font-medium">
                    "{activeItem.insight}"
                  </p>
                </div>

                {/* Ambient Sensory Attributes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans pt-1">
                  <div className="space-y-1">
                    <span className="font-bold uppercase tracking-wider text-[#17243B] block">
                      Pancha Kosha Sheath:
                    </span>
                    <span className="text-[#1E293B] font-medium">
                      {activeItem.kosha}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold uppercase tracking-wider text-[#17243B] block">
                      Sensory Environment:
                    </span>
                    <span className="text-[#1E293B] font-medium">
                      {activeItem.atmosphere}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 2: CONTINUOUS RIVER OF TIME (Open Editorial Stream) */}
      {/* Completely free of enclosed boxes, cards, or shapes     */}
      {/* ========================================================= */}
      {viewMode === 'river' && (
        <div className="space-y-24 py-6">
          {DETAILED_ROUTINE.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Media Side (Open, borderless photograph) */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} relative`}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                      loading="eager"
                      onError={(e) => {
                        e.target.src = '/assets/images/banner.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17243B]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                      <span className="font-serif text-sm text-[#D5B989] italic">
                        {item.sanskrit}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-white/80">
                        {item.solarPhase}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Typography Side (Open, unboxed editorial narrative) */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-4`}>
                  
                  {/* Time and Category header */}
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#702E42]">
                      {item.time}
                    </span>
                    <span className="w-8 h-[1px] bg-[#D5B989]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#687386]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="typography-section-title text-[#17243B]">
                    {item.title}
                  </h3>

                  <p className="text-xs font-sans font-semibold text-[#702E42]">
                    {item.titleKn}
                  </p>

                  <p className="typography-body text-[#252A33]">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-[#D5B989]/25 text-xs text-[#687386] italic">
                    "{item.insight}"
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
