import React from "react";
import "../styles/AmbitoAccion.css"; // Crea este archivo para los estilos
import Button from './Button'; // Importa tu botón reutilizable
import imgColombia from '../assets/Colombia.webp';
import imgUSA from '../assets/Usa.webp';
import imgLujo from '../assets/casas.jpeg';
import ambitos from '../utils/ambitos';

export default function AmbitoAccion() {
  return (
    <section className="ambito">
      <h2>Ámbito de acción</h2>
      <p className="ambito-sub">
        Casas de lujo, urbanizaciones, condominios campestres,<br />
        Complejos comerciales, Estaciones de servicio.
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
              <span className="ambito-card-title">{card.title}</span>
            </div>
            <p className="ambito-card-desc">{card.desc}</p>
            <Button>Ver más</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
