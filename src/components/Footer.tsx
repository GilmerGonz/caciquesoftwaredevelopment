import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-8 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col">
          <span className="font-headline font-black text-xl text-[#FFFFFF] tracking-tight uppercase">
            CACIQUE
          </span>
          <span className="font-body text-[10px] tracking-[0.2em] text-[#aaaaaa] uppercase">
            SOFTWARE DEVELOPMENT
          </span>
        </div>

        <span className="font-body font-light text-sm text-[#555555] text-center md:text-right">
          2025 Cacique Software Development. Venezuela.
        </span>
      </div>
    </footer>
  );
};
