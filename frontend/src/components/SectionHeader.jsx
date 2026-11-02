import React from 'react';

export default function SectionHeader({
  badge,
  eyebrow,
  title,
  highlight,
  titleAfter = "",
  subtitle,
  centered = true,
  light = false,
  className = ""
}) {
  const labelText = eyebrow || badge;

  return (
    <div className={`mb-12 lg:mb-16 ${centered ? 'text-center mx-auto' : 'text-left'} max-w-4xl 2xl:max-w-5xl ${className}`}>
      {/* 1. Small Uppercase Eyebrow Label with bolder hairline accents */}
      {labelText && (
        <div className={`inline-flex items-center gap-3 mb-3.5 ${centered ? 'justify-center' : 'justify-start'}`}>
          <span className={`w-8 h-[1.5px] ${light ? 'bg-[#F59E0B]' : 'bg-[#991B1B]'}`} />
          <span className={`typography-eyebrow font-extrabold ${
            light ? 'text-[#F59E0B]' : 'text-[#991B1B]'
          }`}>
            {labelText}
          </span>
          <span className={`w-8 h-[1.5px] ${light ? 'bg-[#F59E0B]' : 'bg-[#991B1B]'}`} />
        </div>
      )}
      
      {/* 2. Prominent Section Heading (Grand & Authoritative) with Selective Highlighting */}
      <h2 className={`typography-section-title mb-4 font-black ${
        light ? 'text-white' : 'text-[#090D16]'
      }`}>
        {title}
        {highlight && (
          <>
            {' '}
            <span className={`italic font-bold ${
              light 
                ? 'text-[#F59E0B]' 
                : 'text-[#881337]'
            }`}>
              {highlight}
            </span>
          </>
        )}
        {titleAfter && ` ${titleAfter}`}
      </h2>
      
      {/* 3. Balanced, Comfortable Description (DM Sans) */}
      {subtitle && (
        <p className={`typography-body font-normal ${
          light ? 'text-white' : 'text-[#1E293B]'
        } ${centered ? 'max-w-3xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      {/* 4. Elegant Champagne Ornamental Accent Line */}
      <div className={`mt-5 h-[1.5px] w-24 rounded-full ${
        light 
          ? 'bg-gradient-to-r from-transparent via-[#D5B989] to-transparent' 
          : 'bg-gradient-to-r from-transparent via-[#D5B989] to-transparent'
      } ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
