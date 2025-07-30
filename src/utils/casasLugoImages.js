// Imágenes optimizadas de Casas de Lugo
import casasLugoLarge from '../assets/casas_lujo/casas_lugo_large.jpg';
import casasLugoMedium from '../assets/casas_lujo/casas_lugo_medium.jpg';
import casasLugoSmall from '../assets/casas_lujo/casas_lugo_small.jpg';
import casasLugoThumbnail from '../assets/casas_lujo/casas_lugo_thumbnail.jpg';

// Configuración de imágenes optimizadas para Casas de Lugo
export const casasLugoImages = {
  // Imagen original (4.5MB) - NO USAR EN PRODUCCIÓN
  original: '/src/assets/DJI_0013.JPG',
  
  // Versiones optimizadas
  large: {
    src: casasLugoLarge,
    width: 1920,
    height: 1080,
    size: '682KB',
    quality: 'Alta',
    useCase: 'Desktop, pantallas grandes'
  },
  
  medium: {
    src: casasLugoMedium,
    width: 1200,
    height: 675,
    size: '294KB',
    quality: 'Media',
    useCase: 'Tablets, pantallas medianas'
  },
  
  small: {
    src: casasLugoSmall,
    width: 800,
    height: 450,
    size: '133KB',
    quality: 'Baja',
    useCase: 'Mobile, pantallas pequeñas'
  },
  
  thumbnail: {
    src: casasLugoThumbnail,
    width: 400,
    height: 225,
    size: '38KB',
    quality: 'Muy baja',
    useCase: 'Miniaturas, previews'
  }
};

// Función para obtener la imagen optimizada según el dispositivo
export const getOptimizedCasasLugoImage = (deviceType = 'desktop') => {
  switch (deviceType) {
    case 'mobile':
      return casasLugoImages.small;
    case 'tablet':
      return casasLugoImages.medium;
    case 'desktop':
    default:
      return casasLugoImages.large;
  }
};

// Función para obtener imagen responsive
export const getResponsiveCasasLugoImage = () => {
  return {
    srcSet: `${casasLugoImages.thumbnail.src} 400w, ${casasLugoImages.small.src} 800w, ${casasLugoImages.medium.src} 1200w, ${casasLugoImages.large.src} 1920w`,
    sizes: '(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px',
    src: casasLugoImages.medium.src,
    alt: 'Casas de Lugo - Vista aérea'
  };
};

// Función para usar con OptimizedImage existente
export const getCasasLugoImageForOptimizedImage = (size = 'medium') => {
  const imageConfig = casasLugoImages[size] || casasLugoImages.medium;
  return {
    src: imageConfig.src,
    alt: 'Casas de Lugo - Vista aérea',
    width: imageConfig.width,
    height: imageConfig.height,
    className: `casas-lugo-image size-${size}`
  };
};

// Función para obtener imagen responsive para OptimizedImage
export const getCasasLugoResponsiveForOptimizedImage = () => {
  const responsiveConfig = getResponsiveCasasLugoImage();
  return {
    src: responsiveConfig.src,
    srcSet: responsiveConfig.srcSet,
    sizes: responsiveConfig.sizes,
    alt: responsiveConfig.alt,
    className: 'casas-lugo-image responsive'
  };
};

// Estadísticas de optimización
export const casasLugoOptimizationStats = {
  originalSize: '4.5MB',
  optimizedSizes: {
    large: '682KB (85% reducción)',
    medium: '294KB (93% reducción)',
    small: '133KB (97% reducción)',
    thumbnail: '38KB (99% reducción)'
  },
  totalOptimization: 'Promedio 93% de reducción de tamaño'
};

export default casasLugoImages; 