import React from 'react';

interface TechBrand {
  name: string;
  category: string;
  svg: React.ReactNode;
}

const TECH_BRANDS: TechBrand[] = [
  {
    name: 'Claude AI',
    category: 'LLM & Agentes',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z"/>
      </svg>
    )
  },
  {
    name: 'OpenAI',
    category: 'Inteligencia Artificial',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.04 6.04 0 0 0-6.51-2.9 6.06 6.06 0 0 0-4.83-2.38 6.04 6.04 0 0 0-5.76 4.16 6.04 6.04 0 0 0-4.13 3 6.04 6.04 0 0 0 .74 7.08 5.98 5.98 0 0 0 .52 4.91 6.04 6.04 0 0 0 6.51 2.9 6.06 6.06 0 0 0 4.83 2.38 6.04 6.04 0 0 0 5.76-4.16 6.04 6.04 0 0 0 4.13-3 6.04 6.04 0 0 0-.74-7.08zm-9.33 11.53a4.42 4.42 0 0 1-2.83-1.02l.14-.08 3.51-2.03a.81.81 0 0 0 .41-.71v-4.96l1.48.86v4.08a4.43 4.43 0 0 1-2.71 3.86zm-7.91-3.66a4.43 4.43 0 0 1-.53-2.97l.14.08 3.51 2.03a.81.81 0 0 0 .81 0l4.3-2.48v1.71l-3.53 2.04a4.44 4.44 0 0 1-4.7-.41zm-1.12-8.7a4.43 4.43 0 0 1 2.3-1.95v.17l0 4.05a.81.81 0 0 0 .4.7l4.3 2.48-1.48.86-3.53-2.04a4.44 4.44 0 0 1-1.99-4.27zm12.39 3.03l-4.3-2.48 1.48-.86 3.53 2.04a4.44 4.44 0 0 1 1.99 4.27 4.43 4.43 0 0 1-2.3 1.95v-.17l0-4.05a.81.81 0 0 0-.4-.7zm2.24-2.85l-.14-.08-3.51-2.03a.81.81 0 0 0-.81 0l-4.3 2.48v-1.71l3.53-2.04a4.44 4.44 0 0 1 5.23 3.38zm-10.23-4.52a4.43 4.43 0 0 1 2.83 1.02l-.14.08-3.51 2.03a.81.81 0 0 0-.41.71v4.96l-1.48-.86v-4.08a4.43 4.43 0 0 1 2.71-3.86zm.86 6.34l1.92-1.11 1.92 1.11v2.22l-1.92 1.11-1.92-1.11z"/>
      </svg>
    )
  },
  {
    name: 'Supabase',
    category: 'Backend & DB',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.362 9.354H12V.3a.3.3 0 0 0-.535-.187L.268 14.072a.3.3 0 0 0 .235.488H12v9.143a.3.3 0 0 0 .535.187l11.197-13.959a.3.3 0 0 0-.235-.488z"/>
      </svg>
    )
  },
  {
    name: 'Vercel',
    category: 'Hosting & Edge',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1L24 22H0L12 1z"/>
      </svg>
    )
  },
  {
    name: 'Google Cloud',
    category: 'Infraestructura Cloud',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
      </svg>
    )
  },
  {
    name: 'AWS',
    category: 'Cloud & Servers',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.72 14.12c-.22.18-.54.27-.96.27-.47 0-.85-.14-1.14-.42-.29-.28-.43-.72-.43-1.32V8.43h-2.11v4.42c0 1.1.28 1.93.84 2.49.56.56 1.34.84 2.34.84 1.05 0 1.87-.33 2.46-.99l.1.84h1.9V8.43h-2.11v5.69h.11zm-8.83-2.04c0-.79-.24-1.38-.72-1.77-.48-.39-1.21-.59-2.19-.59h-1.8v4.83h1.9c.92 0 1.62-.2 2.1-.6.48-.41.71-1.03.71-1.87zm-2.11 7.23a13.3 13.3 0 0 1-5.11-1.02c-.32-.15-.41-.34-.27-.58l.45-.73c.12-.2.31-.24.58-.12 1.34.62 2.78.93 4.32.93 1.8 0 3.23-.39 4.29-1.17 1.06-.78 1.59-1.85 1.59-3.21 0-.95-.31-1.7-.93-2.25-.62-.55-1.55-.91-2.79-1.08l-1.31-.18c-1.81-.25-3.12-.72-3.93-1.41-.81-.69-1.22-1.63-1.22-2.82 0-1.45.58-2.58 1.74-3.39C5.46 2.76 7.12 2.35 9.1 2.35c1.47 0 2.85.25 4.14.75.31.13.39.31.25.54l-.45.74c-.12.19-.31.23-.58.11-1.18-.46-2.42-.69-3.72-.69-1.49 0-2.67.33-3.54.99-.87.66-1.3 1.53-1.3 2.61 0 .82.28 1.48.84 1.98.56.5 1.43.83 2.61.99l1.31.18c1.92.26 3.32.76 4.2 1.5.88.74 1.32 1.76 1.32 3.06 0 1.68-.65 2.97-1.95 3.87-1.3 0.9-3.03 1.35-5.19 1.35z"/>
      </svg>
    )
  },
  {
    name: 'Microsoft Azure',
    category: 'Cloud Enterprise',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.05 2h-2.1L2 15.35l3.2 5.15h2.1l7.75-12.5h-2zm2.9 3.5L8.2 18.5h7.6l3.2-5.15h-5.25zM22 22.5H2l3.2-5.15H22V22.5z"/>
      </svg>
    )
  },
  {
    name: 'Firebase',
    category: 'Base de Datos & Auth',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.89 15.67L6.8 2.1a.81.81 0 0 1 1.52-.16l2.3 4.38-6.73 9.35zm16.12.01l-2.44-13.8a.81.81 0 0 0-1.44-.35L3.11 17.81l8.03 4.51a1.72 1.72 0 0 0 1.68 0l7.19-6.64zM12.92 7.82l-2.02-3.85-2.58 12.05 4.6-8.2s0 0 0 0z"/>
      </svg>
    )
  },
  {
    name: 'PostgreSQL',
    category: 'Base de Datos Relacional',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    )
  },
  {
    name: 'Docker',
    category: 'Contenedores',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 11.5h2V14h-2zm-3 0h2V14h-2zm-3 0h2V14H7zm-3 0h2V14H4zm9-3h2v2.5h-2zm-3 0h2v2.5h-2zm-3 0h2v2.5H7zm6-3h2V8h-2zm8.5 7.8c-.4.3-1.1.5-1.9.5-2.2 0-3.6-1.3-3.6-1.3s-1.1.9-2.8.9c-1.4 0-2.4-.6-2.4-.6s-1 .6-2.4.6c-1.3 0-2.1-.5-2.1-.5s-1.1.5-2.5.5c-2.3 0-3.8-1.5-3.8-3.5 0-2.8 2.6-4.9 6.2-4.9h8.8c.8 0 1.5.3 2 .8l1.4 1.5c.3.3.4.8.2 1.2-.2.5-.6.8-1.1.8z"/>
      </svg>
    )
  },
  {
    name: 'Stripe',
    category: 'Pasarelas de Pago',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.98 11.02c0-.58-.45-.82-1.22-.82-.82 0-1.85.29-2.61.71l-.47-1.48c.95-.5 2.14-.8 3.23-.8 2.18 0 3.48 1.05 3.48 2.82 0 2.51-3.42 2.75-3.42 3.86 0 .44.38.7.99.7.94 0 2.18-.42 2.92-.85l.48 1.48c-.96.58-2.32.96-3.55.96-2.24 0-3.53-1.07-3.53-2.8 0-2.6 3.68-2.81 3.68-3.78zM2 2h20v20H2V2z"/>
      </svg>
    )
  },
  {
    name: 'PayPal',
    category: 'Pagos Globales',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.761.761 0 0 1 .752-.642h6.29c2.47 0 4.39.563 5.483 1.603 1.05 1 1.34 2.457.86 4.332-.516 2.016-1.638 3.553-3.336 4.567-1.428.852-3.23 1.285-5.358 1.285H7.721c-.387 0-.715.277-.777.662l-.868 5.813zm12.983-13.62c-.783-.872-2.197-1.32-4.208-1.32H9.378a.642.642 0 0 0-.633.541l-2.48 15.65a.43.43 0 0 0 .425.496h3.805c.387 0 .715-.278.777-.663l.873-5.812c.062-.385.39-.662.777-.662h1.666c3.425 0 6.108-1.391 6.892-5.385.35-1.782.112-3.155-.892-4.145z"/>
      </svg>
    )
  },
  {
    name: 'Shopify',
    category: 'Plataforma E-Commerce',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15.34 3.63a.5.5 0 0 0-.41-.03l-1.34 1.18c-.21-.08-.45-.14-.71-.14h-.23c-.28-.85-1.12-1.44-2.07-1.44-1.22 0-2.2 1-2.2 2.2 0 .09.01.18.03.27l-1.82.8a.5.5 0 0 0-.25.38L5.12 21.6a.5.5 0 0 0 .44.54h12.88a.5.5 0 0 0 .49-.44l1.2-17.5a.5.5 0 0 0-.3-.5l-4.49-.57zm-5.18-.21c.62 0 1.13.51 1.13 1.13 0 .18-.04.35-.12.5l-1.84.81a1.14 1.14 0 0 1 .83-2.44zM12 18.5c-3.04 0-5.5-2.46-5.5-5.5S8.96 7.5 12 7.5s5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5z"/>
      </svg>
    )
  },
  {
    name: 'Meta',
    category: 'Ecosistema & Ads API',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.8 6c-1.8 0-3.3.9-4.2 2.3C11.7 6.9 10.2 6 8.4 6 5.4 6 3 8.4 3 11.4s2.4 5.4 5.4 5.4c1.8 0 3.3-.9 4.2-2.3.9 1.4 2.4 2.3 4.2 2.3 3 0 5.4-2.4 5.4-5.4S19.8 6 16.8 6zm-8.4 8.8c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4zm8.4 0c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4z"/>
      </svg>
    )
  },
  {
    name: 'HubSpot',
    category: 'CRM & Marketing',
    svg: (
      <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.2 16.29c-1.12-2-3-3.43-5.2-3.8.45-1 .31-2.19-.48-3.04l2.12-3.23c.31.22.7.35 1.13.35 1.05 0 1.89-.85 1.89-1.89C12.66 3.66 11.83 2.8 10.77 2.8c-1.07 0-1.89.85-1.89 1.89 0 1.05.85 1.89 1.89 1.89v4.21A2.5 2.5 0 1 0 8 13.91v2.16c0 1.06-.85 1.89-1.89 1.89A1.89 1.89 0 0 1 4.2 16.09c0-1.04.85-1.88 1.88-1.88.16 0 .33.02.48.06-1-1.06-1.59-2.47-1.59-4 0-1.72.76-3.27 1.95-4.32a6.41 6.41 0 0 0-.25 9.4c-1 .47-1.68 1.52-1.68 2.73a3.02 3.02 0 1 0 6.03 0c0-.85-.35-1.63-.9-2.18-.03-.02-.05-.03-.08-.05v-1.92h.02c1.4.26 2.65 1 3.52 2.05l7.98-7.98a4.13 4.13 0 1 0 0-5.84 4.14 4.14 0 0 0-5.85 5.84l-2.52 2.52z"/>
      </svg>
    )
  }
];

