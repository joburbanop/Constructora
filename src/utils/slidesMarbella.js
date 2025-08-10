import Slides1 from '../assets/marbella/quintas_marbella1.webp';
import Slides2 from '../assets/marbella/quintas_marbella5.webp';
import Slides3 from '../assets/marbella/quintas_marbella8.webp';

const slidesCoral = [
  {
    image: Slides1,
    src: Slides1,
    srcset: `${Slides1}?w=768 768w, ${Slides1}?w=1280 1280w, ${Slides1}?w=1920 1920w`,
    title: 'slide1_title',
    subtitle: 'slide1_subtitle'
  },
  {
    image: Slides2,
    src: Slides2,
    srcset: `${Slides2}?w=768 768w, ${Slides2}?w=1280 1280w, ${Slides2}?w=1920 1920w`,
    title: 'slide2_title',
    subtitle: 'slide2_subtitle'
  },
  {
    image: Slides3,
    src: Slides3,
    srcset: `${Slides3}?w=768 768w, ${Slides3}?w=1280 1280w, ${Slides3}?w=1920 1920w`,
    title: 'slide3_title',
    subtitle: 'slide3_subtitle'
  }
];

export default slidesCoral;