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
        
      </div>
    </>
  )
}

export default App
