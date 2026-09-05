import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';
  
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Royal Emblem Icon incorporating Forest Green, Blue & Gold */}
      <div className={`relative rounded-full bg-gradient-to-br from-[#132E22] via-[#1C1C1C] to-[#1E3A8A] p-0.5 shadow-md border border-[#D4AF37]/70 flex items-center justify-center shrink-0 ${dimensions}`}>
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] opacity-25 [background-size:6px_6px]"></div>
        <div className="relative z-10 flex items-center justify-center text-[#D4AF37]">
          {/* Phoenix / Falcon Majestic Symbol SVG */}
          <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 fill-current" xmlns="http://www.w3.org/2000/svg">
            {/* Orbital Rings with Gold & Blue accents */}
            <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(-30 50 50)" fill="none" stroke="#D4AF37" strokeWidth="2.5" opacity="0.9"/>
            <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(30 50 50)" fill="none" stroke="#60A5FA" strokeWidth="2.5" opacity="0.8"/>
            
            {/* Majestic Bird / Phoenix */}
            <path d="M35 70 C35 70, 25 50, 30 35 C33 25, 42 18, 55 15 C55 15, 62 25, 60 32 C58 40, 50 48, 50 48 C50 48, 65 42, 72 38 C75 36, 78 38, 76 42 C70 52, 55 68, 55 68 C55 68, 68 62, 75 58 C78 56, 82 60, 78 64 C65 76, 50 82, 45 85 C40 88, 35 70, 35 70 Z" fill="url(#goldGrad)" />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F3E5AB" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8B5A2B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Text - Smaller Font as requested */}
      <div>
        <span className="font-amiri text-sm sm:text-base font-bold tracking-wide text-[#1C1C1C] block leading-tight">
          قَتَبَان وَذِي رَيْدَان
        </span>
        <span className="block text-[9px] sm:text-[10px] tracking-widest text-[#132E22] uppercase font-bold">
          Kataban & Dhu Raydan
        </span>
      </div>
    </div>
  );
};
