import { useIdioma } from '../context/IdiomaContext';
import iconAreaPrecioUbic from '../utils/iconAreaPrecioUbic';
import '../styles/AreaPrecioUbic.css';

const AreaPrecioUbic = ({ proyectoKey }) => {
  const { t } = useIdioma();
  const traduccion = t.info_AreaPrecioUbic[proyectoKey] || t.info_AreaPrecioUbic;

  return (
    <div className="contenedor-bloques">
      <div className="bloque">
        <img src={iconAreaPrecioUbic.iconarea} alt={`Icono área - ${traduccion.area}`} loading="lazy" decoding="async" />
        <h3>{traduccion.area}</h3>
        <p>{traduccion.area_desc}</p>
      </div>
      <div className="bloque">
        <img src={iconAreaPrecioUbic.iconprecio} alt={`Icono precio - ${traduccion.precio}`} loading="lazy" decoding="async" />
        <h3>{traduccion.precio}</h3>
        <p>{traduccion.precio_desc}</p>
      </div>
      <div className="bloque">
        <img src={iconAreaPrecioUbic.iconubicacion} alt={`Icono ubicación - ${traduccion.ubicacion}`} loading="lazy" decoding="async" />
        <h3>{traduccion.ubicacion}</h3>
        <p>{traduccion.ubicacion_desc}</p>
      </div>
    </div>
  );
};

export default AreaPrecioUbic;