import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '¿En cuánto tiempo entregan el proyecto?',
    answer: 'Nuestros prototipos y landing pages operativas están listas para validar en sólo 3 días continuos. Para desarrollos web completos, e-commerce o sistemas con automatización, los tiempos varían entre 1 y 3 semanas según la complejidad.'
  },
  {
    question: '¿El código y el software serán 100% míos?',
    answer: 'Sí. Al finalizar el proyecto te entregamos el repositorio completo en GitHub, credenciales del servidor y documentación técnica. No cobramos mensualidades de licenciamiento ocultas.'
  },
  {
    question: '¿Cómo funcionan las formas de pago en Venezuela?',
    answer: 'Ofrecemos máxima flexibilidad local e internacional: Pago Móvil, Transferencias Bancarias en Bs., Zelle, Binance (USDT), Reserve y Transferencias SWIFT.'
  },
  {
    question: '¿Qué garantía incluye el servicio?',
    answer: 'Todos nuestros desarrollos incluyen 30 días de garantía técnica posterior al lanzamiento para corrección de incidencias o ajustes de funcionamiento sin ningún costo adicional.'
  },
  {
    question: '¿Pueden integrar mi sistema actual con WhatsApp o Inteligencia Artificial?',
    answer: 'Por supuesto. Desarrollamos APIs y conectores a medida que comunican tus bases de datos, sistemas ERP/CRM existentes con bots automáticos de WhatsApp y modelos de IA como Gemini.'
  },
  {
    question: '¿Necesito conocimientos técnicos para administrar mi sitio?',
    answer: 'No. Diseñamos paneles de administración intuitivos y te brindamos una sesión de capacitación en video para que tú o tu equipo gestionen productos, clientes y contenido con total autonomía.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-[clamp(60px,10vh,120px)] bg-[#F5F5F5] relative z-10 border-t border-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        <ScrollReveal direction="up" delay={0.05} className="text-center flex flex-col items-center">
          <span className="badge mb-4 inline-block bg-[#FFFFFF]">
            RESPUESTAS CLARAS
          </span>
          <h2 className="font-headline font-bold text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-[-0.01em] uppercase text-[#0a0a0a] mb-12 text-center">
            PREGUNTAS FRECUENTES
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <div className="max-w-[900px] mx-auto space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-[#0a0a0a] bg-[#FFFFFF] transition-all shadow-[4px_4px_0px_#0a0a0a] md:shadow-[6px_6px_0px_#0a0a0a]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 bg-transparent border-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-headline text-[18px] md:text-[20px] font-bold text-[#0a0a0a] uppercase tracking-wide">
                      {faq.question}
                    </span>
                    <span className="font-mono text-[24px] font-bold text-[#0a0a0a] shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 border-t border-[#0a0a0a]/10">
                      <p className="font-body text-[15px] leading-[1.6] text-[#333333] m-0 pt-4 text-left">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

