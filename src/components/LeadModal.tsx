import React, { useState, useEffect } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Desarrollo Web');
  const [revenue, setRevenue] = useState('100K - 500K USD');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      setIsSubmitted(false);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const text = `Hola Cacique, mi nombre es ${fullName} de la empresa ${businessName || 'N/D'}.\n\n` +
      `Servicio requerido: ${service}\n` +
      `Presupuesto/Facturacion: ${revenue}\n` +
      `WhatsApp de contacto: ${phone}\n` +
      `Detalles: ${details || 'Deseo solicitar un diagnostico para mi negocio.'}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/584123456789?text=${encodedText}`, '_blank');
    setIsSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/80 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#F5F5F5] border-2 border-[#1a1a1a] p-6 md:p-10 max-w-[650px] w-full max-h-[90vh] overflow-y-auto relative shadow-[12px_12px_0px_#0a0a0a]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 font-headline text-2xl font-black text-[#0a0a0a] bg-transparent border-none cursor-pointer hover:opacity-70 p-2"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <div>
            <span className="badge mb-3 inline-block">DIAGNOSTICO B2B SIN COSTO</span>
            <h3 id="consultation-modal-title" className="font-headline font-black text-[clamp(28px,4vw,42px)] uppercase text-[#0a0a0a] leading-tight mb-2">
              HABLAR CON UN DESARROLLADOR
            </h3>
            <p className="font-body text-sm font-light text-[#555555] mb-6">
              Completa los datos para evaluar la factibilidad tecnica de tu proyecto en 24 horas.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block font-body text-xs font-normal uppercase tracking-wider text-[#0a0a0a] mb-1">
                  NOMBRE COMPLETO *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ej. Carlos Mendoza"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-[#1a1a1a] p-3 font-body text-sm text-[#0a0a0a] focus:outline-none focus:ring-1 focus:ring-[#0a0a0a]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs font-normal uppercase tracking-wider text-[#0a0a0a] mb-1">
                    EMPRESA
                  </label>
                  <input
                    type="text"
                    placeholder="ej. Inversiones C.A."
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full bg-white border border-[#1a1a1a] p-3 font-body text-sm text-[#0a0a0a] focus:outline-none focus:ring-1 focus:ring-[#0a0a0a]"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs font-normal uppercase tracking-wider text-[#0a0a0a] mb-1">
                    WHATSAPP DE CONTACTO *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+58 412 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#1a1a1a] p-3 font-body text-sm text-[#0a0a0a] focus:outline-none focus:ring-1 focus:ring-[#0a0a0a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs font-normal uppercase tracking-wider text-[#0a0a0a] mb-1">
                    SERVICIO REQUERIDO
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white border border-[#1a1a1a] p-3 font-body text-sm text-[#0a0a0a] focus:outline-none"
                  >
                    <option value="Desarrollo Web">Desarrollo Web / Landing Page</option>
                    <option value="Automatización">Automatización de Procesos</option>
                    <option value="Integración IA">Integración Inteligencia Artificial</option>
                    <option value="Sistema a Medida">Sistema B2B / Software a Medida</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs font-normal uppercase tracking-wider text-[#0a0a0a] mb-1">
                    FACTURACION ANUAL
                  </label>
                  <select
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className="w-full bg-white border border-[#1a1a1a] p-3 font-body text-sm text-[#0a0a0a] focus:outline-none"
                  >
                    <option value="Menos de 100K USD">Menos de 100K USD</option>
                    <option value="100K - 500K USD">100K - 500K USD</option>
                    <option value="Mas de 500K USD">Mas de 500K USD</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-body text-xs font-normal uppercase tracking-wider text-[#0a0a0a] mb-1">
                  RETO PRINCIPAL O DETALLES DEL PROYECTO
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe brevemente lo que tu negocio necesita resolver..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-white border border-[#1a1a1a] p-3 font-body text-sm text-[#0a0a0a] focus:outline-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto flex-1 py-4 text-center"
                >
                  ENVIAR POR WHATSAPP
                </button>
                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="btn-secondary w-full sm:w-auto py-4 text-center"
                >
                  ENVIAR DIAGNOSTICO
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <span className="badge mb-4 inline-block">SOLICITUD RECIBIDA</span>
            <h3 className="font-headline font-black text-4xl uppercase text-[#0a0a0a] mb-3">
              GRACIAS, {fullName.toUpperCase()}
            </h3>
            <p className="font-body text-base font-light text-[#555555] max-w-[450px] mx-auto mb-8 leading-relaxed">
              Hemos registrado tu solicitud para <strong className="font-semibold text-[#0a0a0a]">{businessName || 'tu empresa'}</strong>. Un consultor senior de Cacique revisara tu caso y respondera en menos de 24 horas.
            </p>
            <button
              onClick={onClose}
              className="btn-primary px-8"
            >
              ENTENDIDO
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
