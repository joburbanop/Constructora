import React from "react";
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
const InfoRinconLago = () => {
   const { t } = useIdioma();
   const video = t.videos?.rincon?.render;
   const navigate = useNavigate();
   const zigzagcoral=infoZigZag.datosCoralMall;
    console.log("se renderizo coral mole");
  return (
   <div className="info-coral-container">
      <Header 
      />

      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />

      <Slider contenido={slidesCoral} namespace="coral"/>
      <DetallesProyecto id="coral" />
              <SectionDivider textKey="detalles" variant="subtle" />
       <InfoZigZag elementos={zigzagcoral} textoKey="info_ZigZag_coral"/>
       <div className="expertos-section-coral">
         <Expertos />
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
