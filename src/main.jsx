import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/animations.css'
import { IdiomaProvider } from './context/IdiomaContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProyectosColombia from './pages/ProyectosColombia';
import ProyectosUSA from './pages/ProyectosUSA';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IdiomaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/proyectos-colombia" element={<ProyectosColombia />} />
          <Route path="/proyectos-usa" element={<ProyectosUSA />} />
        </Routes>
      </BrowserRouter>
    </IdiomaProvider>
  </StrictMode>,
)