// Duplicate array for endless seamless looping marquee
const LOOPED_BRANDS = [...TECH_BRANDS, ...TECH_BRANDS];

export const TechTickerSection: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] border-y-2 border-[#0a0a0a] py-5 relative z-20 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1280px] mx-auto px-6 mb-3 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-[#0a0a0a]">
            TECNOLOGÍAS CON LAS QUE TRABAJAMOS
          </span>
        </div>
        <span className="font-body text-[11px] font-semibold text-[#555555] uppercase tracking-wider">
          Stack técnico que integramos en cada desarrollo
        </span>
      </div>

      {/* Ticker Continuous Infinite Marquee Loop (Right to Left) */}
      <div className="relative w-full overflow-hidden pt-1 pb-2">
        {/* Subtle fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

        <div className="animate-ticker flex items-center gap-6">
          {LOOPED_BRANDS.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-3 px-4 py-2.5 bg-[#F5F5F5] border border-[#0a0a0a] shadow-[3px_3px_0px_#0a0a0a] hover:-translate-y-0.5 transition-transform duration-200 cursor-default group shrink-0"
              title={`${brand.name} — ${brand.category}`}
            >
              <div className="text-[#0a0a0a] group-hover:scale-110 transition-transform duration-200">
                {brand.svg}
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-[13px] font-bold uppercase tracking-wider text-[#0a0a0a] leading-none">
                  {brand.name}
                </span>
                <span className="font-body text-[9px] font-semibold tracking-wider text-[#555555] uppercase mt-0.5">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
