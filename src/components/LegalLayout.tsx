import React from 'react';

interface LegalLayoutProps {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, updatedAt, children }) => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0a0a0a]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-16 md:py-24">
        <a
          href="/"
          className="font-body text-[13px] font-bold uppercase tracking-wider text-[#555555] hover:text-[#0a0a0a] transition-colors inline-flex items-center gap-1.5 mb-10"
        >
          ← Volver al inicio
        </a>

        <span className="badge mb-4 inline-block">DOCUMENTO LEGAL</span>
        <h1 className="font-headline font-black text-[clamp(32px,5vw,52px)] uppercase leading-tight mb-2">
          {title}
        </h1>
        <p className="font-body text-sm text-[#555555] mb-10">
          Última actualización: {updatedAt}
        </p>

        <div className="font-body text-[15px] leading-relaxed text-[#333333] space-y-6 [&_h2]:font-headline [&_h2]:font-bold [&_h2]:text-xl [&_h2]:uppercase [&_h2]:text-[#0a0a0a] [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:underline [&_a]:text-[#0a0a0a] [&_strong]:text-[#0a0a0a]">
          {children}
        </div>
      </div>
    </div>
  );
};
