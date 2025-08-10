# 🏗️ Construct - Constructora Casas y Lotes SAS

## 📋 Descripción del Proyecto

**Construct** es una aplicación web moderna desarrollada en React para la constructora **Casas y Lotes SAS**, especializada en proyectos inmobiliarios en Colombia y Estados Unidos. La aplicación presenta proyectos de condominios, urbanizaciones, casas de lujo y locales comerciales con una interfaz optimizada y responsive.

## 🎯 Características Principales

- **🌍 Multiidioma**: Soporte completo para español e inglés
- **📱 Responsive Design**: Optimizado para todos los dispositivos
- **⚡ Performance**: Imágenes optimizadas en WebP con lazy loading
- **🎨 UI/UX Moderna**: Diseño profesional con animaciones suaves
- **🔍 SEO Optimizado**: Meta tags y estructura semántica
- **📊 Analytics**: Integración con herramientas de análisis
- **💬 WhatsApp Integration**: Botón flotante de contacto directo

## 🛠️ Stack Tecnológico

### Frontend
- **React 19.1.0** - Biblioteca principal de UI
- **React Router DOM 7.6.3** - Enrutamiento de la aplicación
- **Vite 7.0.0** - Build tool y servidor de desarrollo
- **Swiper 11.2.10** - Carousel y sliders
- **React Icons 5.5.0** - Iconografía

### Optimización de Imágenes
- **Sharp 0.34.3** - Procesamiento de imágenes
- **Vite Imagetools 7.1.0** - Optimización automática de assets
- **WebP Format** - Formato de imagen optimizado

### Herramientas de Desarrollo
- **ESLint 9.29.0** - Linting de código
- **SWC** - Compilador rápido de React
- **Terser** - Minificación de código

## 🎨 Paleta de Colores

### Colores Principales
```css
/* Naranja Principal */
--primary-color: #ff6600;
--primary-light: #ff914d;
--primary-dark: #e55a00;

/* Gris Secundario */
--secondary-color: #222;
--secondary-light: #444;
--secondary-dark: #111;

/* Naranja Claro */
--accent-color: #ffb347;
--accent-light: #ffc266;
--accent-dark: #e6a23e;
```

### Colores por Proyecto
```css
/* Rincón del Lago */
--rincon-color: #ff6600;

/* San Miguel */
--san-miguel-color: #ff914d;

/* Coral Mall */
--coral-color: #ffb347;

/* Caña Dulce */
--cana-dulce-color: #ffb347;

/* Palmeras Italia */
--palmeras-color: #ffb347;

/* Puertas del Sol */
--puertas-sol-color: #ff6600;
```

## 📁 Estructura del Proyecto

```
construct/
├── public/                 # Archivos públicos
├── scripts/               # Scripts de optimización de imágenes
├── src/
│   ├── assets/           # Imágenes y recursos
│   │   ├── ambito/       # Imágenes de ámbito de acción
│   │   ├── anuncios/     # Imágenes de anuncios
│   │   ├── cana_brava/   # Imágenes de Caña Brava
│   │   ├── cana_dulce/   # Imágenes de Caña Dulce
│   │   ├── casas/        # Imágenes de casas
│   │   ├── Casas_de_Lujo/ # Imágenes de casas de lujo
│   │   ├── coral_mall/   # Imágenes de Coral Mall
│   │   ├── expertos/     # Imágenes de expertos
│   │   ├── logos_social/ # Iconos de amenidades
│   │   ├── marbella/     # Imágenes de Marbella
│   │   ├── palmeras_italia/ # Imágenes de Palmeras Italia
│   │   ├── puertas_sol/  # Imágenes de Puertas del Sol
│   │   ├── rincon_lago/  # Imágenes de Rincón del Lago
│   │   ├── SAN MIGUEL/   # Imágenes de San Miguel
│   │   └── pdfs/         # Documentos PDF
│   ├── components/       # Componentes reutilizables
│   ├── context/          # Contextos de React
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Páginas de la aplicación
│   ├── styles/           # Archivos CSS
│   └── utils/            # Utilidades y datos
│       ├── i18n/         # Traducciones
│       └── [otros].js    # Datos de proyectos
├── vercel.json           # Configuración de Vercel
├── vite.config.js        # Configuración de Vite
└── package.json          # Dependencias del proyecto
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** 18.0.0 o superior
- **npm** 9.0.0 o superior

### Instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd construct
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run preview          # Vista previa de producción

# Construcción
npm run build            # Construcción de producción
npm run build:prod       # Construcción optimizada
npm run build:analyze    # Análisis del bundle

# Optimización de imágenes
npm run optimize-images  # Optimizar todas las imágenes
npm run convert-expertos # Convertir imágenes de expertos

# Linting
npm run lint             # Verificar código
```

