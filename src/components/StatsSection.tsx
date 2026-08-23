import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollReveal } from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const counters = sectionRef.current.querySelectorAll<HTMLElement>('.stat-number');

    counters.forEach((counter) => {
      const targetVal = parseInt(counter.dataset.target || '0', 10);

      gsap.to(counter, {
        innerText: targetVal,
        duration: 2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        onUpdate: function () {
          counter.innerText = Math.round(Number(counter.innerText)).toString();
        }
      });
    });
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-[clamp(50px,8vh,90px)] bg-[#F5F5F5] border-t border-b border-[#1a1a1a] relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-8 md:gap-0">
            {/* Stat 1 */}
            <div className="text-center md:col-span-1 px-4">
              <span
                className="stat-number font-headline text-[clamp(48px,6vw,72px)] font-black text-[#0a0a0a] block leading-none"
                data-target="3"
              >
                0
              </span>
              <span className="font-body text-[14px] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] block mt-2">
                DÍAS PROTOTIPO
              </span>
              <span className="font-body font-light text-[13px] text-[#555555] block mt-1">
                Demo en 72h. Versión final a medida.
              </span>
            </div>

            <div className="hidden md:block md:col-span-1 justify-self-center w-[1px] h-[60px] bg-[#1a1a1a]" />

            {/* Stat 2 */}
            <div className="text-center md:col-span-1 px-4">
              <div className="flex items-center justify-center">
                <span
                  className="stat-number font-headline text-[clamp(48px,6vw,72px)] font-black text-[#0a0a0a] inline-block leading-none"
                  data-target="100"
                >
                  0
                </span>
                <span className="font-headline text-[clamp(48px,6vw,72px)] font-black text-[#0a0a0a] inline-block leading-none">%</span>
              </div>
              <span className="font-body text-[14px] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] block mt-2">
                GARANTÍA REAL
              </span>
              <span className="font-body font-light text-[13px] text-[#555555] block mt-1">
                Acompañamiento y soporte continuo
              </span>
            </div>

            <div className="hidden md:block md:col-span-1 justify-self-center w-[1px] h-[60px] bg-[#1a1a1a]" />

            {/* Stat 3 */}
            <div className="text-center md:col-span-1 px-4">
              <div className="flex items-center justify-center">
                <span
                  className="stat-number font-headline text-[clamp(48px,6vw,72px)] font-black text-[#0a0a0a] inline-block leading-none"
                  data-target="24"
                >
                  0
                </span>
                <span className="font-headline text-[clamp(48px,6vw,72px)] font-black text-[#0a0a0a] inline-block leading-none">H</span>
              </div>
              <span className="font-body text-[14px] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] block mt-2">
                TIEMPO DE RESPUESTA
              </span>
              <span className="font-body font-light text-[13px] text-[#555555] block mt-1">
                Contacto directo garantizado
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
