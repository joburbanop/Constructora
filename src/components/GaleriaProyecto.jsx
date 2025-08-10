import { infoProyectos } from '../utils/infoProyectos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/GaleriaProyecto.css';
import { useIdioma } from '../context/IdiomaContext';
export default function GaleriaProyecto({ id }) {
  const galeria = infoProyectos[id]?.galeria;
   const { t } = useIdioma();
  if (!galeria || galeria.length < 2) return null;

  return (
    <div className="galeria-proyecto">
      <h2 className="galeria-titulo">{t.textGaleria.titulo}</h2>
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
              <img
                src={img}
                srcSet={`${img}?as=metadata&w=320;640;960;1280&format=webp 320w, ${img}?as=metadata&w=640&format=webp 640w`}
                sizes="(max-width: 768px) 90vw, 50vw"
                alt={`Imagen ${idx + 1}`}
                className="galeria-img"
                loading="lazy"
                decoding="async"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