## 🎯 Páginas y Rutas

### Páginas Principales
- `/` - **Home**: Página principal con slider y proyectos destacados
- `/casas-lujo` - **Casas de Lujo**: Proyectos de casas premium
- `/proyectos-colombia` - **Proyectos Colombia**: Proyectos en Colombia
- `/proyectos-usa` - **Proyectos USA**: Proyectos en Estados Unidos
- `/todos-los-proyectos` - **Todos los Proyectos**: Catálogo completo

### Páginas de Proyectos Específicos
- `/cana-brava` - **Caña Brava**: Urbanización campestre
- `/cana-dulce` - **Caña Dulce**: Urbanización premium
- `/coral-mole` - **Coral Mall**: Locales comerciales en Florida
- `/palmeras-italia` - **Palmeras Italia**: Condominio campestre
- `/puertas-del-sol` - **Puertas del Sol**: Urbanización comercial
- `/rincon-del-lago` - **Rincón del Lago**: Condominio campestre
- `/san-miguel` - **San Miguel**: Urbanización residencial

### Páginas de Casas USA
- `/casa-usa-primera` - **Casa USA Primera**: Proyecto residencial
- `/casa-usa-segunda` - **Casa USA Segunda**: Proyecto residencial

### Páginas Especializadas
- `/terrenos-construccion` - **Terrenos y Construcción**: Servicios de construcción

## 🧩 Componentes Principales

### Componentes de Navegación
- `Header.jsx` - Navegación principal con menú responsive
- `Breadcrumb.jsx` - Navegación de migas de pan
- `ScrollToTop.jsx` - Botón para volver al inicio

### Componentes de Contenido
- `Slider.jsx` - Carousel principal con Swiper
- `ProyectoCardSimple.jsx` - Tarjetas de proyectos
- `Expertos.jsx` - Sección de equipo de expertos
- `StatsSection.jsx` - Estadísticas de la empresa

### Componentes de Proyectos
- `GaleriaProyecto.jsx` - Galería de imágenes de proyectos
- `DetallesProyecto.jsx` - Detalles específicos de proyectos
- `EspaciosSociales.jsx` - Amenidades y espacios comunes
- `UbicacionMaps.jsx` - Mapas de ubicación

### Componentes de UI
- `Button.jsx` - Botones reutilizables con variantes
- `OptimizedImage.jsx` - Imágenes optimizadas con lazy loading
- `LoadingSpinner.jsx` - Indicador de carga
- `WhatsAppFloat.jsx` - Botón flotante de WhatsApp

## 🌐 Sistema de Internacionalización

### Estructura de Traducciones
```javascript
// src/utils/i18n/es.js
{
  proyectos: {
    titulo: "Nuestros Proyectos",
    subtitulo: "Descubre nuestras mejores propuestas"
  },
  slider: {
    home: {
      slide1_title: "lotes con facilidad de pago",
      slide1_subtitle: "Cuotas flexibles directamente con nuestra constructora"
    }
  }
}
```

### Cambio de Idioma
```javascript
import { useIdioma } from '../context/IdiomaContext';

const { t, cambiarIdioma } = useIdioma();
```

## 🖼️ Optimización de Imágenes

### Proceso de Optimización
1. **Conversión automática** de PNG/JPG a WebP
2. **Redimensionamiento** a múltiples tamaños
3. **Compresión** optimizada para web
4. **Lazy loading** implementado

