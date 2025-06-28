import React from 'react';
import renders from '../utils/renders';
import { MdHome, MdSearch, MdSupportAgent } from 'react-icons/md';
import '../styles/RendersDestacados.css';

const beneficios = [
  {
    icon: <MdSearch size={28} />, 
    titulo: 'Encuentra la casa ideal',
    desc: 'Explora fácilmente propiedades que se ajustan a lo que buscas: ubicación, tamaño, estilo y entorno.'
  },
  {
    icon: <MdSupportAgent size={28} />,
    titulo: 'Asesoría personalizada',
    desc: 'Nuestro equipo está listo para escucharte, responder tus dudas y acompañarte en todo el proceso.'
  },
  {
    icon: <MdHome size={28} />,
    titulo: 'Listas para habitar',
    desc: 'Casas con entrega inmediata, documentación al día y todos los detalles listos para mudarte sin preocupaciones.'
  }
];

export default function RendersDestacados() {
  return (
    <section className="renders-section">
      <div className="renders-grid">
        <div className="renders-imgs">
          {renders.slice(0,3).map((r, idx) => (
            <div className={`renders-img-item renders-img-item-${idx}`} key={idx}>
              <img src={r.imagen} alt={r.alt} className="renders-img" />
            </div>
          ))}
        </div>
        <div className="renders-info">
          <h2 className="renders-titulo">Tu nuevo comienzo<br />empieza aquí</h2>
          <p className="renders-desc">Explora nuestras casas seleccionadas para quienes buscan más que un lugar donde vivir.</p>
          <div className="renders-beneficios">
            {beneficios.map((b, i) => (
              <div className="renders-beneficio" key={i}>
                <span className="renders-beneficio-icon">{b.icon}</span>
                <div>
                  <div className="renders-beneficio-titulo">{b.titulo}</div>
                  <div className="renders-beneficio-desc">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 