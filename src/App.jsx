import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProyectosColombia from './pages/ProyectosColombia';
import ProyectosUSA from './pages/ProyectosUSA';
import InfoRinconLago from "./pages/InfoRinconLago";
import InfoCoralMole from "./pages/InfoCoralMole";
import InfoCanaBrava from "./pages/InfoCanaBrava";
import InfoCanaDulce from "./pages/InfoCanaDulce";
import InfoPalmerasItalia from "./pages/InfoPalmerasItalia";
import InfoPuertasSol from "./pages/InfoPuertasSol";
import CasaUsaPrimera from "./pages/CasaUsaPrimera";
import CasaUsaSegunda from './pages/CasaUsaSegunda';
import TodosLosProyectos from "./pages/TodosLosProyectos";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos-los-proyectos" element={<TodosLosProyectos />} />
      <Route path="/proyectos-colombia" element={<ProyectosColombia />} />
      <Route path="/proyectos-usa" element={<ProyectosUSA />} />
      <Route path="/rincon-del-lago" element={<InfoRinconLago />} />
      <Route path="/coral-mall" element={<InfoCoralMole />} />
      <Route path="/cana-brava" element={<InfoCanaBrava/>} />
      <Route path="/cana-dulce" element={<InfoCanaDulce/>} />
      <Route path="/puertas-sol" element={<InfoPuertasSol/>} />
      <Route path="/palmeras-italia" element={<InfoPalmerasItalia/>} />
      <Route path="/casa-usa-primera" element={<CasaUsaPrimera/>} />
      <Route path="/casa-usa-segunda" element={<CasaUsaSegunda/>} />


    </Routes>
  );
}
