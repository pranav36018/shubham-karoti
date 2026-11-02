import React from 'react';
import SectionHeader from '../components/SectionHeader';
import DayAtGurukula from '../components/DayAtGurukula';
import CampusTourInteractive from '../components/CampusTourInteractive';
import GalleryLightbox from '../components/GalleryLightbox';
import { 
  Clock, 
  Heart, 
  CheckCircle2, 
  Sparkles,
  Sun,
  ShieldCheck
} from 'lucide-react';

export default function LifeAtGurukula() {
  return (
    <div className="w-full bg-transparent">
      
      {/* 1. Dramatic Page Hero Banner — Midnight Navy */}
      <section className="relative py-24 sm:py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/banner.jpg"
            alt="Life at Shubham Karoti Gurukula"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-black/60" />
        </div>

        <div className="relative z-10 editorial-container text-center space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D5B989]" />
            <span className="typography-eyebrow text-[#F59E0B]">
              Sanctuary of Peace & Sisterhood
            </span>
            <span className="w-8 h-[1px] bg-[#D5B989]" />
          </div>

          <h1 className="typography-hero text-white tracking-tight">
            Life at Gurukula:<br />
            <span className="italic text-[#F59E0B] font-normal">
              Sacred Discipline & Joy
            </span>
          </h1>

          <p className="typography-subheading text-slate-100 font-normal max-w-2xl mx-auto">
            Experience the harmonious daily rhythm of simplicity, sisterhood, spoken Sanskrit, and sacred self-reliance on our 12-acre natural campus in Ramohalli.
          </p>
        </div>
      </section>

      {/* 2. Editorial Community Pillars (Open Large Photographic Stories - Zero Cards) */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-28 lg:space-y-36">
          
          <SectionHeader
            eyebrow="Ashram Sanctuary"
            title="The Living Pillars of"
            highlight="Gurukula Life"
            subtitle="More than a school, this is a loving spiritual home where traditional values and maternal affection guide every moment."
          />

          {/* Story 1: Maternal Matrushree Mentorship */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/banner-2.jpg"
                  alt="Maternal mentorship at Shubham Karoti"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xs text-[#F59E0B] uppercase tracking-widest block">
                    Matrushree Vatsalya
                  </span>
                  <p className="font-serif text-sm text-white">
                    Resident women mentors living alongside students 24 hours a day
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                Maternal Care
              </span>
              <h3 className="typography-section-title text-[#0F172A]">
                Maternal Matrushree Mentorship & Unconditional Affection
              </h3>
              <p className="text-sm font-sans font-semibold text-[#702E42] tracking-wide">
                ಮಾತೃಶ್ರೀಗಳ ವಾತ್ಸಲ್ಯಪೂರ್ಣ ಪೋಷಣೆ
              </p>
              <p className="typography-body text-[#1E293B]">
                Our resident Matrushrees are accomplished women educators and spiritual seekers who live in the dormitories alongside the girls. They provide constant emotional safety, monitor physical health, braid hair, listen to daily joys and sorrows, and instill moral character with gentle maternal authority.
              </p>
              <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 typography-supporting text-[#1E293B]">
                A genuine home environment where no child ever feels lonely, neglected, or homesick.
              </blockquote>
            </div>
          </div>

          {/* Story 2: Annakshetra - Sattvic Ahara */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                Pure Nutrition
              </span>
              <h3 className="typography-section-title text-[#0F172A]">
                Annakshetra: The Sacred Kitchen of Sattvic Ahara
              </h3>
              <p className="text-sm font-sans font-semibold text-[#702E42] tracking-wide">
                ಪವಿತ್ರ ಸಾತ್ವಿಕ ಅನ್ನಕ್ಷೇತ್ರ
              </p>
              <p className="typography-body text-[#1E293B]">
                In Indian philosophy, <em>Annam Brahma</em>—food is sacred energy. All meals are prepared freshly on-site using organic campus produce, whole grains, pulses, cow's ghee, fresh seasonal vegetables, and traditional herbal decoctions (kashayas). Dining begins with the chanting of the 15th Chapter of the Bhagavad Gita in profound gratitude.
              </p>
              <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 typography-supporting text-[#1E293B]">
                Nourishing pure cognitive clarity, robust physical vitality, and emotional peace.
              </blockquote>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/Shubham-Karoti-016-1024x683.webp"
                  alt="Sattvic dining at Shubham Karoti Gurukula"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xs text-[#F59E0B] uppercase tracking-widest block">
                    Annakshetra
                  </span>
                  <p className="font-serif text-sm text-white">
                    Fresh, wholesome organic dining in communion with nature and Vedic prayers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story 3: Open-Air Tree Learning & Self-Reliance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-y border-[#D5B989]/40">
                <img
                  src="/assets/images/Shubham-Karoti-015-1024x691.webp"
                  alt="Self-reliance and shramadaan at Gurukula"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xs text-[#F59E0B] uppercase tracking-widest block">
                    Shramadaan & Swadhyaya
                  </span>
                  <p className="font-serif text-sm text-white">
                    Fostering lifelong independence, environmental respect, and humility
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#702E42]">
                Self-Reliance
              </span>
              <h3 className="typography-section-title text-[#0F172A]">
                Self-Reliance, Shramadaan & Harmonious Nature
              </h3>
              <p className="text-sm font-sans font-semibold text-[#702E42] tracking-wide">
                ಸ್ವಾವಲಂಬನೆ ಹಾಗೂ ಪ್ರಕೃತಿ ಸಹಬಾಳ್ವೆ
              </p>
              <p className="typography-body text-[#1E293B]">
                True education teaches that no honest labor is beneath human dignity. Students joyfully tend the campus organic garden, clean their dormitories, care for sacred cows, assist in library upkeep, and harvest medicinal plants. This active involvement grounds their intellectual growth in deep practical self-reliance.
              </p>
              <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 typography-supporting text-[#1E293B]">
                Classes conducted under the shade of ancient banyan trees develop natural reverence for creation.
              </blockquote>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Daily Routine (Dinacharya Timeline) */}
      <section className="editorial-section-py bg-transparent border-y border-[#D5B989]/30">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Hour-by-Hour Regimen"
            title="The Daily Dinacharya of a"
            highlight="Gurukula Student"
            subtitle="Follow the structured timeline from morning dawn chanting to evening lights-out."
          />

          <DayAtGurukula />
        </div>
      </section>

      {/* 4. 12-Acre Campus Explorer */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container">
          <CampusTourInteractive />
        </div>
      </section>

      {/* 5. Life at Gurukula Photo Exhibition */}
      <section className="editorial-section-py bg-transparent border-t border-[#D5B989]/30">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Visual Chronicle"
            title="Moments of Daily"
            highlight="Ashram Life"
            subtitle="Curated photographs capturing quiet mornings, joyous meals, outdoor studies, and sisterhood."
          />

          <GalleryLightbox initialCategory="Daily Life" limit={6} />
        </div>
      </section>

    </div>
  );
}
