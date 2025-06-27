import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import AmbitoAccion from './components/AmbitoAccion'
import ProyectosEnMarcha from './components/ProyectosEnMarcha'
import SectionDivider from './components/SectionDivider'

function App() {
  return (
    <>
      <Header />
      <Slider />
      <div className="main-content">
        <AmbitoAccion />
        <SectionDivider text="Proyectos" color="#ff6600" />
        <ProyectosEnMarcha />
      </div>
    </>
  )
}

export default App
