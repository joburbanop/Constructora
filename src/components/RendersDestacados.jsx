import React from 'react';
import renders from '../utils/renders';
import { MdHome, MdSearch, MdSupportAgent } from 'react-icons/md';
import '../styles/RendersDestacados.css';
import { useIdioma } from '../context/IdiomaContext';
import SectionDivider from './SectionDivider';

export default function RendersDestacados() {
  const { t } = useIdioma();
  const beneficios = t.renders.beneficios;

  return (
    <section className="renders-section">
      <SectionDivider textKey="nosotros" icon={<i className="fas fa-cube"></i>} />
      <div className="renders-grid">
        
        <div className="renders-imgs">
          {renders.slice(0,3).map((r, idx) => (
            <div className={`renders-img-item renders-img-item-${idx}`} key={idx}>
              <img src={r.imagen} alt={r.alt} className="renders-img" />
            </div>
          ))}
        </div>
        <div className="renders-info">
            
          <h2 className="renders-titulo">{t.renders.titulo.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</h2>
          <p className="renders-desc">{t.renders.desc}</p>
          <div className="renders-beneficios">
            {beneficios.map((b, i) => (
              <div className="renders-beneficio" key={i}>
                <span className="renders-beneficio-icon">{
                  i === 0 ? <MdSearch size={28} /> :
                  i === 1 ? <MdSupportAgent size={28} /> :
                  <MdHome size={28} />
                }</span>
                <div>
                  <div className="renders-beneficio-titulo">{b.titulo}</div>
                  <div className="renders-beneficio-desc">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 