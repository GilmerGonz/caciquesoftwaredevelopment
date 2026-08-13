import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cacique_cookie_consent');
    if (!consent) {
      // Small delay for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cacique_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[100] animate-fadeIn transition-opacity duration-500">
      <div className="bg-[#FFFFFF] border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] p-5 flex flex-col gap-4 relative">
        <button 
          onClick={handleAccept}
          className="absolute top-3 right-3 text-[#555555] hover:text-[#0a0a0a] transition-colors border-none bg-transparent cursor-pointer"
          aria-label="Cerrar aviso de cookies"
        >
          ✕
        </button>
        <div>
          <h4 className="font-headline font-bold text-lg uppercase text-[#0a0a0a] m-0 mb-1">
            USO DE COOKIES
          </h4>
          <p className="font-body text-[13px] leading-relaxed text-[#555555] pr-6 m-0">
            Utilizamos cookies para garantizar la mejor experiencia, analizar nuestro tráfico y optimizar el rendimiento del sitio. Al continuar, aceptas nuestros términos.
          </p>
        </div>
        <button 
          onClick={handleAccept}
          className="btn-primary py-2.5 !px-6 w-full md:w-auto self-start text-[13px]"
        >
          ACEPTAR TÉRMINOS
        </button>
      </div>
    </div>
  );
};
