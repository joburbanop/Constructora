import { useIdioma } from '../context/IdiomaContext';
import { infoEspacios } from '../utils/infoEspacios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/EspaciosSociales.css';

export default function EspaciosCompartidos({ id, claves }) {
  const { t } = useIdioma();
  const iconos = infoEspacios[id];

  if (!claves || !Array.isArray(claves)) return null;

  return (
    <div className="espacios-compartidos">
      <h3 className="espacios-titulo">{t.espacios_titulo || 'Espacios comunes'}</h3>
        <div className="espacios-wrapper">

          
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={'auto'}
        navigation
        grabCursor
        className="espacios-swiper"
      >
        {claves.map((clave, idx) => {
          const icono = iconos?.[clave];
          const titulo = t.espacios?.[clave];
          if (!icono || !titulo) return null;

          return (
            <SwiperSlide key={idx} style={{ width: '140px' }}>
              <div className="espacio-item">
                <img src={icono} alt={titulo} className="espacio-icono" />
                <p className="espacio-titulo">{titulo}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>      

        </div>
    </div>
  );
}