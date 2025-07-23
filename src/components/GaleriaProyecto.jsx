import { infoProyectos } from '../utils/infoProyectos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/GaleriaProyecto.css';

export default function GaleriaProyecto({ id }) {
  const galeria = infoProyectos[id]?.galeria;

  if (!galeria || galeria.length < 2) return null;

  return (
    <div className="galeria-proyecto">
      <h3 className="galeria-titulo">Galería del proyecto</h3>
      <div className="swiper-container-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
           autoplay={{
              delay: 3000,       // Tiempo entre transiciones en milisegundos
              disableOnInteraction: false // Permite que el autoplay continúe al interactuar
            }}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          breakpoints={{
              0: { slidesPerView: 1},
            768: { slidesPerView: 2 }
          }}
        >
          {galeria.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`Imagen ${idx + 1}`} className="galeria-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
