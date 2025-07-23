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
import proyectos from '../utils/proyectos';
import { useIdioma } from '../context/IdiomaContext';
import SectionDivider from '../components/SectionDivider';
import '../styles/Home.css';
export default function Home() {
   const { t } = useIdioma();
 const location = useLocation();
 const titulosDeseados = [ 'rincon_titulo','coral_titulo', 'marbella_titulo','sanmiguel_titulo'];
 const titulosDeseados2 = [ 'cana_title','palmeras_title', 'caña_dulce_title','puertas_sol_title'];

 const proyectosFiltrados = proyectos.filter(p =>
    titulosDeseados.includes(p.titulo)
  );
  const proyectosFiltrados2 = proyectos.filter(p =>
    titulosDeseados2.includes(p.titulo)
  );
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
         
        <SectionDivider textKey="proyectos" icon={<i className="fas fa-building"></i>} />
       
        <div className='container-title'>
           <h2 className="proyectos-titulo">{t.proyectos.titulo}</h2>
            <p className="proyectos-sub">{t.proyectos.subtitulo}</p>
        </div>
        <section id="proyectos"><ProyectosEnMarcha proyectosFiltrados={proyectosFiltrados}/></section>
        
        <section id="renders"><RendersDestacados /></section>
         
          <SectionDivider textKey="proyectos" />
         <div className='container-title'>
           <h2 className="proyectos-titulo">{t.entregados.titulo}</h2>
        </div>
        <section id="proyectoss"><ProyectosEnMarcha proyectosFiltrados={proyectosFiltrados2}/></section>
        
       {/* <section id="entregados"><ProyectosEntregados /></section>*/}
        <section id="expertos"><Expertos /></section>
      </div>x
      <section id="contactanos">
        <Footer />
      </section>
    </>
  );
}
