import Rincon from '../assets/colombia/rincon_colombia.webp';
import SanMiguel from '../assets/colombia/dji_0014_colombia.webp';
import Marbella from '../assets/colombia/img_20200130_colombia.webp';
import Coral from '../assets/coral.png';
import casa_1 from '../assets/casas/casa_1.webp';
import casa_2 from '../assets/casas/casa_2.webp';
import { HiOfficeBuilding } from 'react-icons/hi';
import { BsBuilding } from 'react-icons/bs';
import { PiStorefrontBold } from 'react-icons/pi';
import PuertasSol from '../assets/puertas_sol/puertas_sol.webp'
import CanaBrava from '../assets/cana_brava/cana_brava_logo.webp';
import CanaDulce from '../assets/cana_dulce/cana_dulce_logo.webp';
import Palmeras from '../assets/palmeras_italia/palmeras_italia_logo.webp';
const proyectos = [
  {
    imagen: Rincon,
    titulo: 'rincon_titulo',
    descripcion: 'rincon_desc',
    tipo: 'condominio',
    icono: 'condominio',
    iconoColor: '#222',
    ubicacion: 'jamundi_colombia',
    enlace: '#',
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
    ubicacion: 'cope_coral',
    enlace: '#',
    etiquetaColor: '#ffb347'
  },
  {
    imagen: casa_1,
    titulo: 'casa_usa_1_title',
    descripcion: 'casa_usa_1_desc',
    tipo: 'locales',
    icono: 'locales',
    iconoColor: '#222',
    ubicacion: 'cope_coral',
    enlace: '#',
    etiquetaColor: '#ffb347'
  },
   {
    imagen: casa_2,
    titulo: 'casa_usa_2_title',
    descripcion: 'casa_usa_2_desc',
    tipo: 'locales',
    icono: 'locales',
    iconoColor: '#222',
    ubicacion: 'cope_coral',
    enlace: '#',
    etiquetaColor: '#ffb347'
  },
   {
    imagen: PuertasSol,
    titulo: 'puertas_sol_title',
    descripcion: 'puertas_sol_desc',
    tipo: 'urbanizacion',
    icono: 'urbanizacion',
    iconoColor: '#222',
    ubicacion: 'jamundi_colombia',
    enlace: '/puertas-del-sol',
    etiquetaColor: '#ff6600'
  },
   {
    imagen: CanaDulce,
    titulo: 'caña_dulce_title',
    descripcion: 'caña_dulce_desc',
    tipo: 'urbanizacion',
    icono: 'urbanizacion',
    iconoColor: '#222',
    ubicacion: 'san_jose',
    enlace: '/cana-dulce',
    etiquetaColor: '#ffb347'
  },
   {
    imagen: Palmeras,
    titulo: 'palmeras_title',
    descripcion: 'palmeras_desc',
    tipo: 'condominio',
    icono: 'condominio',
    iconoColor: '#222',
    ubicacion: 'jamundi_colombia',
    enlace: '#',
    etiquetaColor: '#ffb347'
  },
   {
    imagen: CanaBrava,
    titulo: 'cana_title',
    descripcion: 'cana_desc',
    tipo: 'urbanizacion',
    icono: 'urbanizacion',
    iconoColor: '#222',
    ubicacion: 'jamundi_colombia',
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