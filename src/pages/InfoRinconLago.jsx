import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import slidesRinconLago from "../utils/slidesRinconLago";
import Button from "../components/Button";
import DetallesProyecto from "../components/DetallesProyecto";
import GaleriaProyecto from "../components/GaleriaProyecto";
import { useIdioma } from '../context/IdiomaContext';
import EspaciosSociales from "../components/EspaciosSociales";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import AreaPrecioUbic from "../components/AreaPrecioUbic";
import InfoZigZag from "../components/InfoZigZag";
import infoZigZag  from "../utils/infoZigZag";
import VideoYoutube from "../components/VideoYoutube";
import "../styles/VideoYoutube.css";
const InfoRinconLago = () => {
   const { t } = useIdioma();
   const video = t.videos?.rincon?.render;

  console.log("InfoRinconLago renderizado");
  return (
   <>
      <Header />
      <Slider contenido={slidesRinconLago} namespace="rincon"/>
      <DetallesProyecto id="rincon" />
      <SectionDivider textKey="espacios" />
      <EspaciosSociales id="rincon" claves={t.rincon_detalle.espacios} />
      <SectionDivider textKey="detalles" />

      <AreaPrecioUbic proyectoKey="rincon_lago" />
      <SectionDivider textKey="detalles" />
      <InfoZigZag elementos={infoZigZag} textoKey="info_ZigZag_rincon"/>
      <SectionDivider textKey="video" />
       <VideoYoutube videoId={video.id} titulo={video.titulo} />

      <SectionDivider textKey="galeria" />
      <GaleriaProyecto id="rincon" />
      <Footer/>

   
   </>
  );
};

export default InfoRinconLago;
