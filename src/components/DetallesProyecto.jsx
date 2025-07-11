import React from 'react';
import { useIdioma } from '../context/IdiomaContext';
import { infoProyectos } from '../utils/infoProyectos';
//import EspaciosCompartidos from './EspaciosCompartidos';
import '../styles/DetallesProyecto.css';

export default function ProyectoDetalle({ id}) {
  const { t } = useIdioma();
  const data = infoProyectos[id];
  const texto = t[`${id}_detalle`];

  return (
    <section className="detalle-proyecto">
      <h1>{texto.titulo}</h1>
       <h2>{texto.subtitulo}</h2>
     <div className="proyecto-contenido">
    <img src={data.logo} alt={texto.titulo} className="logo-proyecto" />

    <div className="proyecto-texto">
     
      <h3>{texto.subtitulo_2}</h3>
      <p className="descripcion">{texto.descripcion}</p>
       <a href={data.pdf} target="_blank" rel="noopener noreferrer" className="btn-pdf">
        Ver PDF
      </a>
    </div>
  </div>


     

     {/* <EspaciosCompartidos espacios={texto.espacios} />*/} 
    </section>
  );
}