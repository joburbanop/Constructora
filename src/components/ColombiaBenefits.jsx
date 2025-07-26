import React from "react";
import { useIdioma } from '../context/IdiomaContext';
import { FaShieldAlt, FaCreditCard, FaHome, FaMapMarkerAlt } from 'react-icons/fa';

const ColombiaBenefits = () => {
  const { t } = useIdioma();
  const items = [
    {
      icon: <FaShieldAlt size={56} color="#ff6600" />,
      title: t.proyectos.beneficio1_titulo || 'Inversión segura',
      desc: t.proyectos.beneficio1_desc || 'Tu dinero está protegido y respaldado en cada proyecto.'
    },
    {
      icon: <FaCreditCard size={56} color="#ff6600" />,
      title: t.proyectos.beneficio2_titulo || 'Facilidades de pago',
      desc: t.proyectos.beneficio2_desc || 'Opciones flexibles para que puedas invertir sin preocupaciones.'
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
            <div style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(255, 102, 0, 0.2)',
              marginBottom: 16,
              border: '2px solid rgba(255, 102, 0, 0.1)'
            }}>
              {item.icon}
            </div>
            <div style={{fontSize: '1.25rem', fontWeight: 700, marginBottom: 12, fontFamily: 'Georgia, serif', color: '#222'}}>{item.title}</div>
            <div style={{color: '#666', fontSize: '1.05rem', fontFamily: 'Times New Roman, Times, serif', textAlign: 'center', lineHeight: 1.5}}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColombiaBenefits; 