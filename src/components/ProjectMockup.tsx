import React from 'react';

import vittaImg from '../assets/images/vitta_mockup_1786468126754.jpg';
import logisticaImg from '../assets/images/logistica_express_mockup_1786468143373.jpg';
import educaImg from '../assets/images/educa_venezuela_mockup_1786468157135.jpg';
import tecnoImg from '../assets/images/tecno_build_mockup_1786468176479.jpg';
import bancoImg from '../assets/images/banco_nuevo_mockup_1786468192416.jpg';
import saborImg from '../assets/images/sabor_caribe_mockup_1786468212748.jpg';

interface ProjectMockupProps {
  projectId: string;
  className?: string;
  variant?: 'card' | 'modal';
}

const PROJECT_IMAGES: Record<string, { src: string; alt: string }> = {
  'logistica-express': {
    src: logisticaImg,
    alt: 'Logística Express Mockup',
  },
  'educa-latam': {
    src: educaImg,
    alt: 'Educa LatAm Mockup',
  },
  'tecno-build': {
    src: tecnoImg,
    alt: 'Tecno Build Mockup',
  },
  'banco-nuevo': {
    src: bancoImg,
    alt: 'Banco Nuevo Mockup',
  },
  'sabor-caribe': {
    src: saborImg,
    alt: 'Sabor Caribe Mockup',
  },
  vitta: {
    src: vittaImg,
    alt: 'VITTA Moda Mockup',
  },
};

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  projectId,
  className = '',
  variant = 'card',
}) => {
  const imageInfo = PROJECT_IMAGES[projectId];

  if (!imageInfo) {
    return null;
  }

  // La card vive dentro de un grupo con hover (listado de portafolio); el
  // modal se abre a pantalla completa y no necesita el zoom sutil al pasar
  // el mouse, así que solo la variante 'card' lo aplica.
  const hoverEffect = variant === 'card' ? 'transition-transform duration-500 group-hover:scale-105' : '';

  return (
    <div className={`w-full aspect-[16/9] overflow-hidden bg-[#EAEAEA] relative ${className}`}>
      <img
        src={imageInfo.src}
        alt={imageInfo.alt}
        className={`w-full h-full object-cover ${hoverEffect}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
