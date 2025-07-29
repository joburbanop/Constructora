import React from 'react';
import '../styles/UbicacionMaps.css';
// Define algunos estilos básicos para el contenedor del mapa

import { useIdioma } from '../context/IdiomaContext';
export default function MapaIframeReutilizable({
  mapSrc, // Esta prop recibirá la URL completa del iframe
  title = "Mapa de Ubicación", // Título por defecto para accesibilidad
  width = "90%", // Ancho por defecto del iframe
  height = "100%" // Alto por defecto del iframe
}) {
  // Verificación básica para asegurar que se pase una URL
  if (!mapSrc) {
    console.error("MapaIframeReutilizable: Se requiere la prop 'mapSrc'.");
    return <div style={{...containerStyle, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red'}}>
             Error: No se ha proporcionado la URL del mapa.
           </div>;
  }
 const { t } = useIdioma();
  return (
    <div className="mapa-iframe-container" >
        <h2>{t.textMapa.titulo}</h2>
      <iframe className='iframeMapa'
        src={mapSrc}
       
       
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      >
        Tu navegador no soporta iframes. Puedes ver el mapa en Google Maps directamente.
      </iframe>
    </div>
  );
}