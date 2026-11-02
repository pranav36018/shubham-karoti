import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { THREE_EXAMINATIONS } from '../data/contentData';
import { 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  EyeOff, 
  Music, 
  Compass, 
  Cpu, 
  HeartHandshake,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function EducationActivities() {
  const SANSKRIT_CANON = [
    { title: "Panini's Ashtadhyayi", count: "3,978 Sutras", desc: "The definitive mathematical system of Sanskrit generative grammar." },
    { title: "Amara Kosha Lexicon", count: "2,989 Verses", desc: "Classical metrical thesaurus imparting synonymic and categorical mastery." },
    { title: "Dhatu Patha Roots", count: "2,014 Roots", desc: "Systematic classification explaining verbal conjugation across all ten ganas." },
    { title: "Unadi Kosha Rules", count: "700 Rules", desc: "Grammatical rules explaining primary suffix derivations and classical nuances." },
    { title: "Linganushasanam", count: "192 Morphologies", desc: "Authoritative morphological guidelines governing Sanskrit grammatical gender." }
  ];

  return (
    <div className="w-full bg-transparent">
      
      {/* 1. Dramatic Page Hero Banner — Midnight Navy */}
      <section className="relative py-24 sm:py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/banner-2.jpg"
            alt="Gurukula Learning and Activities"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-black/60" />
        </div>

        <div className="relative z-10 editorial-container text-center space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D5B989]" />
            <span className="typography-eyebrow text-[#F59E0B]">
              Curricular Mastery & Living Arts
            </span>
            <span className="w-8 h-[1px] bg-[#D5B989]" />
          </div>

          <h1 className="typography-hero text-white tracking-tight">
            Education &<br />
            <span className="italic text-[#F59E0B] font-normal">
              Classical Traditions
            </span>
          </h1>

          <p className="typography-subheading text-slate-100 font-normal max-w-2xl mx-auto">
            A harmonious integration where state board academics and computer labs meet spoken Sanskrit, Paninian linguistics, classical Bharatanatyam, and the unique Three-Examination System.
          </p>
        </div>
      </section>

      {/* 2. The Three Examination System (Open 3-Column Broadsheet - Zero Cards) */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Triple Validation"
            title="The Three Examination System for"
            highlight="Comprehensive Success"
            subtitle="Unlike conventional schools that test only one dimension, Gurukula students earn credentials across state, university, and ashram standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-[#D5B989]/30">
            {THREE_EXAMINATIONS.map((exam, idx) => (
              <div 
                key={exam.id}
                className={`space-y-6 flex flex-col justify-between ${
                  idx === 0 ? 'md:pr-10' : idx === 1 ? 'pt-8 md:pt-0 md:px-10' : 'pt-8 md:pt-0 md:pl-10'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-extrabold text-[#702E42]">0{idx + 1}</span>
                    <span className="h-[1px] w-8 bg-[#D5B989]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                      {exam.authority}
                    </span>
                  </div>

                  <h3 className="typography-card-title text-[#0F172A] text-xl sm:text-2xl font-bold">
                    {exam.title}
                  </h3>

                  <p className="text-xs font-sans text-[#702E42] font-semibold tracking-wide">
                    {exam.titleKn}
                  </p>

                  <p className="typography-body text-[#1E293B] pt-1">
                    {exam.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#D5B989]/30 space-y-3">
                  <span className="typography-eyebrow text-[#0F172A] block font-bold">
                    Curricular Hallmarks:
                  </span>
                  {exam.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 typography-supporting text-[#1E293B]">
                      <CheckCircle2 className="w-4 h-4 text-[#702E42] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sanskrit as a Living Language & Memorization Canon — Midnight Navy */}
      <section className="editorial-section-py bg-[#0F172A] text-white">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Living Linguistic Heritage"
            title="Sanskrit: Spoken Mother Tongue &"
            highlight="Classical Canon"
            subtitle="Sanskrit is the natural language of daily life across dormitories and dining halls. Students commit thousands of core verses to permanent memory."
            light={true}
          />

          {/* Scholarly Canon Breakdown (Open 5 Columns with Gold Figures) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#D5B989]/25">
            {SANSKRIT_CANON.map((item, idx) => (
              <div 
                key={idx}
                className="space-y-3 flex flex-col justify-between pt-6 sm:pt-0 sm:px-4"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-[#F59E0B] block mb-1">
                    {item.count}
                  </span>
                  <h4 className="text-base font-serif font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="typography-supporting text-slate-200 pt-3 border-t border-[#D5B989]/20">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-[#D5B989] pl-6 py-4 max-w-3xl mx-auto space-y-2">
            <p className="font-serif italic text-lg sm:text-xl text-[#F59E0B] leading-relaxed">
              "Learning Sanskrit starts from the very beginning in the traditional way—not merely from an examination viewpoint, but to gain in-depth mastery of the solid linguistic base."
            </p>
            <p className="text-xs text-slate-300 font-mono tracking-widest uppercase">
              — Official Gurukula Curriculum Charter
            </p>
          </blockquote>
        </div>
      </section>

      {/* 4. Large Image-Led Sections for Individual Disciplines (Open Magazine Spreads - Zero Cards) */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-28 lg:space-y-36">
          
          <SectionHeader
            eyebrow="Traditional Disciplines"
            title="Living Classical Arts &"
            highlight="Cognitive Training"
            subtitle="Each discipline is given dedicated daily practice under master acharyas and residential matrushrees."
          />

          {/* Discipline 1: Classical Bharatanatyam */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/Shubham-Karoti-005-1024x697.webp"
                  alt="Students practicing classical Bharatanatyam"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xs text-[#F59E0B] uppercase tracking-widest block">
                    Kalakshetra & Pandhanallur Traditions
                  </span>
                  <p className="font-serif text-sm text-white">
                    Daily physical discipline harmonizing spinal alignment, rhythm, and abhinaya
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                Classical Dance
              </span>
              <h3 className="typography-section-title text-[#090D16] font-black">
                Bharatanatyam as Yoga & Spiritual Devotion
              </h3>
              <p className="text-sm font-sans font-semibold text-[#702E42] tracking-wide">
                ಶಾಸ್ತ್ರೀಯ ಭರತನಾಟ್ಯ ತರಬೇತಿ
              </p>
              <p className="typography-body text-[#1E293B]">
                Bharatanatyam is not mere entertainment; it is treated as a severe yogic discipline. Students train daily in <em>Nritta</em> (pure rhythmic footwork) and <em>Abhinaya</em> (dramatic emotive expression of sacred poetry). This builds extraordinary physical stamina, mental presence, and spinal grace.
              </p>
              <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 typography-supporting text-[#1E293B]">
                Every student participates in annual temple performances and regional cultural festivals across Karnataka.
              </blockquote>
            </div>
          </div>

          {/* Discipline 2: Harikatha & Carnatic Music */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                Vocal & Narrative Arts
              </span>
              <h3 className="typography-section-title text-[#090D16] font-black">
                Harikatha & Classical Carnatic Singing
              </h3>
              <p className="text-sm font-sans font-semibold text-[#702E42] tracking-wide">
                ಹರಿಕಥೆ ಹಾಗೂ ಶಾಸ್ತ್ರೀಯ ಸಂಗೀತ
              </p>
              <p className="typography-body text-[#1E293B]">
                Harikatha is the ancient Indian art of musical storytelling. Accompanying themselves on harmonium, tambura, and cymbals, students expound philosophical epics with extemporaneous eloquence. It cultivates supreme voice modulation, public poise, and commanding oratorical skill.
              </p>
              <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 typography-supporting text-[#1E293B]">
                Students study traditional compositions of Purandara Dasa, Kanaka Dasa, and classical Sanskrit stotras.
              </blockquote>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/Shubham-Karoti-009-1024x683.webp"
                  alt="Students practicing Harikatha and music"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xs text-[#F59E0B] uppercase tracking-widest block">
                    Vocal Oratory & Philosophical Narrative
                  </span>
                  <p className="font-serif text-sm text-white">
                    Training confident communicators who inspire audiences with sacred storytelling
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Discipline 3: Gandhari Vidya & Concentration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/Shubham-Karoti-017-1024x713.webp"
                  alt="Students practicing Gandhari Vidya"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xs text-[#F59E0B] uppercase tracking-widest block">
                    Sensory Concentration & Mindfulness
                  </span>
                  <p className="font-serif text-sm text-white">
                    Cultivating acute intuitive perception and deep mental stillness
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                Sensory Focus
              </span>
              <h3 className="typography-section-title text-[#090D16] font-black">
                Gandhari Vidya & Intuitive Concentration
              </h3>
              <p className="text-sm font-sans font-semibold text-[#702E42] tracking-wide">
                ಗಾಂಧಾರಿ ವಿದ್ಯಾ ಸಾಧನೆ
              </p>
              <p className="typography-body text-[#1E293B]">
                Gandhari Vidya is taught respectfully as a traditional concentration discipline. By blindfolding the visual sense, students heighten their acute tactile, olfactory, and auditory discernment. This cultivates profound mental stillness and enhanced memory retention without making unscientific or supernatural claims.
              </p>
              <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 typography-supporting text-[#1E293B]">
                Demonstrates the extraordinary latent capacity of the human mind when trained with disciplined stillness.
              </blockquote>
            </div>
          </div>

          {/* Discipline 4: Computer Applications & Modern Sciences */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                Modern Technology & Labs
              </span>
              <h3 className="typography-section-title text-[#090D16] font-black">
                Computer Applications & Science Laboratories
              </h3>
              <p className="text-sm font-sans font-semibold text-[#702E42] tracking-wide">
                ಗಣಕಯಂತ್ರ ಹಾಗೂ ಆಧುನಿಕ ಶಿಕ್ಷಣ
              </p>
              <p className="typography-body text-[#1E293B]">
                While deeply anchored in ancient traditions, our students are fully prepared for the digital 21st century. The Gurukula maintains modern computer workstations, high-speed connectivity, and science laboratory setups to ensure complete competence in STEM careers and higher university education.
              </p>
              <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 typography-supporting text-[#1E293B]">
                Equipping graduates for careers in software, public service, medicine, law, and academia.
              </blockquote>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/Shubham-Karoti-013-1024x683.webp"
                  alt="Students in modern computer lab"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xs text-[#F59E0B] uppercase tracking-widest block">
                    Digital Literacy & STEM Skills
                  </span>
                  <p className="font-serif text-sm text-white">
                    Seamless bridge between Vedic heritage and contemporary technological prowess
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
