import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/contentData';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles,
  Search,
  ArrowRight
} from 'lucide-react';

export default function GalleryLightbox({ initialCategory = 'All', limit = null }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    'All',
    'Campus',
    'Students',
    'Learning',
    'Sanskrit',
    'Cultural Activities',
    'Arts and Skills',
    'Events',
    'Daily Life'
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % displayedItems.length);
    }
  }, [lightboxIndex, displayedItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + displayedItems.length) % displayedItems.length);
    }
  }, [lightboxIndex, displayedItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <div className="w-full space-y-12 select-none">
      
      {/* Category Navigation Bar & Search (shown on full gallery page, NO pill shapes) */}
      {!limit && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#D5B989]/30 pb-6">
          {/* Minimalist Text Navigation Links (No pill boxes) */}
          <div className="flex items-center gap-6 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 text-sm font-sans tracking-wider transition-all duration-300 cursor-pointer relative pb-2 ${
                    isActive
                      ? 'text-[#702E42] font-bold'
                      : 'text-[#687386] hover:text-[#17243B] font-medium'
                  }`}
                >
                  {cat}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#702E42]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Clean hairline search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#702E42] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search photographs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-sans bg-transparent border-b border-[#D5B989] text-[#252A33] placeholder:text-[#687386]/60 focus:outline-none focus:border-[#702E42] transition-colors"
            />
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SHAPE-FREE EDITORIAL EXHIBITION (Zero Box Enclosures)     */}
      {/* Generous 3-Column Grid, Zero Overlapping Text             */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {displayedItems.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer space-y-4 flex flex-col justify-between"
            >
              {/* Clean, Unobstructed Photograph (No overlapping text) */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border border-[#D5B989]/30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/assets/images/banner.jpg';
                  }}
                />

                {/* Ambient dark gradient at base of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent pointer-events-none" />

                {/* Permanent golden enlarge indicator icon */}
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-[#0F172A]/85 text-[#F59E0B] shadow-md border border-[#D5B989]/30">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Clean Editorial Typography BELOW Photograph (Zero Overlapping) */}
              <div className="space-y-2.5 pt-1 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  {/* Category and Index Eyebrow */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-extrabold tracking-widest text-[#881337] uppercase">
                      0{index + 1} • {item.category}
                    </span>
                    <span className="h-[1.5px] w-6 bg-[#D5B989]" />
                  </div>

                  {/* Headline (Grand & Bolder Color) */}
                  <h4 className="font-serif font-black text-2xl sm:text-3xl text-[#090D16] leading-tight group-hover:text-[#881337] transition-colors">
                    {item.title}
                  </h4>

                  {/* Descriptive Narrative (DM Sans, clear, comfortable line height) */}
                  <p className="typography-body text-sm sm:text-base text-[#1E293B] font-normal leading-relaxed pt-1">
                    {item.caption}
                  </p>
                </div>

                {/* Bottom Action Line */}
                <div className="pt-3 border-t border-[#D5B989]/30 flex items-center justify-between text-xs font-sans text-[#702E42] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>Archival Photograph</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#702E42] font-bold">
                    <span>Inspect Fullscreen</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B45309]" />
                  </span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {displayedItems.length === 0 && (
        <div className="text-center py-20 space-y-3">
          <p className="text-xl font-serif font-bold text-[#17243B]">
            No photographs found
          </p>
          <p className="typography-supporting text-[#687386]">
            Try selecting another category or clearing your search query.
          </p>
        </div>
      )}

      {/* ========================================================= */}
      {/* FULLSCREEN LIGHTBOX MODAL (Pure Cinematic Stage)          */}
      {/* ========================================================= */}
      {lightboxIndex !== null && displayedItems[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-[#17243B]/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-6xl w-full flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Close */}
            <div className="flex items-center justify-between px-4 py-3 text-white border-b border-[#D5B989]/25">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D5B989]">
                  {displayedItems[lightboxIndex].category}
                </span>
                <span className="text-xs text-[#FAF9F6]/60 font-mono">
                  {lightboxIndex + 1} of {displayedItems.length}
                </span>
              </div>

              <button 
                onClick={closeLightbox}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label="Close fullscreen view"
              >
                <X className="w-6 h-6 text-[#D5B989]" />
              </button>
            </div>

            {/* Central Image View */}
            <div className="relative flex-1 flex items-center justify-center py-6 min-h-[360px] sm:min-h-[520px]">
              <img 
                src={displayedItems[lightboxIndex].image} 
                alt={displayedItems[lightboxIndex].title}
                className="max-h-[65vh] max-w-full object-contain mx-auto select-none shadow-2xl"
              />

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#17243B]/80 text-[#D5B989] hover:bg-[#702E42] hover:text-white transition-all cursor-pointer border border-[#D5B989]/30 shadow-lg"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#17243B]/80 text-[#D5B989] hover:bg-[#702E42] hover:text-white transition-all cursor-pointer border border-[#D5B989]/30 shadow-lg"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar (Clean, unboxed editorial) */}
            <div className="pt-4 border-t border-[#D5B989]/25 text-[#FAF9F6] space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                {displayedItems[lightboxIndex].title}
              </h3>
              <p className="typography-body text-sm sm:text-base text-[#FAF9F6]/85 font-light max-w-3xl">
                {displayedItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
