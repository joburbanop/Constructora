import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import Slider from "../components/Slider";
import slidesPalmerasItalia from "../utils/slidesPalmerasItalia";
import DetallesProyecto from "../components/DetallesProyecto";
import GaleriaProyecto from "../components/GaleriaProyecto";
import { useIdioma } from '../context/IdiomaContext';
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "../styles/InfoPalmerasItalia.css";
import "../styles/VideoYoutube.css";
import { useNavigate } from 'react-router-dom';
import infoZigZag from "../utils/infoZigZag";
import InfoZigZag from "../components/InfoZigZag";
import Expertos from '../components/Expertos';
import ContactoCTA from '../components/ContactoCTA';
import UbicacionMaps from '../components/UbicacionMaps';
import AreaPrecioUbic from '../components/AreaPrecioUbic';
import VideoYoutube from '../components/VideoYoutube';
import { FaHome, FaUsers, FaEnvelope } from 'react-icons/fa';
import expertos from '../utils/expertos';

const InfoPalmerasItalia = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  const zigzagPalmerasItalia = infoZigZag.datosPalmerasItalia;
  const [activeSection, setActiveSection] = useState('inicio');
  
  // Elimina cualquier filtro de expertos
  const listaFiltrada = expertos;

  // Coordenadas de Palmeras de la Italia en Jamundí
  const palmerasItaliaCoord = {
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1234567890123!2d-76.542251!3d3.22506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1234567890%3A0x1234567890abcdef!2sPalmeras%20de%20la%20Italia%2C%20Jamund%C3%AD%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1753214846388!5m2!1ses-419!2sco"
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

  const palmerasItaliaNavItems = (
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

  return (
    <div className="info-palmeras-italia-container">
      <Header 
        customNavItems={palmerasItaliaNavItems}
        showDefaultNav={false}
      />

      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />

      <section id="inicio">
        <Slider contenido={slidesPalmerasItalia} namespace="palmeras_italia"/>
      </section>

      <DetallesProyecto id="palmeras_italia" />

      <SectionDivider textKey="area_precio_ubicacion" />

      <AreaPrecioUbic proyectoKey="palmeras_italia" />

      <SectionDivider textKey="ubicacion" />

      <UbicacionMaps 
        mapSrc={palmerasItaliaCoord.mapSrc}
        title={t.textMapa.titulo}
      />

      <SectionDivider textKey="video" />

      <VideoYoutube videoId="PUBhzK41_3A" titulo={t.videos.palmeras_italia.video_principal.titulo} />

      <SectionDivider textKey="info_zigzag" />

      <InfoZigZag datos={zigzagPalmerasItalia} />

      <SectionDivider textKey="galeria" />

      <GaleriaProyecto id="palmeras_italia" />

      <section id="expertos" className="expertos-section-palmeras-italia">
        <Expertos asesores={listaFiltrada} />
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

export default InfoPalmerasItalia;