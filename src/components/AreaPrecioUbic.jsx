import React from 'react';
import { useIdioma } from '../context/IdiomaContext';
import iconAreaPrecioUbic from '../utils/iconAreaPrecioUbic';
import '../styles/AreaPrecioUbic.css';

export default function AreaPrecioUbic({ proyectoKey }) {
  const { t } = useIdioma();
  const traduccion = t.info_AreaPrecioUbic[proyectoKey];
 
  return (
    <div className="contenedor-bloques">
      <div className="bloque">
        <img src={iconAreaPrecioUbic.iconarea} alt={`Icono área - ${traduccion.area}`} />
        <h3>{traduccion.area}</h3>
        <p>{traduccion.area_desc}</p>
      </div>
      <div className="bloque">
        <img src={iconAreaPrecioUbic.iconprecio} alt={`Icono área - ${traduccion.area}`} />
        <h3>{traduccion.precio}</h3>
        <p>{traduccion.precio_desc}</p>
      </div>
      <div className="bloque">
        <img src={iconAreaPrecioUbic.iconubicacion} alt={`Icono área - ${traduccion.area}`} />
        <h3>{traduccion.ubicacion}</h3>
        <p>{traduccion.ubicacion_desc}</p>
      </div>
    </div>
  );
}