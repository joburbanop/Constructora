import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import Slider from "../components/Slider";
import slidesCoral from "../utils/slidesCoral";
import Button from "../components/Button";
import DetallesProyecto from "../components/DetallesProyecto";
import GaleriaProyecto from "../components/GaleriaProyecto";
import { useIdioma } from '../context/IdiomaContext';
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "../styles/VideoYoutube.css";
import "../styles/InfoCoralMole.css";
import { useNavigate } from 'react-router-dom';
import infoZigZag  from "../utils/infoZigZag";
import InfoZigZag from "../components/InfoZigZag";
import Expertos from '../components/Expertos';
import ContactoCTA from '../components/ContactoCTA';
import UbicacionMaps from '../components/UbicacionMaps';
import { FaHome, FaBuilding, FaUsers, FaEnvelope } from 'react-icons/fa';
import agentes from '../utils/expertos';
const InfoRinconLago = () => {
   const { t } = useIdioma();
   const video = t.videos?.rincon?.render;
   const navigate = useNavigate();
   const zigzagcoral=infoZigZag.datosCoralMall;
   const [activeSection, setActiveSection] = useState('inicio');
    const nombresDeseados = ['yulei'];
   
       const asesores = agentes.filter(({ clave }) =>
       nombresDeseados.includes(clave)
       );
   const jamundiCoord = {
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.855319345066!2d-82.00755649185662!3d26.646388419501477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db46662259419b%3A0xca7775557e291078!2s300%20Chiquita%20Blvd%20S%2C%20Cape%20Coral%2C%20FL%2033991%2C%20EE.%20UU.!5e1!3m2!1ses-419!2sco!4v1753512612201!5m2!1ses-419!2sco"
   };
 
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

   const coralNavItems = (
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
       <li className={activeSection === 'contactanos' ? "active" : ""}>
         <a href="#" onClick={(e) => {e.preventDefault(); handleSectionNavigation('contactanos');}}>
           <span className="nav-icon">{<FaEnvelope />}</span>
           <span className="nav-text">{t.header.contactanos}</span>
         </a>
       </li>
     </ul>
   );
     return (
   <div className="info-coral-container">
      <Header 
        customNavItems={coralNavItems}
        showDefaultNav={false}
      />

      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />

      <section id="inicio">
        <Slider contenido={slidesCoral} namespace="coral"/>
      </section>
      <DetallesProyecto id="coral" />
              <SectionDivider textKey="detalles" variant="subtle" />
       <InfoZigZag elementos={zigzagcoral} textoKey="info_ZigZag_coral"/>
      
         <UbicacionMaps mapSrc={jamundiCoord.mapSrc}/>
       <div id="expertos" className="expertos-section-coral">
         <Expertos  listaFiltrada={asesores}  />
       </div>
      <ContactoCTA />
      <section id="contactanos" className="footer-section">
        <Footer/>
      </section>
      <WhatsAppFloat />

   
   </div>
  );
};

export default InfoRinconLago;
