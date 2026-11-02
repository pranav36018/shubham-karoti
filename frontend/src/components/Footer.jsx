import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/contentData';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17243B] text-[#FAF9F6] border-t-2 border-[#D5B989]/40 relative overflow-hidden">
      {/* Decorative top gold/champagne gradient */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D5B989] to-transparent" />

      {/* Main Footer Container */}
      <div className="editorial-container pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 mb-14">
          
          {/* Column 1: Brand & Sanskrit Shloka (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#17243B] p-2 border-2 border-[#D5B989] flex items-center justify-center shrink-0 shadow-xl">
                <img 
                  src="/assets/images/shubam-karoti-maitreyi-gurukula.png" 
                  alt="Shubham Karoti Gurukula" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
                  SHUBHAM KAROTI
                </h3>
                <p className="text-sm sm:text-base text-[#F59E0B] font-sans font-bold tracking-[0.25em] uppercase mt-1.5 leading-tight">
                  MAITREYI GURUKULA
                </p>
                <p className="text-xs text-slate-300 font-serif italic mt-1">
                  Estd. 1994 • Ramohalli, Bengaluru • 100% Free Residential Education
                </p>
              </div>
            </div>

            {/* Sacred Shloka Manifesto Excerpt (Unboxed, Authentic Gold Border Left) */}
            <div className="border-l-2 border-[#D5B989] pl-5 py-2 space-y-2">
              <p className="font-serif text-[#F59E0B] text-base leading-relaxed italic font-medium">
                शुभं करोति कल्याणम् आरोग्यं धनसंपदः ।<br />
                शत्रुबुद्धि-विनाशाय दीपज्योतिर्नमोऽस्तु ते ॥
              </p>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                "Salutations to the Divine Light that bestows auspiciousness, health, and dispels the darkness of ignorance."
              </p>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-sans">
              Founded on Vyasa Poornima in 1994 under the sacred blessings of Pejawar Matha seers, Shubham Karoti Maitreyi Gurukula provides 100% free residential education for girls from 6th standard through 2nd PUC.
            </p>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-serif font-bold text-[#D5B989] tracking-[0.2em] uppercase border-b border-[#D5B989]/20 pb-3">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link to="/" className="text-[#FAF9F6]/80 hover:text-[#D5B989] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-[#FAF9F6]/80 hover:text-[#D5B989] transition-colors">
                  {t.nav.story} <span className="text-xs text-[#FAF9F6]/50">(Founder's Vision)</span>
                </Link>
              </li>
              <li>
                <Link to="/our-philosophy" className="text-[#FAF9F6]/80 hover:text-[#D5B989] transition-colors">
                  {t.nav.philosophy} <span className="text-xs text-[#FAF9F6]/50">(Five Koshas)</span>
                </Link>
              </li>
              <li>
                <Link to="/education-activities" className="text-[#FAF9F6]/80 hover:text-[#D5B989] transition-colors">
                  {t.nav.education} <span className="text-xs text-[#FAF9F6]/50">(3 Examinations)</span>
                </Link>
              </li>
              <li>
                <Link to="/life-at-gurukula" className="text-[#FAF9F6]/80 hover:text-[#D5B989] transition-colors">
                  {t.nav.life} <span className="text-xs text-[#FAF9F6]/50">(Ashram Dinacharya)</span>
                </Link>
              </li>
              <li>
                <Link to="/child-journey" className="text-[#FAF9F6]/80 hover:text-[#D5B989] transition-colors">
                  {t.nav.journey} <span className="text-xs text-[#FAF9F6]/50">(6 Ganas Progression)</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#FAF9F6]/80 hover:text-[#D5B989] transition-colors">
                  {t.nav.gallery} <span className="text-xs text-[#FAF9F6]/50">(Curated Exhibition)</span>
                </Link>
              </li>
              <li>
                <Link to="/support-our-mission" className="text-[#D5B989] font-semibold hover:text-white transition-colors">
                  {t.nav.support} <span className="text-xs text-[#D5B989]/70">(Seva Calculator)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-serif font-bold text-[#D5B989] tracking-[0.2em] uppercase border-b border-[#D5B989]/20 pb-3">
              {t.footer.contactUs}
            </h4>
            
            <div className="space-y-4 typography-supporting text-[#FAF9F6]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D5B989] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Campus Address:</strong>
                  No 52/1, Big Banyan Tree Road, Ramohalli, Kengeri Hobli, Bengaluru 560074, Karnataka
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D5B989] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Administrative Office:</strong>
                  No. 37, 1st Main, Ramachandrapuram, Bengaluru 560021, Karnataka
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D5B989] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Official Contact Lines:</strong>
                  <a href="tel:+919845403290" className="hover:text-[#D5B989] block font-mono text-xs">+91 9845403290 (Sri Pramod Kamat)</a>
                  <a href="tel:+916362133847" className="hover:text-[#D5B989] block font-mono text-xs">+91 6362133847 (Gurukula Office)</a>
                  <a href="tel:+919900216373" className="hover:text-[#D5B989] block font-mono text-xs">+91 9900216373 (Sri Venugopal)</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D5B989] shrink-0" />
                <a 
                  href="mailto:shubhamkarotimaitreyigurukula@gmail.com" 
                  className="hover:text-[#D5B989] text-xs font-mono"
                >
                  shubhamkarotimaitreyigurukula@gmail.com
                </a>
              </div>
            </div>

            {/* Social media links */}
            <div className="pt-2 flex items-center gap-6">
              <a 
                href={INSTITUTION_INFO.socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-semibold text-[#D5B989] hover:text-white border-b border-[#D5B989]/50 pb-0.5 flex items-center gap-1.5 transition-colors"
              >
                <span>Facebook Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href={INSTITUTION_INFO.socials.youtube} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-semibold text-[#D5B989] hover:text-white border-b border-[#D5B989]/50 pb-0.5 flex items-center gap-1.5 transition-colors"
              >
                <span>YouTube Channel</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="border-t border-[#D5B989]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/60 font-light">
          <div className="text-center md:text-left">
            <span>© 1994 - {new Date().getFullYear()} {INSTITUTION_INFO.name}. Managed by Registered Family Trust.</span>
          </div>

          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-[#D5B989] transition-colors">
              Admissions
            </Link>
            <span>•</span>
            <Link to="/support-our-mission" className="hover:text-[#D5B989] transition-colors">
              Support Our Mission
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#D5B989] hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
