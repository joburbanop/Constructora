// Verificador de rendimiento simple y ligero
export const simplePerformanceCheck = {
  startTime: null,
  
  start() {
    this.startTime = performance.now();
    console.log('🚀 Iniciando medición de rendimiento...');
  },
  
  end(pageName = 'Página') {
    if (this.startTime) {
      const loadTime = performance.now() - this.startTime;
      console.log(`✅ ${pageName} cargada en: ${loadTime.toFixed(2)}ms`);
      
      // Obtener métricas básicas
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        console.log(`📊 DOM Content Loaded: ${(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart).toFixed(2)}ms`);
        console.log(`📊 Load Complete: ${(navigation.loadEventEnd - navigation.loadEventStart).toFixed(2)}ms`);
      }
      
      this.startTime = null;
      return loadTime;
    }
    return 0;
  },
  
  // Verificar rendimiento de navegación
  checkNavigation(fromPage, toPage) {
    const startTime = performance.now();
    console.log(`🔄 Navegando de ${fromPage} a ${toPage}...`);
    
    return {
      start: () => {
        this.startTime = startTime;
      },
      end: () => {
        const navigationTime = performance.now() - startTime;
        console.log(`✅ Navegación completada en: ${navigationTime.toFixed(2)}ms`);
        return navigationTime;
      }
    };
  }
};

// Función para verificar rendimiento automáticamente
export const autoPerformanceCheck = () => {
  if (typeof window !== 'undefined') {
    // Verificar rendimiento inicial
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        const totalLoadTime = navigation.loadEventEnd - navigation.fetchStart;
        const domLoadTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        console.log('📈 Rendimiento de carga inicial:');
        console.log(`  - Tiempo total: ${totalLoadTime.toFixed(2)}ms`);
        console.log(`  - DOM Content Loaded: ${domLoadTime.toFixed(2)}ms`);
        console.log(`  - Tamaño de recursos: ${(navigation.transferSize / 1024).toFixed(2)}KB`);
        
        // Evaluar rendimiento
        if (totalLoadTime < 2000) {
          console.log('✅ Excelente rendimiento!');
        } else if (totalLoadTime < 4000) {
          console.log('⚠️ Rendimiento aceptable');
        } else {
          console.log('❌ Rendimiento necesita mejora');
        }
      }
    });
  }
};

// Inicializar automáticamente
autoPerformanceCheck();

export default simplePerformanceCheck; 