// Monitor de rendimiento optimizado para evitar re-renders infinitos
export const performanceMonitor = {
  // Métricas de rendimiento
  metrics: {
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    timeToInteractive: 0,
    imageLoadTimes: {},
    componentRenderTimes: {},
    isInitialized: false
  },

  // Observadores para evitar múltiples instancias
  observers: {
    fcp: null,
    lcp: null,
    images: null,
    components: null
  },

  // Inicializar el monitor solo una vez
  init() {
    if (typeof window !== 'undefined' && !this.metrics.isInitialized) {
      this.metrics.isInitialized = true;
      this.observePerformance();
      this.observeImages();
      // Removemos la observación de componentes que causa re-renders
      console.log('🚀 Performance Monitor inicializado');
    }
  },

  // Observar métricas de rendimiento web
  observePerformance() {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      if (!this.observers.fcp) {
        this.observers.fcp = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.firstContentfulPaint = entry.startTime;
              console.log('🚀 First Contentful Paint:', entry.startTime, 'ms');
            }
          });
        });
        this.observers.fcp.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint
      if (!this.observers.lcp) {
        this.observers.lcp = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            this.metrics.largestContentfulPaint = entry.startTime;
            console.log('🎯 Largest Contentful Paint:', entry.startTime, 'ms');
          });
        });
        this.observers.lcp.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Navigation Timing
      if (document.readyState === 'loading') {
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0];
          if (navigation) {
            this.metrics.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
            console.log('📊 Page Load Time:', this.metrics.pageLoadTime, 'ms');
          }
        });
      } else {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          this.metrics.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('📊 Page Load Time:', this.metrics.pageLoadTime, 'ms');
        }
      }
    }
  },

  // Observar carga de imágenes optimizado
  observeImages() {
    if (this.observers.images) return; // Evitar múltiples observadores

    this.observers.images = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const startTime = performance.now();
          
          const loadHandler = () => {
            const loadTime = performance.now() - startTime;
            this.metrics.imageLoadTimes[img.src] = loadTime;
            console.log('🖼️ Image loaded:', img.src.split('/').pop(), 'in', loadTime.toFixed(2), 'ms');
            img.removeEventListener('load', loadHandler);
          };
          
          img.addEventListener('load', loadHandler);
          this.observers.images.unobserve(img);
        }
      });
    });

    // Observar imágenes existentes
    const images = document.querySelectorAll('img');
    images.forEach(img => this.observers.images.observe(img));

    // Observar nuevas imágenes que se agreguen
    const imageObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === 'IMG') {
              this.observers.images.observe(node);
            } else {
              const images = node.querySelectorAll && node.querySelectorAll('img');
              if (images) {
                images.forEach(img => this.observers.images.observe(img));
              }
            }
          }
        });
      });
    });

    imageObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  },

  // Obtener métricas actuales
  getMetrics() {
    return {
      ...this.metrics,
      timestamp: new Date().toISOString()
    };
  },

  // Generar reporte de rendimiento
  generateReport() {
    const metrics = this.getMetrics();
    const report = {
      summary: {
        pageLoadTime: metrics.pageLoadTime,
        firstContentfulPaint: metrics.firstContentfulPaint,
        largestContentfulPaint: metrics.largestContentfulPaint,
        totalImages: Object.keys(metrics.imageLoadTimes).length,
        totalComponents: Object.keys(metrics.componentRenderTimes).length
      },
      details: metrics
    };

    console.log('📈 Performance Report:', report);
    return report;
  },

  // Limpiar observadores
  cleanup() {
    Object.values(this.observers).forEach(observer => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    });
    this.observers = {
      fcp: null,
      lcp: null,
      images: null,
      components: null
    };
    this.metrics.isInitialized = false;
  }
};

// Inicializar automáticamente
if (typeof window !== 'undefined') {
  performanceMonitor.init();
}

export default performanceMonitor; 