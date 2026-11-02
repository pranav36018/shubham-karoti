import React from 'react';
import { 
  FOUNDER_CHAPTERS, 
  TRUSTEES, 
  INSTITUTION_INFO 
} from '../data/contentData';
import SectionHeader from '../components/SectionHeader';
import { 
  Sparkles, 
  Clock, 
  BookOpen, 
  Heart, 
  Users, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function OurStory() {
  return (
    <div className="w-full bg-transparent">
      
      {/* 1. Dramatic Editorial Page Hero — Midnight Navy */}
      <section className="relative py-24 sm:py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/banner.jpg"
            alt="Gurukula Founding History"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-black/60" />
        </div>

        <div className="relative z-10 editorial-container text-center space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D5B989]" />
            <span className="typography-eyebrow text-[#F59E0B]">
              Chronicle of a Living Sanctuary
            </span>
            <span className="w-8 h-[1px] bg-[#D5B989]" />
          </div>

          <h1 className="typography-hero text-white tracking-tight">
            One Experience. One Vision.<br />
            <span className="italic text-[#F59E0B] font-normal">
              A Legacy of Purpose.
            </span>
          </h1>

          <p className="typography-subheading text-slate-100 font-normal max-w-2xl mx-auto">
            How an unexpected encounter at an overseas immigration checkpoint transformed into a 30-year sacred commitment to empower the daughters of Bharat with dignity, Sanskrit fluency, and boundless self-reliance.
          </p>
        </div>
      </section>

      {/* 2. Seven Visual Chapters (Alternating Editorial Magazine Spreads - Zero Box Containers) */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-28 lg:space-y-36">
          
          <SectionHeader
            eyebrow="The Seven Chapters"
            title="A Journey That Redefined"
            highlight="Girls' Education"
            subtitle="Follow the pivotal moments, personal sacrifices, and divine blessings that brought Maitreyi Gurukula to life."
          />

          {FOUNDER_CHAPTERS.map((ch, index) => {
            const isEven = index % 2 === 1;
            return (
              <div 
                key={ch.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Photo Side (6 cols) - Open & Borderless with hairlines */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} relative`}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                    <img
                      src={ch.image}
                      alt={ch.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                      loading="eager"
                      onError={(e) => {
                        e.target.src = '/assets/images/banner.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                      <span className="font-serif text-xs uppercase tracking-widest text-[#F59E0B]">
                        {ch.period}
                      </span>
                      <span className="text-xs font-mono px-3 py-1 bg-[#0F172A]/80 border border-[#D5B989]/40 text-white">
                        Chapter 0{ch.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Side (6 cols) - Open Editorial Narrative */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-5`}>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#702E42]">
                      0{ch.id}
                    </span>
                    <div className="h-[1px] w-12 bg-[#D5B989]" />
                    <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#702E42]">
                      {ch.period}
                    </span>
                  </div>

                  <h3 className="typography-section-title text-[#090D16] font-black">
                    {ch.title}
                  </h3>

                  <p className="text-sm font-sans font-semibold text-[#702E42] tracking-wide">
                    ಕನ್ನಡ: {ch.titleKn}
                  </p>

                  <p className="typography-body text-[#1E293B]">
                    {ch.narrative}
                  </p>

                  {/* Editorial Pull Quote / Key Takeaway (Open Blockquote) */}
                  <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 my-4 space-y-1">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#702E42]">
                      Historical Significance
                    </p>
                    <p className="text-base font-serif italic text-[#1E293B] leading-relaxed">
                      "{ch.takeaway}"
                    </p>
                  </blockquote>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 3. Three Decades of Milestones (Open Timeline Broadsheet - Zero Cards) */}
      <section className="editorial-section-py bg-transparent border-y border-[#D5B989]/30">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Historical Legacy"
            title="Three Decades of"
            highlight="Unbroken Seva"
            subtitle="Key milestones that established Shubham Karoti as a pioneer of residential girls' Gurukula education."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#D5B989]/30">
            <div className="space-y-3 pt-6 md:pt-0 md:pr-8">
              <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
                Phase 01 • 1970s - 1990
              </span>
              <h4 className="typography-card-title text-[#0F172A]">
                Industrial Roots & Overseas Vision
              </h4>
              <p className="typography-supporting text-[#1E293B]">
                Ramdas & Pramod Kamat build an export enterprise of ~3,000 workers. An international travel encounter inspires redirecting family resources into girls' education.
              </p>
            </div>

            <div className="space-y-3 pt-6 md:pt-0 md:px-8">
              <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
                Phase 02 • 22 July 1994
              </span>
              <h4 className="typography-card-title text-[#0F172A]">
                Pejawar Swamiji Inauguration
              </h4>
              <p className="typography-supporting text-[#1E293B]">
                Inaugurated on Vyasa Poornima by Poojya Vishveshwara Teertha Swamiji of Pejawar Matha on 12 acres donated by late Smt. Radhabai R. Kamat in Ramohalli.
              </p>
            </div>

            <div className="space-y-3 pt-6 md:pt-0 md:px-8">
              <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
                Phase 03 • 2000 - 2014
              </span>
              <h4 className="typography-card-title text-[#0F172A]">
                First Graduating Batches
              </h4>
              <p className="typography-supporting text-[#1E293B]">
                The inaugural 6-year cohort graduates with top State Board and Sanskrit University ranks. Pedagogy guided by educational stalwarts Sri Suresh & Prakash Kulkarni.
              </p>
            </div>

            <div className="space-y-3 pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
                Phase 04 • 2014 - Present
              </span>
              <h4 className="typography-card-title text-[#0F172A]">
                Full-Time Seva & Alumni Trust
              </h4>
              <p className="typography-supporting text-[#1E293B]">
                Sri Pramod Kamat retires from commercial enterprise to serve full-time. Formation of Shubha Dayini Alumni Trust with over 300 successful women leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Founding Family & Trustees (Distinguished Portrait Gallery - Zero Cards) */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Guardians of the Vow"
            title="The Founding Family &"
            highlight="Board of Trustees"
            subtitle="The registered family trust and devoted trustees whose continuous stewardship sustains 100% free education."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {TRUSTEES.map((trustee, i) => (
              <div 
                key={i}
                className="space-y-4 flex flex-col justify-between"
              >
                {/* Clean, Rectangular Portrait with Hairline Border */}
                <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    loading="eager"
                    onError={(e) => {
                      e.target.src = '/assets/images/placeholder-225x300-1.webp';
                    }}
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
                    {trustee.role}
                  </span>
                  <h3 className="typography-card-title text-[#090D16] font-bold">
                    {trustee.name}
                  </h3>
                  <p className="typography-supporting text-[#1E293B] pt-1">
                    {trustee.bio}
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
