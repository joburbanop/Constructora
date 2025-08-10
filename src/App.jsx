import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect, useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import AnnouncementModal from './components/AnnouncementModal';
import ResourcePreloader from './components/ResourcePreloader';
import useAnnouncementModal from './hooks/useAnnouncementModal';
import renderRincon from './assets/render_rincon.webp';
import anuncioImage from './assets/anuncios/Anuncio.webp';

// Lazy load all pages for better performance
const Home = lazy(() => import('./pages/Home'));
const ProyectosColombia = lazy(() => import('./pages/ProyectosColombia'));
const ProyectosUSA = lazy(() => import('./pages/ProyectosUSA'));
const InfoRinconLago = lazy(() => import('./pages/InfoRinconLago'));
const InfoCoralMole = lazy(() => import('./pages/InfoCoralMole'));
const InfoCanaBrava = lazy(() => import('./pages/InfoCanaBrava'));
const InfoPalmerasItalia = lazy(() => import('./pages/InfoPalmerasItalia'));
const InfoCanaDulce = lazy(() => import('./pages/InfoCanaDulce'));
const InfoPuertasSol = lazy(() => import('./pages/InfoPuertasSol'));
const InfoSanMiguel = lazy(() => import('./pages/InfoSanMiguel'));
const CasaUsaPrimera = lazy(() => import('./pages/CasaUsaPrimera'));
const CasaUsaSegunda = lazy(() => import('./pages/CasaUsaSegunda'));
const CasasLujo = lazy(() => import('./pages/CasasLujo'));
const TerrenosConstruccion = lazy(() => import('./pages/TerrenosConstruccion'));
const TodosLosProyectos = lazy(() => import('./pages/TodosLosProyectos'));
const InfoMarbella = lazy(() => import('./pages/InfoMarbella'));

export default function App() {
  // Hook para manejar el modal de anuncio principal
  const announcementModal = useAnnouncementModal('welcome', {
    showOnFirstVisit: true,
    showOnReload: true,
    autoClose: false,
    autoCloseTime: 8000
  });

  // Defer initial announcement modal until idle to protect LCP
  const shouldShowModal = typeof window !== 'undefined';

  return (
    <>
      {/* Preload critical resources */}
      {/* Resource preloads disabled to avoid unused warnings; re-enable with real critical assets */}
      
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos-los-proyectos" element={<TodosLosProyectos />} />
          <Route path="/proyectos-colombia" element={<ProyectosColombia />} />
          <Route path="/proyectos-usa" element={<ProyectosUSA />} />
          <Route path="/rincon-del-lago" element={<InfoRinconLago />} />
          <Route path="/coral-mall" element={<InfoCoralMole />} />
          <Route path="/cana-brava" element={<InfoCanaBrava/>} />
          <Route path="/palmeras-italia" element={<InfoPalmerasItalia/>} />
          <Route path="/cana-dulce" element={<InfoCanaDulce/>} />
          <Route path="/puertas-sol" element={<InfoPuertasSol/>} />
          <Route path="/san-miguel" element={<InfoSanMiguel/>} />
          <Route path="/casa-usa-primera" element={<CasaUsaPrimera/>} />
          <Route path="/casa-usa-segunda" element={<CasaUsaSegunda/>} />
          <Route path="/casas-lujo" element={<CasasLujo/>} />
          <Route path="/terrenos-construccion" element={<TerrenosConstruccion/>} />
          <Route path="/quintas-marbella" element={<InfoMarbella/>} />
        </Routes>
      </Suspense>
      
      {/* Modal de anuncio principal (diferido) */}
      {shouldShowModal && (
        <DeferredAnnouncement
          announcementModal={announcementModal}
          imageUrl={anuncioImage}
        />
      )}
      
      <ScrollToTop />
    </>
  );
}

// Small deferred wrapper to avoid mounting the modal before idle
function DeferredAnnouncement({ announcementModal, imageUrl }) {
  if (typeof window === 'undefined') return null;

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const show = () => setReady(true);
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => setTimeout(show, 300));
    } else {
      setTimeout(show, 1200);
    }
  }, []);

  if (!ready) return null;

  return (
    <AnnouncementModal
      isOpen={announcementModal.isOpen}
      onClose={announcementModal.closeModal}
      title=""
      message=""
      imageUrl={imageUrl}
      showLogo={false}
      autoClose={true}
      autoCloseTime={8000}
      showCloseButton={true}
      showOverlay={true}
      animation="bounceIn"
      size="large"
    />
  );
}
