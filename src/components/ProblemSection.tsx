import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-[clamp(60px,10vh,120px)] bg-[#F5F5F5] relative z-10 border-t border-[#1a1a1a]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
        <ScrollReveal direction="up" delay={0.05}>
          <span className="font-body text-[11px] font-normal tracking-[0.2em] uppercase text-[#555555] block mb-4">
            EL PROBLEMA
          </span>
          <h2 className="font-headline font-bold text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-[-0.01em] uppercase text-[#0a0a0a] mb-12 max-w-[900px]">
            ¿CUÁNDO FUE LA ÚLTIMA VEZ QUE UN SISTEMA DIGITAL TE GENERÓ DINERO?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="card border border-[#1a1a1a] p-5 sm:p-8 md:p-10 bg-[#FFFFFF] shadow-[4px_4px_0px_#0a0a0a] md:shadow-[6px_6px_0px_#0a0a0a] h-full flex flex-col justify-between">
              <div>
                <span className="font-headline text-[48px] font-black text-[#0a0a0a] block mb-2 leading-none">
                  01
                </span>
                <span className="font-body text-[16px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] block mb-3">
                  CLIENTES PERDIDOS
                </span>
                <p className="font-body font-normal text-[15px] leading-[1.6] text-[#333333] mb-6">
                  Cada día sin presencia digital optimizada o lenta es un cliente potencial que migra a tu competencia.
                </p>
              </div>
              <span className="inline-block px-3 py-1 bg-[#F5F5F5] border border-[#0a0a0a] text-[12px] font-bold text-[#0a0a0a] uppercase tracking-wider self-start">
                Impacto: -40% Conversión
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="card border border-[#1a1a1a] p-5 sm:p-8 md:p-10 bg-[#FFFFFF] shadow-[4px_4px_0px_#0a0a0a] md:shadow-[6px_6px_0px_#0a0a0a] h-full flex flex-col justify-between">
              <div>
                <span className="font-headline text-[48px] font-black text-[#0a0a0a] block mb-2 leading-none">
                  02
                </span>
                <span className="font-body text-[16px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] block mb-3">
                  PROCESOS INEFICIENTES
                </span>
                <p className="font-body font-normal text-[15px] leading-[1.6] text-[#333333] mb-6">
                  Tareas manuales, atención por WhatsApp descoordinada y reportes en papel que consumen tiempo valioso.
                </p>
              </div>
              <span className="inline-block px-3 py-1 bg-[#F5F5F5] border border-[#0a0a0a] text-[12px] font-bold text-[#0a0a0a] uppercase tracking-wider self-start">
                Impacto: 15h/semana perdidas
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="card border border-[#1a1a1a] p-5 sm:p-8 md:p-10 bg-[#FFFFFF] shadow-[4px_4px_0px_#0a0a0a] md:shadow-[6px_6px_0px_#0a0a0a] h-full flex flex-col justify-between">
              <div>
                <span className="font-headline text-[48px] font-black text-[#0a0a0a] block mb-2 leading-none">
                  03
                </span>
                <span className="font-body text-[16px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] block mb-3">
                  TECNOLOGÍA OBSOLETA
                </span>
                <p className="font-body font-normal text-[15px] leading-[1.6] text-[#333333] mb-6">
                  Sistemas antiguos incompatibles con celulares, lentos o difíciles de actualizar por falta de soporte.
                </p>
              </div>
              <span className="inline-block px-3 py-1 bg-[#F5F5F5] border border-[#0a0a0a] text-[12px] font-bold text-[#0a0a0a] uppercase tracking-wider self-start">
                Impacto: Alto costo técnico
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
