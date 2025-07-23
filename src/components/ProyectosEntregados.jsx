import React from 'react';
import entregados from '../utils/entregados';
import '../styles/ProyectosEntregados.css';
import { useIdioma } from '../context/IdiomaContext';
import SectionDivider from './SectionDivider';

export default function ProyectosEntregados() {
  const { t } = useIdioma();
  return (
    <section className="entregados-section">
        <SectionDivider textKey="entregados" icon={<i className="fas fa-check-circle"></i>} variant="bold" />
      <h2 className="entregados-titulo">{t.entregados.titulo}</h2>
      
      <div className="entregados-grid">
        {entregados.map((proy, idx) => (
          <div className="flip-card" key={idx}>
            <div className="flip-card-inner">
              {/* Frente */}
              <div className="flip-card-front">
                <div className="entregados-img-wrap">
                  <img src={proy.imagen} alt={t.entregados[proy.nombre]} className="entregados-img" />
                </div>
                <div className="entregados-nombre">{t.entregados[proy.ubicacion]}</div>
                <div className="entregados-desc">{t.entregados[proy.descripcion]}</div>
              </div>
              {/* Reverso */}
              <div className="flip-card-back">
                <div className="entregados-nombre">{t.entregados[proy.nombre]}</div>
                <div className="entregados-etiquetas">
                  {proy.etiquetas.map((et, i) => (
                    <span className="entregados-chip" key={i}>{t.entregados[et]}</span>
                  ))}
                </div>
                <a className="entregados-btn" href={proy.enlace} target="_blank" rel="noopener noreferrer">
                  {t.entregados.boton || 'Ver proyecto'} &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 