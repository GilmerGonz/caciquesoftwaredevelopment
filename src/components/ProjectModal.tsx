import React, { useEffect } from 'react';
import { PortfolioProject } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenConsultation }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/80 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#F5F5F5] border-2 border-[#1a1a1a] p-6 md:p-10 max-w-[800px] w-full max-h-[90vh] overflow-y-auto relative shadow-[12px_12px_0px_#0a0a0a]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 font-headline text-2xl font-black text-[#0a0a0a] bg-transparent border-none cursor-pointer hover:opacity-70 p-2"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <span className="badge mb-3 inline-block">{project.badge}</span>
        <h3 id="modal-title" className="font-headline font-black text-[clamp(32px,5vw,56px)] uppercase text-[#0a0a0a] leading-none mb-1">
          {project.name}
        </h3>
        <p className="font-body text-[14px] text-[#555555] uppercase tracking-[0.15em] mb-6">
          {project.clientCategory}
        </p>

        {/* Mockup Display */}
        <ProjectMockup projectId={project.id} variant="modal" className="mb-8 border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a]" />

        {/* Metric Highlight */}
        <div className="bg-[#0a0a0a] text-[#F5F5F5] p-6 mb-8 border border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a]">
          <span className="font-body text-[11px] uppercase tracking-[0.2em] text-[#aaaaaa] block mb-1">
            RESULTADO CLAVE
          </span>
          <span className="font-headline text-3xl md:text-4xl font-bold uppercase text-[#FFFFFF] block">
            {project.metric}
          </span>
          <p className="font-body text-sm font-light text-[#aaaaaa] mt-1 mb-0">
            {project.description}
          </p>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-[#1a1a1a] p-5 bg-white">
            <span className="font-body text-[12px] font-normal tracking-[0.15em] uppercase text-[#0a0a0a] block mb-2">
              EL RETO
            </span>
            <p className="font-body text-[14px] font-light text-[#555555] leading-relaxed m-0">
              {project.challenge}
            </p>
          </div>

          <div className="border border-[#1a1a1a] p-5 bg-white">
            <span className="font-body text-[12px] font-normal tracking-[0.15em] uppercase text-[#0a0a0a] block mb-2">
              LA SOLUCION
            </span>
            <p className="font-body text-[14px] font-light text-[#555555] leading-relaxed m-0">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <span className="font-body text-[11px] font-normal tracking-[0.2em] uppercase text-[#555555] block mb-3">
            STACK TECNOLOGICO
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="bg-[#1a1a1a] text-[#F5F5F5] font-body text-[12px] px-3 py-1 uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[#1a1a1a]">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="btn-primary w-full sm:w-auto flex-1 text-center"
          >
            QUIERO RESULTADOS SIMILARES
          </button>
          <button
            onClick={onClose}
            className="btn-secondary w-full sm:w-auto"
          >
            CERRAR
          </button>
        </div>
      </div>
    </div>
  );
};
