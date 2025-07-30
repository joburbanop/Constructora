// Configuración del slider para Casas de Lujo
// Reutiliza la estructura del componente Slider existente

import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import casasLujoSlide1 from '../assets/casas_lujo/casas_lujo_slide1_hq.jpg';
import casasLujoSlide2 from '../assets/casas_lujo/casas_lujo_slide2_hq.jpg';
import casasLujoSlide3 from '../assets/casas_lujo/casas_lujo_slide3_hq.jpg';
import casasLujoSlide4 from '../assets/casas_lujo/casas_lujo_slide4_hq.jpg';
import casasLujoSlide5 from '../assets/casas_lujo/casas_lujo_slide5_hq.jpg';

// Configuración del slider específico para Casas de Lujo
export const getCasasLujoSlides = (t) => [
  {
    id: 1,
    image: casasLujoSlide1,
    title: t.casas_lujo.slider_slide1_title,
    subtitle: t.casas_lujo.slider_slide1_subtitle,
    description: t.casas_lujo.hero_description,
    cta: t.casas_lujo.cta_boton,
    ctaLink: '#proyectos',
    overlay: {
      opacity: 0.4,
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)'
    }
  },
  {
    id: 2,
    image: casasLujoSlide2,
    title: t.casas_lujo.slider_slide2_title,
    subtitle: t.casas_lujo.slider_slide2_subtitle,
    description: t.casas_lujo.card_2_desc,
    cta: t.casas_lujo.cta_boton,
    ctaLink: '#caracteristicas',
    overlay: {
      opacity: 0.4,
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)'
    }
  },
  {
    id: 3,
    image: casasLujoSlide3,
    title: t.casas_lujo.slider_slide3_title,
    subtitle: t.casas_lujo.slider_slide3_subtitle,
    description: t.casas_lujo.card_3_desc,
    cta: t.casas_lujo.cta_boton,
    ctaLink: '#experiencia',
    overlay: {
      opacity: 0.4,
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)'
    }
  },
  {
    id: 4,
    image: casasLujoSlide4,
    title: t.casas_lujo.slider_slide4_title,
    subtitle: t.casas_lujo.slider_slide4_subtitle,
    description: t.casas_lujo.card_1_desc,
    cta: t.casas_lujo.cta_boton,
    ctaLink: '#proyectos',
    overlay: {
      opacity: 0.4,
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)'
    }
  },
  {
    id: 5,
    image: casasLujoSlide5,
    title: t.casas_lujo.slider_slide5_title,
    subtitle: t.casas_lujo.slider_slide5_subtitle,
    description: t.casas_lujo.card_4_desc,
    cta: t.casas_lujo.cta_boton,
    ctaLink: '#expertos',
    overlay: {
      opacity: 0.4,
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)'
    }
  }
];

