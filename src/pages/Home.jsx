import Header from '../components/Header';
import Slider from '../components/Slider';
import AmbitoAccion from '../components/AmbitoAccion';
import ProyectosEnMarcha from '../components/ProyectosEnMarcha';
import RendersDestacados from '../components/RendersDestacados';
import ProyectosEntregados from '../components/ProyectosEntregados';
import Expertos from '../components/Expertos';
import Footer from '../components/Footer';
import slides from '../utils/slides';

export default function Home() {
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
      <Footer id="contactanos" />
    </>
  );
}
