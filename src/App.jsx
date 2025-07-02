import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProyectosColombia from './pages/ProyectosColombia';
import ProyectosUSA from './pages/ProyectosUSA';
import InfoRinconLago from "./pages/InfoRinconLago";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyectos-colombia" element={<ProyectosColombia />} />
      <Route path="/proyectos-usa" element={<ProyectosUSA />} />
      <Route path="/rincon-del-lago" element={<InfoRinconLago />} />
    </Routes>
  );
}
