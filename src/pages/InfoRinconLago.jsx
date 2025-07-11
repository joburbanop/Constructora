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

const InfoRinconLago = () => {
   const { t } = useIdioma();
  console.log("InfoRinconLago renderizado");
  return (
   <>
      <Header />
      <Slider contenido={slidesRinconLago} namespace="rincon"/>
      <DetallesProyecto id="rincon" />
      <SectionDivider textKey="espacios" />
      <EspaciosSociales id="rincon" claves={t.rincon_detalle.espacios} />
      <SectionDivider textKey="galeria" />
      <GaleriaProyecto id="rincon" />
      <Footer/>

   
   </>
  );
};

export default InfoRinconLago;
