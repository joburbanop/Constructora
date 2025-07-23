import Header from '../components/Header';
import Slider from '../components/Slider';
import AmbitoAccion from '../components/AmbitoAccion';
import ProyectosEnMarcha from '../components/ProyectosEnMarcha';
import RendersDestacados from '../components/RendersDestacados';
import ProyectosEntregados from '../components/ProyectosEntregados';
import Expertos from '../components/Expertos';
import Footer from '../components/Footer';
import slides from '../utils/slides';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Home() {
 const location = useLocation();
 useEffect(() => {
    const destino = location.state?.seccionDestino;
    const scrollToTop = location.state?.scrollToTop;

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (destino) {
      setTimeout(() => {
        const seccion = document.getElementById(destino);
        if (seccion) {
          seccion.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.state]);
  return (
    <>
      <Header />
      <Slider contenido={slides} namespace="home" />
      <div className="main-content">
        <section id="ambito"><AmbitoAccion /></section>
        <section id="proyectos"><ProyectosEnMarcha /></section>
        <section id="renders"><RendersDestacados /></section>
        <section id="entregados"><ProyectosEntregados /></section>
        <section id="expertos"><Expertos /></section>
      </div>
      <section id="contactanos">
        <Footer />
      </section>
    </>
  );
}
