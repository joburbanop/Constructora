import { infoProyectos } from '../utils/infoProyectos';
import '../styles/GaleriaProyecto.css';

export default function GaleriaProyecto({ id }) {
  const galeria = infoProyectos[id]?.galeria;

  if (!galeria || galeria.length === 0) return null;

  return (
    <div className="galeria-proyecto">
      <h3 className="galeria-titulo">Galería del proyecto</h3>
      <div className="galeria-grid">
        {galeria.map((img, idx) => (
          <img key={idx} src={img} alt={`Imagen ${idx + 1}`} className="galeria-img" />
        ))}
      </div>
    </div>
  );
}