import React from 'react';
import SectionHeader from '../components/SectionHeader';
import GalleryLightbox from '../components/GalleryLightbox';
import { Camera, Sparkles } from 'lucide-react';

export default function Gallery() {
  return (
    <div className="w-full bg-transparent">
      
      {/* 1. Page Hero Banner — Midnight Navy */}
      <section className="relative py-24 sm:py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/banner.jpg"
            alt="Gurukula Visual Gallery"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-black/60" />
        </div>

        <div className="relative z-10 editorial-container text-center space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D5B989]" />
            <span className="typography-eyebrow text-[#F59E0B]">
              Curated Photographic Chronicle
            </span>
            <span className="w-8 h-[1px] bg-[#D5B989]" />
          </div>

          <h1 className="typography-hero text-white tracking-tight">
            Moments of<br />
            <span className="italic text-[#F59E0B] font-normal">
              Grace & Wisdom
            </span>
          </h1>

          <p className="typography-subheading text-slate-100 font-normal max-w-2xl mx-auto">
            Witness the sacred atmosphere, classical dance recitals, Sanskrit chanting, and joyful sisterhood of Shubham Karoti Maitreyi Gurukula through genuine photographic archives.
          </p>
        </div>
      </section>

      {/* 2. Main Filterable Exhibition */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container space-y-16">
          <SectionHeader
            eyebrow="Archival Exhibition"
            title="The Living"
            highlight="Visual Tradition"
            subtitle="Explore genuine campus photographs across 9 domains. Click any photograph to inspect high-resolution full screen."
          />

          <GalleryLightbox />
        </div>
      </section>

      {/* 3. Photography Ethics & Authenticity Statement */}
      <section className="py-14 bg-transparent border-t border-[#D5B989]/30">
        <div className="editorial-container text-center space-y-2">
          <p className="typography-supporting text-[#1E293B] font-medium max-w-3xl mx-auto">
            ✦ <strong>Authenticity Commitment:</strong> All photographs displayed across this portal are authentic records of Shubham Karoti Maitreyi Gurukula students, teachers, campus grounds, and commemorative ceremonies. No stock models or AI-generated student faces are used.
          </p>
        </div>
      </section>

    </div>
  );
}
