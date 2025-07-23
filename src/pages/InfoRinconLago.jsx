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
import { useNavigate } from 'react-router-dom';
import UbicacionMaps from '../components/UbicacionMaps';
import {mapaRinconLago} from "../utils/imgadicional";
import expertos from '../utils/expertos';
import Expertos from "../components/Expertos";
const InfoRinconLago = () => {
   const { t } = useIdioma();
   const video = t.videos?.rincon?.rincon_lago_nuevo_sur;
   const video2 = t.videos?.rincon?.render;
   const navigate = useNavigate();
   const zigzagrincon=infoZigZag.datosRinconLago;
   const jamundiCoord = {
      lat: 3.2758,  // Latitud de Jamundí
      lng: -76.5408,// Longitud de Jamundí
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.240232958078!2d-76.56931072524975!3d3.2498028525261127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3099e34939565f%3A0x7c4a30a48d886678!2sRinc%C3%B3n%20del%20LAGO!5e1!3m2!1ses-419!2sco!4v1753214846388!5m2!1ses-419!2sco"
   };
   const clavesDeseadas = ['sofia'];
  const listaFiltrada = expertos.filter(e => clavesDeseadas.includes(e.clave));
  return (
   <>
      <Header
      />

      <Slider contenido={slidesRinconLago} namespace="rincon"/>
      <DetallesProyecto id="rincon"  videoId={video.id} videoTitulo={video.titulo} />
      
      <SectionDivider textKey="espacios" />
      <EspaciosSociales id="rincon" claves={t.rincon_detalle.espacios} />
      
      <SectionDivider textKey="detalles" />
      <AreaPrecioUbic proyectoKey="rincon_lago" />

      <SectionDivider textKey="ubicacion" />
      <UbicacionMaps mapSrc={jamundiCoord.mapSrc}/>

      <SectionDivider textKey="video" />
      <VideoYoutube videoId={video2.id} titulo={video2.titulo} />


      <SectionDivider textKey="detalles" />
      <InfoZigZag elementos={zigzagrincon} textoKey="info_ZigZag_rincon"/>
      

      <SectionDivider textKey="mapa_obra" />
      <div>
      <img 
         src={mapaRinconLago}
         alt={t.imagenes_add.mapa_rincon} 
         style={{ width: "100%", maxWidth: "600px", display: "block", margin: "0 auto" }} 
      />

      </div>

      <SectionDivider textKey="galeria" />
      <GaleriaProyecto id="rincon" />
      <Expertos listaFiltrada={listaFiltrada}/>
      <Footer/>

   
   </>
  );
};

export default InfoRinconLago;
