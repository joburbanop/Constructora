import React from "react";
import { useIdioma } from '../context/IdiomaContext';

const icons = [
  // Escudo (Inversión segura)
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" key="shield"><rect width="56" height="56" rx="28" fill="#fff"/><path d="M28 14L40 18V28C40 36 28 42 28 42C28 42 16 36 16 28V18L28 14Z" stroke="#222" strokeWidth="2"/><path d="M28 26C29.1046 26 30 26.8954 30 28C30 29.1046 29.1046 30 28 30C26.8954 30 26 29.1046 26 28C26 26.8954 26.8954 26 28 26Z" stroke="#222" strokeWidth="2"/></svg>,
  // Tarjeta (Facilidades de pago)
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" key="card"><rect width="56" height="56" rx="28" fill="#fff"/><rect x="16" y="22" width="24" height="12" rx="2" stroke="#222" strokeWidth="2"/><rect x="20" y="28" width="6" height="2" rx="1" fill="#222"/><rect x="28" y="28" width="8" height="2" rx="1" fill="#222"/></svg>,
  // Llaves (Elige tu próximo hogar)
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" key="keys"><rect width="56" height="56" rx="28" fill="#fff"/><circle cx="36" cy="32" r="4" stroke="#222" strokeWidth="2"/><path d="M36 32L24 20" stroke="#222" strokeWidth="2"/><rect x="20" y="16" width="6" height="4" rx="2" stroke="#222" strokeWidth="2"/><rect x="18" y="22" width="4" height="2" rx="1" fill="#222"/></svg>
];

const ColombiaBenefits = () => {
  const { t } = useIdioma();
  const items = [
    {
      icon: icons[0],
      title: t.proyectos.beneficio1_titulo || 'Inversión segura',
      desc: t.proyectos.beneficio1_desc || ''
    },
    {
      icon: icons[1],
      title: t.proyectos.beneficio2_titulo || 'Facilidades de pago',
      desc: t.proyectos.beneficio2_desc || ''
    },
    {
      icon: icons[2],
      title: t.proyectos.beneficio3_titulo || 'Elige tu próximo hogar',
      desc: t.proyectos.beneficio3_desc || ''
    }
  ];
  return (
    <section className="colombia-benefits" style={{textAlign: 'center', margin: '48px 0 32px 0'}}>
      <div style={{marginBottom: 8}}>
        <span style={{fontSize: '2.2rem', fontWeight: 700, color: '#ff6600', fontFamily: 'Georgia, serif', display: 'block'}}>
          {t.proyectos.beneficio_titulo1 || 'Somos'} <b>expertos</b>
        </span>
        <span style={{fontSize: '2.2rem', fontWeight: 700, color: '#222', fontFamily: 'Georgia, serif', display: 'block'}}>
          {t.proyectos.beneficio_titulo2 || 'constructores con 17 años de trayectoria'}
        </span>
      </div>
      <div style={{fontSize: '1.6rem', marginBottom: 32, fontFamily: 'Georgia, serif', color: '#222'}}>
        {t.proyectos.beneficio_sub || 'en el sur occidente colombiano'}
      </div>
      <div style={{display: 'flex', justifyContent: 'center', gap: 80, flexWrap: 'wrap'}}>
        {items.map((item, idx) => (
          <div key={idx} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 220, maxWidth: 320}}>
            {item.icon}
            <div style={{fontSize: '1.25rem', fontWeight: 700, marginTop: 16, fontFamily: 'Georgia, serif', color: '#222'}}>{item.title}</div>
            {item.desc && <div style={{color: '#222', fontSize: '1.05rem', marginTop: 10, fontFamily: 'Times New Roman, Times, serif', textAlign: 'center'}}>{item.desc}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColombiaBenefits; 