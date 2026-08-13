import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="servicios" className="py-[clamp(60px,10vh,120px)] bg-[#0a0a0a] text-[#F5F5F5] relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        <ScrollReveal direction="up" delay={0.05}>
          <span className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-[#aaaaaa] block mb-4">
            LO QUE CONSTRUIMOS
          </span>
          <h2 className="font-headline font-bold text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-[-0.01em] uppercase text-[#FFFFFF] mb-12">
            SOLUCIONES QUE GENERAN RESULTADOS
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {/* Service 1: Desarrollo Web */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="service-card bg-[#141414] border-2 border-[#333333] p-5 sm:p-8 md:p-10 flex flex-col justify-between shadow-[4px_4px_0px_#FFFFFF] md:shadow-[6px_6px_0px_#FFFFFF] hover:shadow-[6px_6px_0px_#FFFFFF] md:hover:shadow-[12px_12px_0px_#FFFFFF] hover:-translate-y-1 transition-all duration-300 group h-full">
              <div>
                <div className="w-14 h-14 bg-[#222222] border border-[#444444] flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>

                <h3 className="font-headline text-[24px] md:text-[28px] font-bold uppercase text-[#FFFFFF] m-0 mb-3 leading-tight">
                  DESARROLLO WEB
                </h3>

                <p className="font-body font-normal text-[15px] leading-[1.6] text-[#cccccc] mb-6">
                  Landing pages, aplicaciones web y plataformas e-commerce ultrarrápidas y optimizadas para ventas.
                </p>

                {/* Deliverables Checklist */}
                <ul className="list-none p-0 m-0 mb-8 space-y-3 text-[13px] text-[#e0e0e0] font-medium border-t border-[#2a2a2a] pt-5">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Diseño UX/UI exclusivo adaptado a tu marca</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Carga relámpago (&lt; 1 seg) y SEO técnico</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Integración de Pasarelas de Pago & WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Panel administrativo fácil de usar</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#2a2a2a]">
                <span className="inline-block px-3 py-1 bg-[#222222] border border-[#444444] text-[11px] font-bold text-[#FFFFFF] tracking-widest uppercase mb-5">
                  PROTOTIPO EN 3 DÍAS
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-[#FFFFFF] text-[#0a0a0a] font-body text-[13px] font-bold tracking-[0.1em] uppercase py-3.5 px-4 text-center cursor-pointer border border-[#FFFFFF] hover:bg-[#e0e0e0] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Hablar con un desarrollador</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 2: Automatización */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="service-card bg-[#141414] border-2 border-[#333333] p-5 sm:p-8 md:p-10 flex flex-col justify-between shadow-[4px_4px_0px_#FFFFFF] md:shadow-[6px_6px_0px_#FFFFFF] hover:shadow-[6px_6px_0px_#FFFFFF] md:hover:shadow-[12px_12px_0px_#FFFFFF] hover:-translate-y-1 transition-all duration-300 group h-full">
              <div>
                <div className="w-14 h-14 bg-[#222222] border border-[#444444] flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>

                <h3 className="font-headline text-[24px] md:text-[28px] font-bold uppercase text-[#FFFFFF] m-0 mb-3 leading-tight">
                  AUTOMATIZACIÓN
                </h3>

                <p className="font-body font-normal text-[15px] leading-[1.6] text-[#cccccc] mb-6">
                  Elimina tareas repetitivas, ahorra costos operativos y sincroniza tu flujo de trabajo en tiempo real.
                </p>

                {/* Deliverables Checklist */}
                <ul className="list-none p-0 m-0 mb-8 space-y-3 text-[13px] text-[#e0e0e0] font-medium border-t border-[#2a2a2a] pt-5">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Bots de atención e interacción en WhatsApp/Telegram</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Conexión entre CRM, Facturación y Hojas de Cálculo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Sincronización automática de Inventarios</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Notificaciones y Reportes ejecutivos diarios</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#2a2a2a]">
                <span className="inline-block px-3 py-1 bg-[#222222] border border-[#444444] text-[11px] font-bold text-[#FFFFFF] tracking-widest uppercase mb-5">
                  AHORRO DEL 40% EN TIEMPO
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-[#FFFFFF] text-[#0a0a0a] font-body text-[13px] font-bold tracking-[0.1em] uppercase py-3.5 px-4 text-center cursor-pointer border border-[#FFFFFF] hover:bg-[#e0e0e0] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Contactarse</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 3: Integración IA */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="service-card bg-[#141414] border-2 border-[#333333] p-5 sm:p-8 md:p-10 flex flex-col justify-between shadow-[4px_4px_0px_#FFFFFF] md:shadow-[6px_6px_0px_#FFFFFF] hover:shadow-[6px_6px_0px_#FFFFFF] md:hover:shadow-[12px_12px_0px_#FFFFFF] hover:-translate-y-1 transition-all duration-300 group h-full">
              <div>
                <div className="w-14 h-14 bg-[#222222] border border-[#444444] flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                    <path d="M12 12L2.5 7.5" />
                    <path d="M12 12v10" />
                  </svg>
                </div>

                <h3 className="font-headline text-[24px] md:text-[28px] font-bold uppercase text-[#FFFFFF] m-0 mb-3 leading-tight">
                  INTEGRACIÓN IA
                </h3>

                <p className="font-body font-normal text-[15px] leading-[1.6] text-[#cccccc] mb-6">
                  Agentes virtuales inteligentes y modelos de IA aplicados al crecimiento y soporte de tu empresa.
                </p>

                {/* Deliverables Checklist */}
                <ul className="list-none p-0 m-0 mb-8 space-y-3 text-[13px] text-[#e0e0e0] font-medium border-t border-[#2a2a2a] pt-5">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Agentes de respuesta con tu base de conocimientos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Extracción automática de datos desde PDF/Facturas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Clasificación inteligente de prospectos y leads</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFFFFF] font-bold shrink-0">✓</span>
                    <span>Operatividad continua 24/7 sin interrupciones</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#2a2a2a]">
                <span className="inline-block px-3 py-1 bg-[#222222] border border-[#444444] text-[11px] font-bold text-[#FFFFFF] tracking-widest uppercase mb-5">
                  OPERATIVO 24/7
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-[#FFFFFF] text-[#0a0a0a] font-body text-[13px] font-bold tracking-[0.1em] uppercase py-3.5 px-4 text-center cursor-pointer border border-[#FFFFFF] hover:bg-[#e0e0e0] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Contáctanos</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Informative Callout Banner for Prototype vs Final Delivery */}
        <ScrollReveal direction="up" delay={0.35}>
          <div className="mt-12 bg-[#141414] border-2 border-[#333333] p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[4px_4px_0px_#FFFFFF] md:shadow-[6px_6px_0px_#FFFFFF]">
            <div className="space-y-2 max-w-[850px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#FFFFFF] uppercase bg-[#222222] px-2.5 py-1 border border-[#444444]">
                  METODOLOGÍA DE TIEMPOS Y ENTREGAS
                </span>
              </div>
              <h4 className="font-headline text-[20px] md:text-[22px] font-bold text-[#FFFFFF] uppercase tracking-wide">
                Prototipo Funcional de Prueba en 3 Días + Desarrollo Final Adaptado
              </h4>
              <p className="font-body text-[14px] leading-[1.6] text-[#cccccc] m-0">
                Construimos un <strong>prototipo de prueba totalmente interactivo en solo 3 días</strong> para que evalúes la experiencia real. La <strong>versión final completa</strong> se perfecciona posteriormente y tomará tiempo adicional según el grado de complejidad técnica y sistemas a integrar.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="shrink-0 bg-[#FFFFFF] text-[#0a0a0a] font-body text-[12px] font-bold tracking-[0.1em] uppercase py-3.5 px-6 border border-[#FFFFFF] hover:bg-[#e0e0e0] transition-colors cursor-pointer"
            >
              Consultar Proyecto →
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

