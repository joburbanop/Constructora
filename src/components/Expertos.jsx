import React from "react";
import "../styles/Expertos.css";
import { useIdioma } from '../context/IdiomaContext';
import expertos from '../utils/expertos';
import SectionDivider from './SectionDivider';

const Expertos = () => {
  const { t } = useIdioma();

  return (
    <section className="expertos-tarjetas-section" id="expertos">
      <SectionDivider textKey="contactanos" />
      <h2>
        {t.expertos?.titulo || "Nuestro equipo de"} <span className="expertos-highlight">{t.expertos?.highlight || "Expertos"}</span>
      </h2>
      <div className="expertos-grid">
        {expertos.map((asesor, idx) => (
          <div className="experto-card" key={idx}>
            <img src={asesor.imagen} alt={t.expertos[asesor.nombre]} className="experto-img" />
            <div className="experto-info">
              <div className="experto-nombre">{t.expertos[asesor.nombre]}</div>
              <div className="experto-cargo">{t.expertos[asesor.cargo]}</div>
              <div className="experto-desc">{t.expertos[asesor.descripcion]}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertos;
