import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProyectosColombia from './pages/ProyectosColombia';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyectos-colombia" element={<ProyectosColombia />} />
    </Routes>
  );
}
