import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Check, BookOpen, Music, Award, Heart } from 'lucide-react';

export default function EditorialPillars() {
  return (
    <div className="space-y-16 lg:space-y-20">
      
      {/* Top Tier: Open Editorial Widescreen Feature Spread (No Box Shapes) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Feature 1: Completely Free Education (Open Editorial Media & Text) */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
            <img
              src="/assets/images/banner.jpg"
              alt="Completely Free Education at Shubham Karoti Gurukula"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              loading="eager"
              onError={(e) => {
                e.target.src = '/assets/images/banner.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17243B]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <span className="font-serif text-sm tracking-wide text-[#D5B989]">
                100% Free Residential Seva (6th to 2nd PUC)
              </span>
              <span className="text-xs font-mono px-3 py-1 bg-[#702E42] text-white">
                Inviolable Founding Vow
              </span>
            </div>
          </div>
        </div>

        {/* Feature 1 Text: Open, Breathing, Unboxed Typography */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-4xl font-extrabold text-[#702E42]">01</span>
            <span className="h-[1px] w-12 bg-[#D5B989]" />
            <span className="typography-eyebrow text-[#702E42]">
              Unconditional Seva
            </span>
          </div>

          <h3 className="typography-secondary-heading text-[#090D16] font-black">
            Completely Free Education Without Financial Barriers
          </h3>

          <p className="typography-body text-[#252A33]">
            For over three continuous decades, Shubham Karoti Gurukula has stood by an inviolable principle: <strong>Zero tuition, zero boarding fees, zero charges for food, clothing, books or medical care.</strong> Every girl—primarily from rural Karnataka and humble backgrounds—receives six complete years of loving residential mentorship.
          </p>

          <div className="pt-4 border-t border-[#D5B989]/30 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-sans text-[#1E293B] font-medium">
              <Check className="w-4 h-4 text-[#702E42]" />
              <span>Sustained by Family Trust & Generous Donors</span>
            </div>

            <Link
              to="/our-story"
              className="inline-flex items-center gap-2 text-sm font-sans font-bold text-[#702E42] hover:text-[#17243B] transition-colors group cursor-pointer"
            >
              <span>Read the Founder's Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D5B989]" />
            </Link>
          </div>
        </div>

      </div>

      {/* Feature 2: Sanskrit as a Spoken Mother Tongue (Expansive Midnight Navy Band) */}
      <div className="py-12 px-8 sm:px-12 lg:px-16 bg-[#17243B] text-white border-l-4 border-[#702E42] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-4xl font-extrabold text-[#D5B989]">02</span>
              <span className="h-[1px] w-12 bg-[#D5B989]" />
              <span className="typography-eyebrow text-[#D5B989]">
                Living Linguistic Heritage
              </span>
            </div>

            <h3 className="typography-secondary-heading text-white">
              Sanskrit as a Living, Spoken Mother Tongue
            </h3>

            <p className="typography-body text-slate-100 font-normal max-w-3xl">
              Unlike ordinary schools where Sanskrit is treated as a dead examination subject, here it is the natural spoken language of the dining hall, dormitories, and playground. Students commit <strong>3,978 Sutras of Panini's Ashtadhyayi</strong> and <strong>2,989 verses of Amarakosha</strong> to permanent memory, unlocking extraordinary neural agility.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 border-t lg:border-t-0 lg:border-l border-[#D5B989]/25 pt-6 lg:pt-0 lg:pl-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D5B989] block font-bold">
              Cognitive Mastery
            </span>
            <p className="font-serif italic text-base text-slate-100 leading-relaxed">
              "When sound, grammar, and memory harmonize, the student's intellect becomes razor-sharp and emotionally centered."
            </p>
            <Link
              to="/education-activities"
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#D5B989] hover:text-white transition-colors"
            >
              <span>Explore Sanskrit Canon</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D5B989]" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Tier: 3 Open Columns Separated by Hairline Dividers (No Box Shapes) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pt-6">
        
        {/* Feature 03: Traditional Indian Arts */}
        <div className="space-y-4 md:border-r md:border-[#D5B989]/30 md:pr-10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl font-extrabold text-[#702E42]">03</span>
              <span className="h-[1px] w-8 bg-[#D5B989]" />
              <span className="typography-eyebrow text-[#702E42]">
                Living Arts
              </span>
            </div>

            <h4 className="typography-card-title text-[#090D16] font-bold">
              Traditional Indian Arts & Harikatha
            </h4>

            <p className="typography-body text-[#1E293B] text-base leading-relaxed">
              Daily rigorous training in classical <strong>Bharatanatyam</strong>, Carnatic vocal singing, Harikatha philosophical storytelling, and <strong>Gandhari Vidya</strong> concentration disciplines.
            </p>
          </div>

          <div className="pt-4 border-t border-[#D5B989]/20">
            <Link to="/education-activities" className="text-xs font-sans font-bold text-[#702E42] hover:text-[#17243B] flex items-center gap-1.5">
              <span>View Arts Programs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D5B989]" />
            </Link>
          </div>
        </div>

        {/* Feature 04: Three Examination System */}
        <div className="space-y-4 md:border-r md:border-[#D5B989]/30 md:pr-10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl font-extrabold text-[#702E42]">04</span>
              <span className="h-[1px] w-8 bg-[#D5B989]" />
              <span className="typography-eyebrow text-[#702E42]">
                Triple Validation
              </span>
            </div>

            <h4 className="typography-card-title text-[#090D16] font-bold">
              The Three Examination System
            </h4>

            <p className="typography-body text-[#1E293B] text-base leading-relaxed">
              Students achieve simultaneous credentials across the <strong>Karnataka State Board</strong> (SSLC/PUC), <strong>Karnataka Sanskrit University</strong> (Sahitya), and the Gurukula's internal moral certification.
            </p>
          </div>

          <div className="pt-4 border-t border-[#D5B989]/20">
            <Link to="/education-activities" className="text-xs font-sans font-bold text-[#702E42] hover:text-[#17243B] flex items-center gap-1.5">
              <span>Academic Validation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D5B989]" />
            </Link>
          </div>
        </div>

        {/* Feature 05: Holistic Development */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl font-extrabold text-[#702E42]">05</span>
              <span className="h-[1px] w-8 bg-[#D5B989]" />
              <span className="typography-eyebrow text-[#702E42]">
                Integral Growth
              </span>
            </div>

            <h4 className="typography-card-title text-[#090D16] font-bold">
              Pancha Kosha Holistic Development
            </h4>

            <p className="typography-body text-[#1E293B] text-base leading-relaxed">
              Rooted in the Taittiriya Upanishad, nurturing physical endurance, vital prana, emotion, intellect, and spiritual peace through organic food, yoga, and quiet contemplation.
            </p>
          </div>

          <div className="pt-4 border-t border-[#D5B989]/20">
            <Link to="/our-philosophy" className="text-xs font-sans font-bold text-[#702E42] hover:text-[#17243B] flex items-center gap-1.5">
              <span>Explore Five Koshas</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D5B989]" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
