import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { ProjectMockup } from './ProjectMockup';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
  onOpenConsultation: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject, onOpenConsultation }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.badge.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="portafolio" className="py-[clamp(60px,10vh,120px)] bg-[#F5F5F5] relative z-10 border-t border-[#1a1a1a]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-body text-[11px] font-normal tracking-[0.2em] uppercase text-[#555555] block mb-4">
                PRUÉBALO TÚ MISMO
              </span>
              <h2 className="font-headline font-bold text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-[-0.01em] uppercase text-[#0a0a0a] mb-4">
                ESTO ES LO QUE PODEMOS CONSTRUIR PARA TI
              </h2>
              <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.6] text-[#555555] max-w-[720px]">
                Demos interactivas creadas por nuestro equipo para mostrar calidad de ejecución y proceso de trabajo. Son conceptos ilustrativos, no clientes reales — interactúa con ellos y luego construyamos el tuyo.
              </p>
            </div>
            <div className="shrink-0 pb-1">
              <a
                href="https://caciqueportafolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-headline font-bold text-lg md:text-xl uppercase tracking-wider text-[#0a0a0a] hover:text-[#555555] transition-colors group underline underline-offset-4 decoration-2"
              >
                <span>Ver más proyectos</span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200 inline-block">↗</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setFilter('all')}
              className={`font-body text-[12px] uppercase tracking-[0.15em] px-4 py-2 border transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                  : 'bg-transparent text-[#555555] border-[#1a1a1a] hover:border-[#0a0a0a]'
              }`}
            >
              TODOS
            </button>
            <button
              onClick={() => setFilter('landing')}
              className={`font-body text-[12px] uppercase tracking-[0.15em] px-4 py-2 border transition-colors cursor-pointer ${
                filter === 'landing'
                  ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                  : 'bg-transparent text-[#555555] border-[#1a1a1a] hover:border-[#0a0a0a]'
              }`}
            >
              LANDING PAGES
            </button>
            <button
              onClick={() => setFilter('e-commerce')}
              className={`font-body text-[12px] uppercase tracking-[0.15em] px-4 py-2 border transition-colors cursor-pointer ${
                filter === 'e-commerce'
                  ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                  : 'bg-transparent text-[#555555] border-[#1a1a1a] hover:border-[#0a0a0a]'
              }`}
            >
              E-COMMERCE
            </button>
            <button
              onClick={() => setFilter('sistema')}
              className={`font-body text-[12px] uppercase tracking-[0.15em] px-4 py-2 border transition-colors cursor-pointer ${
                filter === 'sistema'
                  ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                  : 'bg-transparent text-[#555555] border-[#1a1a1a] hover:border-[#0a0a0a]'
              }`}
            >
              SISTEMAS B2B
            </button>
          </div>
        </ScrollReveal>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={0.05 * (idx % 3)}>
              <div
                onClick={() => onSelectProject(project)}
                className="portfolio-card card cursor-pointer p-5 sm:p-6 flex flex-col justify-between group h-full"
              >
                <div>
                  <ProjectMockup projectId={project.id} variant="card" className="mb-5 border border-[#1a1a1a]" />

                  <h4 className="font-headline text-2xl font-bold uppercase text-[#0a0a0a] m-0 leading-tight">
                    {project.name}
                  </h4>
                  <span className="font-body text-[13px] text-[#555555] block mt-1 mb-2">
                    {project.clientCategory}
                  </span>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="badge inline-block">{project.badge}</span>
                    <span className="inline-block px-2.5 py-1 border border-[#555555] text-[10px] font-bold uppercase tracking-widest text-[#555555]">
                      Concepto
                    </span>
                  </div>
                  <p className="font-body font-light text-[15px] leading-[1.5] text-[#555555] m-0">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1a1a1a]/20 flex justify-between items-center">
                  <span className="font-body text-[12px] font-normal tracking-[0.15em] uppercase text-[#0a0a0a]">
                    VER DEMO INTERACTIVA
                  </span>
                  <span className="font-headline font-bold text-lg text-[#0a0a0a] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://caciqueportafolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 group"
            >
              <span>Ver más proyectos</span>
              <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200 inline-block">↗</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="btn-secondary w-full sm:w-auto"
            >
              Hablar con un desarrollador
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

