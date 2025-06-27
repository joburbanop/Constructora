import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Slider.css'; // Crea este archivo para tus estilos personalizados
import Button from './Button';
import slides from '../utils/slides';

export default function Slider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        speed={1200}
        loop
        className="mySwiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content animate-fadeInUp">
                <h1 className="animate-fadeIn">{slide.title}</h1>
                <p className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>{slide.subtitle}</p>
                <Button style={{ animationDelay: '0.6s' }}>Ver proyectos</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
