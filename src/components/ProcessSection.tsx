import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="proceso" className="py-[clamp(60px,10vh,120px)] bg-[#F5F5F5] relative z-10 border-t border-[#1a1a1a]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
        <ScrollReveal direction="up" delay={0.05}>
          <span className="font-body text-[11px] font-normal tracking-[0.2em] uppercase text-[#555555] block mb-4">
            CÓMO TRABAJAMOS
          </span>
          <h2 className="font-headline font-bold text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-[-0.01em] uppercase text-[#0a0a0a] mb-12 max-w-[900px]">
            SIN REUNIONES ETERNAS. SIN SORPRESAS. SOLO RESULTADOS.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
          {/* Step 1 */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="process-step bg-[#FFFFFF] border border-[#1a1a1a] p-5 sm:p-8 shadow-[4px_4px_0px_#0a0a0a] md:shadow-[6px_6px_0px_#0a0a0a] h-full flex flex-col justify-between">
              <div>
                <span className="font-headline text-[56px] font-black text-[#0a0a0a] block leading-none">
                  01
                </span>
                <span className="font-body text-[18px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] block my-3">
                  DIAGNÓSTICO INICIAL
                </span>
                <p className="font-body font-normal text-[15px] leading-[1.6] text-[#555555] m-0">
                  Entendemos tu negocio, tus objetivos y la viabilidad técnica de tu proyecto en una consulta directa de 30 minutos.
                </p>
              </div>
              <span className="inline-block px-3 py-1 bg-[#F5F5F5] border border-[#0a0a0a] text-[11px] font-bold text-[#0a0a0a] uppercase tracking-wider mt-6 self-start">
                Fase 1: Alcance Claro
              </span>
            </div>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="process-step bg-[#FFFFFF] border border-[#1a1a1a] p-5 sm:p-8 shadow-[4px_4px_0px_#0a0a0a] md:shadow-[6px_6px_0px_#0a0a0a] h-full flex flex-col justify-between">
              <div>
                <span className="font-headline text-[56px] font-black text-[#0a0a0a] block leading-none">
                  02
                </span>
                <span className="font-body text-[18px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] block my-3">
                  PROTOTIPO DE PRUEBA (3 DÍAS)
                </span>
                <p className="font-body font-normal text-[15px] leading-[1.6] text-[#555555] m-0">
                  Los primeros <strong>3 días</strong> creamos un <strong>prototipo de prueba totalmente funcional</strong> para que pruebes el flujo interactivo en vivo.
                </p>
              </div>
              <span className="inline-block px-3 py-1 bg-[#F5F5F5] border border-[#0a0a0a] text-[11px] font-bold text-[#0a0a0a] uppercase tracking-wider mt-6 self-start">
                Fase 2: Demo en 72 Horas
              </span>
            </div>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="process-step bg-[#FFFFFF] border border-[#1a1a1a] p-5 sm:p-8 shadow-[4px_4px_0px_#0a0a0a] md:shadow-[6px_6px_0px_#0a0a0a] h-full flex flex-col justify-between">
              <div>
                <span className="font-headline text-[56px] font-black text-[#0a0a0a] block leading-none">
                  03
                </span>
                <span className="font-body text-[18px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] block my-3">
                  VERSIÓN FINAL Y SOPORTE
                </span>
                <p className="font-body font-normal text-[15px] leading-[1.6] text-[#555555] m-0">
                  Desarrollamos la versión final de producción. El tiempo adicional requerido depende de la complejidad técnica de los sistemas e integraciones.
                </p>
              </div>
              <span className="inline-block px-3 py-1 bg-[#F5F5F5] border border-[#0a0a0a] text-[11px] font-bold text-[#0a0a0a] uppercase tracking-wider mt-6 self-start">
                Fase 3: Producto Final
              </span>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.35}>
          <div className="text-center mt-12">
            <button
              onClick={onOpenConsultation}
              className="btn-primary w-full sm:w-auto"
            >
              Contáctanos
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
