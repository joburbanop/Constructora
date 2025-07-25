import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import Slider from "../components/Slider";
import slidesPuertasSol from "../utils/slidesPuertasSol";
import '../utils/testImages';
import DetallesProyecto from "../components/DetallesProyecto";
import GaleriaProyecto from "../components/GaleriaProyecto";
import { useIdioma } from '../context/IdiomaContext';
import EspaciosSociales from "../components/EspaciosSociales";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import AreaPrecioUbic from "../components/AreaPrecioUbic";
import InfoZigZag from "../components/InfoZigZag";
import infoZigZag from "../utils/infoZigZag";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "../styles/InfoPuertasSol.css";
import { useNavigate } from 'react-router-dom';
import UbicacionMaps from '../components/UbicacionMaps';
import expertos from '../utils/expertos';
import Expertos from "../components/Expertos";
import ContactoCTA from '../components/ContactoCTA';
import { FaHome, FaBuilding, FaUsers, FaEnvelope } from 'react-icons/fa';

const InfoPuertasSol = () => {
   const { t } = useIdioma();
   const video = t.videos?.puertas_sol?.video_principal;
   const navigate = useNavigate();
   const zigzagPuertasSol = infoZigZag.datosPuertasSol;
   const [activeSection, setActiveSection] = useState('inicio');
   
   const jamundiCoord = {
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.1234567890123!2d-76.54321098765432!3d3.234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3099e34939565f%3A0x7c4a30a48d886678!2sPuertas%20del%20Sol%20Jamund%C3%AD!5e1!3m2!1ses-419!2sco!4v1753214846388!5m2!1ses-419!2sco"
   };
   const clavesDeseadas = ['sofia'];
   const listaFiltrada = expertos.filter(e => clavesDeseadas.includes(e.clave));

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

   const puertasSolNavItems = (
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
     <div className="info-puertas-sol-container">
        <Header
          customNavItems={puertasSolNavItems}
          showDefaultNav={false}
        />

        {/* Breadcrumb Navigation */}
        <BreadcrumbSimple />

        <section id="inicio">
          <Slider contenido={slidesPuertasSol} namespace="puertas_sol"/>
        </section>

        <section className="detalles-proyecto">
          <DetallesProyecto id="puertas_sol" videoId={video.id} videoTitulo={video.titulo} />
        </section>
        
        <section className="area-precio-ubic">
          <AreaPrecioUbic proyectoKey="puertas_sol" />
        </section>
        
        <section className="galeria-proyecto">
          <GaleriaProyecto id="puertas_sol" />
        </section>
        
        <section className="espacios-sociales">
          <EspaciosSociales 
            id="puertas_sol" 
            claves={['gasolinera', 'servicios', 'comerciales', 'supermercado', 'comidas', 'verdes']} 
          />
        </section>
        
        <section className="info-zigzag">
          <InfoZigZag elementos={zigzagPuertasSol} textoKey="info_ZigZag_puertas_sol"/>
        </section>
        
        <section className="ubicacion-maps">
          <UbicacionMaps mapSrc={jamundiCoord.mapSrc}/>
        </section>
        
        <div id="expertos" className="expertos-section-puertas-sol">
          <Expertos />
        </div>
        
        <section className="contacto-cta">
          <ContactoCTA />
        </section>
        
        <section id="contactanos" className="footer-section">
          <Footer/>
        </section>
        
        <WhatsAppFloat />
        </div>
    );
};

export default InfoPuertasSol;