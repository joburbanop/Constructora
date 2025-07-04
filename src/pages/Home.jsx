import Header from '../components/Header';
import Slider from '../components/Slider';
import AmbitoAccion from '../components/AmbitoAccion';
import ProyectosEnMarcha from '../components/ProyectosEnMarcha';
import RendersDestacados from '../components/RendersDestacados';
import ProyectosEntregados from '../components/ProyectosEntregados';
import Expertos from '../components/Expertos';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header 
        showDefaultNav={true}
        className="home-header"
      />
      <Slider />
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
