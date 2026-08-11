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
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <ScrollReveal direction="up" delay={0.05}>
          <span className="font-body text-[11px] font-normal tracking-[0.2em] uppercase text-[#555555] block mb-4">
            CLIENTES QUE YA CONFIARON
          </span>
          <h2 className="font-headline font-bold text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-[-0.01em] uppercase text-[#0a0a0a] mb-8">
            LANDINGS QUE GENERAN RESULTADOS REALES
          </h2>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={0.05 * (idx % 3)}>
              <div
                onClick={() => onSelectProject(project)}
                className="portfolio-card card cursor-pointer p-6 flex flex-col justify-between group h-full"
              >
                <div>
                  <ProjectMockup projectId={project.id} variant="card" className="mb-5 border border-[#1a1a1a]" />

                  <h4 className="font-headline text-2xl font-bold uppercase text-[#0a0a0a] m-0 leading-tight">
                    {project.name}
                  </h4>
                  <span className="font-body text-[13px] text-[#555555] block mt-1 mb-2">
                    {project.clientCategory}
                  </span>
                  <span className="badge inline-block mb-3">{project.badge}</span>
                  <p className="font-body font-light text-[15px] leading-[1.5] text-[#555555] m-0">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1a1a1a]/20 flex justify-between items-center">
                  <span className="font-body text-[12px] font-normal tracking-[0.15em] uppercase text-[#0a0a0a]">
                    VER CASO DE ESTUDIO
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
          <div className="text-center mt-12">
            <button
              onClick={onOpenConsultation}
              className="btn-secondary"
            >
              Hablar con un desarrollador
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
