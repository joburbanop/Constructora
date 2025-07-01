import React from "react";
import Header from "../components/Header";
import Hero from '../components/Slider';
import ProjectInfo from '../components/ProjectInfo';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';
import { useIdioma } from '../context/IdiomaContext';
import Button from '../components/Button';
import proyectos from "../utils/proyectos";
import coralLogo from '../assets/coral.png';

const ProyectosUSA = () => {
  const { t } = useIdioma();
  // Filtrar proyectos de USA
  const proyectosUSA = proyectos.filter(p => p.ubicacion === 'usa');
  const proyecto = proyectosUSA[0];

  return (
    <>
      <Header />
      <Hero
        imagen={proyecto.imagen}
        titulo={t.proyectos.usa || "Proyectos en Estados Unidos"}
        subtitulo={t.proyectos.coral_desc || "Una gran oportunidad de inversión"}
      />
      <main>
        <ProjectInfo
          nombre={t.proyectos[proyecto.titulo]}
          subtitulo={t.proyectos.coral_subtitulo}
          descripcion={t.proyectos.coral_info}
          logo={coralLogo}
        />
        <ProjectDetails
          area={t.proyectos.coral_area}
          precio={t.proyectos.coral_precio}
          ubicacion={t.proyectos.coral_ubicacion}
          pdf={proyecto.pdf}
        />
      </main>
      <Footer />
    </>
  );
};

export default ProyectosUSA; 