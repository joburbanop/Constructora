import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Button from './Button';
import { useIdioma } from '../context/IdiomaContext';
import '../styles/Slider.css';

export default function SimpleSlider({ contenido = [], namespace = 'home' }) {
  const { t } = useIdioma();
  
  // Configuración por defecto
  const config = {
    modules: [Pagination, Autoplay, EffectFade],
    pagination: { clickable: true },
    effect: "fade",
    speed: 1200,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false }
  };

  return (
    <div className={`slider-container-slider ${namespace === 'casas-lujo' ? 'casas-lujo-slider' : ''}`}>
      <Swiper
        {...config}
        className={`slider-swiper-slider ${namespace === 'casas-lujo' ? 'casas-lujo-swiper' : ''}`}
      >
        {contenido.map((slide, idx) => (
          <SwiperSlide key={slide.id || slide.title || idx}>
            <div className="slider-bg-slider">
              <img
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
                onError={(e) => {
                  console.error('Error loading image:', slide.image);
                  e.target.style.display = 'none';
                }}
              />
              <div className="slider-content-slider animate-fadeInUp" style={{ zIndex: 2, position: 'relative' }}>
                <h1 className="slider-title-slider animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="slider-subtitle-slider animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                  {slide.subtitle}
                </p>
                {slide.description && (
                  <p className="slider-description animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    {slide.description}
                  </p>
                )}
                <Button 
                  whatsapp={true}
                  style={{ animationDelay: '0.6s' }}
                >
                  Contáctanos
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 