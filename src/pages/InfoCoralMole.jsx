import React from "react";
import Header from "../components/Header";
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
   <>
      <Header 
      />

      <Slider contenido={slidesCoral} namespace="coral"/>
      <DetallesProyecto id="coral" />
      <SectionDivider textKey="detalles" />
       <InfoZigZag elementos={zigzagcoral} textoKey="info_ZigZag_coral"/>
       <Expertos />
      <ContactoCTA />
      <Footer/>
      <WhatsAppFloat />

   
   </>
  );
};

export default InfoRinconLago;
