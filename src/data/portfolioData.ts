import { PortfolioProject } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'vitta',
    name: 'VITTA',
    clientCategory: 'Moda — Venezuela',
    badge: 'Landing Page',
    metric: '+40% Ventas',
    description: 'Aumento de ventas en 40% en el primer mes de lanzamiento.',
    challenge: 'La marca dependía exclusivamente de mensajes manuales por WhatsApp, perdiendo hasta 60% de los prospectos por lentitud en respuesta.',
    solution: 'Desarrollamos una landing page ultra rápida enfocada en conversión directa, con pasarela interactiva y enrutamiento inteligente.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API'],
    mockupCode: 'VITTA'
  },
  {
    id: 'banco-nuevo',
    name: 'BANCO NUEVO',
    clientCategory: 'Fintech — Venezuela',
    badge: 'Landing Institucional',
    metric: '200 Leads Calificados',
    description: 'Captacion de 200 leads calificados en el primer mes.',
    challenge: 'Mucha desconfianza inicial del usuario empresarial ante la oferta de productos financieros locales.',
    solution: 'Arquitectura de información austera, validación de datos en tiempo real y cálculo interactivo de rendimiento crediticio.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    mockupCode: 'BANCO NUEVO'
  },
  {
    id: 'sabor-caribe',
    name: 'SABOR CARIBE',
    clientCategory: 'Restaurante — Venezuela',
    badge: 'E-commerce',
    metric: 'Pedidos 100% Automatizados',
    description: 'Sistema de pedidos automatizado con integracion de pagos.',
    challenge: 'Colapso operativo durante horas pico al tomar pedidos telefónicos manualmente.',
    solution: 'Menú digital ultra fluido con carrito ligero, sincronización de cocina y generación automática de órdenes estructuradas.',
    techStack: ['React', 'Tailwind CSS', 'Express', 'Zelle & PagoMóvil Integration'],
    mockupCode: 'SABOR CARIBE'
  },
  {
    id: 'tecno-build',
    name: 'TECNO BUILD',
    clientCategory: 'Construccion B2B — Venezuela',
    badge: 'Landing B2B',
    metric: '-30% Ciclo de Ventas',
    description: 'Reduccion del ciclo de ventas en 30%.',
    challenge: 'Proceso de cotización de materiales industriales complejo y opaco que alejaba a contratistas.',
    solution: 'Generador de presupuestos automatizado B2B con catálogo interactivo y cotización instantánea.',
    techStack: ['TypeScript', 'Three.js', 'Tailwind CSS', 'REST API'],
    mockupCode: 'TECNO BUILD'
  },
  {
    id: 'educa-venezuela',
    name: 'EDUCA VENEZUELA',
    clientCategory: 'EdTech — Venezuela',
    badge: 'Plataforma',
    metric: 'Aulas 100% Llenas',
    description: 'Captacion estudiantil con landing de conversion.',
    challenge: 'Baja tasa de conversión de visitantes a inscripciones confirmadas en programas ejecutivos.',
    solution: 'Página de registro simplificada con módulo de pre-evaluación en 3 pasos y recordatorios automáticos.',
    techStack: ['React', 'Express', 'PostgreSQL', 'Email & SMS Automation'],
    mockupCode: 'EDUCA VENEZUELA'
  },
  {
    id: 'logistica-express',
    name: 'LOGISTICA EXPRESS',
    clientCategory: 'Logistica — Venezuela',
    badge: 'Sistema Tracking',
    metric: '-25% Pérdidas Operativas',
    description: 'Reduccion de perdidas operativas en 25%.',
    challenge: 'Incertidumbre constante de clientes corporativos sobre la ubicación exacta de sus envíos nacionales.',
    solution: 'Portal B2B de consulta en tiempo real mediante código único de guía sin fricciones de inicio de sesión.',
    techStack: ['TypeScript', 'Tailwind CSS', 'Node.js', 'WebSockets'],
    mockupCode: 'LOGISTICA EXPRESS'
  }
];
