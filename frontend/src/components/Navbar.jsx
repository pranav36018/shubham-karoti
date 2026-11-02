import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Heart, 
  Sparkles, 
  Languages, 
  Lock,
  UserCheck
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/our-story', label: t.nav.story },
    { path: '/our-philosophy', label: t.nav.philosophy },
    { path: '/education-activities', label: t.nav.education },
    { path: '/life-at-gurukula', label: t.nav.life },
    { path: '/child-journey', label: t.nav.journey },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/support-our-mission', label: t.nav.support },
    { path: '/contact', label: t.nav.contact },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar — Midnight Navy (Prominent, High-Contrast Scale) */}
      <div className="bg-[#0F172A] text-white border-b border-[#D5B989]/30 py-2.5 sm:py-3 px-4 sm:px-8">
        <div className="editorial-container flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-5 sm:space-x-8 text-white">
            <a 
              href="tel:+919845403290" 
              className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span className="font-extrabold text-sm sm:text-base tracking-wide text-white">+91 9845403290</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-2 text-xs sm:text-sm text-slate-100 font-medium">
              <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
              Ramohalli, near Big Banyan Tree, Bengaluru
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#80142C] text-white text-xs sm:text-sm font-bold border border-[#D5B989]/50 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" /> 100% Free Residential Education
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 ml-auto">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 hover:bg-[#F59E0B] text-white hover:text-[#0F172A] text-xs sm:text-sm font-bold tracking-wide transition-all border border-[#D5B989]/50 cursor-pointer shadow-sm"
              title="Switch language between English and Kannada"
            >
              <Languages className="w-4 h-4 text-[#F59E0B]" />
              <span>{lang === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>

            {/* Portal Login / Dashboard Button */}
            {isAuthenticated ? (
              <Link
                to="/portal"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B] text-[#0F172A] text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-colors shadow-md"
              >
                <UserCheck className="w-4 h-4 text-[#0F172A]" />
                <span>Portal ({user?.name?.split(' ')[0] || 'Staff'})</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#80142C] hover:bg-[#600e21] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors border border-[#F59E0B]/50 shadow-md"
                title="Institutional Management & Teacher Portal"
              >
                <Lock className="w-4 h-4 text-[#F59E0B]" />
                <span>Portal Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — Warm Porcelain */}
      <nav className={`w-full bg-[#FAF9F6]/98 backdrop-blur-md transition-all duration-300 border-b ${
        isScrolled ? 'shadow-md border-[#D5B989]/40 py-3' : 'border-[#D5B989]/25 py-4'
      }`}>
        <div className="editorial-container flex items-center justify-between">
          {/* Logo & Brand Identity (Prominent, Grand Typography) */}
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#17243B] p-1.5 border-2 border-[#D5B989] shadow-md flex items-center justify-center shrink-0">
              <img 
                src="/assets/images/shubam-karoti-maitreyi-gurukula.png" 
                alt="Shubham Karoti Gurukula Emblem" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-[#D5B989] font-serif font-bold text-xl">
                ॐ
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-[2rem] font-serif font-extrabold tracking-tight text-[#0F172A] group-hover:text-[#702E42] transition-colors leading-none">
                SHUBHAM KAROTI
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold tracking-[0.22em] text-[#702E42] uppercase mt-1 leading-tight">
                MAITREYI GURUKULA
              </span>
              <span className="text-[11px] text-[#475569] font-serif italic hidden sm:block mt-0.5">
                शुभं करोति कल्याणम् • Estd. 1994
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (DM Sans, 15px, tracking-wide) */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg typography-nav transition-all relative ${
                    active 
                      ? 'text-[#702E42] font-bold' 
                      : 'text-[#252A33]/85 font-medium hover:text-[#702E42] hover:bg-[#702E42]/5'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#702E42] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/support-our-mission"
              className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-xs uppercase tracking-wider"
            >
              <Heart className="w-3.5 h-3.5 text-[#D5B989]" />
              <span>{t.nav.donateBtn}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#17243B] hover:bg-[#17243B]/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#17243B]" />
              ) : (
                <Menu className="w-6 h-6 text-[#17243B]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[110px] bg-[#17243B]/60 backdrop-blur-sm z-40 animate-fade-in">
          <div className="bg-[#FAF9F6] border-b border-[#D5B989]/30 max-h-[calc(100vh-110px)] overflow-y-auto px-6 py-6 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-3 px-4 rounded-xl text-base font-sans transition-all ${
                      active 
                        ? 'bg-[#17243B] text-[#D5B989] font-bold' 
                        : 'text-[#252A33] font-medium hover:bg-[#E9DADD]/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-[#D5B989]/20">
                <Link
                  to="/support-our-mission"
                  className="w-full py-3.5 rounded-xl bg-[#702E42] text-white text-xs font-sans font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <Heart className="w-4 h-4 text-[#D5B989]" />
                  <span>{t.nav.donateBtn}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
