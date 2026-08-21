import { PortfolioProject } from '../types';

// Nota: estos son conceptos de demostración que diseñamos para mostrar nuestro
// proceso y calidad de ejecución — no corresponden a clientes reales todavía.
// Las métricas son objetivos de diseño (lo que la solución está pensada para lograr),
// no resultados medidos.
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'vitta',
    name: 'VITTA',
    clientCategory: 'Moda — Concepto de demostración',
    badge: 'Landing Page',
    metric: 'Objetivo: +40% Ventas',
    description: 'Diseñada para elevar la tasa de conversión de una tienda de moda que depende de WhatsApp.',
    challenge: 'La marca dependía exclusivamente de mensajes manuales por WhatsApp, perdiendo hasta 60% de los prospectos por lentitud en respuesta.',
    solution: 'Desarrollamos una landing page ultra rápida enfocada en conversión directa, con pasarela interactiva y enrutamiento inteligente.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API'],
    mockupCode: 'VITTA'
  },
  {
    id: 'banco-nuevo',
    name: 'BANCO NUEVO',
    clientCategory: 'Fintech — Concepto de demostración',
    badge: 'Landing Institucional',
    metric: 'Objetivo: 200 Leads Calificados/mes',
    description: 'Pensada para generar confianza y captar leads calificados en un producto financiero nuevo.',
    challenge: 'Mucha desconfianza inicial del usuario empresarial ante la oferta de productos financieros locales.',
    solution: 'Arquitectura de información austera, validación de datos en tiempo real y cálculo interactivo de rendimiento crediticio.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    mockupCode: 'BANCO NUEVO'
  },
  {
    id: 'sabor-caribe',
    name: 'SABOR CARIBE',
    clientCategory: 'Restaurante — Concepto de demostración',
    badge: 'E-commerce',
    metric: 'Objetivo: Pedidos 100% Automatizados',
    description: 'Concebida para eliminar el cuello de botella de pedidos telefónicos en horas pico.',
    challenge: 'Colapso operativo durante horas pico al tomar pedidos telefónicos manualmente.',
    solution: 'Menú digital ultra fluido con carrito ligero, sincronización de cocina y generación automática de órdenes estructuradas.',
    techStack: ['React', 'Tailwind CSS', 'Express', 'Zelle & PagoMóvil Integration'],
    mockupCode: 'SABOR CARIBE'
  },
  {
    id: 'tecno-build',
    name: 'TECNO BUILD',
    clientCategory: 'Construcción B2B — Concepto de demostración',
    badge: 'Landing B2B',
    metric: 'Objetivo: -30% Ciclo de Ventas',
    description: 'Diseñada para acortar el ciclo de cotización de materiales industriales.',
    challenge: 'Proceso de cotización de materiales industriales complejo y opaco que alejaba a contratistas.',
    solution: 'Generador de presupuestos automatizado B2B con catálogo interactivo y cotización instantánea.',
    techStack: ['TypeScript', 'Three.js', 'Tailwind CSS', 'REST API'],
    mockupCode: 'TECNO BUILD'
  },
  {
    id: 'educa-latam',
    name: 'EDUCA LATAM',
    clientCategory: 'EdTech — Concepto de demostración',
    badge: 'Plataforma',
    metric: 'Objetivo: Aulas 100% Llenas',
    description: 'Pensada para mejorar la conversión de visitantes a inscripciones confirmadas.',
    challenge: 'Baja tasa de conversión de visitantes a inscripciones confirmadas en programas ejecutivos.',
    solution: 'Página de registro simplificada con módulo de pre-evaluación en 3 pasos y recordatorios automáticos.',
    techStack: ['React', 'Express', 'PostgreSQL', 'Email & SMS Automation'],
    mockupCode: 'EDUCA LATAM'
  },
  {
    id: 'logistica-express',
    name: 'LOGISTICA EXPRESS',
    clientCategory: 'Logística — Concepto de demostración',
    badge: 'Sistema Tracking',
    metric: 'Objetivo: -25% Pérdidas Operativas',
    description: 'Concebida para dar visibilidad en tiempo real a clientes corporativos sobre sus envíos.',
    challenge: 'Incertidumbre constante de clientes corporativos sobre la ubicación exacta de sus envíos nacionales.',
    solution: 'Portal B2B de consulta en tiempo real mediante código único de guía sin fricciones de inicio de sesión.',
    techStack: ['TypeScript', 'Tailwind CSS', 'Node.js', 'WebSockets'],
    mockupCode: 'LOGISTICA EXPRESS'
  }
];
