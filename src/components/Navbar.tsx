import React, { useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 400);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5] border-b border-[#0a0a0a] py-3.5 shadow-sm"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 flex justify-between items-center">
        <div className="flex flex-col leading-none">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-headline font-black text-2xl tracking-tight text-[#0a0a0a] uppercase no-underline hover:opacity-80 transition-opacity"
          >
            CACIQUE
          </a>
          <span className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] mt-0.5">
            SOFTWARE DEVELOPMENT
          </span>
        </div>

        {/* Hamburger Mobile Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 bg-transparent border-none cursor-pointer p-2 z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          aria-label="Toggle navegación"
        >
          <span
            className={`w-6 h-[2.5px] bg-[#0a0a0a] transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2.5px] bg-[#0a0a0a] transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[2.5px] bg-[#0a0a0a] transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          />
        </button>

        {/* Desktop and Mobile Menu */}
        <ul
          id="nav-menu"
          className={`flex items-center gap-8 list-none m-0 p-0 transition-all duration-300 ${
            isOpen
              ? 'flex flex-col absolute top-full left-0 right-0 bg-[#F5F5F5] p-6 gap-6 border-b border-[#0a0a0a] shadow-lg md:shadow-none'
              : 'hidden md:flex'
          }`}
        >
          <li>
            <a
              href="#servicios"
              onClick={(e) => handleNavClick(e, '#servicios')}
              className="font-body text-[13px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] hover:text-[#555555] no-underline transition-colors"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#portafolio"
              onClick={(e) => handleNavClick(e, '#portafolio')}
              className="font-body text-[13px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] hover:text-[#555555] no-underline transition-colors"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, '#faq')}
              className="font-body text-[13px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] hover:text-[#555555] no-underline transition-colors"
            >
              Preguntas
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="font-body text-[13px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] hover:text-[#555555] no-underline transition-colors"
            >
              Contacto
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="btn-primary !py-2.5 !px-6 !text-[13px] !font-semibold w-full md:w-auto"
            >
              Contactarse
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
