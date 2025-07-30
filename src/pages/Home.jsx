import React, { useEffect, useMemo, useCallback } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../components/Header';
import Slider from '../components/Slider';
import SearchFilters from '../components/SearchFilters';
import AmbitoAccion from '../components/AmbitoAccion';
import ProyectosEnMarcha from '../components/ProyectosEnMarcha';

import ProyectosEntregados from '../components/ProyectosEntregados';
import Expertos from '../components/Expertos';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import StatsSection from '../components/StatsSection';
import SectionDivider from '../components/SectionDivider';
import slides from '../utils/slides';
import proyectos from '../utils/proyectos';
import { useIdioma } from '../context/IdiomaContext';
import '../styles/Home.css';

export default function Home() {
  const { t } = useIdioma();
  const location = useLocation();
  
  // Memoized filtered projects for better performance
  const { proyectosEnMarcha, proyectosEntregados } = useMemo(() => {
    const titulosEnMarcha = ['rincon_titulo', 'coral_titulo', 'marbella_titulo', 'sanmiguel_titulo'];
    const titulosEntregados = ['cana_title', 'palmeras_title', 'caña_dulce_title', 'puertas_sol_title'];
    
    return {
      proyectosEnMarcha: proyectos.filter(p => titulosEnMarcha.includes(p.titulo)),
      proyectosEntregados: proyectos.filter(p => titulosEntregados.includes(p.titulo))
    };
  }, [proyectos]);

  // Optimized scroll handling with useCallback
  const handleScrollToSection = useCallback((sectionId) => {
    const seccion = document.getElementById(sectionId);
    if (seccion) {
      seccion.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  }, []);

  // Navigation and scroll effects
  useEffect(() => {
    const { seccionDestino, scrollToTop } = location.state || {};

    if (scrollToTop) {
      setTimeout(handleScrollToTop, 200);
    }

    if (seccionDestino) {
      setTimeout(() => handleScrollToSection(seccionDestino), 100);
    }
  }, [location.state, handleScrollToSection, handleScrollToTop]);

  // Auto scroll to top on mount (only if no specific destination)
  useEffect(() => {
    const hasSpecificDestination = location.state?.seccionDestino || location.state?.scrollToTop;
    
    if (!hasSpecificDestination) {
      handleScrollToTop();
    }
  }, [handleScrollToTop, location.state]);

  return (
    <div className="home-container" role="main">
      {/* Header */}
      <Header />
      
      {/* Hero Section with Slider */}
      <section 
        id="inicio" 
        className="hero-section"
        aria-label="Sección principal con presentación"
      >
        <Slider contenido={slides} namespace="home" />
      </section>

      {/* Search Filters Section */}
      <section 
        className="search-filters-section"
        aria-label="Filtros de búsqueda"
      >
        <SearchFilters />
      </section>

      {/* Services Section */}
      <section 
        id="ambito" 
        className="section-ambito"
        aria-label="Nuestros servicios"
      >
        <div className="section-container">
          <AmbitoAccion />
        </div>
      </section>

      {/* Active Projects Section */}
      <section 
        id="proyectos" 
        className="section-proyectos"
        aria-label="Proyectos en marcha"
      >
        <div className="section-container">
          <div className="section-header">
            <SectionDivider 
              textKey="proyectos" 
              icon={<i className="fas fa-building" aria-hidden="true"></i>} 
              variant="accent" 
            />
            <div className="section-title-container">
              <h2 className="section-title">{t.proyectos.titulo}</h2>
              <p className="section-subtitle">{t.proyectos.subtitulo}</p>
            </div>
          </div>
          <ProyectosEnMarcha proyectosFiltrados={proyectosEnMarcha} />
        </div>
      </section>

      {/* Statistics Section */}
      <section 
        id="stats" 
        className="section-stats"
        aria-label="Estadísticas de la empresa"
      >
        <StatsSection />
      </section>

      {/* Completed Projects Section */}
      <section 
        id="proyectos-entregados" 
        className="section-entregados"
        aria-label="Proyectos finalizados"
      >
        <div className="section-container">
          <div className="section-header">
            <SectionDivider 
              textKey="proyectos" 
              variant="subtle" 
            />
            <div className="section-title-container">
              <h2 className="section-title">{t.entregados.titulo}</h2>
              <p className="section-subtitle">
                {t.entregados.subtitulo || 'Proyectos finalizados con éxito'}
              </p>
            </div>
          </div>
          <ProyectosEnMarcha proyectosFiltrados={proyectosEntregados} />
        </div>
      </section>

      {/* Experts Section */}
      <section 
        id="expertos" 
        className="section-expertos"
        aria-label="Nuestro equipo de expertos"
      >
        <div className="section-container">
          <Expertos />
        </div>
      </section>

      {/* Footer Section */}
      <footer 
        id="contactanos" 
        className="footer-section"
        role="contentinfo"
        aria-label="Información de contacto y pie de página"
      >
        <Footer />
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
}
