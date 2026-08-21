import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechTickerSection } from './components/TechTickerSection';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyCaciqueSection } from './components/WhyCaciqueSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { ProjectModal } from './components/ProjectModal';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsPage } from './components/TermsPage';
import { PortfolioProject } from './types';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const pathname = window.location.pathname;

  if (pathname === '/privacidad') {
    return <PrivacyPolicyPage />;
  }

  if (pathname === '/terminos') {
    return <TermsPage />;
  }

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleSelectProject = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0a0a0a] relative selection:bg-[#0a0a0a] selection:text-[#FFFFFF]">
      {/* Navigation Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenConsultation={handleOpenConsultation} />
        <TechTickerSection />
        <ProblemSection />
        <ServicesSection onOpenConsultation={handleOpenConsultation} />
        <StatsSection />
        <PortfolioSection
          onSelectProject={handleSelectProject}
          onOpenConsultation={handleOpenConsultation}
        />
        <ProcessSection onOpenConsultation={handleOpenConsultation} />
        <WhyCaciqueSection />
        <FaqSection />
        <ContactSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <LeadModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
      
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onOpenConsultation={handleOpenConsultation}
      />

      <CookieBanner />
    </div>
  );
}

