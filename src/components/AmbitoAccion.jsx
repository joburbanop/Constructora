import React from "react";
import "../styles/AmbitoAccion.css"; // Crea este archivo para los estilos
import Button from './Button'; // Importa tu botón reutilizable
import imgColombia from '../assets/Colombia.webp';
import imgUSA from '../assets/Usa.webp';
import imgLujo from '../assets/casas.jpeg';
import ambitos from '../utils/ambitos';
import { useIdioma } from '../context/IdiomaContext';
import SectionDivider from './SectionDivider';

export default function AmbitoAccion() {
  const { t } = useIdioma();
  return (
    <section className="ambito">
     
      <h2>{t.ambito.titulo}</h2>
      <p className="ambito-sub">
        {t.ambito.sub}
      </p>
      <div className="ambito-cards">
        {ambitos.map((card, idx) => (
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
            <Button>{t.ambito.boton || 'Ver más'}</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
