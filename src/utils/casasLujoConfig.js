// Configuración de imágenes optimizadas para Casas de Lujo
import casasLujoHeroLarge from '../assets/casas_lujo/casas_lujo_hero_large.jpg';
import casasLujoHeroMedium from '../assets/casas_lujo/casas_lujo_hero_medium.jpg';
import casasLujoHeroSmall from '../assets/casas_lujo/casas_lujo_hero_small.jpg';

// Imágenes de Casas de Lugo (ya optimizadas)
import casasLugoLarge from '../assets/casas_lujo/casas_lugo_large.jpg';
import casasLugoMedium from '../assets/casas_lujo/casas_lugo_medium.jpg';
import casasLugoSmall from '../assets/casas_lujo/casas_lugo_small.jpg';
import casasLugoThumbnail from '../assets/casas_lujo/casas_lugo_thumbnail.jpg';

// Configuración de imágenes para Casas de Lujo
export const casasLujoImages = {
  // Hero images
  hero: {
    large: {
      src: casasLujoHeroLarge,
      width: 1920,
      height: 1080,
      size: '555KB',
      quality: 'Alta',
      useCase: 'Hero desktop'
    },
    medium: {
      src: casasLujoHeroMedium,
      width: 1200,
      height: 675,
      size: '238KB',
      quality: 'Media',
      useCase: 'Hero tablet'
    },
    small: {
      src: casasLujoHeroSmall,
      width: 800,
      height: 450,
      size: '113KB',
      quality: 'Baja',
      useCase: 'Hero mobile'
    }
  },
  
  // Casas de Lugo (vista aérea)
  lugo: {
    large: {
      src: casasLugoLarge,
      width: 1920,
      height: 1080,
      size: '682KB',
      quality: 'Alta',
      useCase: 'Vista aérea desktop'
    },
    medium: {
      src: casasLugoMedium,
      width: 1200,
      height: 675,
      size: '294KB',
      quality: 'Media',
      useCase: 'Vista aérea tablet'
    },
    small: {
      src: casasLugoSmall,
      width: 800,
      height: 450,
      size: '133KB',
      quality: 'Baja',
      useCase: 'Vista aérea mobile'
    },
    thumbnail: {
      src: casasLugoThumbnail,
      width: 400,
      height: 225,
      size: '38KB',
      quality: 'Muy baja',
      useCase: 'Vista aérea thumbnail'
    }
  }
};

// Función para obtener imagen hero optimizada según dispositivo
export const getCasasLujoHeroImage = (deviceType = 'desktop') => {
  switch (deviceType) {
    case 'mobile':
      return casasLujoImages.hero.small;
    case 'tablet':
      return casasLujoImages.hero.medium;
    case 'desktop':
    default:
      return casasLujoImages.hero.large;
  }
};

// Función para obtener imagen de Lugo optimizada según dispositivo
export const getCasasLugoImage = (deviceType = 'desktop') => {
  switch (deviceType) {
    case 'mobile':
      return casasLujoImages.lugo.small;
    case 'tablet':
      return casasLujoImages.lugo.medium;
    case 'desktop':
    default:
      return casasLujoImages.lugo.large;
  }
};

// Función para obtener configuración para OptimizedImage
export const getCasasLujoHeroForOptimizedImage = (size = 'medium') => {
  const imageConfig = casasLujoImages.hero[size] || casasLujoImages.hero.medium;
  return {
    src: imageConfig.src,
    alt: 'Casas de Lujo - Exclusividad y confort',
    width: imageConfig.width,
    height: imageConfig.height,
    className: `casas-lujo-hero size-${size}`
  };
};

// Función para obtener configuración responsive para OptimizedImage
export const getCasasLujoHeroResponsiveForOptimizedImage = () => {
  return {
    src: casasLujoImages.hero.medium.src,
    srcSet: `${casasLujoImages.hero.small.src} 800w, ${casasLujoImages.hero.medium.src} 1200w, ${casasLujoImages.hero.large.src} 1920w`,
    sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px',
    alt: 'Casas de Lujo - Exclusividad y confort',
    className: 'casas-lujo-hero responsive'
  };
};

// Estadísticas de optimización
export const casasLujoOptimizationStats = {
  hero: {
    originalSize: '562KB',
    optimizedSizes: {
      large: '555KB (1% reducción)',
      medium: '238KB (58% reducción)',
      small: '113KB (80% reducción)'
    },
    totalOptimization: 'Promedio 46% de reducción de tamaño'
  },
  lugo: {
    originalSize: '4.5MB',
    optimizedSizes: {
      large: '682KB (85% reducción)',
      medium: '294KB (93% reducción)',
      small: '133KB (97% reducción)',
      thumbnail: '38KB (99% reducción)'
    },
    totalOptimization: 'Promedio 93% de reducción de tamaño'
  }
};

export default casasLujoImages; 