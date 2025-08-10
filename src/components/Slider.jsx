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
   <div className="slider-container-slider unified-slider">
  <Swiper
    modules={[Pagination, Autoplay, EffectFade]}
    pagination={{ 
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      }
    }}
    effect="fade"
    speed={800}
    loop={true}
    autoplay={{ 
      delay: 5000, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }}
    className="slider-swiper-slider unified-swiper"
    watchSlidesProgress={true}
    observer={true}
    observeParents={true}
  >
    {contenido.map((slide, idx) => (
      <SwiperSlide key={`${slide.id || idx}-${slide.title}`}>
        <div className="slider-bg-slider">
          {(() => {
            const imgSrc = slide.src || slide.image;
            const imgSrcSet = slide.srcset || undefined;
            return (
              <img
                src={imgSrc}
                {...(imgSrcSet ? { srcSet: imgSrcSet } : {})}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                alt={t.slider?.[namespace]?.[slide.title] || slide.title || 'Slider image'}
                className="slider-bg-img"
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
                decoding="async"
              />
            );
          })()}
          <div className="slider-content-slider">
            <h1 className="slider-title-slider">
              {namespace === 'casas_lujo' ? 'Casas de Lujo' : (t.slider?.[namespace]?.[slide.title] || slide.title)}
            </h1>
            <p className="slider-subtitle-slider">
              {namespace === 'casas_lujo' ? 'Ambientes únicos en exclusivos sectores del Valle del Cauca' : (t.slider?.[namespace]?.[slide.subtitle] || slide.subtitle)}
            </p>
            <Button 
              whatsapp={true}
              className="slider-cta-button"
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
