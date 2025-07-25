import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Slider.css'; // Crea este archivo para tus estilos personalizados
import Button from './Button';
import slides from '../utils/slides';
import { useIdioma } from '../context/IdiomaContext';

export default function Slider({ contenido = [], namespace = 'home' }) {
  const { t } = useIdioma();
  //    loop
  console.log("Renderizando con contenido:", contenido);
  return (
   <div className="slider-container-slider">
  <Swiper
    modules={[Pagination, Autoplay, EffectFade]}
    pagination={{ clickable: true }}
    effect="fade"
    speed={1200}
    /*
    loop={true}
    autoplay={{ delay: 5000, disableOnInteraction: false }}*/
   
    className="slider-swiper-slider"
  >
    {contenido.map((slide, idx) => (
      <SwiperSlide key={slide.title}>
        <div
          className="slider-bg-slider"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slider-content-slider animate-fadeInUp">
            <h1 className="slider-title-slider animate-fadeIn">
              {t.slider?.[namespace]?.[slide.title] || slide.title}
            </h1>
            <p className="slider-subtitle-slider animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              {t.slider?.[namespace]?.[slide.subtitle] || slide.subtitle}
            </p>
            <Button style={{ animationDelay: '0.6s' }}>
              {t.slider?.[namespace]?.boton || "Ver más"}
            </Button>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}
