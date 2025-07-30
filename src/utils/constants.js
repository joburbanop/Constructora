// Constantes de la aplicación
export const APP_CONFIG = {
  NAME: 'Construct',
  VERSION: '1.0.0',
  DEFAULT_LANGUAGE: 'es',
  SUPPORTED_LANGUAGES: ['es', 'en'],
  API_BASE_URL: process.env.REACT_APP_API_URL || 'https://api.construct.com',
  STORAGE_KEYS: {
    ANNOUNCEMENT_MODAL: 'announcementModal',
    LANGUAGE: 'language',
    THEME: 'theme',
    USER_PREFERENCES: 'userPreferences'
  },
  ANIMATION_DURATIONS: {
    MODAL_CLOSE: 300,
    FADE_IN: 400,
    SLIDE_IN: 400,
    SCALE_IN: 400,
    BOUNCE_IN: 600
  },
  AUTO_CLOSE_TIMES: {
    SHORT: 3000,
    MEDIUM: 5000,
    LONG: 8000,
    EXTENDED: 10000
  },
  IMAGE_QUALITY: {
    MOBILE: 0.8,
    TABLET: 0.85,
    DESKTOP: 0.9
  },
  BREAKPOINTS: {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1920
  }
};

// Rutas de la aplicación
export const ROUTES = {
  HOME: '/',
  PROJECTS: {
    ALL: '/todos-los-proyectos',
    COLOMBIA: '/proyectos-colombia',
    USA: '/proyectos-usa'
  },
  PROJECT_DETAILS: {
    RINCON_LAGO: '/rincon-del-lago',
    CORAL_MALL: '/coral-mall',
    CANA_BRAVA: '/cana-brava',
    CANA_DULCE: '/cana-dulce',
    PUERTAS_SOL: '/puertas-sol',
    PALMERAS_ITALIA: '/palmeras-italia',
    CASA_USA_PRIMERA: '/casa-usa-primera',
    CASA_USA_SEGUNDA: '/casa-usa-segunda'
  }
};

// Configuración de animaciones
export const ANIMATIONS = {
  FADE_IN: 'fadeIn',
  SLIDE_IN: 'slideIn',
  SCALE_IN: 'scaleIn',
  BOUNCE_IN: 'bounceIn'
};

// Tamaños de modales
export const MODAL_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

// Estados de proyectos
export const PROJECT_STATUS = {
  EN_MARCHA: 'en_marcha',
  ENTREGADO: 'entregado',
  PROXIMAMENTE: 'proximamente'
};

// Tipos de proyectos
export const PROJECT_TYPES = {
  CONDOMINIO: 'condominio',
  URBANIZACION: 'urbanizacion',
  LOCALES: 'locales',
  CASA: 'casa'
};

// Configuración de imágenes
export const IMAGE_CONFIG = {
  FORMATS: {
    WEBP: 'webp',
    PNG: 'png',
    JPG: 'jpg',
    JPEG: 'jpeg'
  },
  SIZES: {
    THUMBNAIL: 300,
    MEDIUM: 800,
    LARGE: 1920
  },
  QUALITY: {
    LOW: 0.6,
    MEDIUM: 0.8,
    HIGH: 0.9
  }
};

// Configuración de SEO
export const SEO_CONFIG = {
  DEFAULT_TITLE: 'Construct - Proyectos Inmobiliarios',
  DEFAULT_DESCRIPTION: 'Descubre nuestros proyectos inmobiliarios de alta calidad en Colombia y Estados Unidos',
  DEFAULT_KEYWORDS: 'constructora, proyectos inmobiliarios, lotes, casas, Colombia, Estados Unidos',
  DEFAULT_IMAGE: '/src/assets/LOGO.png'
};

// Configuración de contacto
export const CONTACT_CONFIG = {
  PHONE: '+57 320 421 0000',
  EMAIL: 'info@construct.com',
  WHATSAPP: '+573204210000',
  ADDRESS: 'Jamundí, Colombia',
  SOCIAL_MEDIA: {
    FACEBOOK: 'https://facebook.com/construct',
    INSTAGRAM: 'https://instagram.com/construct',
    TWITTER: 'https://twitter.com/construct'
  }
}; 