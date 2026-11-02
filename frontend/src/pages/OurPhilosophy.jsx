import React from 'react';
import { FIVE_KOSHAS } from '../data/contentData';
import FiveKoshasInteractive from '../components/FiveKoshasInteractive';
import SectionHeader from '../components/SectionHeader';
import { 
  Sparkles, 
  Brain, 
  Sun, 
  BookOpen, 
  ShieldCheck, 
  Quote
} from 'lucide-react';

export default function OurPhilosophy() {
  const ETERNAL_VALUES = [
    {
      sanskrit: "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः",
      trans: "Yatra Naryastu Poojyante Ramante Tatra Devataha",
      meaning: "Where women are honored with reverence, divinity itself blossoms there.",
      meaningKn: "ಎಲ್ಲಿ ಮಹಿಳೆಯರನ್ನು ಗೌರವಿಸಲಾಗುತ್ತದೆಯೋ, ಅಲ್ಲಿ ದೈವಿಕ ಶಕ್ತಿ ನೆಲೆಸುತ್ತದೆ."
    },
    {
      sanskrit: "धर्मो रक्षति रक्षितः",
      trans: "Dharmo Rakshati Rakshitaha",
      meaning: "Righteousness and ethical conduct, when protected and practiced, in turn protects us.",
      meaningKn: "ನಾವು ಧರ್ಮವನ್ನು ರಕ್ಷಿಸಿದರೆ, ಆ ಧರ್ಮವು ನಮ್ಮನ್ನು ರಕ್ಷಿಸುತ್ತದೆ."
    },
    {
      sanskrit: "देश सेवेये ईश सेवा",
      trans: "Desha Seveye Isha Seve",
      meaning: "Selfless service to the nation and fellow human beings is the highest worship of the Divine.",
      meaningKn: "ದೇಶದ ಸೇವೆಯೇ ಭಗವಂತನ ಪರಮ ಪೂಜೆ."
    },
    {
      sanskrit: "ಸಂಸ್ಕೃತಿಯೇ ರಾಷ್ಟ್ರದ ಜೀವನಾಡಿ",
      trans: "Samskritiye Rashtrada Jeevanadi",
      meaning: "Civilizational values, Sanskrit language, and noble traditions constitute our national soul.",
      meaningKn: "ಸನಾತನ ಭಾರತೀಯ ಸಂಸ್ಕೃತಿಯೇ ನಮ್ಮ ಅಸ್ತಿತ್ವದ ಮೂಲ."
    }
  ];

  return (
    <div className="w-full bg-transparent">
      
      {/* 1. Page Hero Banner — Midnight Navy */}
      <section className="relative py-24 sm:py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/Shubham-Karoti-002-1024x723.webp"
            alt="Gurukula Philosophical Tradition"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-black/60" />
        </div>

        <div className="relative z-10 editorial-container text-center space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D5B989]" />
            <span className="typography-eyebrow text-[#F59E0B]">
              Sanatana Shikshana Siddhanta
            </span>
            <span className="w-8 h-[1px] bg-[#D5B989]" />
          </div>

          <h1 className="typography-hero text-white tracking-tight">
            Our Educational Philosophy:<br />
            <span className="italic text-[#F59E0B] font-normal">
              The Five Koshas of Being
            </span>
          </h1>

          <p className="typography-subheading text-slate-100 font-normal max-w-2xl mx-auto">
            "Every child is a soul in evolution. Every soul is potentially divine." Explore the Vedic framework of human consciousness that governs every waking hour at Shubham Karoti Gurukula.
          </p>
        </div>
      </section>

      {/* 2. Guiding Principles: Sri Aurobindo & Swami Vivekananda (Open 2-Column Broadsheet - Zero Cards) */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Visionary Foundations"
            title="Guiding Voices of"
            highlight="Integral Wisdom"
            subtitle="The eternal pedagogical visions of Sri Aurobindo and Swami Vivekananda form the bedrock of our Gurukula."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-[#D5B989]/30 items-stretch">
            
            {/* Column 1: Sri Aurobindo */}
            <div className="space-y-6 md:pr-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-extrabold text-[#702E42]">01</span>
                  <span className="h-[1px] w-8 bg-[#D5B989]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                    Integral Pedagogy
                  </span>
                </div>

                <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 my-2 space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-serif italic text-[#0F172A] leading-snug">
                    "Every child is a Soul in evolution. Nothing can be taught from without; all knowledge awakens from within."
                  </h3>
                  <p className="text-xs font-sans font-bold uppercase tracking-wider text-[#702E42] pt-2">
                    — Sri Aurobindo
                  </p>
                </blockquote>

                <p className="typography-body text-[#1E293B] pt-2">
                  In our Gurukula, the teacher is never an external authority stuffing facts into passive minds. The teacher is a loving guide who arranges the sacred atmosphere, removes distractions, and encourages the girl to look within her own soul to awaken innate mastery.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D5B989]/30 text-xs font-sans text-[#702E42] font-bold tracking-wide">
                ✦ Self-Discovery • Swa-Adhyaya • Experiential Awakening
              </div>
            </div>

            {/* Column 2: Swami Vivekananda */}
            <div className="space-y-6 pt-8 md:pt-0 md:pl-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-extrabold text-[#702E42]">02</span>
                  <span className="h-[1px] w-8 bg-[#D5B989]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                    Manifestation of Divinity
                  </span>
                </div>

                <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 my-2 space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-serif italic text-[#0F172A] leading-snug">
                    "Education is the manifestation of the perfection already inherent in every human soul."
                  </h3>
                  <p className="text-xs font-sans font-bold uppercase tracking-wider text-[#702E42] pt-2">
                    — Swami Vivekananda
                  </p>
                </blockquote>

                <p className="typography-body text-[#1E293B] pt-2">
                  Regardless of economic poverty or humble rural origin, every girl possesses divine dignity and boundless intellect. Our sacred duty is to clear away the shadows of self-doubt and offer pure nourishment, classical disciplines, and moral courage.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D5B989]/30 text-xs font-sans text-[#702E42] font-bold tracking-wide">
                ✦ Innate Dignity • Limitless Potential • Fearless Character
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Five Koshas Interactive Master Stage */}
      <section className="editorial-section-py bg-transparent border-y border-[#D5B989]/30">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Taittiriya Upanishad Framework"
            title="The Five Concentric Sheaths of"
            highlight="Human Consciousness"
            subtitle="Explore how physical vigor, vital prana, emotion, intellect, and spiritual bliss are systematically integrated in daily life."
          />

          <FiveKoshasInteractive />
        </div>
      </section>

      {/* 4. Cognitive Science & Ancient Yoga (Open 2-Column Spread - Zero Cards) */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Ancient Cognitive Psychology"
            title="Mind & Brain Training in"
            highlight="Gurukula Education"
            subtitle="How traditional Vedic practices harmoniously balance left-brain analytics and right-brain artistic intuition."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 divide-y lg:divide-y-0 lg:divide-x divide-[#D5B989]/30">
            
            {/* Left Brain & Subconscious */}
            <div className="space-y-4 lg:pr-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] text-[#F59E0B] flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <h3 className="typography-card-title text-[#0F172A]">
                  Subconscious Absorption Through Sacred Environment
                </h3>
              </div>
              <p className="typography-body text-[#1E293B]">
                While the conscious outer mind processes information in fragments, the subconscious absorbs holistic frequencies from the environment. By immersing the student in 12 acres of serene nature, sacred Sanskrit phonetics, and structured silence, the subconscious retains vast knowledge effortlessly without psychological stress.
              </p>
              <div className="pt-3 border-t border-[#D5B989]/25 text-xs font-sans text-[#702E42] font-semibold">
                💡 <strong>Prefrontal Focus:</strong> Daily Sandhyavandana, Agnihotra, and Japa train cognitive control and sustained attention.
              </div>
            </div>

            {/* Whole Brain Balance */}
            <div className="space-y-4 pt-8 lg:pt-0 lg:pl-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#702E42] text-white flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <h3 className="typography-card-title text-[#0F172A]">
                  Harmonizing Logical Analysis & Spiritual Intuition
                </h3>
              </div>
              <p className="typography-body text-[#1E293B]">
                Conventional schooling develops purely one-sided analytical memory, leaving the intuitive and creative faculties starved. At Maitreyi Gurukula, rigorous Paninian grammar and mathematics are balanced daily with Bharatanatyam mudras, Harikatha storytelling, and Gandhari tactile awareness.
              </p>
              <div className="pt-3 border-t border-[#D5B989]/25 text-xs font-sans text-[#702E42] font-semibold">
                💡 <strong>Neuro-plastic Balance:</strong> Cross-hemispheric integration fosters deep emotional balance, poise, and ethical vision.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Eternal Sanskrit Axioms — Midnight Navy */}
      <section className="editorial-section-py bg-[#0F172A] text-white">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Ethical Anchors"
            title="Eternal Values That"
            highlight="Guide Our Gurukula"
            subtitle="Four sacred Sanskrit principles carved into the heart of every girl who walks this campus."
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#D5B989]/25">
            {ETERNAL_VALUES.map((val, idx) => (
              <div 
                key={idx}
                className="space-y-4 flex flex-col justify-between pt-6 sm:pt-0 sm:px-6"
              >
                <div>
                  <h4 className="font-serif text-[#F59E0B] text-xl font-bold leading-snug">
                    "{val.sanskrit}"
                  </h4>
                  <p className="text-xs text-slate-300 italic font-serif mt-2">
                    {val.trans}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D5B989]/20 space-y-2">
                  <p className="typography-supporting text-slate-100">
                    {val.meaning}
                  </p>
                  <p className="text-xs text-[#F59E0B] font-sans font-medium">
                    {val.meaningKn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
