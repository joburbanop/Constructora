// Import responsive variants using vite-imagetools
// Generate AVIF and WebP at multiple widths
import img1Src from '../assets/Diapositiva01.webp?as=picture&format=avif;webp&w=640;1024;1600;1920&metadata';
import img2Src from '../assets/Diapositiva02.webp?as=picture&format=avif;webp&w=640;1024;1600;1920&metadata';
import img3Src from '../assets/Diapositiva03.webp?as=picture&format=avif;webp&w=640;1024;1600;1920&metadata';
import img4Src from '../assets/Diapositiva04.webp?as=picture&format=avif;webp&w=640;1024;1600;1920&metadata';

const slides = [
  {
    picture: img1Src,
    title: 'slide1_title',
    subtitle: 'slide1_subtitle'
  },
  {
    picture: img2Src,
    title: 'slide2_title',
    subtitle: 'slide2_subtitle'
  },
  {
    picture: img3Src,
    title: 'slide3_title',
    subtitle: 'slide3_subtitle'
  },
  {
    picture: img4Src,
    title: 'slide4_title',
    subtitle: 'slide4_subtitle'
  }
];

export default slides;