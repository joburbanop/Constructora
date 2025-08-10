import coralImg from '../assets/coral.png?as=webp&quality=70';
import coralRender from '../assets/coral_render.png?as=webp&quality=70';
import usaImg from '../assets/Usa.webp';

const slidesUSA = [
  {
    image: coralImg,
    src: coralImg,
    srcset: `${coralImg}&w=768 768w, ${coralImg}&w=1280 1280w, ${coralImg}&w=1920 1920w`,
    title: 'slide1_title',
    subtitle: 'slide1_subtitle'
  },
  {
    image: coralRender,
    src: coralRender,
    srcset: `${coralRender}&w=768 768w, ${coralRender}&w=1280 1280w, ${coralRender}&w=1920 1920w`,
    title: 'slide2_title',
    subtitle: 'slide2_subtitle'
  },
  {
    image: usaImg,
    src: usaImg,
    srcset: `${usaImg}?w=768 768w, ${usaImg}?w=1280 1280w, ${usaImg}?w=1920 1920w`,
    title: 'slide3_title',
    subtitle: 'slide3_subtitle'
  }
];

export default slidesUSA;
