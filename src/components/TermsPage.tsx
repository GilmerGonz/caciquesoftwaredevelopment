import React from 'react';
import { LegalLayout } from './LegalLayout';

export const TermsPage: React.FC = () => {
  return (
    <LegalLayout title="Términos y Condiciones" updatedAt="21 de agosto de 2026">
      <p>
        Este documento es un <strong>borrador informativo</strong> preparado como punto de partida y
        aún no ha sido revisado por un abogado. Cacique Software Development recomienda su propia
        revisión legal antes de considerarlo definitivo.
      </p>

      <h2>1. Aceptación de los términos</h2>
      <p>
        Al navegar y usar este sitio web (caciquesoftwaredev.agency), aceptas estos Términos y
        Condiciones. Si no estás de acuerdo, te pedimos no usar el sitio.
      </p>

      <h2>2. Descripción del servicio</h2>
      <p>
        Este sitio es la landing page informativa y comercial de Cacique Software Development,
        agencia de desarrollo de software B2B enfocada en landing pages, automatización de
        procesos e integración de inteligencia artificial. El sitio en sí no presta servicios de
        software directamente; sirve para presentar la agencia y captar solicitudes de contacto.
      </p>

      <h2>3. Formulario de contacto</h2>
      <p>
        El formulario "Diagnóstico B2B" es una vía de contacto, no una contratación automática de
        servicios. El envío de tus datos a través de WhatsApp o correo no genera ninguna obligación
        contractual hasta que ambas partes acuerden y firmen los términos específicos de un
        proyecto por separado.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        El contenido de este sitio (textos, diseño, logo, código de la landing) es propiedad de
        Cacique Software Development, salvo las marcas de terceros mencionadas en la sección de
        tecnologías, que pertenecen a sus respectivos dueños y se mencionan únicamente para indicar
        el stack técnico con el que trabajamos, sin implicar afiliación, patrocinio o alianza
        comercial formal con esas marcas.
      </p>

      <h2>5. Uso aceptable</h2>
      <p>
        Te comprometes a no usar este sitio para fines ilícitos, ni a intentar vulnerar su
        seguridad, ni a extraer masivamente su contenido sin autorización.
      </p>

      <h2>6. Limitación de responsabilidad</h2>
      <p>
        Este sitio se ofrece "tal cual". No garantizamos que esté libre de errores en todo momento.
        Cacique no será responsable por daños indirectos derivados del uso del sitio, más allá de
        lo que exija la ley aplicable.
      </p>

      <h2>7. Enlaces externos</h2>
      <p>
        El sitio puede enlazar a servicios de terceros (WhatsApp, correo electrónico). No somos
        responsables de las políticas o el contenido de esos servicios externos.
      </p>

      <h2>8. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República Bolivariana de Venezuela, sin
        perjuicio de las normas de protección al consumidor que puedan aplicar según tu país de
        residencia si contratas nuestros servicios desde el extranjero.
      </p>

      <h2>9. Modificaciones</h2>
      <p>
        Podemos actualizar estos Términos y Condiciones en cualquier momento. La fecha de "última
        actualización" al inicio de esta página refleja la versión vigente.
      </p>

      <h2>10. Contacto</h2>
      <p>
        Para cualquier duda sobre estos Términos, escríbenos a{' '}
        <a href="mailto:dejesusgonzalezalvarez@gmail.com">dejesusgonzalezalvarez@gmail.com</a>.
      </p>
    </LegalLayout>
  );
};
