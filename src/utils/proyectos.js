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
    titulo: 'rincon_titulo',
    descripcion: 'rincon_desc',
    tipo: 'condominio',
    icono: 'condominio',
    iconoColor: '#222',
    ubicacion: 'jamundi_colombia',
    enlace: '/rincon-del-lago',
    etiquetaColor: '#ff6600'
  },
  {
    imagen: SanMiguel,
    titulo: 'sanmiguel_titulo',
    descripcion: 'sanmiguel_desc',
    tipo: 'urbanizacion',
    icono: 'urbanizacion',
    iconoColor: '#222',
    ubicacion: 'jamundi_colombia',
    enlace: '#',
    etiquetaColor: '#ff914d'
  },
  {
    imagen: Marbella,
    titulo: 'marbella_titulo',
    descripcion: 'marbella_desc',
    tipo: 'urbanizacion',
    icono: 'urbanizacion',
    iconoColor: '#222',
    ubicacion: 'jamundi_colombia',
    enlace: '#',
    etiquetaColor: '#ff914d'
  },
  {
    imagen: Coral,
    titulo: 'coral_titulo',
    descripcion: 'coral_desc',
    tipo: 'locales',
    icono: 'locales',
    iconoColor: '#222',
    ubicacion: 'usa',
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