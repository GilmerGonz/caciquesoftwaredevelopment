import React, { useState, useEffect } from 'react';

const CONSENT_STORAGE_KEY = 'cacique_cookie_consent';
const CONSENT_TTL_MS = 1000 * 60 * 60 * 24 * 180; // 6 meses

type ConsentStatus = 'accepted' | 'rejected';

interface StoredConsent {
  status: ConsentStatus;
  timestamp: number;
}

// Lee el consentimiento guardado y lo trata como expirado (o inexistente) si
// pasó el TTL, para forzar a renovarlo periódicamente.
export const getStoredConsent = (): StoredConsent | null => {
  const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed: StoredConsent = JSON.parse(raw);
    if (Date.now() - parsed.timestamp > CONSENT_TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
};

// Punto único de verdad para saber si hoy se pueden cargar scripts de
// analítica/marketing (Google Analytics, Meta Pixel, etc.). Mientras el
// sitio no cargue ninguno, esto no bloquea nada — pero cuando se agregue
// uno, debe consultarse esta función antes de inyectarlo.
export const hasAnalyticsConsent = (): boolean => {
  const consent = getStoredConsent();
  return consent?.status === 'accepted';
};

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) {
      // Small delay for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (status: ConsentStatus) => {
    const consent: StoredConsent = { status, timestamp: Date.now() };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleAccept = () => saveConsent('accepted');
  const handleReject = () => saveConsent('rejected');
  const handleDismiss = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[100] animate-fadeIn transition-opacity duration-500">
      <div className="bg-[#FFFFFF] border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] p-5 flex flex-col gap-4 relative">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-[#555555] hover:text-[#0a0a0a] transition-colors border-none bg-transparent cursor-pointer"
          aria-label="Cerrar aviso de cookies sin decidir"
        >
          ✕
        </button>
        <div>
          <h4 className="font-headline font-bold text-lg uppercase text-[#0a0a0a] m-0 mb-1">
            USO DE COOKIES
          </h4>
          <p className="font-body text-[13px] leading-relaxed text-[#555555] pr-6 m-0">
            Utilizamos cookies para garantizar la mejor experiencia, analizar nuestro tráfico y optimizar el rendimiento del sitio. Puedes aceptar o rechazar su uso. Más detalles en nuestra{' '}
            <a href="/privacidad" target="_blank" rel="noopener noreferrer" className="underline text-[#0a0a0a] hover:opacity-70">
              Política de Privacidad
            </a>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={handleAccept}
            className="btn-primary py-2.5 !px-6 w-full sm:w-auto text-[13px]"
          >
            ACEPTAR
          </button>
          <button
            onClick={handleReject}
            className="btn-secondary py-2.5 !px-6 w-full sm:w-auto text-[13px]"
          >
            RECHAZAR
          </button>
        </div>
      </div>
    </div>
  );
};
