import React, { useEffect } from 'react';
import Header from '../components/Header';
import BreadcrumbSimple from '../components/BreadcrumbSimple';
import Slider from '../components/Slider';
import slidesTerrenos from '../utils/slidesTerrenos';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { useIdioma } from '../context/IdiomaContext';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/TerrenosConstruccion.css';

const TerrenosConstruccion = () => {
  const { t } = useIdioma();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Lista de terrenos con sus direcciones y enlaces de Google Maps
  const terrenos = [
    {
      direccion: '2027 NE 18TH St, Cape Coral',
      googleMapsUrl: 'https://www.google.com/maps/place/2027+NE+18th+St,+Cape+Coral,+FL+33909,+EE.+UU./@26.6866569,-81.9369444,17z/data=!3m1!4b1!4m6!3m5!1s0x88db43955d4d3f3b:0x4090b22e7e28a181!8m2!3d26.686657!4d-81.932331!16s%2Fg%2F11cskf2ksy?entry=tts&g_ep=EgoyMDI1MDcyOS4wIPu8ASoASAFQAw%3D%3D&skid=99584cd0-b861-4529-a0cc-93685c08f064'
    },
    {
      direccion: '2032 NE 18TH St, Cape Coral',
      googleMapsUrl: 'https://www.google.com/maps/place/2032+NE+18th+St,+Cape+Coral,+FL+33909,+EE.+UU./@26.686177,-81.932068,17z/data=!3m1!4b1!4m6!3m5!1s0x88db43955bc9064b:0x6c57e1bb2a7a070f!8m2!3d26.686177!4d-81.932068!16s%2Fg%2F11cslhhr9t?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      direccion: '2522 NE 19TH St, Cape Coral',
      googleMapsUrl: 'https://www.google.com/maps/place/2522+NE+19th+St,+Cape+Coral,+FL+33909,+EE.+UU./@26.6877361,-81.9453826,17z/data=!3m1!4b1!4m5!3m4!1s0x88db438d16cd8923:0x2fb72041e14cae1e!8m2!3d26.6877361!4d-81.9428077?entry=tts&g_ep=EgoyMDI1MDcyOS4wIPu8ASoASAFQAw%3D%3D&skid=57192f0a-3cff-4e24-9b6a-28cff82128d1'
    },
    {
      direccion: '904 Grant Blvd, Lehigh Acres',
      googleMapsUrl: 'https://www.google.com/maps/place/904+Grant+Blvd,+Lehigh+Acres,+FL+33974,+EE.+UU./@26.57486,-81.595107,17z/data=!3m1!4b1!4m6!3m5!1s0x88db749854e01b87:0x1e48b71d519230e!8m2!3d26.57486!4d-81.595107!16s%2Fg%2F11c2c0vqh4?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      direccion: '2611 51st St, Lehigh Acres',
      googleMapsUrl: 'https://www.google.com/maps/place/2611+51st+St+W,+Lehigh+Acres,+FL+33971,+EE.+UU./@26.6623622,-81.6697355,17z/data=!3m1!4b1!4m6!3m5!1s0x88db71930d902eef:0x17d675f1170737c7!8m2!3d26.6623622!4d-81.6671552!16s%2Fg%2F11c255sfcw?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      direccion: '2708 66th St, Lehigh Acres',
      googleMapsUrl: 'https://www.google.com/maps/place/2708+66th+St+W,+Lehigh+Acres,+FL+33971,+EE.+UU./@26.7169233,-82.0027319,10z/data=!4m6!3m5!1s0x88db71c768bf1ab7:0xa1964e38ca02f33e!8m2!3d26.677687!4d-81.670011!16s%2Fg%2F11c5q922rq?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      direccion: '3119 65th St W, Lehigh Acres',
      googleMapsUrl: 'https://www.google.com/maps/place/3119+65th+St+W,+Lehigh+Acres,+FL+33971,+EE.+UU./@26.676381,-81.6845469,17z/data=!4m6!3m5!1s0x88db71dc9c3c139f:0x33fef368a6ec41ef!8m2!3d26.676381!4d-81.681972!16s%2Fg%2F11c24_hsvv?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      direccion: '2603 59th St W, Lehigh Acres',
      googleMapsUrl: 'https://www.google.com/maps/place/2603+59th+St+W,+Lehigh+Acres,+FL+33971,+EE.+UU./@26.669473,-81.6701899,17z/data=!3m1!4b1!4m6!3m5!1s0x88db71956694fddf:0xf6f975b9d87fd6d8!8m2!3d26.669473!4d-81.667615!16s%2Fg%2F11csjdfl9b?entry=tts&g_ep=EgoyMDI1MDcyOS4wIPu8ASoASAFQAw%3D%3D&skid=0fdb73bb-68a8-4a13-9cef-c5370b8377d5'
    }
  ];

  const handleGoogleMapsClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="terrenos-construccion-container">
      <Header />
      
      <BreadcrumbSimple />
      
      {/* Hero Section con Slider */}
      <section id="inicio">
        <Slider contenido={slidesTerrenos} namespace="terrenos"/>
      </section>

      {/* Terrenos Section */}
      <section className="terrenos-section">
        <div className="terrenos-container">
          <h2 className="terrenos-section-title">
            {t.proyectos_card_simple?.terrenos_usa_title || 'Terrenos para futuro desarrollo'}
          </h2>
          
          <div className="terrenos-grid">
            {terrenos.map((terreno, index) => (
              <div key={index} className="terreno-card">
                <h3 className="terreno-direccion">{terreno.direccion}</h3>
                <button 
                  className="terreno-maps-btn"
                  onClick={() => handleGoogleMapsClick(terreno.googleMapsUrl)}
                >
                  <FaMapMarkerAlt className="maps-icon" />
                  Ver en Google Maps
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TerrenosConstruccion;
