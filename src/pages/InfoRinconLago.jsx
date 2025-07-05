import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import slidesRinconLago from "../utils/slidesRinconLago";
import Button from "../components/Button";
const InfoRinconLago = () => {
  console.log("InfoRinconLago renderizado");
  return (
   <>
   <Header />
   <Slider contenido={slidesRinconLago} namespace="rincon"/>
   
   </>
  );
};

export default InfoRinconLago;
