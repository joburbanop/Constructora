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
import Slider from '../components/Slider';
import '../styles/ProyectosColombia.css';
import { useNavigate } from 'react-router-dom';
import { handleProyectoNavigation, navigateToSection } from '../utils/navigation';
import { FaHome, FaBuilding, FaUsers, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ProyectosColombia = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('inicio');
  const [tooltipVisible, setTooltipVisible] = useState(null);
  
  // Filtrar proyectos de Colombia
  const proyectosColombia = proyectos.filter(p => p.ubicacion === 'jamundi_colombia' || p.ubicacion === 'san_jose');
  
  // Usar el primer render como imagen de hero
  const heroImg = renders[0]?.imagen;

  // Función para determinar si un proyecto está en "Próximamente"
  const isProyectoProximamente = (titulo) => {
    // Proyectos próximamente (los que no tienen enlace o tienen enlace '#')
    const proyectosProximamente = [
      'sanmiguel_titulo',    // San Miguel Urbanización
      'marbella_titulo',     // Quintas de Marbella
      'palmeras_title',      // Palmeras de la Italia
      'cana_title'           // Caña Brava
    ];
    
    return proyectosProximamente.includes(titulo);
  };

  const handleMouseEnter = (titulo) => {
    if (isProyectoProximamente(titulo)) {
      setTooltipVisible(titulo);
    }
  };

  const handleMouseLeave = () => {
    setTooltipVisible(null);
  };

  // Efecto para hacer scroll hacia arriba cuando se carga la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Efecto para detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'proyectos', 'expertos', 'contactanos'];
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
      <section id="inicio">
        <Slider contenido={renders} namespace="colombia"/>
      </section>
      
      {/* Sección de beneficios de Colombia */}
      <ColombiaBenefits />
      
      {/* Sección principal de proyectos */}
      <section id="proyectos" className="proyectos-section">
        <div className="proyectos-header">
          <h1 className="proyectos-title">
            {t.proyectos.colombia_title || 'Proyectos Colombia'}
          </h1>
          <p className="proyectos-subtitle">
            Descubre nuestra cartera de proyectos inmobiliarios en Jamundí, Colombia
          </p>
        </div>
        
        {/* Grid de proyectos */}
        <div className="proyectos-colombia-grid">
          {proyectosColombia.map((proy, idx) => {
            const isUrbanizacion = proy.titulo === 'sanmiguel_titulo' || proy.titulo === 'marbella_titulo';
            const isProximamente = proy.titulo === 'sanmiguel_titulo' || proy.titulo === 'marbella_titulo' || proy.titulo === 'cana_title';
            const isEntregado = proy.titulo === 'puertas_sol_title' || proy.titulo === 'palmeras_title' || proy.titulo === 'caña_dulce_title' || proy.titulo === 'cana_title';
            
            return (
              <article key={idx} className="proyecto-colombia-card" data-proyecto={proy.titulo}>
                {/* Badge de estado */}
                <div className={`proyecto-status-badge ${isEntregado ? 'entregado' : 'en-marcha'}`}>
                  {isEntregado ? 'ENTREGADO' : 'EN MARCHA'}
                </div>
                
                <div className="proyecto-img-wrap">
                  <img src={proy.imagen} alt={t.proyectos[proy.titulo]} />
                </div>
                
                <div className="proyecto-content">
                  <h2>{t.proyectos[proy.titulo]}</h2>
                  <p>{t.proyectos[proy.descripcion]}</p>
                  
                  <div className="proyecto-ubicacion">
                    <FaMapMarkerAlt className="ubicacion-icon" />
                    <span>{t.proyectos[proy.ubicacion]}</span>
                  </div>
                  
                  <div className="button-container" style={{ position: 'relative' }}>
                    <Button
                      className={`ambito-btn ${isProyectoProximamente(proy.titulo) ? 'gray lujo proximamente' : 'orange'}`}
                      onClick={isProyectoProximamente(proy.titulo) ? undefined : (e) => {
                        e.preventDefault();
                        handleProyectoNavigation(proy, navigate);
                      }}
                      disabled={isProyectoProximamente(proy.titulo)}
                      onMouseEnter={() => handleMouseEnter(proy.titulo)}
                      onMouseLeave={handleMouseLeave}
                      aria-label={isProyectoProximamente(proy.titulo) ? t.proyectos.proximamente : t.proyectos.boton}
                    >
                      {isProyectoProximamente(proy.titulo) ? t.proyectos.proximamente : (t.proyectos.boton || 'Ver más')}
                    </Button>
                    {tooltipVisible === proy.titulo && isProyectoProximamente(proy.titulo) && (
                      <div className="tooltip-proximamente">
                        {t.proyectos.proximamente}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    
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