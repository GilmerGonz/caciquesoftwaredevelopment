import React, { useEffect, useRef, Suspense, lazy } from 'react';
import gsap from 'gsap';

// Three.js es la dependencia más pesada del bundle y esta escena es puramente
// decorativa (aria-hidden, pointer-events-none), así que se carga en un chunk
// aparte en vez de bloquear el JS principal del sitio.
const ThreeHeroCanvas = lazy(() =>
  import('./ThreeHeroCanvas').then((m) => ({ default: m.ThreeHeroCanvas }))
);

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.hero-word');
      
      gsap.fromTo(words, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.1,
          clearProps: 'opacity,transform'
        }
      );

      if (subtextRef.current && ctasRef.current) {
        gsap.fromTo([subtextRef.current, ctasRef.current],
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            delay: 0.6,
            clearProps: 'opacity,transform'
          }
        );
      }
    }
  }, []);

  const headlineWords = ["TU", "NEGOCIO", "MERECE", "TECNOLOGIA", "DE", "CLASE", "MUNDIAL"];

  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolio = document.querySelector('#portafolio');
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100vh] min-h-[700px] flex items-center bg-[#F5F5F5] overflow-hidden pt-24 pb-16" aria-label="Hero principal">
      {/* 3D Wireframe Scene - Bound to Hero section */}
      <Suspense fallback={null}>
        <ThreeHeroCanvas />
      </Suspense>

      {/* Degradado radial detrás del texto. Cubre solo la mitad izquierda de
          la sección (no toda, para no difuminar el objeto 3D que vive a la
          derecha). El color de fondo ya se desvanece con el radial-gradient,
          pero backdrop-blur en sí NO se puede degradar con CSS puro: aplica
          el mismo blur en toda su caja y corta en seco en el borde. Por eso
          además se enmascara el elemento entero (mask-image) para que el
          blur también se desvanezca de forma continua, sin línea dura. */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-0 w-[56%] z-[5] pointer-events-none bg-[radial-gradient(ellipse_75%_75%_at_35%_55%,#F5F5F5_0%,#F5F5F5_30%,rgba(245,245,245,0.5)_55%,rgba(245,245,245,0)_95%)] backdrop-blur-[6px]"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 35% 55%, black 0%, black 30%, rgba(0,0,0,0.5) 55%, transparent 95%)',
          maskImage: 'radial-gradient(ellipse 75% 75% at 35% 55%, black 0%, black 30%, rgba(0,0,0,0.5) 55%, transparent 95%)',
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 xl:px-20 w-full">
        <span className="badge mb-6 inline-block bg-[#FFFFFF]">Agencia de Desarrollo de Software — Latinoamérica</span>

        <h1
          ref={headlineRef}
          className="font-headline font-black text-[clamp(48px,10vw,110px)] leading-[0.92] tracking-[-0.02em] uppercase text-[#0a0a0a] my-4 max-w-full lg:max-w-[52%] flex flex-wrap gap-x-4 gap-y-1"
        >
          {headlineWords.map((word, index) => (
            <span key={index} className="hero-word inline-block">
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subtextRef}
          className="font-body font-normal text-[clamp(18px,2vw,24px)] leading-[1.4] text-[#1a1a1a] max-w-[650px] mb-8"
        >
          Desarrollo de software a medida, landing pages de alta conversión y automatización de procesos con IA para empresas en Latinoamérica. <strong>Prototipo de prueba en 3 días</strong> (versión final adaptada a tu complejidad).
        </p>

        <div ref={ctasRef} className="flex flex-wrap gap-4 mb-10">
          <button
            onClick={onOpenConsultation}
            className="btn-primary w-full sm:w-auto"
          >
            Hablar con un desarrollador
          </button>
          <button
            onClick={onOpenConsultation}
            className="btn-secondary w-full sm:w-auto"
          >
            Contáctanos
          </button>
        </div>

        {/* En mobile/tablet el fondo 3D pasa por detrás de este bloque; un panel
            translúcido con blur evita que la rejilla se mezcle con el texto.
            En desktop lo cubre el degradado a nivel de sección (ver arriba). */}
        <div className="bg-[#F5F5F5]/85 backdrop-blur-md -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 rounded lg:bg-transparent lg:backdrop-blur-none lg:mx-0 lg:px-0 lg:py-0 lg:rounded-none">
          <a
            href="#portafolio"
            onClick={handleScrollToPortfolio}
            className="font-body text-[13px] font-bold uppercase tracking-[0.15em] text-[#0a0a0a] underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity mb-10 inline-block"
          >
            O prueba nuestras demos interactivas primero →
          </a>

          {/* Tech Stack & Trust Indicators */}
          <div className="pt-6 border-t border-[#0a0a0a]/20 max-w-[800px]">
            <span className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] block mb-3">
              TECNOLOGÍAS Y ESTÁNDARES QUE UTILIZAMOS
            </span>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {['React 18', 'TypeScript', 'Next.js', 'Python', 'Node.js', 'Gemini AI', 'AWS', 'Docker', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#FFFFFF] border border-[#0a0a0a] text-[12px] font-bold text-[#0a0a0a] uppercase tracking-wider shadow-[2px_2px_0px_#0a0a0a]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px] font-bold text-[#0a0a0a]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Respuesta en menos de 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓ 100% Código Propio</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓ Prototipo Funcional en 3 Días</span>
            </div>
          </div>
        </div>
        </div>

        <hr className="section-divider mb-12" />

        <div className="flex flex-col items-center gap-2 pt-2">
          <span className="font-body text-[11px] font-normal tracking-[0.2em] uppercase text-[#555555]">
            DESPLAZA
          </span>
          <svg width="20" height="30" viewBox="0 0 20 30" aria-hidden="true">
            <path d="M10 2 L10 26" stroke="#0a0a0a" strokeWidth="1.5" fill="none" />
            <path d="M4 20 L10 26 L16 20" stroke="#0a0a0a" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

