import React from 'react';
import { useIdioma } from '../context/IdiomaContext';
import { infoProyectos } from '../utils/infoProyectos';
import '../styles/DetallesProyecto.css';

export default function ProyectoDetalle({ id}) {
  const { t } = useIdioma();
  const data = infoProyectos[id];
  const texto = t[`${id}_detalle`];

  return (
    <section className="detalle-proyecto">
     <div className="detalle-proyecto-titulo">
       <h1>{texto.titulo}</h1>
       <h2>{texto.subtitulo}</h2>
     </div>
     
     <div className="proyecto-contenido">
    <img src={data.logo} alt={texto.titulo} className="logo-proyecto" />

    <div className="proyecto-texto">
     
      <h3>{texto.subtitulo_2}</h3>
      <p className="descripcion">{texto.descripcion}</p>
      <p className="descripcion">{texto.descripcion_1}</p>
      <p  style={{ fontWeight: 'bold', color: '#ff6600' }} 
          className="descripcion">{texto.descripcion_2}</p>
       <a href={data.pdf} target="_blank" rel="noopener noreferrer" className="btn-pdf">
        Ver PDF
      </a>
    </div>
  </div>
    </section>
  );
}