### Scripts de Optimización
```bash
# Convertir todas las imágenes
npm run convert-all-png-images

# Optimizar imágenes específicas
npm run convert-cana-brava-images
npm run convert-casas-lujo-images
npm run convert-expertos-images
npm run convert-palmeras-italia-images
npm run convert-san-miguel-images
```

### Formato de Imágenes
- **WebP**: Formato principal para mejor compresión
- **AVIF**: Formato moderno para navegadores compatibles
- **Fallback**: PNG/JPG para navegadores antiguos

## 🎨 Sistema de Diseño

### Tipografía
```css
/* Títulos principales */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
font-weight: 700;
font-size: clamp(2rem, 5vw, 3.5rem);

/* Texto de cuerpo */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
font-weight: 400;
font-size: clamp(1rem, 2.5vw, 1.4rem);
```

### Espaciado
```css
/* Sistema de espaciado */
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-xxl: 4rem;
```

### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## 📊 Datos de Proyectos

### Estructura de Datos
```javascript
// src/utils/proyectos.js
const proyectos = [
  {
    imagen: Rincon,
    titulo: 'rincon_titulo',
    descripcion: 'rincon_desc',
    tipo: 'condominio',
    icono: 'condominio',
    iconoColor: '#222',
    ubicacion: 'jamundi_colombia',
    enlace: '#',
    etiquetaColor: '#ff6600'
  }
];
```

### Tipos de Proyectos
- `condominio` - Condominios campestres
- `urbanizacion` - Urbanizaciones residenciales
- `locales` - Locales comerciales
- `casas` - Casas individuales
- `terrenos` - Terrenos para construcción

## 🔧 Configuración de Vite

### Optimizaciones Implementadas
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react(), imagetools()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'swiper': ['swiper'],
          'icons': ['react-icons']
        }
      }
    }
  }
});
```

## 📱 Responsive Design

### Estrategia Mobile First
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Componentes Responsive
- **Slider**: Altura adaptativa con `clamp()`
- **Grid**: Sistema de grid flexible
- **Tipografía**: Escalado automático con `clamp()`
- **Imágenes**: Optimización por dispositivo

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### Configuración de Vercel
```json
// vercel.json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Variables de Entorno
```bash
# .env.production
VITE_API_URL=https://api.constructora.com
VITE_GOOGLE_MAPS_KEY=your_google_maps_key
```

## 🧪 Testing

### Estructura de Testing
```
tests/
├── components/     # Tests de componentes
├── pages/         # Tests de páginas
├── utils/         # Tests de utilidades
└── integration/   # Tests de integración
```

### Comandos de Testing
```bash
npm run test       # Ejecutar todos los tests
npm run test:watch # Tests en modo watch
npm run test:coverage # Cobertura de tests
```

## 📈 Performance

### Métricas Objetivo
- **Lighthouse Score**: >90 en todas las categorías
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

### Optimizaciones Implementadas
- **Code Splitting**: División automática de chunks
- **Tree Shaking**: Eliminación de código no utilizado
- **Image Optimization**: Compresión y formatos modernos
- **Lazy Loading**: Carga diferida de componentes
- **Service Worker**: Cache inteligente

## 🔒 Seguridad

### Medidas Implementadas
- **HTTPS**: Forzado en producción
- **CSP Headers**: Content Security Policy
- **XSS Protection**: Sanitización de inputs
- **CSRF Protection**: Tokens de seguridad

## 📞 Contacto y Soporte

### Información de la Empresa
- **Empresa**: Casas y Lotes SAS
- **Email**: contacto@casasylotes.com
- **Teléfono**: +57 320 421 0000
- **WhatsApp**: +57 320 421 0000

### Redes Sociales
- **Instagram**: @casasylotes_respaldo
- **YouTube**: @casaslotes5992

## 📄 Licencia

Este proyecto es propiedad de **Casas y Lotes SAS** y está protegido por derechos de autor.

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Changelog

### v1.0.0 (2024-12-19)
- ✅ Lanzamiento inicial
- ✅ Sistema multiidioma completo
- ✅ Optimización de imágenes WebP
- ✅ Responsive design implementado
- ✅ Integración con WhatsApp
- ✅ SEO optimizado

---

**Desarrollado con ❤️ por el equipo de Casas y Lotes SAS**
