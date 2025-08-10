import React from 'react';
import Button from './Button';
import '../styles/ProyectoCardSimple.css';
import { FaHome, FaBuilding, FaUsers, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
export default function ProyectoCard({ proyecto, t, onNavigate, idiomaKey }) {
  const traduccion = t[idiomaKey];
  const isProximamente = [].includes(proyecto.titulo);

  return (
    <div className="proyecto-card-simple">
      <img
        src={proyecto.imagen}
        srcSet={`${proyecto.imagen}?w=320&format=webp 320w, ${proyecto.imagen}?w=640&format=webp 640w, ${proyecto.imagen}?w=960&format=webp 960w, ${proyecto.imagen}?w=1280&format=webp 1280w`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={traduccion[proyecto.titulo]}
        className="proyecto-card-img"
        loading="lazy"
        decoding="async"
      />
      <div className='contenedor-texto'>
        <h2 className="proyecto-card-title">{traduccion[proyecto.titulo]}</h2>
        <p className="proyecto-card-desc">{traduccion[proyecto.descripcion]}</p>


      </div>
      <div className='proyecto-ubicacion-simple'>
        <div className='texto-ubicacion'>
           <FaMapMarkerAlt className="ubicacion-icon" />
          <p >{t.proyectos[proyecto.ubicacion]}</p>

        </div>

      </div>
      
      <div className='contenedor-boton-simple'>
         <Button
        className={`ambito-btn-simple ${isProximamente ? 'gray lujo' : 'orange'}`}
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
     
    </div>
  );
}