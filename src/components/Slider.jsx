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

export default function Slider({ contenido = [], namespace = 'home' }) {
  const { t } = useIdioma();
  
  // Preload de imágenes para mejorar rendimiento
  const imageUrls = contenido.map(slide => slide.image);
  const { loadedImages, loading } = useImagePreloader(imageUrls);

  return (
    <div className="slider-container-slider">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        speed={1200}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="slider-swiper-slider"
      >
        {contenido.map((slide, idx) => (
          <SwiperSlide key={slide.title}>
            <div className="slider-bg-slider">
              <OptimizedImage
                src={slide.image}
                alt={`Slide ${idx + 1}`}
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
              />
              <div className="slider-content-slider animate-fadeInUp" style={{ zIndex: 2, position: 'relative' }}>
                <h1 className="slider-title-slider animate-fadeIn">
                  {t.slider?.[namespace]?.[slide.title] || slide.title}
                </h1>
                <p className="slider-subtitle-slider animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                  {t.slider?.[namespace]?.[slide.subtitle]}
                </p>
                <Button 
                  whatsapp={true}
                  style={{ animationDelay: '0.6s' }}
                >
                  {t.slider?.[namespace]?.boton || "Contáctanos"}
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
