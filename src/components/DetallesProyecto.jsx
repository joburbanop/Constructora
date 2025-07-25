import React from 'react';
import { useIdioma } from '../context/IdiomaContext';
import { infoProyectos } from '../utils/infoProyectos';
import '../styles/DetallesProyecto.css';

export default function ProyectoDetalle({ id, videoId = null, videoTitulo = '' }) {
  const { t } = useIdioma();
  const data = infoProyectos[id];
  const texto = t[`${id}_detalle`];

  const url = videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  
  const tieneVideo = Boolean(videoId);
   const tienePdf = Boolean(data.pdf);
  return (
    <section className="detalle-proyecto">
      <div className="detalle-proyecto-titulo">
        <h1>{texto.titulo}</h1>
        <h2>{texto.subtitulo}</h2>
      </div>

      <div className={`proyecto-contenido ${tieneVideo ? 'con-video' : 'sin-video'}`}>
        {tieneVideo && (
          <div className="video-youtubee">
            {videoTitulo && <h3 className="video-titulo">{videoTitulo}</h3>}
            <div className="video-container-">
              <iframe
                src={url}
                title={videoTitulo || 'Video YouTube'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ margin:'0',padding:'0'}}>
              </iframe>
            </div>
          </div>
        )}

        <div className="proyecto-texto">
          <div  className="logo-proyecto"> 
             <img src={data.logo} alt={texto.titulo}/>
             </div>
        
          
          <div className="proyecto-info" style={{border:'' }}>

              <h3>{texto.subtitulo_2}</h3>

              <p className="descripcion">{texto.descripcion}</p>
              <p className="descripcion">{texto.descripcion_1}</p>
              <p className="descripcion" style={{ fontWeight: 'bold', color: '#ff6600' }}>
                {texto.descripcion_2}
              </p>
               {tienePdf && (
              <a
                href={data.pdf}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-pdf">
                Descargar PDF
              </a>
            )}

          </div>

         

        </div>
      </div>
    </section>
  );
}
