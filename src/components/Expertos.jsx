import React from "react";
import "../styles/Expertos.css";
import { useIdioma } from '../context/IdiomaContext';
import expertos from '../utils/expertos'; // este array debe tener especialidadClave, nombreClave, etc.
import SectionDivider from './SectionDivider';

const Expertos = ({ listaFiltrada = null }) => {
  const { t } = useIdioma();
 const asesores = listaFiltrada || expertos;
  return (
    <section className="expertos-tarjetas-section" id="expertos">
      <h2>
        {t.expertos?.titulo || "Nuestro equipo de"} 
        <span className="expertos-highlight">{t.expertos?.highlight || "Expertos"}</span>
      </h2>

      <div className={`expertos-grid ${asesores.length === 1 ? 'una-columna' : 'multi-columna'}`}>
        {asesores.map((asesor, idx) => (
          <div className="experto-card" key={idx}>
            <img
              src={asesor.imagen}
              alt={t.expertos[asesor.clave] || asesor.clave}
              className="experto-img"
            />
            <div className="experto-info">
              <div className="experto-nombre">
                {asesor.nombre}
              </div>
              <div className="experto-cargo">
                {t.expertos[asesor.especialidadClave] || asesor.especialidadClave}
              </div>
              <div className="experto-desc">
                {t.expertos.atencion} {asesor.telefono}
              </div>
               <div className="experto-tel">
                {expertos.telefono}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertos;
