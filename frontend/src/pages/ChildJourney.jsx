import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { SIX_GANAS } from '../data/contentData';
import { 
  TrendingUp, 
  Sparkles, 
  Award, 
  Heart, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function ChildJourney() {
  const SIX_DIMENSIONS = [
    {
      title: "1. Academic & Sanskrit Mastery",
      titleKn: "ವಿದ್ಯಾಭ್ಯಾಸ ಹಾಗೂ ಸಂಸ್ಕೃತ ಸಾಧನೆ",
      desc: "Simultaneous excellence across Karnataka State Board (SSLC/PUC), Karnataka Sanskrit University (Prathama to Sahitya), and Paninian grammar memorization (3,978 sutras)."
    },
    {
      title: "2. Health, Vitality & Dinacharya",
      titleKn: "ಆರೋಗ್ಯ, ಯೋಗ ಹಾಗೂ ದಿನಚರ್ಯ",
      desc: "Daily 4:30 AM Brahma Muhurta waking, 12 Surya Namaskars, asanas, organic farm nutrition, immunity decoctions, and physical endurance."
    },
    {
      title: "3. Classical Fine Arts & Music",
      titleKn: "ಶಾಸ್ತ್ರೀಯ ಕಲೆಗಳು ಹಾಗೂ ಸಂಗೀತ",
      desc: "Bharatanatyam mudras, Carnatic classical vocal training, Harikatha oratory, and Gandhari intuitive sensory concentration."
    },
    {
      title: "4. Character, Ethics & Values",
      titleKn: "ಸದ್ಗುಣ, ಸಂಸ್ಕಾರ ಹಾಗೂ ನೈತಿಕತೆ",
      desc: "Cultivating truthfulness, gratitude, humility, sisterly affection, and unwavering reverence for parent, teacher, and motherland."
    },
    {
      title: "5. Seva, Leadership & Self-Reliance",
      titleKn: "ಸೇವೆ, ನಾಯಕತ್ವ ಹಾಗೂ ಸ್ವಾವಲಂಬನೆ",
      desc: "Dormitory stewardship, kitchen assistance, organic gardening, cattle care, and mentoring junior sisters."
    },
    {
      title: "6. Continuous Formative Mentoring",
      titleKn: "ನಿರಂತರ ವಾತ್ಸಲ್ಯಪೂರ್ಣ ಮಾರ್ಗದರ್ಶನ",
      desc: "Gentle daily observations recorded by resident Matrushrees, providing timely personal guidance without public shaming or cold rankings."
    }
  ];

  return (
    <div className="w-full bg-transparent">
      
      {/* 1. Page Hero Banner — Midnight Navy */}
      <section className="relative py-24 sm:py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/banner-2.jpg"
            alt="Child Journey at Shubham Karoti Gurukula"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-black/60" />
        </div>

        <div className="relative z-10 editorial-container text-center space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D5B989]" />
            <span className="typography-eyebrow text-[#F59E0B]">
              Six-Year Progressive Transformation
            </span>
            <span className="w-8 h-[1px] bg-[#D5B989]" />
          </div>

          <h1 className="typography-hero text-white tracking-tight">
            The Child's<br />
            <span className="italic text-[#F59E0B] font-normal">
              Sacred Journey
            </span>
          </h1>

          <p className="typography-subheading text-slate-100 font-normal max-w-2xl mx-auto">
            "Every child has a unique seed of greatness waiting to unfold." Discover how a shy rural girl blossoms into a courageous scholar, artist, and self-reliant leader across six transformative Ganas.
          </p>
        </div>
      </section>

      {/* 2. The 6-Year Gana Progression (Open Developmental Pathway - Zero Cards) */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-20">
          <SectionHeader
            eyebrow="Six Evolutionary Steps"
            title="The Six Ganas of Character &"
            highlight="Luminous Wisdom"
            subtitle="From initial dedication to luminous intellect—each year operates under a distinct spiritual and cognitive catalyst."
          />

          <div className="space-y-12 max-w-5xl mx-auto">
            {SIX_GANAS.map((g, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-10 border-b border-[#D5B989]/30"
              >
                {/* Left: Year & Gana Indicator (4 cols) */}
                <div className="md:col-span-4 space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-extrabold text-[#702E42]">0{idx + 1}</span>
                    <span className="h-[1px] w-8 bg-[#D5B989]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                      {g.grade}
                    </span>
                  </div>

                  <h3 className="typography-card-title text-[#0F172A] text-2xl font-bold mt-1">
                    {g.gana} <span className="font-serif text-[#702E42] font-bold">({g.ganaDevanagari})</span>
                  </h3>

                  <p className="text-xs font-sans text-[#702E42] font-semibold tracking-wide">
                    ಕನ್ನಡ: {g.outcomeKn}
                  </p>
                </div>

                {/* Right: Narrative & Outcome (8 cols) */}
                <div className="md:col-span-8 space-y-3 md:border-l md:border-[#D5B989]/30 md:pl-8">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42] block">
                      Evolutionary Catalyst:
                    </span>
                    <span className="text-lg font-serif italic text-[#0F172A] font-semibold">
                      "{g.outcome}"
                    </span>
                  </div>

                  <p className="typography-body text-[#1E293B]">
                    {g.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Six Developmental Dimensions (Open 3-Column Rubric - Zero Cards) */}
      <section className="editorial-section-py bg-transparent border-y border-[#D5B989]/30">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Holistic Assessment"
            title="The Six Dimensions of"
            highlight="Student Development"
            subtitle="The holistic tracking framework ensuring every child is supported in mind, body, and spirit without reducing her to cold marks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-[#D5B989]/30">
            {SIX_DIMENSIONS.map((dim, i) => (
              <div 
                key={i}
                className={`space-y-4 flex flex-col justify-between ${
                  i % 3 === 0 ? '' : 'pt-6 md:pt-0 md:pl-8'
                }`}
              >
                <div className="space-y-3">
                  <h4 className="typography-card-title text-[#0F172A] text-xl font-bold">
                    {dim.title}
                  </h4>
                  <p className="text-xs font-sans font-semibold text-[#702E42] tracking-wide">
                    {dim.titleKn}
                  </p>
                  <p className="typography-supporting text-[#1E293B] pt-1">
                    {dim.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D5B989]/20 text-xs font-sans text-[#702E42] font-bold tracking-wide">
                  ✦ Continuous Qualitative Mentorship
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Alumnae Legacy & Shubha Dayini Trust — Midnight Navy */}
      <section className="editorial-section-py bg-[#0F172A] text-white">
        <div className="editorial-container space-y-12">
          <SectionHeader
            eyebrow="300+ Empowered Alumnae"
            title="Hale Beru, Hosa Hurupu,"
            highlight="Hosa Kanasu"
            subtitle="(Old Roots, Fresh Vigour, New Dreams) — Annual Alumni Conclave"
            light={true}
          />

          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="typography-body text-slate-100 max-w-3xl mx-auto font-normal">
              To maintain lifelong solidarity, our graduated students founded the <strong>Shubha Dayini Trust</strong>. Today, Gurukula alumnae serve across multinational IT enterprises as software engineers, in healthcare as medical practitioners, as advocates, and scholars—proudly embodying Vedic integrity in modern professional society.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-center border-t border-[#D5B989]/25 max-w-2xl mx-auto">
              <div>
                <span className="text-3xl sm:text-5xl font-serif font-bold text-[#F59E0B] block">300+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-200 mt-1 block">Graduated Daughters</span>
              </div>
              <div className="h-12 w-[1px] bg-[#D5B989]/30 hidden sm:block" />
              <div>
                <span className="text-3xl sm:text-5xl font-serif font-bold text-[#F59E0B] block">100%</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-200 mt-1 block">Free Residential Seva</span>
              </div>
              <div className="h-12 w-[1px] bg-[#D5B989]/30 hidden sm:block" />
              <div>
                <span className="text-3xl sm:text-5xl font-serif font-bold text-[#F59E0B] block">30 Yrs</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-200 mt-1 block">Unbroken Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
