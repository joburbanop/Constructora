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
  //  autoplay={{ delay: 4000, disableOnInteraction: false }}  loop
  return (
    <div className="slider-container">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
      
        effect="fade"
        speed={1200}
       
        className="mySwiper"
      >
        {contenido.map((slide, idx) => (
          console.log('Imagen recibida:', slide.image),
          <SwiperSlide key={slide.title}>
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content animate-fadeInUp">
                <h1 className="animate-fadeIn">
                  {t.slider?.[namespace]?.[slide.title] || slide.title}
                </h1>
                <p className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
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
