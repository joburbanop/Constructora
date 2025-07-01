import React from "react";
import "../styles/AmbitoAccion.css"; // Crea este archivo para los estilos
import Button from './Button'; // Importa tu botón reutilizable
import ambitos from '../utils/ambitos';
import { useIdioma } from '../context/IdiomaContext';
import { useNavigate } from "react-router-dom";

export default function AmbitoAccion() {
  const { t } = useIdioma();
  const navigate = useNavigate();

  return (
    <section className="ambito">
     
      <h2>{t.ambito.titulo}</h2>
      <p className="ambito-sub">
        {t.ambito.sub}
      </p>
      <div className="ambito-cards">
        {ambitos.map((card, idx) => {
          // Determinar color y si es lujo
          let color = 'orange';
          let isLujo = false;
          if (card.title === 'lujo_title') {
            color = 'gray';
            isLujo = true;
          }
          return (
            <div className="ambito-card" key={idx}>
              <div
                className="ambito-img"
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundPosition: card.bgPosition
                }}
              >
                <span className="ambito-card-title">{t.ambito[card.title]}</span>
              </div>
              <p className="ambito-card-desc">{t.ambito[card.desc]}</p>
              <Button
                className={`ambito-btn ${color} ${isLujo ? 'lujo' : ''}`}
                onClick={() => {
                  if (card.title === 'colombia_title') {
                    navigate('/proyectos-colombia');
                  } else if (card.title === 'usa_title') {
                    navigate('/proyectos-usa');
                  }
                }}
                disabled={isLujo}
              >
                {t.ambito.boton || 'Ver más'}
                {isLujo && <span className="proximamente-label">Próximamente</span>}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
