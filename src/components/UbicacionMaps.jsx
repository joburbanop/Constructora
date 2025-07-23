import React from 'react';

// Define algunos estilos básicos para el contenedor del mapa
const containerStyle = {
  width: '100%',
  height: '450px', // Altura por defecto, puedes ajustarla
  overflow: 'hidden',
  marginBottom: '20px' // Espacio debajo del mapa
};

export default function MapaIframeReutilizable({
  mapSrc, // Esta prop recibirá la URL completa del iframe
  title = "Mapa de Ubicación", // Título por defecto para accesibilidad
  width = "100%", // Ancho por defecto del iframe
  height = "100%" // Alto por defecto del iframe
}) {
  // Verificación básica para asegurar que se pase una URL
  if (!mapSrc) {
    console.error("MapaIframeReutilizable: Se requiere la prop 'mapSrc'.");
    return <div style={{...containerStyle, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red'}}>
             Error: No se ha proporcionado la URL del mapa.
           </div>;
  }

  return (
    <div className="mapa-iframe-container" style={containerStyle}>
      <iframe
        src={mapSrc}
        width={width}
        height={height}
        style={{ border: 0 }}
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