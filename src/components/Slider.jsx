import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Slider.css'; // Crea este archivo para tus estilos personalizados
import Button from './Button';

import img1 from '../assets/Diapositiva01.PNG';
import img2 from '../assets/Diapositiva02.PNG';
import img3 from '../assets/Diapositiva03.PNG';
import img4 from '../assets/Diapositiva04.PNG';

const slides = [
  {
    image: img1,
    title: 'DESCUBRE TU ESPACIO IDEAL',
    subtitle: 'CASAS, CONDOMINIOS Y LOTES'
  },
  {
    image: img2,
    title: 'VIVE EN EL LUGAR QUE SUEÑAS',
    subtitle: 'PROYECTOS MODERNOS Y LUGARES DE ALTA VALORACION'
  },
  {
    image: img3,
    title: 'INVIERTE CON CONFIANZA',
    subtitle: 'PROYECTOS SEGUROS Y DE CALIDAD'
  },
  {
    image: img4,
    title: 'CREA TU FUTURO',
    subtitle: 'SOLUCIONES INMOBILIARIAS PARA TI'
  }
];

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
