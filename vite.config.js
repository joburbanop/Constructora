import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagetools()],
  base: '/',
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI libraries
          'swiper': ['swiper'],
          'icons': ['react-icons'],
          // Utils and helpers
          'utils': ['sharp'],
          // Pages - lazy loaded
          'pages-home': ['./src/pages/Home'],
          'pages-projects': ['./src/pages/ProyectosColombia', './src/pages/ProyectosUSA', './src/pages/TodosLosProyectos'],
          'pages-info': ['./src/pages/InfoCanaBrava', './src/pages/InfoCanaDulce', './src/pages/InfoPalmerasItalia', './src/pages/InfoPuertasSol', './src/pages/InfoRinconLago', './src/pages/InfoSanMiguel', './src/pages/InfoMarbella'],
          'pages-casas': ['./src/pages/CasasLujo', './src/pages/CasaUsaPrimera', './src/pages/CasaUsaSegunda'],
          'pages-terrenos': ['./src/pages/TerrenosConstruccion']
        }
      }
    },
    // Optimizaciones adicionales
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000
  },
  // Optimizaciones de desarrollo
  server: {
    hmr: {
      overlay: false
    }
  },
  // Optimizaciones de assets
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
  // Optimizaciones de CSS
  css: {
    devSourcemap: false
  }
})
