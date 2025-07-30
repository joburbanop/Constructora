// Configuración de imágenes optimizadas para diferentes dispositivos
export const imageSizes = {
  mobile: {
    width: 768,
    quality: 80
  },
  tablet: {
    width: 1024,
    quality: 85
  },
  desktop: {
    width: 1920,
    quality: 90
  }
};

// URLs de imágenes optimizadas para el slider de Colombia
export const optimizedSliderImages = {
  colombia: {
    slide1: {
      mobile: '/src/assets/cana_dulce/cana_dulce_galeria1.webp',
      tablet: '/src/assets/cana_dulce/cana_dulce_galeria1.webp',
      desktop: '/src/assets/cana_dulce/cana_dulce_galeria1.webp'
    },
    slide2: {
      mobile: '/src/assets/puertas_sol/img1.webp',
      tablet: '/src/assets/puertas_sol/img1.webp',
      desktop: '/src/assets/puertas_sol/img1.webp'
    },
    slide3: {
      mobile: '/src/assets/rincon_lago/Rincon_lago_galeria1.webp',
      tablet: '/src/assets/rincon_lago/Rincon_lago_galeria1.webp',
      desktop: '/src/assets/rincon_lago/Rincon_lago_galeria1.webp'
    }
  }
};

// Función para obtener la imagen optimizada según el dispositivo
export const getOptimizedImage = (imageSet, deviceType = 'desktop') => {
  return imageSet[deviceType] || imageSet.desktop;
};

// Función para detectar el tipo de dispositivo
export const getDeviceType = () => {
  const width = window.innerWidth;
  if (width <= 768) return 'mobile';
  if (width <= 1024) return 'tablet';
  return 'desktop';
}; 