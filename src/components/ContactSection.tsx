import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contacto" className="py-[clamp(80px,12vh,140px)] bg-[#F5F5F5] relative z-10 border-t border-[#1a1a1a]">
      <div className="max-w-[850px] mx-auto px-4 sm:px-8 md:px-12 text-center">
        <ScrollReveal direction="up" delay={0.05}>
          <span className="badge mb-6 inline-block">CONTACTO DIRECTO</span>
          <h2 className="font-headline font-black text-[clamp(42px,9vw,92px)] leading-[0.95] uppercase text-[#0a0a0a] mb-6">
            DECIDISTE CRECER. AHORA HAZLO REAL.
          </h2>
          <p className="font-body font-light text-[clamp(18px,2vw,24px)] leading-[1.4] text-[#555555] max-w-[620px] mx-auto mb-10">
            Una conversación puede cambiar el rumbo de tu negocio. Empecemos hoy.
          </p>

          <div className="flex flex-col items-center gap-4 mb-16">
            <button
              onClick={onOpenConsultation}
              className="btn-primary w-full sm:w-auto !text-[18px] md:!text-[20px] !py-5 !px-10 md:!px-14 shadow-[4px_4px_0px_#1a1a1a] md:shadow-[6px_6px_0px_#1a1a1a]"
            >
              Contáctanos por WhatsApp
            </button>
            <span className="font-body font-normal text-[14px] text-[#1a1a1a]">
              Respuesta en menos de 24 horas garantizada.
            </span>
          </div>
        </ScrollReveal>

        {/* Contact Info Grid */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-[#0a0a0a]/20 pt-12">
            <div className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#0a0a0a] shadow-[4px_4px_0px_#0a0a0a] md:shadow-[6px_6px_0px_#0a0a0a] flex flex-col justify-between h-full">
              <div>
                <span className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-[#555555] block mb-2">
                  ATENCIÓN DIRECTA
                </span>
                <h4 className="font-headline text-[18px] font-bold uppercase text-[#0a0a0a] mb-2 m-0">
                  WhatsApp B2B
                </h4>
                <p className="font-body text-[14px] text-[#333333] m-0 mb-4 leading-relaxed">
                  Consultas inmediatas y evaluación de viabilidad de proyectos.
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="text-[13px] font-bold text-[#0a0a0a] bg-[#F5F5F5] px-2.5 py-1 border border-[#0a0a0a]/20 self-start hover:bg-[#e8e8e8] hover:border-[#0a0a0a] transition-colors cursor-pointer inline-flex items-center gap-1.5 mt-2"
              >
                <span>Hablar con un desarrollador</span>
              </button>
            </div>

            <div className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#0a0a0a] shadow-[4px_4px_0px_#0a0a0a] md:shadow-[6px_6px_0px_#0a0a0a] flex flex-col justify-between h-full">
              <div>
                <span className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-[#555555] block mb-2">
                  PROPUESTAS Y LICITACIONES
                </span>
                <h4 className="font-headline text-[18px] font-bold uppercase text-[#0a0a0a] mb-2 m-0">
                  Correo Electrónico
                </h4>
                <p className="font-body text-[14px] text-[#333333] m-0 mb-4 leading-relaxed">
                  Envíanos los requerimientos de tu empresa o pliego de condiciones.
                </p>
              </div>
              <a
                href="mailto:dejesusgonzalezalvarez@gmail.com"
                className="text-[13px] font-bold text-[#0a0a0a] bg-[#F5F5F5] px-2.5 py-1 border border-[#0a0a0a]/20 self-start hover:bg-[#e8e8e8] hover:border-[#0a0a0a] transition-colors inline-flex items-center gap-1.5 mt-2"
              >
                <span>dejesusgonzalezalvarez@gmail.com</span>
              </a>
            </div>

            <div className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#0a0a0a] shadow-[4px_4px_0px_#0a0a0a] md:shadow-[6px_6px_0px_#0a0a0a] flex flex-col justify-between h-full">
              <div>
                <span className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-[#555555] block mb-2">
                  COBERTURA
                </span>
                <h4 className="font-headline text-[18px] font-bold uppercase text-[#0a0a0a] mb-2 m-0">
                  100% Remoto
                </h4>
                <p className="font-body text-[14px] text-[#333333] m-0 mb-4 leading-relaxed">
                  Trabajamos de forma remota para clientes en cualquier parte del mundo.
                </p>
              </div>
              <div className="text-[13px] font-bold text-[#0a0a0a] inline-flex items-center gap-1.5 mt-2 bg-[#F5F5F5] px-2.5 py-1 border border-[#0a0a0a]/20 self-start">
                <span>🕒</span>
                <span>Horario: Lun - Sáb (8:00 AM - 7:00 PM)</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
