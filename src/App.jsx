import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import AmbitoAccion from './components/AmbitoAccion'
import ProyectosEnMarcha from './components/ProyectosEnMarcha'
import SectionDivider from './components/SectionDivider'
import ProyectosEntregados from './components/ProyectosEntregados'
import RendersDestacados from './components/RendersDestacados'
import Footer from './components/Footer'
import Expertos from './components/Expertos'


function App() {
  return (
    <>
      <Header />
      <Slider id="inicio" />
      <div className="main-content">
        <section id="ambito"><AmbitoAccion /></section>
        <section id="proyectos"><ProyectosEnMarcha /></section>
        <section id="renders"><RendersDestacados /></section>
        <section id="entregados"><ProyectosEntregados /></section>
        <section id="expertos"><Expertos /></section>
      </div>
      <Footer id="contactanos" />
    </>
  )
}

export default App
