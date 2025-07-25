import React from 'react';
import { useIdioma } from '../context/IdiomaContext';
import '../styles/InfoZigZag.css';

export default function InfoZigZag({ elementos = [], textoKey }) {
  const { t } = useIdioma();
  const traducciones = t[textoKey] || {};

  return (
    <div className="seccion-zigzag">
      {Array.isArray(elementos) &&
        elementos.map((item, idx) => {
          const texto = traducciones[item.clave];
          const esPar = idx % 2 === 0;

          return (
           <div className={`fila-zigzag ${!esPar ? 'impar' : ''}`} key={idx}>

              {esPar ? (
                <>
                  <div className="texto">
                    
                    <h3>{texto?.titulo || '[Sin título]'}</h3>
                    <p>{texto?.descripcion || '[Sin descripción]'}</p>
                  
                  </div>
                  <div className="imagen">
                    <img src={item.imagen} alt={texto?.titulo || 'imagen'} />
                  </div>
                </>
              ) : (
                <>
                  <div className="imagen">
                    <img src={item.imagen} alt={texto?.titulo || 'imagen'} />
                  </div>
                  <div className="texto">
                    <h3>{texto?.titulo || '[Sin título]'}</h3>
                    <p>{texto?.descripcion || '[Sin descripción]'}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
};
