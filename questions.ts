import React from 'react';

export const DongSonPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-5 z-0 overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dongson" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            {/* Simple representation of a bronze drum pattern */}
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="20" fill="none" stroke="currentColor" strokeWidth="5" />
            
            {/* Geometric star in center */}
            <path d="M200 160 L210 190 L240 190 L215 210 L225 240 L200 220 L175 240 L185 210 L160 190 L190 190 Z" fill="currentColor" />
            
            {/* Outer birds (simplified) */}
            <path d="M100 100 Q120 80 140 100" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M300 100 Q320 80 340 100" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M100 300 Q120 320 140 300" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M300 300 Q320 320 340 300" fill="none" stroke="currentColor" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dongson)" />
      </svg>
    </div>
  );
};
