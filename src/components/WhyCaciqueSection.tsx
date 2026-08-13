import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WhyCaciqueSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('.diff-item');
    if (items.length > 0) {
      gsap.fromTo(items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  return (
    <section id="why" ref={sectionRef} className="py-[clamp(60px,10vh,120px)] bg-[#0a0a0a] text-[#F5F5F5] relative z-10 border-t border-[#1a1a1a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        <span className="font-body text-[11px] font-normal tracking-[0.2em] uppercase text-[#aaaaaa] block mb-4">
          POR QUE CACIQUE
        </span>
        <h2 className="font-headline font-bold text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-[-0.01em] uppercase text-[#FFFFFF] mb-12">
          LA AUTORIDAD EN TECNOLOGIA PARA VENEZUELA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          <div className="diff-item border border-[#555555] p-5 sm:p-8 bg-[#1a1a1a] shadow-[4px_4px_0px_#F5F5F5] md:shadow-[6px_6px_0px_#F5F5F5]">
            <span className="font-body text-[18px] font-bold tracking-[0.15em] uppercase text-[#FFFFFF] block mb-3">
              VELOCIDAD DE ENTREGA
            </span>
            <p className="font-body font-normal text-[15px] leading-[1.6] text-[#aaaaaa] m-0">
              Resultados en días, no en meses. Tu prototipo funcional listo para validar en sólo 3 días.
            </p>
          </div>

          <div className="diff-item border border-[#555555] p-5 sm:p-8 bg-[#1a1a1a] shadow-[4px_4px_0px_#F5F5F5] md:shadow-[6px_6px_0px_#F5F5F5]">
            <span className="font-body text-[18px] font-bold tracking-[0.15em] uppercase text-[#FFFFFF] block mb-3">
              GARANTÍA DE SATISFACCIÓN
            </span>
            <p className="font-body font-normal text-[15px] leading-[1.6] text-[#aaaaaa] m-0">
              Ajustamos el sistema hasta que cumpla el 100% de tus requerimientos. Sin sorpresas.
            </p>
          </div>

          <div className="diff-item border border-[#555555] p-5 sm:p-8 bg-[#1a1a1a] shadow-[4px_4px_0px_#F5F5F5] md:shadow-[6px_6px_0px_#F5F5F5]">
            <span className="font-body text-[18px] font-bold tracking-[0.15em] uppercase text-[#FFFFFF] block mb-3">
              CÓDIGO 100% TUYO
            </span>
            <p className="font-body font-normal text-[15px] leading-[1.6] text-[#aaaaaa] m-0">
              Te entregamos el repositorio completo y los derechos del software. Sin ataduras ni mensualidades de licenciamiento.
            </p>
          </div>

          <div className="diff-item border border-[#555555] p-5 sm:p-8 bg-[#1a1a1a] shadow-[4px_4px_0px_#F5F5F5] md:shadow-[6px_6px_0px_#F5F5F5]">
            <span className="font-body text-[18px] font-bold tracking-[0.15em] uppercase text-[#FFFFFF] block mb-3">
              TECNOLOGÍA DE PUNTA
            </span>
            <p className="font-body font-normal text-[15px] leading-[1.6] text-[#aaaaaa] m-0">
              Usamos la misma infraestructura que emplean startups globales: React, Next.js, Python e IA.
            </p>
          </div>

          <div className="diff-item border border-[#555555] p-5 sm:p-8 bg-[#1a1a1a] shadow-[4px_4px_0px_#F5F5F5] md:shadow-[6px_6px_0px_#F5F5F5]">
            <span className="font-body text-[18px] font-bold tracking-[0.15em] uppercase text-[#FFFFFF] block mb-3">
              HECHOS EN VENEZUELA
            </span>
            <p className="font-body font-normal text-[15px] leading-[1.6] text-[#aaaaaa] m-0">
              Entendemos la realidad comercial local, los métodos de pago nacionales y el comportamiento de tu cliente.
            </p>
          </div>

          <div className="diff-item border border-[#555555] p-5 sm:p-8 bg-[#1a1a1a] shadow-[4px_4px_0px_#F5F5F5] md:shadow-[6px_6px_0px_#F5F5F5]">
            <span className="font-body text-[18px] font-bold tracking-[0.15em] uppercase text-[#FFFFFF] block mb-3">
              SOPORTE POST-ENTREGA
            </span>
            <p className="font-body font-normal text-[15px] leading-[1.6] text-[#aaaaaa] m-0">
              Incluimos acompañamiento técnico posterior al lanzamiento para asegurar estabilidad total.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
