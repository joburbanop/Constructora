import React from "react";
import "../styles/AmbitoAccion.css";
import Button from './Button';
import OptimizedImage from './OptimizedImage';
import ambitos from '../utils/ambitos';
import { getLujoImageSrcSet } from '../utils/ambitos';
import { useIdioma } from '../context/IdiomaContext';
import { useNavigate } from "react-router-dom";


export default function AmbitoAccion() {
  const { t } = useIdioma();
  const navigate = useNavigate();

  return (
    <section className="ambito">
     
      <p className="ambito-sub">
        {t.ambito.sub}
      </p>
      <div className="ambito-cards">
        {ambitos.map((card, idx) => {
          // Determinar color y si es lujo
          let color = 'orange';
          let isLujo = false;
          if (card.title === 'lujo_title') {
            color = 'orange'; // Cambiar a naranja para que se vea activo
            isLujo = false; // Cambiar a false para que no se vea deshabilitado
          }
          return (
            <div className="ambito-card" key={idx}>
              <div className="ambito-img">
                <OptimizedImage
                  src={card.img}
                  alt={t.ambito[card.title]}
                  className="ambito-card-image"
                  style={{
                    objectPosition: card.bgPosition
                  }}
                  {...(card.title === 'lujo_title' && {
                    srcSet: getLujoImageSrcSet(),
                    sizes: '(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px'
                  })}
                />
                <span className="ambito-card-title">{t.ambito[card.title]}</span>
              </div>
              <p className="ambito-card-desc">{t.ambito[card.desc]}</p>
                        <Button
              className={`ambito-btn ${card.title === 'lujo_title' ? 'btn-grey' : color}`}
              onClick={() => {
                if (card.title === 'lujo_title') return; // Bloqueado
                if (card.title === 'colombia_title') {
                  navigate('/proyectos-colombia');
                } else if (card.title === 'usa_title' || card.title === 'locales_title') {
                  navigate('/proyectos-usa');
                }
              }}
              disabled={card.title === 'lujo_title'}
            >
              {card.title === 'lujo_title' ? 'Próximamente' : t.ambito.boton || 'Ver más'}
            </Button>

            </div>
          );
        })}
      </div>
    </section>
  );
}