// Configuración específica para el slider de Casas de Lujo
export const casasLujoSliderConfig = {
  // Configuración de Swiper
  swiper: {
    modules: [Pagination, Autoplay, EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
  },
  
  // Configuración de comportamiento
  useTranslations: false,
  useWhatsAppButton: false,
  
  // Configuración de estilos específicos
  styles: {
    height: '100vh',
    minHeight: '600px',
    overlayColor: 'rgba(0, 0, 0, 0.4)',
    textColor: '#ffffff',
    accentColor: '#ff6600',
    buttonStyle: 'gradient',
    buttonGradient: 'linear-gradient(135deg, #ff6600 0%, #ff8533 100%)',
  },
  
  // Configuración de responsive
  responsive: {
    mobile: {
      height: '70vh',
      minHeight: '500px',
      titleSize: '2rem',
      subtitleSize: '1.1rem',
    },
    tablet: {
      height: '80vh',
      minHeight: '550px',
      titleSize: '2.5rem',
      subtitleSize: '1.3rem',
    },
    desktop: {
      height: '100vh',
      minHeight: '600px',
      titleSize: '3.5rem',
      subtitleSize: '1.5rem',
    }
  }
};

// Función para obtener configuración según dispositivo
export const getCasasLujoSliderConfig = (deviceType = 'desktop') => {
  const config = { ...casasLujoSliderConfig };
  
  if (deviceType === 'mobile') {
    config.styles.height = casasLujoSliderConfig.responsive.mobile.height;
    config.styles.minHeight = casasLujoSliderConfig.responsive.mobile.minHeight;
  } else if (deviceType === 'tablet') {
    config.styles.height = casasLujoSliderConfig.responsive.tablet.height;
    config.styles.minHeight = casasLujoSliderConfig.responsive.tablet.minHeight;
  }
  
  return config;
};

// Slides básicos sin traducciones para uso interno
const slidesCasasLujoBasic = [
  {
    id: 1,
    image: casasLujoSlide1,
    title: 'Exclusividad en Cada Detalle',
    subtitle: 'Diseños únicos que reflejan el más alto nivel de sofisticación',
    description: 'Nuestras casas de lujo combinan arquitectura moderna con acabados premium para crear espacios que van más allá de lo ordinario.',
    cta: 'Descubrir Más',
    ctaLink: '#proyectos',
    overlay: {
      opacity: 0.4,
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)'
    }
  },
  {
    id: 2,
    image: casasLujoSlide2,
    title: 'Tecnología de Vanguardia',
    subtitle: 'Sistemas inteligentes para el hogar del futuro',
    description: 'Integramos la última tecnología en domótica y seguridad para ofrecerte el máximo confort y tranquilidad.',
    cta: 'Ver Tecnologías',
    ctaLink: '#caracteristicas',
    overlay: {
      opacity: 0.4,
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)'
    }
  },
  {
    id: 3,
    image: casasLujoSlide3,
    title: 'Materiales Premium',
    subtitle: 'Solo los mejores materiales para tu hogar',
    description: 'Seleccionamos cuidadosamente cada material para garantizar durabilidad, belleza y exclusividad en cada espacio.',
    cta: 'Conocer Materiales',
    ctaLink: '#experiencia',
    overlay: {
      opacity: 0.4,
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)'
    }
  },
  {
    id: 4,
    image: casasLujoSlide4,
    title: 'Ubicaciones Privilegiadas',
    subtitle: 'Las mejores zonas para tu estilo de vida',
    description: 'Nuestros proyectos se ubican en las zonas más exclusivas, con fácil acceso y proximidad a servicios de lujo.',
    cta: 'Ver Ubicaciones',
    ctaLink: '#proyectos',
    overlay: {
      opacity: 0.4,
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)'
    }
  },
  {
    id: 5,
    image: casasLujoSlide5,
    title: 'Experiencia Garantizada',
    subtitle: '17 años construyendo sueños de lujo',
    description: 'Nuestra trayectoria y experiencia nos respaldan para entregarte la casa de tus sueños con la más alta calidad.',
    cta: 'Conocer Experiencia',
    ctaLink: '#expertos',
    overlay: {
      opacity: 0.4,
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)'
    }
  }
];

// Función para obtener slides con configuración optimizada (versión sin traducciones)
export const getCasasLujoSlidesBasic = () => {
  return slidesCasasLujoBasic.map(slide => ({
    ...slide,
    // Agregar configuración de imagen optimizada
    imageConfig: {
      src: slide.image,
      alt: slide.title,
      loading: 'lazy',
      className: 'casas-lujo-slide-image',
      quality: 'high',
      priority: true
    }
  }));
};

// Información sobre la optimización de imágenes
export const casasLujoImageOptimization = {
  originalSize: '420KB (promedio)',
  optimizedSize: '443KB (promedio)',
  resolution: '1920px (alta calidad)',
  format: 'JPEG optimizado',
  quality: 'Alta definición para pantallas grandes',
  improvement: 'Imágenes nítidas y claras para el slider de lujo'
};

export default slidesCasasLujoBasic; 