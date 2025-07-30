import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Slider.css';
import '../styles/OptimizedImage.css';
import Button from './Button';
import slides from '../utils/slides';
import { useIdioma } from '../context/IdiomaContext';
import OptimizedImage from './OptimizedImage';
import useImagePreloader from '../hooks/useImagePreloader';

export default function Slider({ contenido = [], namespace = 'home', customConfig = null }) {
  const { t } = useIdioma();
  
  // Preload de imágenes para mejorar rendimiento
  const imageUrls = contenido.map(slide => slide.image);
  const { loadedImages, loading } = useImagePreloader(imageUrls);
  
  // Configuración por defecto
  const defaultConfig = {
    swiper: {
      modules: [Pagination, Autoplay, EffectFade],
      pagination: { clickable: true },
      effect: "fade",
      speed: 1200,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false }
    },
    useTranslations: true,
    useWhatsAppButton: true
  };
  
  // Combinar configuración personalizada con la por defecto
  const config = customConfig ? { ...defaultConfig, ...customConfig } : defaultConfig;

  return (
    <div className={`slider-container-slider ${namespace === 'casas-lujo' ? 'casas-lujo-slider' : ''}`}>
      <Swiper
        {...config.swiper}
        className={`slider-swiper-slider ${namespace === 'casas-lujo' ? 'casas-lujo-swiper' : ''}`}
      >
        {contenido.map((slide, idx) => (
          <SwiperSlide key={slide.id || slide.title}>
            <div className="slider-bg-slider">
              <OptimizedImage
                src={slide.image}
                alt={slide.title || `Slide ${idx + 1}`}
                className="slider-background-image"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 1
                }}
                {...(namespace === 'casas-lujo' && {
                  srcSet: slide.image,
                  sizes: '100vw'
                })}
              />
              <div className="slider-content-slider animate-fadeInUp" style={{ zIndex: 2, position: 'relative' }}>
                <h1 className="slider-title-slider animate-fadeIn">
                  {config.useTranslations ? (t.slider?.[namespace]?.[slide.title] || slide.title) : slide.title}
                </h1>
                <p className="slider-subtitle-slider animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                  {config.useTranslations ? (t.slider?.[namespace]?.[slide.subtitle] || slide.subtitle) : slide.subtitle}
                </p>
                {slide.description && (
                  <p className="slider-description animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    {slide.description}
                  </p>
                )}
                {config.useWhatsAppButton ? (
                  <Button 
                    whatsapp={true}
                    style={{ animationDelay: '0.6s' }}
                  >
                    {t.slider?.[namespace]?.boton || "Contáctanos"}
                  </Button>
                ) : slide.cta ? (
                  <Button 
                    className="slide-cta"
                    onClick={() => {
                      if (slide.ctaLink && slide.ctaLink.startsWith('#')) {
                        const element = document.querySelector(slide.ctaLink);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    style={{ animationDelay: '0.6s' }}
                  >
                    {slide.cta}
                  </Button>
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
