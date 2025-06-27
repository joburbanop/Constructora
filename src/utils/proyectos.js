import Rincon from '../assets/Rincon.png';
import SanMiguel from '../assets/San_Miguel.png';
import Marbella from '../assets/Marbella.png';
import Coral from '../assets/coral.png';
import { HiOfficeBuilding } from 'react-icons/hi';
import { BsBuilding } from 'react-icons/bs';
import { PiStorefrontBold } from 'react-icons/pi';

const proyectos = [
  {
    imagen: Rincon,
    titulo: 'Exclusivo condominio campestre',
    descripcion: 'Con zonas verdes, 16 amenidades y zona comercial',
    tipo: 'Condominio',
    icono: 'condominio',
    iconoColor: '#222',
    ubicacion: 'Jamundí, Colombia',
    enlace: '#',
    etiquetaColor: '#ff6600'
  },
  {
    imagen: SanMiguel,
    titulo: 'Urbanización abierta',
    descripcion: 'Ubicada en rozo, sobre la vía que conduce a Cerrito.',
    tipo: 'Urbanización',
    icono: 'urbanizacion',
    iconoColor: '#222',
    ubicacion: 'Jamundí, Colombia',
    enlace: '#',
    etiquetaColor: '#ff914d'
  },
  {
    imagen: Marbella,
    titulo: 'Urbanización abierta',
    descripcion: 'Para construir a su gusto. Lotes más amplios y con el mejor precio de la zona. Sur de Jamundí',
    tipo: 'Urbanización',
    icono: 'urbanizacion',
    iconoColor: '#222',
    ubicacion: 'Jamundí, Colombia',
    enlace: '#',
    etiquetaColor: '#ff914d'
  },
  {
    imagen: Coral,
    titulo: 'Locales comerciales',
    descripcion: 'La mejor oportunidad para invertir con seguridad.',
    tipo: 'Locales',
    icono: 'locales',
    iconoColor: '#222',
    ubicacion: 'Estados Unidos',
    enlace: '#',
    etiquetaColor: '#ffb347'
  }
];

const iconosTipo = {
  urbanizacion: HiOfficeBuilding,
  condominio: BsBuilding,
  locales: PiStorefrontBold
};

export default proyectos;