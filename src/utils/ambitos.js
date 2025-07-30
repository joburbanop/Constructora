import imgColombia from '../assets/Colombia.webp';
import imgUSA from '../assets/Usa.webp';
import imgLujoLarge from '../assets/casas_lugo/casas_lugo_large.jpg';
import imgLujoMedium from '../assets/casas_lugo/casas_lugo_medium.jpg';
import imgLujoSmall from '../assets/casas_lugo/casas_lugo_small.jpg';
import imgLujoThumbnail from '../assets/casas_lugo/casas_lugo_thumbnail.jpg';

// Función para obtener la imagen optimizada de Casas de Lujo según el dispositivo
const getOptimizedLujoImage = () => {
  // Detectar el tamaño de pantalla para optimizar la carga
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    if (width >= 1200) {
      return imgLujoLarge; // Desktop
    } else if (width >= 768) {
      return imgLujoMedium; // Tablet
    } else {
      return imgLujoSmall; // Mobile
    }
  }
  // Por defecto usar medium para SSR
  return imgLujoMedium;
};

// Función para obtener srcSet para imágenes responsive
export const getLujoImageSrcSet = () => {
  return `${imgLujoThumbnail} 400w, ${imgLujoSmall} 800w, ${imgLujoMedium} 1200w, ${imgLujoLarge} 1920w`;
};

const ambitos = [
  {
    img: imgColombia,
    title: 'colombia_title',
    desc: 'colombia_desc',
    bgPosition: 'center 35%'
  },
  {
    img: imgUSA,
    title: 'usa_title',
    desc: 'usa_desc',
    bgPosition: 'center 35%'
  },
  {
    img: getOptimizedLujoImage(),
    title: 'lujo_title',
    desc: 'lujo_desc',
    bgPosition: 'center 0%'
  }
];

export default ambitos; 