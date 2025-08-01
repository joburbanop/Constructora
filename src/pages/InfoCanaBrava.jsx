import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import Slider from "../components/Slider";
import slidesCanaBrava from "../utils/slidesCanaBrava";
import DetallesProyecto from "../components/DetallesProyecto";
import GaleriaProyecto from "../components/GaleriaProyecto";
import { useIdioma } from '../context/IdiomaContext';
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "../styles/InfoCanaBrava.css";
import { useNavigate } from 'react-router-dom';
import infoZigZag from "../utils/infoZigZag";
import InfoZigZag from "../components/InfoZigZag";
import Expertos from '../components/Expertos';
import ContactoCTA from '../components/ContactoCTA';
import UbicacionMaps from '../components/UbicacionMaps';
import AreaPrecioUbic from '../components/AreaPrecioUbic';
import VideoYoutube from '../components/VideoYoutube';
import { FaHome, FaBuilding, FaUsers, FaEnvelope } from 'react-icons/fa';
import expertos from '../utils/expertos';

const InfoCanaBrava = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  const zigzagCanaBrava = infoZigZag.datosCanaBrava;
  const [activeSection, setActiveSection] = useState('inicio');
  
  // Elimina cualquier filtro de expertos
  const listaFiltrada = expertos;

  // Coordenadas para el mapa de Caña Brava
  const canaBravaCoord = {
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0367325!2d-76.2741326!3d4.03699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDInMTMuMiJOIDc2wrAxNiczMS4wIlc!5e0!3m2!1ses!2sco!4v1640995200000!5m2!1ses!2sco'
  };

  // Efecto para detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'expertos', 'footer-contactanos'];
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

  const canaBravaNavItems = (
    <ul className="nav-items">
      <li className={activeSection === 'inicio' ? "active" : ""}>
        <a href="#" onClick={(e) => {e.preventDefault(); navigate('/');}}>
          <span className="nav-icon">{<FaHome />}</span>
          <span className="nav-text">{t.header.inicio}</span>
        </a>
      </li>
      <li className={activeSection === 'expertos' ? "active" : ""}>
        <a href="#" onClick={(e) => {e.preventDefault(); handleSectionNavigation('expertos');}}>
          <span className="nav-icon">{<FaUsers />}</span>
          <span className="nav-text">{t.header.nosotros}</span>
        </a>
      </li>
      <li className={activeSection === 'footer-contactanos' ? "active" : ""}>
        <a href="#" onClick={(e) => {e.preventDefault(); handleSectionNavigation('footer-contactanos');}}>
          <span className="nav-icon">{<FaEnvelope />}</span>
          <span className="nav-text">{t.header.contactanos}</span>
        </a>
      </li>
    </ul>
  );

  // Efecto para hacer scroll hacia arriba cuando se carga la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="info-cana-brava-container">
      <Header 
        customNavItems={canaBravaNavItems}
        showDefaultNav={false}
      />

      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />

      <section id="inicio">
        <Slider contenido={slidesCanaBrava} namespace="cana_brava"/>
      </section>
      
      <DetallesProyecto id="cana_brava" />
      
      <SectionDivider textKey="detalles" variant="subtle" />
      <AreaPrecioUbic proyectoKey="cana_brava" />

      <SectionDivider textKey="video" variant="subtle" />
      <VideoYoutube videoId="hbDuQFcnO6c" titulo={t.videos.cana_brava.video_principal.titulo} />

      <SectionDivider textKey="ubicacion" variant="subtle" />
      <UbicacionMaps mapSrc={canaBravaCoord.mapSrc}/>

      <SectionDivider textKey="detalles" variant="subtle" />
      <InfoZigZag elementos={zigzagCanaBrava} textoKey="info_ZigZag_cana_brava"/>

      <SectionDivider textKey="galeria" variant="subtle" />
      <GaleriaProyecto id="cana_brava" />

      <section id="expertos" className="expertos-section-cana-brava">
        <Expertos />
      </section>

      <section id="contactanos">
        <ContactoCTA />
      </section>

      <section id="footer-contactanos" className="footer-section">
        <Footer />
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default InfoCanaBrava;