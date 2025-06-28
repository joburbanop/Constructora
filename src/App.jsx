import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import AmbitoAccion from './components/AmbitoAccion'
import ProyectosEnMarcha from './components/ProyectosEnMarcha'
import SectionDivider from './components/SectionDivider'
import ProyectosEntregados from './components/ProyectosEntregados'
import RendersDestacados from './components/RendersDestacados'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Slider />
      <div className="main-content">
        <AmbitoAccion />    
        <ProyectosEnMarcha /> 
        <RendersDestacados />
        <ProyectosEntregados />
      </div>
      <Footer />
    </>
  )
}

export default App
