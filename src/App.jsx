import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import AmbitoAccion from './components/AmbitoAccion'

function App() {
  return (
    <>
      <Header />
      <Slider />
      <div className="main-content">
        <AmbitoAccion />
        <section className="hero">
          <h1>DESCUBRE TU ESPACIO IDEAL</h1>
          <p>CASAS, CONDOMINIOS Y LOCALES PARA TI</p>
        </section>
      </div>
    </>
  )
}

export default App
