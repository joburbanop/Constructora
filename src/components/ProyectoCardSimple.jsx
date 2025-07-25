import React from 'react';
import Button from './Button';
import '../styles/ProyectoCardSimple.css';

export default function ProyectoCard({ proyecto, t, onNavigate, idiomaKey }) {
  const traduccion = t[idiomaKey];
  const isProximamente = ['casa_usa_1_title', 'casa_usa_2_title'].includes(proyecto.titulo);

  return (
    <div className="proyecto-card">
      <img
        src={proyecto.imagen}
        alt={traduccion[proyecto.titulo]}
        className="proyecto-card-img"
      />
      <h2 className="proyecto-card-title">{traduccion[proyecto.titulo]}</h2>
      <p className="proyecto-card-desc">{traduccion[proyecto.descripcion]}</p>
     
      <Button
        className={`ambito-btn ${isProximamente ? 'gray lujo' : 'orange'}`}
        onClick={isProximamente ? undefined : () => onNavigate(proyecto)}
        disabled={isProximamente}
      >
        {traduccion.boton || 'Ver más'}
        {isProximamente && (
          <span className="proximamente-label">
            {traduccion.proximamente}
          </span>
        )}
      </Button>
    </div>
  );
}