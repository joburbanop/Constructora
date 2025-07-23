import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import renders from "../utils/renders";
import proyectos from "../utils/proyectos";
import { useIdioma } from '../context/IdiomaContext';
import Button from '../components/Button';
import ColombiaBenefits from '../components/ColombiaBenefits';
import Footer from '../components/Footer';
import Expertos from '../components/Expertos';
import ContactoCTA from '../components/ContactoCTA';
import WhatsAppFloat from "../components/WhatsAppFloat";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Slider.css';
import '../styles/ProyectosColombia.css';
import { useNavigate } from 'react-router-dom';
import { handleProyectoNavigation, navigateToSection } from '../utils/navigation';
import { FaHome, FaBuilding, FaUsers, FaEnvelope } from 'react-icons/fa';

const ProyectosColombia = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('inicio');
  
  // Filtrar proyectos de Colombia
  const proyectosColombia = proyectos.filter(p => p.ubicacion === 'jamundi_colombia');
  // Usar el primer render como imagen de hero
  const heroImg = renders[0]?.imagen;

  // Efecto para hacer scroll hacia arriba cuando se carga la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Efecto para detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'expertos', 'contactanos'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const handleSectionNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navegación específica para Colombia
  const colombiaNavItems = (
    <ul className="nav-items">
      <li className={activeSection === 'inicio' ? "active" : ""}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <span className="nav-icon">{<FaHome />}</span>
          <span className="nav-text">{t.header.inicio}</span>
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
          <span className="nav-icon">{<FaBuilding />}</span>
          <span className="nav-text">{t.proyectos.usa || 'Proyectos USA'}</span>
        </a>
      </li>
      <li className={activeSection === 'expertos' ? "active" : ""}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleSectionNavigation('expertos');
          }}
        >
          <span className="nav-icon">{<FaUsers />}</span>
          <span className="nav-text">{t.header.nosotros}</span>
        </a>
      </li>
      <li className={activeSection === 'contactanos' ? "active" : ""}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleSectionNavigation('contactanos');
          }}
        >
          <span className="nav-icon">{<FaEnvelope />}</span>
          <span className="nav-text">{t.header.contactanos}</span>
        </a>
      </li>
    </ul>
  );

  return (
    <div className="proyectos-colombia-container">
      <Header 
        customNavItems={colombiaNavItems}
        showDefaultNav={false}
      />
      
      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />
      
      {/* Hero Slider animado */}
      <section id="inicio" style={{ width: '100%', height: '520px', marginBottom: 0, padding: 0 }}>
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
      
      <main className="proyectos-colombia-main">
        <ColombiaBenefits />
        <h1 style={{ fontSize: '2.2rem', marginBottom: 32, textAlign: 'center' }}>{t.proyectos.colombia_title || 'Proyectos Colombia'}</h1>
        <div className="proyectos-colombia-grid">
          {proyectosColombia.map((proy, idx) => {
            const isUrbanizacion = proy.titulo === 'sanmiguel_titulo' || proy.titulo === 'marbella_titulo';
            return (
              <div key={idx} className="proyecto-colombia-card">
                <img src={proy.imagen} alt={t.proyectos[proy.titulo]} />
                <h2>{t.proyectos[proy.titulo]}</h2>
                <p>{t.proyectos[proy.descripcion]}</p>
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
    
      <div id="expertos" className="expertos-section-colombia">
        <Expertos />
      </div>
      <ContactoCTA />
      <section id="contactanos" className="footer-section">
        <Footer />
      </section>
      <WhatsAppFloat />
    </div>
  );
};

export default ProyectosColombia; 