import React from "react";
import "../styles/AmbitoAccion.css"; // Crea este archivo para los estilos
import Button from './Button'; // Importa tu botón reutilizable
import imgColombia from '../assets/Colombia.webp';
import imgUSA from '../assets/Usa.webp';
import imgLujo from '../assets/casas.jpeg';

const cards = [
  {
    img: imgColombia,
    title: "Proyectos Colombia",
    desc: "Proyectos exclusivos que combinan lujo y confort en cada rincón.",
    bgPosition: "center 35%"
  },
  {
    img: imgUSA,
    title: "Proyectos U.S.A",
    desc: "Proyectos que marcan la diferencia en el mercado inmobiliario actual.",
    bgPosition: "center 35%"
  },
  {
    img: imgLujo,
    title: "Casas de Lujo",
    desc: "Exclusividad que redefine el confort.",
    bgPosition: "center 0%"
  }
];

export default function AmbitoAccion() {
  return (
    <section className="ambito">
      <h2>Ámbito de acción</h2>
      <p className="ambito-sub">
        Casas de lujo, urbanizaciones, condominios campestres,<br />
        Complejos comerciales, Estaciones de servicio.
      </p>
      <div className="ambito-cards">
        {cards.map((card, idx) => (
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
