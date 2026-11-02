import React from 'react';

export default function CulturalDivider({ className = "", light = false }) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <div className={`h-[1px] w-16 sm:w-28 ${light ? 'bg-[#DFCA95]/40' : 'bg-[#B99858]/40'}`} />
      <div className="mx-3 flex items-center space-x-1.5 text-[#B99858]">
        <span className="text-xs">✦</span>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C12 2 9 6.5 9 10C9 13 12 15 12 15C12 15 15 13 15 10C15 6.5 12 2 12 2Z" opacity="0.9" />
          <path d="M7 11C7 11 4.5 13 4.5 15.5C4.5 17.5 6.5 19 8.5 19C10.5 19 12 17.5 12 17.5C12 17.5 9.5 16 9 13.5C8.7 12 7 11 7 11Z" opacity="0.7" />
          <path d="M17 11C17 11 19.5 13 19.5 15.5C19.5 17.5 17.5 19 15.5 19C13.5 19 12 17.5 12 17.5C12 17.5 14.5 16 15 13.5C15.3 12 17 11 17 11Z" opacity="0.7" />
          <circle cx="12" cy="19.5" r="1.5" />
        </svg>
        <span className="text-xs">✦</span>
      </div>
      <div className={`h-[1px] w-16 sm:w-28 ${light ? 'bg-[#DFCA95]/40' : 'bg-[#B99858]/40'}`} />
    </div>
  );
}
