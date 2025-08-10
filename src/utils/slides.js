import img1 from '../assets/Diapositiva01.PNG?as=webp&quality=70';
import img2 from '../assets/Diapositiva02.PNG?as=webp&quality=70';
import img3 from '../assets/Diapositiva03.PNG?as=webp&quality=70';
import img4 from '../assets/Diapositiva04.PNG?as=webp&quality=70';

const slides = [
  {
    image: img1,
    src: img1,
    srcset: `${img1}&w=768 768w, ${img1}&w=1280 1280w, ${img1}&w=1920 1920w`,
    title: 'slide1_title',
    subtitle: 'slide1_subtitle'
  },
  {
    image: img2,
    src: img2,
    srcset: `${img2}&w=768 768w, ${img2}&w=1280 1280w, ${img2}&w=1920 1920w`,
    title: 'slide2_title',
    subtitle: 'slide2_subtitle'
  },
  {
    image: img3,
    src: img3,
    srcset: `${img3}&w=768 768w, ${img3}&w=1280 1280w, ${img3}&w=1920 1920w`,
    title: 'slide3_title',
    subtitle: 'slide3_subtitle'
  },
  {
    image: img4,
    src: img4,
    srcset: `${img4}&w=768 768w, ${img4}&w=1280 1280w, ${img4}&w=1920 1920w`,
    title: 'slide4_title',
    subtitle: 'slide4_subtitle'
  }
];

export default slides;