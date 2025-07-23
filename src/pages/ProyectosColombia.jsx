import React from "react";
import Header from "../components/Header";
import renders from "../utils/renders";
import proyectos from "../utils/proyectos";
import { useIdioma } from '../context/IdiomaContext';
import Button from '../components/Button';
import ColombiaBenefits from '../components/ColombiaBenefits';
import Footer from '../components/Footer';
import Expertos from '../components/Expertos';
import ContactoCTA from '../components/ContactoCTA';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Slider.css';
import { useNavigate } from 'react-router-dom';
import { handleProyectoNavigation, navigateToSection } from '../utils/navigation';

const ProyectosColombia = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  
  // Filtrar proyectos de Colombia
  const proyectosColombia = proyectos.filter(p => p.ubicacion === 'jamundi_colombia');
  // Usar el primer render como imagen de hero
  const heroImg = renders[0]?.imagen;

  // Navegación específica para Colombia
  const colombiaNavItems = (
    <ul className="nav-items">
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          {t.header.inicio}
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/proyectos-usa');
          }}
        >
          {t.proyectos.usa || 'Proyectos USA'}
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const expertosSection = document.getElementById('expertos');
            if (expertosSection) {
              expertosSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigateToSection('expertos', navigate);
            }
          }}
        >
          {t.header.nosotros}
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const contactoSection = document.getElementById('contactanos');
            if (window.location.pathname === '/proyectos-colombia' && contactoSection) {
              contactoSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigate('/proyectos-colombia');
              setTimeout(() => {
                const contactoSection = document.getElementById('contactanos');
                if (contactoSection) {
                  contactoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 500);
            }
          }}
        >
          {t.header.contactanos}
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <Header 
        customNavItems={colombiaNavItems}
        showDefaultNav={false}
      />
      {/* Hero Slider animado */}
      <section style={{ width: '100%', height: '520px', marginBottom: 0, padding: 0 }}>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="fade"
          speed={1200}
          loop
          className="mySwiper"
        >
          {renders.slice(0, 3).map((r, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: `url(${r.imagen})`,
                  width: '100%',
                  height: '520px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 35%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: 0, right: 0, top: 0, bottom: 0,
                  background: 'linear-gradient(180deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.15) 60%,rgba(0,0,0,0.7) 100%)',
                  zIndex: 1
                }} />
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  color: '#fff',
                  textAlign: 'center',
                  width: '100%',
                  padding: '2rem 1rem',
                }}>
                  <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                    {t.proyectos.colombia_hero || 'EXPERTOS EN CONSTRUCCIÓN'}
                  </h1>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 500, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                    {t.proyectos.colombia_title || 'Proyectos Colombia'}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <main style={{ maxWidth: 1200, margin: '40px auto', padding: 20 }}>
        <ColombiaBenefits />
        <h1 style={{ fontSize: '2.2rem', marginBottom: 32 }}>{t.proyectos.colombia_title || 'Proyectos Colombia'}</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {proyectosColombia.map((proy, idx) => {
            const isUrbanizacion = proy.titulo === 'sanmiguel_titulo' || proy.titulo === 'marbella_titulo';
            return (
              <div key={idx} style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', padding: 24 }}>
                <img src={proy.imagen} alt={t.proyectos[proy.titulo]} style={{ width: '100%', borderRadius: 12, marginBottom: 16 }} />
                <h2 style={{ color: '#222', fontSize: '1.3rem', marginBottom: 8 }}>{t.proyectos[proy.titulo]}</h2>
                <p style={{ color: '#444', marginBottom: 12 }}>{t.proyectos[proy.descripcion]}</p>
                <Button
                  className={`ambito-btn ${isUrbanizacion ? 'gray lujo' : 'orange'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleProyectoNavigation(proy, navigate);
                  }}
                >
                  {t.proyectos.boton || 'Ver más'}
                  {isUrbanizacion && (
                    <span className="proximamente-label">{t.proyectos.proximamente}</span>
                  )}
                </Button>
              </div>
            );
          })}
        </div>
       
      </main>
    
      <Expertos />
      <ContactoCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default ProyectosColombia; 