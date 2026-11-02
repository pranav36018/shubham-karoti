import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Check,
  Building,
  Award,
  ShieldCheck,
  Trees
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import EditorialPillars from '../components/EditorialPillars';
import FiveKoshasInteractive from '../components/FiveKoshasInteractive';
import SanskritWisdomPavilion from '../components/SanskritWisdomPavilion';
import DayAtGurukula from '../components/DayAtGurukula';
import GalleryLightbox from '../components/GalleryLightbox';
import CampusTourInteractive from '../components/CampusTourInteractive';

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <div className="w-full bg-transparent overflow-x-hidden">
      
      {/* ========================================================= */}
      {/* 1. CINEMATIC HERO SECTION (Full-Screen, Expansive Widescreen) */}
      {/* ========================================================= */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0F172A]">
        {/* Authentic Full-Bleed Gurukula Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/banner.jpg"
            alt="Students and Campus of Shubham Karoti Maitreyi Gurukula"
            className="w-full h-full object-cover object-center filter brightness-65 scale-101"
          />
          {/* Elegant Dark Overlay with Midnight Navy & Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/50" />
        </div>

        {/* Hero Content: Expansive 12-Column Layout Occupying Full Screen */}
        <div className="relative z-10 editorial-container w-full pt-28 pb-16 lg:pt-36 lg:pb-20 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 7 Columns: Powerful Editorial Headline & Mission */}
            <div className="lg:col-span-7 2xl:col-span-8 space-y-8">
              
              {/* Eyebrow Label with Champagne hairline */}
              <div className="inline-flex items-center gap-3">
                <span className="w-10 h-[1.5px] bg-[#D5B989]" />
                <span className="typography-eyebrow text-[#F59E0B]">
                  Vedic Living Sanctuary • Estd. 1994 • Bengaluru
                </span>
                <span className="w-10 h-[1.5px] bg-[#D5B989]" />
              </div>

              {/* Grand Main Headline with Big Shubham Karoti Title */}
              <div className="space-y-2">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-serif font-black tracking-tight text-[#F59E0B] uppercase drop-shadow-lg leading-none">
                  Shubham Karoti
                </span>
                <span className="block text-sm sm:text-base lg:text-lg font-sans font-bold tracking-[0.3em] text-slate-100 uppercase mb-4">
                  Maitreyi Gurukula
                </span>
                <h1 
                  className="typography-hero !text-white tracking-tight drop-shadow-md"
                  style={{ color: '#FFFFFF' }}
                >
                  Where Heritage Inspires the{' '}
                  <span 
                    className="italic font-normal !text-[#F59E0B]"
                    style={{ color: '#F59E0B' }}
                  >
                    Future.
                  </span>
                </h1>
              </div>

              {/* Supporting Editorial Description */}
              <p className="typography-body text-slate-100 max-w-2xl font-normal text-lg sm:text-xl leading-relaxed">
                Discover a transformative residential sanctuary where ancient civilizational wisdom, spoken Sanskrit fluency, and modern sciences unite to empower India's daughters.
              </p>

              {/* Primary Call to Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/our-story"
                  className="btn-primary !px-8 !py-4 text-sm uppercase tracking-wider"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 text-[#D5B989]" />
                </Link>

                <Link
                  to="/life-at-gurukula"
                  className="btn-secondary-light !px-8 !py-4 text-sm"
                >
                  <span>Explore the Gurukula</span>
                </Link>
              </div>

              {/* Sacred Sanskrit Shloka Badge */}
              <div className="pt-4 flex items-center gap-3 text-xs sm:text-sm font-serif italic text-[#F59E0B]">
                <Sparkles className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>शुभं करोति कल्याणम् आरोग्यं धनसंपदः • 100% Free Residential Seva</span>
              </div>
            </div>

            {/* Right 5 Columns: 3 Open Editorial Hallmarks (Completely Unboxed) */}
            <div className="lg:col-span-5 2xl:col-span-4 space-y-6 border-t lg:border-t-0 lg:border-l border-[#D5B989]/30 pt-8 lg:pt-0 lg:pl-10">
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-extrabold text-[#F59E0B]">01</span>
                  <span className="h-[1px] w-8 bg-[#D5B989]" />
                  <span className="typography-eyebrow text-[#F59E0B]">100% Free Seva</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white">
                  6-Year Residential Scholarship
                </h3>
                <p className="text-sm font-sans text-slate-200 leading-relaxed font-normal">
                  Zero tuition, zero boarding fees, zero book costs for every enrolled girl from Class 6 to 2nd PUC.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#D5B989]/25">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-extrabold text-[#F59E0B]">02</span>
                  <span className="h-[1px] w-8 bg-[#D5B989]" />
                  <span className="typography-eyebrow text-[#F59E0B]">Spoken Sanskrit</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Panini Ashtadhyayi Mastery
                </h3>
                <p className="text-sm font-sans text-slate-200 leading-relaxed font-normal">
                  Sanskrit spoken fluently across dining halls and dorms, with 3,978 Sutras committed to permanent memory.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#D5B989]/25">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-extrabold text-[#F59E0B]">03</span>
                  <span className="h-[1px] w-8 bg-[#D5B989]" />
                  <span className="typography-eyebrow text-[#F59E0B]">Triple Credentials</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white">
                  State & University Honors
                </h3>
                <p className="text-sm font-sans text-slate-200 leading-relaxed font-normal">
                  Simultaneous examination validation across Karnataka State Board (SSLC/PUC) and Karnataka Sanskrit University.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Continuous Quick Fact Ribbon Anchored at Bottom of Hero */}
        <div className="relative z-10 w-full bg-[#0F172A]/95 backdrop-blur-md border-t border-[#D5B989]/25 py-5 px-6 sm:px-12 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            <div className="text-center sm:text-left">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#F59E0B] block">1994</span>
              <span className="text-[11px] font-sans font-medium text-slate-200 uppercase tracking-widest">Founded by Pejawar Swamiji</span>
            </div>
            <div className="text-center sm:text-left sm:border-l sm:border-[#D5B989]/25 sm:pl-6">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#F59E0B] block">12 Acres</span>
              <span className="text-[11px] font-sans font-medium text-slate-200 uppercase tracking-widest">Natural Ramohalli Sanctuary</span>
            </div>
            <div className="text-center sm:text-left sm:border-l sm:border-[#D5B989]/25 sm:pl-6">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#F59E0B] block">₹0 Fees</span>
              <span className="text-[11px] font-sans font-medium text-slate-200 uppercase tracking-widest">100% Free for All Girls</span>
            </div>
            <div className="text-center sm:text-left sm:border-l sm:border-[#D5B989]/25 sm:pl-6">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#F59E0B] block">300+</span>
              <span className="text-[11px] font-sans font-medium text-slate-200 uppercase tracking-widest">Alumni Women Leaders</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE SANCTUARY OVERVIEW (Editorial Photographic Narrative) */}
      {/* ========================================================= */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left Side: Large, Unboxed Authentic Photograph (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/Shubham-Karoti-002-1024x723.webp"
                  alt="Students engaged in outdoor studies at Gurukula"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <span className="font-serif text-sm tracking-wide text-[#F59E0B]">
                    Ramohalli Campus • Natural Sanctuary
                  </span>
                  <span className="text-xs font-mono px-3.5 py-1 bg-[#0F172A]/80 border border-[#D5B989]/40 text-white">
                    Sacred Atmosphere
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Editorial Narrative & Overview (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#D5B989]" />
                  <span className="typography-eyebrow text-[#702E42]">
                    Our Identity & Purpose
                  </span>
                </div>

                <h2 className="typography-section-title text-[#090D16]">
                  An Oasis of Sacred Learning Where Heritage{' '}
                  <span className="italic font-bold text-[#881337]">
                    Ignites the Future
                  </span>
                </h2>
              </div>

              <p className="typography-body text-[#1E293B] text-lg leading-relaxed">
                Nestled on 12 serene acres near Bengaluru's historic Big Banyan Tree, <strong>Shubham Karoti Maitreyi Gurukula</strong> was founded on Vyasa Poornima in 1994 with an uncompromising sacred vow: to provide completely free, highest-quality residential education for young women.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#702E42] mt-2 shrink-0" />
                  <p className="typography-body text-[#1E293B]">
                    <strong>Holistic Living Tradition:</strong> Students awaken at Brahma Muhurta to sacred mantras, practice classical Bharatanatyam, converse fluently in Sanskrit, and excel in modern sciences and mathematics.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#702E42] mt-2 shrink-0" />
                  <p className="typography-body text-[#1E293B]">
                    <strong>Loving Matrushree Mentorship:</strong> Resident women scholars live alongside the students, fostering character, self-reliance, emotional security, and sisterhood.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <Link
                  to="/our-story"
                  className="inline-flex items-center gap-2 text-sm font-sans font-bold text-[#702E42] hover:text-[#0F172A] transition-colors group cursor-pointer"
                >
                  <span>Explore the 30-Year History</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#B45309]" />
                </Link>

                <Link
                  to="/life-at-gurukula"
                  className="text-sm font-sans font-semibold text-[#1E293B] hover:text-[#702E42] transition-colors"
                >
                  Campus Dinacharya →
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR STORY SECTION (Expansive Midnight Navy Feature)   */}
      {/* ========================================================= */}
      <section className="editorial-section-py bg-[#0F172A] text-white relative overflow-hidden">
        <div className="editorial-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Story Text Side (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#D5B989]" />
                <span className="typography-eyebrow text-[#F59E0B]">
                  The Founder's Genesis
                </span>
              </div>

              <h2 
                className="typography-section-title !text-white"
                style={{ color: '#FFFFFF' }}
              >
                One Experience. One Vision.{' '}
                <span 
                  className="italic font-bold !text-[#F59E0B]"
                  style={{ color: '#F59E0B' }}
                >
                  A Legacy of Purpose.
                </span>
              </h2>

              <p className="typography-body text-slate-100 font-normal text-lg leading-relaxed">
                In 1990, during an international business voyage, industrialist <strong>Sri Pramod Kamat</strong> encountered an overseas immigration checkpoint that ignited a profound realization: <em>True national strength begins with the unassailable dignity and spiritual grounding of India's daughters.</em>
              </p>

              <blockquote className="border-l-2 border-[#D5B989] pl-6 py-3 my-4 space-y-2">
                <p className="font-serif italic text-lg sm:text-xl text-[#F59E0B] leading-relaxed">
                  "If you educate a daughter in her civilizational roots and moral self-reliance, you illuminate generations to come."
                </p>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  — Sri Pramod Kamat, Founder Trustee
                </p>
              </blockquote>

              <div className="pt-2">
                <Link
                  to="/our-story"
                  className="btn-primary"
                >
                  <span>Read the Complete 7 Chapters</span>
                  <ArrowRight className="w-4 h-4 text-[#D5B989]" />
                </Link>
              </div>
            </div>

            {/* Story Photo Side (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/banner-2.jpg"
                  alt="Founder and Gurukula genesis"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xs text-[#F59E0B] uppercase tracking-widest block">
                    Vyasa Poornima • 22 July 1994
                  </span>
                  <p className="font-serif text-sm text-white">
                    Inaugurated under the sacred presence of Poojya Vishveshwara Teertha Swamiji of Pejawar Matha
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. UNIQUE FEATURES SECTION (Full-Width Asymmetrical Grid) */}
      {/* ========================================================= */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Distinctive Hallmarks"
            title="The Living Pillars of"
            highlight="Maitreyi Gurukula"
            subtitle="Explore the structural foundations that set our residential institution apart from conventional schooling."
          />

          <EditorialPillars />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SANSKRIT WISDOM PAVILION SECTION                       */}
      {/* ========================================================= */}
      <section className="editorial-section-py bg-transparent border-y border-[#D5B989]/25">
        <div className="editorial-container">
          <SanskritWisdomPavilion />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. FIVE KOSHAS HOLISTIC CONSCIOUSNESS SECTION             */}
      {/* ========================================================= */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Vedic Integral Psychology"
            title="Pancha Kosha: The Five Sheaths of"
            highlight="Human Consciousness"
            subtitle="Based on the Taittiriya Upanishad, our pedagogy systematically develops physical vitality, bio-energy, emotional agility, discriminating intellect, and spiritual bliss."
          />

          <FiveKoshasInteractive />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. DAY AT GURUKULA DINACHARYA SECTION                      */}
      {/* ========================================================= */}
      <section className="editorial-section-py bg-transparent border-t border-[#D5B989]/25">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Circadian Discipline"
            title="A Day in the Life of a"
            highlight="Gurukula Student"
            subtitle="Experience the dawn-to-dusk regimen aligning modern educational vigor with natural cosmic rhythms."
          />

          <DayAtGurukula />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. CURATED PHOTOGRAPHIC EXHIBITION                        */}
      {/* ========================================================= */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Visual Chronicle"
            title="Moments of Daily"
            highlight="Ashram Life"
            subtitle="Genuine archival photographs capturing daily prayers, classical dance recitals, Sanskrit debates, and vibrant sisterhood."
          />

          <GalleryLightbox limit={6} />

          <div className="text-center pt-8">
            <Link
              to="/gallery"
              className="btn-primary"
            >
              <span>Explore Complete 9-Category Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#D5B989]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. 12-ACRE CAMPUS EXPLORER                                */}
      {/* ========================================================= */}
      <section className="editorial-section-py bg-transparent border-t border-[#D5B989]/25">
        <div className="editorial-container">
          <CampusTourInteractive />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. SUPPORT OUR MISSION (Expansive Royal Burgundy Banner) */}
      {/* ========================================================= */}
      <section className="editorial-section-py bg-[#702E42] text-white relative overflow-hidden">
        {/* Subtle decorative champagne highlight */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D5B989]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="editorial-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#D5B989]" />
                <span className="typography-eyebrow text-[#D5B989]">
                  Vidya Daan Seva
                </span>
              </div>

              <h2 
                className="typography-section-title !text-white"
                style={{ color: '#FFFFFF' }}
              >
                Help Us Nurture the Next Generation of{' '}
                <span 
                  className="italic font-bold !text-[#F59E0B]"
                  style={{ color: '#F59E0B' }}
                >
                  Women Leaders
                </span>
              </h2>

              <p className="typography-body text-white text-lg leading-relaxed font-normal">
                Because Shubham Karoti charges 100% zero fees to parents, our institution thrives on the direct benevolence of well-wishers and patrons who believe in women's cultural and academic empowerment.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/support-our-mission"
                  className="px-8 py-4 bg-[#D5B989] hover:bg-white text-[#17243B] font-sans font-bold text-sm tracking-wider uppercase shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-[#702E42]" />
                  <span>Sponsor a Student's Education</span>
                </Link>

                <Link
                  to="/contact"
                  className="btn-secondary-light !px-8 !py-4"
                >
                  <span>Schedule a Campus Visit</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/10 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/Shubham-Karoti-016-1024x683.webp"
                  alt="Students dining at Gurukula Annakshetra"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
