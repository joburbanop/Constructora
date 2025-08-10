import React from "react";
import "../styles/Expertos.css";
import { useIdioma } from '../context/IdiomaContext';
import expertos from '../utils/expertos';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Expertos = ({ listaFiltrada = null }) => {
  const { t } = useIdioma();
 const asesores = listaFiltrada || expertos;
  return (
    <section className="expertos-tarjetas-section" id="expertos">
      <div className="expertos-header">
        <h2 className="expertos-title">
          {t.expertos?.titulo || "Nuestro equipo de"} 
          <span className="expertos-highlight">{t.expertos?.highlight || "Expertos"}</span>
        </h2>
        <p className="expertos-subtitle">
          Conoce a nuestro equipo de profesionales especializados en bienes raíces
        </p>
      </div>

      <div className={`expertos-grid ${asesores.length === 1 ? 'una-columna' : 'multi-columna'}`}>
        {asesores.map((asesor, idx) => (
          <div className="experto-card" key={idx}>
            <div className="experto-image-container">
              <img
                src={asesor.imagen}
                alt={`${asesor.nombre} - ${t.expertos[asesor.especialidadClave] || asesor.especialidadClave}`}
                className="experto-img"
              />
              <div className="experto-badge">
                <span>Un gusto soy {asesor.nombre.split(' ')[0]}</span>
              </div>
            </div>
            <div className="experto-info">
              <h3 className="experto-nombre">
                {asesor.nombre}
              </h3>
              <p className="experto-cargo">
                {asesor.cargo || t.expertos[asesor.especialidadClave] || asesor.especialidadClave}
              </p>
              <div className="experto-contact">
                <div className="experto-contact-label">
                  {t.expertos?.atencion || 'Atención directa:'} 
                </div>
                <div className="experto-contact-info">
                  <a href={`tel:${asesor.telefono}`} className="experto-tel" target="_blank" rel="noopener noreferrer">
                    <FaPhone className="contact-icon" />
                    {asesor.telefono}
                  </a>
                  {asesor.telefono2 && (
                    <a href={`tel:${asesor.telefono2}`} className="experto-tel" target="_blank" rel="noopener noreferrer">
                      <FaPhone className="contact-icon" />
                      {asesor.telefono2}
                    </a>
                  )}
                  <a href={`https://wa.me/${asesor.telefono.replace(/\D/g, '')}`} className="experto-whatsapp" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="contact-icon" />
                    WhatsApp
                  </a>
                  <div className="experto-phone-note">
                    📞 Llamar desde móvil
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertos;
