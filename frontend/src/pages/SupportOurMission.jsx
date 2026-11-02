import React from 'react';
import SectionHeader from '../components/SectionHeader';
import DonationCalculator from '../components/DonationCalculator';
import { INSTITUTION_INFO } from '../data/contentData';
import { 
  Heart, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Building
} from 'lucide-react';

export default function SupportOurMission() {
  const SUPPORT_AREAS = [
    {
      title: "Annadana Seva (Nourishment)",
      titleKn: "ಅನ್ನದಾನ ಸೇವೆ",
      desc: "Providing three wholesome sattvic meals and cow's milk every single day to all residential students, teachers, and campus caretakers.",
      icon: "🍚"
    },
    {
      title: "Vidyadana (Books & Treatises)",
      titleKn: "ವಿದ್ಯಾದಾನ ಹಾಗೂ ಗ್ರಂಥಗಳು",
      desc: "Supplying classical Sanskrit texts (Panini Ashtadhyayi, Amarakosha), state board textbooks, school bags, and stationery kits.",
      icon: "📚"
    },
    {
      title: "Vastra Seva (Clothing & Attire)",
      titleKn: "ವಸ್ತ್ರ ಸೇವೆ",
      desc: "Supplying seasonal traditional Gurukula uniforms, everyday cotton attire, and classical Bharatanatyam dance costumes.",
      icon: "👘"
    },
    {
      title: "Arogya Seva (Health & Wellness)",
      titleKn: "ಆರೋಗ್ಯ ಸೇವೆ",
      desc: "Routine health checkups, Ayurvedic immunity decoctions, emergency medical care, and sanitary requirements.",
      icon: "🌿"
    },
    {
      title: "Cultural & Musical Arts",
      titleKn: "ಸಂಗೀತ ಹಾಗೂ ನೃತ್ಯ ಸೇವೆ",
      desc: "Maintenance of classical Indian instruments (harmonium, mridangam, tanpura), dance ghungroos, and Harikatha performance setups.",
      icon: "🎶"
    },
    {
      title: "Campus Sustenance & Gaushala",
      titleKn: "ಪರಿಸರ ಹಾಗೂ ಗೋಶಾಲೆ ರಕ್ಷಣೆ",
      desc: "Upkeep of the 12-acre lush Ramohalli grounds, medicinal herb cultivation, organic fruit trees, and clean solar facilities.",
      icon: "🌳"
    }
  ];

  return (
    <div className="w-full bg-transparent">
      
      {/* 1. Dramatic Page Hero Banner — Midnight Navy */}
      <section className="relative py-24 sm:py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/banner.jpg"
            alt="Support Gurukula Mission"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-black/60" />
        </div>

        <div className="relative z-10 editorial-container text-center space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D5B989]" />
            <span className="typography-eyebrow text-[#F59E0B]">
              Vidya Daan • Selfless Philanthropy
            </span>
            <span className="w-8 h-[1px] bg-[#D5B989]" />
          </div>

          <h1 className="typography-hero text-white tracking-tight">
            Help Us Nurture the<br />
            <span className="italic text-[#F59E0B] font-normal">
              Next Generation
            </span>
          </h1>

          <p className="typography-subheading text-slate-100 font-normal max-w-2xl mx-auto">
            Every girl deserves access to education, dignity, and a future filled with boundless possibilities. Because Shubham Karoti charges zero fees, your benevolent seva directly sustains food, books, health, and campus infrastructure.
          </p>
        </div>
      </section>

      {/* 2. The 100% Free Model Explanation (Open Editorial Magazine Spread - Zero Cards) */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="typography-eyebrow text-[#702E42]">
                Uncompromised Integrity
              </span>

              <h2 className="typography-section-title text-[#0F172A]">
                An Educational Sanctuary Sustained Entirely Free of Cost
              </h2>

              <p className="typography-body text-[#1E293B]">
                Since its founding in 1994, <strong>Shubham Karoti Maitreyi Gurukula</strong> has stood by an inviolable vow: <em>No child or parent will ever be burdened with educational fees.</em>
              </p>

              <p className="typography-body text-[#1E293B]">
                All operational expenses—food, accommodation, clothing, books, medical care, and three-board examination fees from 6th standard through 2nd PUC—have been faithfully sustained through the founding family's commitment and the generous contributions of like-minded well-wishers who believe in the cultural empowerment of young women.
              </p>

              <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 my-2 space-y-1">
                <span className="typography-eyebrow text-[#702E42] block">
                  Direct Seva Allocation
                </span>
                <p className="typography-supporting text-[#1E293B]">
                  100% of public support is directly deployed for student food grains, learning treatises, healthcare, and residential living. There are zero corporate administrative overheads.
                </p>
              </blockquote>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/Shubham-Karoti-016-1024x683.webp"
                  alt="Students dining at Annakshetra Gurukula"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xs text-[#F59E0B] uppercase tracking-widest block">
                    Annakshetra Seva
                  </span>
                  <p className="font-serif text-sm text-white">
                    Nourishing mind and body with pure, organic sattvic ahara
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Key Areas of Support (Open 3-Column Broadsheet - Zero Cards) */}
      <section className="editorial-section-py bg-transparent border-y border-[#D5B989]/30">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Channels of Giving"
            title="Where Your Support"
            highlight="Flourishes"
            subtitle="Choose a specific dimension of student life to sustain, or offer general sustenance towards our free residential model."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-[#D5B989]/30">
            {SUPPORT_AREAS.map((area, idx) => (
              <div
                key={idx}
                className={`space-y-3 flex flex-col justify-between ${
                  idx % 3 === 0 ? '' : 'pt-6 md:pt-0 md:pl-8'
                }`}
              >
                <div>
                  <div className="text-3xl mb-2">
                    {area.icon}
                  </div>
                  <h3 className="typography-card-title text-[#0F172A] text-xl font-bold">
                    {area.title}
                  </h3>
                  <p className="text-xs font-sans font-semibold text-[#702E42] tracking-wide mt-0.5">
                    {area.titleKn}
                  </p>
                  <p className="typography-supporting text-[#1E293B] pt-2">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Seva Calculator & Trustworthy Enquiry Form */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Transparent Commitment"
            title="Support Enquiry &"
            highlight="Seva Commitment"
            subtitle="Select your preferred seva tier, calculate tangible impact, and submit an enquiry to connect directly with the trustees."
          />

          <DonationCalculator />
        </div>
      </section>

      {/* 5. Institutional Transparency & Verification Note — Royal Burgundy */}
      <section className="py-16 bg-[#702E42] text-white">
        <div className="editorial-container text-center space-y-6 max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#0F172A] border-2 border-[#D5B989] flex items-center justify-center mx-auto text-[#F59E0B] shadow-md">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="typography-section-title text-white">
            Ethical Governance & Direct Trustee Communication
          </h3>
          <p className="typography-body text-white font-normal">
            To ensure complete authenticity and prevent unverified financial transactions, all contributions are confirmed directly with <strong>Sri Pramod Kamat (+91 9845403290)</strong> or our administrative coordinators. Official registered trust receipts are issued for every donation.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-sm text-[#F59E0B] font-mono">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F59E0B]" /> +91 9845403290 / +91 6362133847
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F59E0B]" /> shubhamkarotimaitreyigurukula@gmail.com
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
