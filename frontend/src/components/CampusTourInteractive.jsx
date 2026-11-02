import React, { useState } from 'react';
import { CAMPUS_LOCATIONS } from '../data/contentData';
import { MapPin, Sparkles, Compass, Check, ArrowRight } from 'lucide-react';

export default function CampusTourInteractive() {
  const [activeLocationId, setActiveLocationId] = useState(CAMPUS_LOCATIONS[0].id);

  const selectedLoc = CAMPUS_LOCATIONS.find(loc => loc.id === activeLocationId) || CAMPUS_LOCATIONS[0];

  return (
    <div className="w-full bg-[#17243B] text-[#FAF9F6] py-16 px-6 sm:px-12 lg:px-16 border-t-2 border-b-2 border-[#D5B989]/30 relative overflow-hidden select-none">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#702E42]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header (Open Editorial) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D5B989]/30 pb-8 mb-12">
        <div>
          <span className="inline-flex items-center gap-2 typography-eyebrow text-[#D5B989] mb-2">
            <Compass className="w-4 h-4 text-[#D5B989]" /> 12-Acre Serene Sanctuary
          </span>
          <h3 className="typography-section-title text-white">
            Explore the 12-Acre Gurukula Campus
          </h3>
          <p className="typography-supporting text-[#FAF9F6]/80 mt-1">
            Ramohalli, near Big Banyan Tree (Dodda Alada Mara), Kengeri Hobli, Bengaluru
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-sans text-[#D5B989] border-b border-[#D5B989]/40 pb-1 self-start sm:self-center">
          <MapPin className="w-4 h-4 text-[#D5B989]" />
          <span>Vedic Ashram Ambiance</span>
        </div>
      </div>

      {/* Grid: Left navigation list (5 cols) & Right Panoramic Visual (7 cols) - Zero Box Enclosures */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left: Location selection items (Text list with hairline dividers, no boxes) */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-[#D5B989]/20">
          {CAMPUS_LOCATIONS.map((loc, idx) => {
            const isActive = loc.id === activeLocationId;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`w-full text-left py-4 transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer group ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className={`text-xs font-mono font-bold ${
                    isActive ? 'text-[#F59E0B]' : 'text-[#D5B989]'
                  }`}>
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className={`font-serif text-lg sm:text-xl font-bold leading-tight transition-colors ${
                      isActive ? 'text-white' : 'text-slate-200 hover:text-[#F59E0B]'
                    }`}>
                      {loc.title}
                    </h4>
                    <p className="text-xs text-[#D5B989] font-sans mt-0.5 font-medium">
                      {loc.titleKn}
                    </p>
                  </div>
                </div>

                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Immersive Panoramic Visual & Editorial Narrative (No Box Containers) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
            <img
              src={selectedLoc.image}
              alt={selectedLoc.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              onError={(e) => {
                e.target.src = '/assets/images/banner.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17243B] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D5B989] block mb-1">
                Ramohalli Campus Sanctuary
              </span>
              <h4 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                {selectedLoc.title}
              </h4>
            </div>
          </div>

          <div className="space-y-4">
            <p className="typography-body text-slate-100 text-lg leading-relaxed font-normal">
              {selectedLoc.desc}
            </p>

            <div className="pt-4 border-t border-[#D5B989]/20 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#D5B989]" />
                Pristine Environment for Sacred Learning
              </span>
              <span className="text-[#D5B989] font-mono">12 Acres • Ramohalli, Bengaluru</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
