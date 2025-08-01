import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import Slider from "../components/Slider";
import slidesSanMiguel from "../utils/slidesSanMiguel";
import DetallesProyecto from "../components/DetallesProyecto";
import GaleriaProyecto from "../components/GaleriaProyecto";
import { useIdioma } from '../context/IdiomaContext';
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "../styles/InfoSanMiguel.css";
import { useNavigate } from 'react-router-dom';
import infoZigZag from "../utils/infoZigZag";
import InfoZigZag from "../components/InfoZigZag";
import Expertos from '../components/Expertos';
import ContactoCTA from '../components/ContactoCTA';
import UbicacionMaps from '../components/UbicacionMaps';
import AreaPrecioUbic from '../components/AreaPrecioUbic';
import { FaHome, FaBuilding, FaUsers, FaEnvelope } from 'react-icons/fa';
import expertos from '../utils/expertos';

const InfoSanMiguel = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  const zigzagSanMiguel = infoZigZag.datosSanMiguel;
  const [activeSection, setActiveSection] = useState('inicio');
  
  // Elimina cualquier filtro de expertos
  const listaFiltrada = expertos;

  // Coordenadas de San Miguel en Rozo - Palmira (3°37'59.0"N 76°23'14.3"W)
  const sanMiguelCoord = {
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1234567890123!2d-76.387315!3d3.633049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1234567890%3A0x1234567890abcdef!2sSan%20Miguel%2C%20Rozo%20-%20Palmira%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1234567890123!5m2!1ses-419!2sco"
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

  const sanMiguelNavItems = (
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
    <div className="info-san-miguel-container">
      <Header 
        customNavItems={sanMiguelNavItems}
        showDefaultNav={false}
      />

      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />

      <section id="inicio">
        <Slider contenido={slidesSanMiguel} namespace="san-miguel"/>
      </section>

      <DetallesProyecto id="san_miguel" />
      
      <SectionDivider textKey="detalles" variant="subtle" />
      
      <InfoZigZag elementos={zigzagSanMiguel} textoKey="info_ZigZag_san_miguel"/>
      
      <AreaPrecioUbic proyectoKey="san_miguel" />
      
      <UbicacionMaps mapSrc={sanMiguelCoord.mapSrc}/>

      <SectionDivider textKey="galeria" variant="subtle" />
      <GaleriaProyecto id="san_miguel" />
      
      <SectionDivider textKey="expertos" variant="subtle" />
      
      <div id="expertos" className="expertos-section-san-miguel">
        <Expertos listaFiltrada={expertos} />
      </div>
      
      <ContactoCTA />
      
      <section id="footer-contactanos" className="footer-section">
        <Footer/>
      </section>
      
      <WhatsAppFloat />
    </div>
  );
};

export default InfoSanMiguel; 