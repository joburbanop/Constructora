import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Slider.css'; // Crea este archivo para tus estilos personalizados
import Button from './Button';
import { useIdioma } from '../context/IdiomaContext';

export default function Slider({ contenido = [], namespace = 'home' }) {
  const { t } = useIdioma();
 
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
      <SwiperSlide key={`${slide.id || idx}-${slide.title}`}>
        <div className="slider-bg-slider">
          {idx === 0 ? (
            <img
              src={slide.image}
              alt=""
              className="slider-bg-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          ) : (
            <img
              src={slide.image}
              alt=""
              className="slider-bg-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="slider-content-slider animate-fadeInUp">
            <h1 className="slider-title-slider animate-fadeIn">
              {namespace === 'casas_lujo' ? 'Casas de Lujo' : (t.slider?.[namespace]?.[slide.title] || slide.title)}
            </h1>
            <p className="slider-subtitle-slider animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              {namespace === 'casas_lujo' ? 'Ambientes únicos en exclusivos sectores del Valle del Cauca' : (t.slider?.[namespace]?.[slide.subtitle] || slide.subtitle)}
            </p>
            <Button 
              whatsapp={true}
              style={{ animationDelay: '0.6s' }}
            >
              {namespace === 'casas_lujo' ? 'Contáctanos' : (t.slider?.[namespace]?.boton || "Contáctanos")}
            </Button>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}
