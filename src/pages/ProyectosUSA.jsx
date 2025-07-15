import React from 'react';
import Header from '../components/Header';
import ProyectoCard from '../components/ProyectoCardSimple';
import Expertos from '../components/Expertos';
import ContactoCTA from '../components/ContactoCTA';
import Footer from '../components/Footer';
import proyectos from '../utils/proyectos';
import { useNavigate } from 'react-router-dom';
import { handleProyectoNavigation } from '../utils/navigation';
import { useIdioma } from '../context/IdiomaContext';
import '../styles/ProyectosUSA.css';
import Slider from '../components/Slider';
import slidesUSA from '../utils/slidesUSA';

export default function ProyectosUSA() {
  const { t } = useIdioma();
  const navigate = useNavigate();

  const proyectosUSA = proyectos.filter(p => p.ubicacion === 'cape_coral_usa');

  const handleNavigate = (proyecto) => {
    handleProyectoNavigation(proyecto, navigate);
  };

  return (
    <>
      <Header showDefaultNav={true} />
       <Slider contenido={slidesUSA} namespace="usa"/>

      <main className="usa-main">
        <h2 className="classtitulo">{t.proyectos_usa.titulo}</h2>
        <p className="clasdescripcion">{t.proyectos_usa.descripcion}</p>

        <div className="usa-grid">
          {proyectosUSA.map((proy, idx) => (
            <ProyectoCard
              key={idx}
              proyecto={proy}
              t={t}
              onNavigate={handleNavigate}
              idiomaKey="proyectos_card_simple"
            />
          ))}
        </div>
      </main>

      <Expertos />
      <ContactoCTA />
      <Footer />
    </>
  );
}