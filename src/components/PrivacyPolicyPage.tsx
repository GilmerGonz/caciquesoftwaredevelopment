import React from 'react';
import { LegalLayout } from './LegalLayout';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalLayout title="Política de Privacidad" updatedAt="21 de agosto de 2026">
      <p>
        Este documento es un <strong>borrador informativo</strong> preparado como punto de partida y
        aún no ha sido revisado por un abogado. Cacique Software Development recomienda su propia
        revisión legal antes de considerarlo definitivo, y lo actualizará según sea necesario.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        Cacique Software Development ("Cacique", "nosotros") opera este sitio web y es responsable
        de los datos personales que se recolectan a través del formulario de contacto. Puedes
        escribirnos a{' '}
        <a href="mailto:dejesusgonzalezalvarez@gmail.com">dejesusgonzalezalvarez@gmail.com</a> para
        cualquier consulta relacionada con esta política.
      </p>

      <h2>2. Qué datos recolectamos</h2>
      <p>A través de nuestro formulario de contacto ("Diagnóstico B2B") recolectamos:</p>
      <ul>
        <li>Nombre completo</li>
        <li>Nombre de la empresa (opcional)</li>
        <li>Número de WhatsApp de contacto</li>
        <li>Tipo de servicio solicitado</li>
        <li>Rango de facturación anual estimada</li>
        <li>Detalles del proyecto que decidas compartir</li>
      </ul>
      <p>
        No recolectamos datos sensibles (salud, origen étnico, creencias religiosas o políticas,
        datos biométricos) a través de este formulario, y te pedimos no incluirlos voluntariamente
        en el campo de detalles.
      </p>

      <h2>3. Cómo se envían y almacenan tus datos</h2>
      <p>
        Cacique <strong>no tiene un servidor ni base de datos propia</strong> conectada a este
        formulario. Al enviarlo, tu navegador abre directamente WhatsApp (a través de{' '}
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">wa.me</a>, servicio de
        Meta) o tu cliente de correo (Gmail/Google), con el mensaje ya redactado para que tú lo
        confirmes y envíes desde ahí. A partir de ese momento, tus datos quedan sujetos también a
        las políticas de privacidad de WhatsApp/Meta o de tu proveedor de correo, no solo a esta.
      </p>

      <h2>4. Finalidad del tratamiento</h2>
      <p>
        Usamos los datos que nos envías únicamente para evaluar la factibilidad de tu proyecto,
        contactarte y darte seguimiento comercial. No los usamos para ningún otro fin ni los
        vendemos ni compartimos con terceros distintos a los mencionados en la sección 3.
      </p>

      <h2>5. Base legal / consentimiento</h2>
      <p>
        El tratamiento se basa en tu consentimiento expreso, otorgado al marcar la casilla de
        aceptación antes de enviar el formulario. Puedes retirar tu consentimiento en cualquier
        momento escribiéndonos al correo indicado arriba. Venezuela no cuenta aún con una ley
        integral de protección de datos personales equivalente al GDPR europeo; nos apoyamos en el
        derecho constitucional de habeas data (artículo 28 de la Constitución de la República
        Bolivariana de Venezuela) y en principios generales de transparencia, minimización y
        consentimiento como buena práctica, independientemente de la obligación legal específica
        que aplique.
      </p>

      <h2>6. Conservación de los datos</h2>
      <p>
        Conservamos las conversaciones de WhatsApp y correo que resulten de tu contacto mientras
        exista una relación comercial activa o potencial contigo, y hasta un máximo de 24 meses de
        inactividad, salvo que nos pidas eliminarlos antes o que exista una obligación legal de
        conservarlos por más tiempo (por ejemplo, registros contables de un proyecto contratado).
      </p>

      <h2>7. Transferencias internacionales</h2>
      <p>
        Como el envío de tus datos ocurre a través de WhatsApp (Meta Platforms, Inc., con sede en
        EE. UU.) y/o Gmail (Google LLC, con sede en EE. UU.), tus datos pueden procesarse fuera de
        Venezuela, en los servidores de esos proveedores. Su tratamiento posterior se rige por las
        políticas de privacidad propias de Meta y Google, no por este documento.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        Puedes solicitarnos en cualquier momento el acceso, rectificación o eliminación de los
        datos que nos hayas compartido, escribiendo a{' '}
        <a href="mailto:dejesusgonzalezalvarez@gmail.com">dejesusgonzalezalvarez@gmail.com</a>.
        Dado que no almacenamos los datos en una base propia, la eliminación aplicará a las
        conversaciones de WhatsApp/correo que tengamos contigo.
      </p>

      <h2>9. Menores de edad</h2>
      <p>
        Este sitio y su formulario de contacto están dirigidos a empresas y profesionales mayores
        de edad. No recolectamos intencionalmente datos de menores de edad. Si detectamos que un
        menor nos envió información por error, la eliminaremos al ser notificados.
      </p>

      <h2>10. Cookies</h2>
      <p>
        Usamos únicamente almacenamiento local (<code>localStorage</code>) en tu navegador para
        recordar tu decisión sobre el aviso de cookies (aceptar/rechazar) y evitar mostrártelo en
        cada visita. Actualmente <strong>no cargamos scripts de analítica ni de publicidad</strong>{' '}
        (como Google Analytics o Meta Pixel) en el sitio. Si en el futuro incorporamos alguno,
        solo se activará para los usuarios que hayan aceptado el aviso de cookies, y actualizaremos
        esta sección con el detalle correspondiente.
      </p>

      <h2>11. Seguridad</h2>
      <p>
        Al no operar un servidor ni una base de datos propia para este formulario, no existe un
        repositorio central de tus datos que nosotros administremos y que pueda sufrir una filtración
        de nuestro lado. El sitio se sirve por HTTPS. La seguridad de los mensajes ya enviados
        depende de las medidas propias de WhatsApp/Meta o de tu proveedor de correo.
      </p>

      <h2>12. Hosting</h2>
      <p>
        Este sitio está alojado en Vercel Inc., que puede procesar datos técnicos básicos (como tu
        dirección IP) como parte normal de la entrega del sitio web.
      </p>

      <h2>13. Cambios a esta política</h2>
      <p>
        Podemos actualizar este documento cuando cambien nuestras prácticas de tratamiento de
        datos. La fecha de "última actualización" al inicio de esta página refleja la versión
        vigente.
      </p>

      <h2>14. Contacto</h2>
      <p>
        Para cualquier duda sobre esta Política de Privacidad, escríbenos a{' '}
        <a href="mailto:dejesusgonzalezalvarez@gmail.com">dejesusgonzalezalvarez@gmail.com</a>.
      </p>
    </LegalLayout>
  );
};
