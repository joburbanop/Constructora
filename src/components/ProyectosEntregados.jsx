import React from 'react';
import entregados from '../utils/entregados';
import '../styles/ProyectosEntregados.css';

export default function ProyectosEntregados() {
  return (
    <section className="entregados-section">
      <h2 className="entregados-titulo">Proyectos entregados</h2>
      <div className="entregados-grid">
        {entregados.map((proy, idx) => (
          <div className="flip-card" key={idx}>
            <div className="flip-card-inner">
              {/* Frente */}
              <div className="flip-card-front">
                <div className="entregados-img-wrap">
                  <img src={proy.imagen} alt={proy.nombre} className="entregados-img" />
                </div>
                <div className="entregados-nombre">{proy.ubicacion}</div>
                <div className="entregados-desc">{proy.descripcion}</div>
              </div>
              {/* Reverso */}
              <div className="flip-card-back">
                <div className="entregados-nombre">{proy.nombre}</div>
                <div className="entregados-etiquetas">
                  {proy.etiquetas.map((et, i) => (
                    <span className="entregados-chip" key={i}>{et}</span>
                  ))}
                </div>
                <a className="entregados-btn" href={proy.enlace} target="_blank" rel="noopener noreferrer">
                  Ver proyecto &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 