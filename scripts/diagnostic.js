#!/usr/bin/env node

// Script de diagnóstico para identificar problemas de layout
import fs from 'fs';
import path from 'path';

console.log('🔍 Iniciando diagnóstico de la aplicación...');

// Función para verificar archivos críticos
function checkCriticalFiles() {
  const criticalFiles = [
    'src/App.jsx',
    'src/main.jsx',
    'src/index.css',
    'src/context/IdiomaContext.jsx',
    'src/components/Header.jsx',
    'src/utils/i18n/es.js',
    'src/utils/i18n/en.js',
    'vite.config.js',
    'package.json'
  ];

  console.log('\n📁 Verificando archivos críticos:');
  
  criticalFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file} - Existe`);
    } else {
      console.log(`❌ ${file} - NO EXISTE`);
    }
  });
}

// Función para verificar dependencias
function checkDependencies() {
  console.log('\n📦 Verificando dependencias:');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const requiredDeps = ['react', 'react-dom', 'react-router-dom', 'react-icons', 'swiper'];
    
    requiredDeps.forEach(dep => {
      if (packageJson.dependencies[dep]) {
        console.log(`✅ ${dep} - ${packageJson.dependencies[dep]}`);
      } else {
        console.log(`❌ ${dep} - NO INSTALADO`);
      }
    });
  } catch (error) {
    console.log(`❌ Error leyendo package.json: ${error.message}`);
  }
}

// Función para verificar traducciones
function checkTranslations() {
  console.log('\n🌐 Verificando traducciones:');
  
  try {
    const esContent = fs.readFileSync('src/utils/i18n/es.js', 'utf8');
    const enContent = fs.readFileSync('src/utils/i18n/en.js', 'utf8');
    
    const requiredSections = ['header', 'proyectos', 'ambito', 'expertos'];
    
    requiredSections.forEach(section => {
      if (esContent.includes(`${section}:`)) {
        console.log(`✅ ${section} (ES) - Presente`);
      } else {
        console.log(`❌ ${section} (ES) - FALTANTE`);
      }
      
      if (enContent.includes(`${section}:`)) {
        console.log(`✅ ${section} (EN) - Presente`);
      } else {
        console.log(`❌ ${section} (EN) - FALTANTE`);
      }
    });
  } catch (error) {
    console.log(`❌ Error verificando traducciones: ${error.message}`);
  }
}

// Función para verificar estilos CSS
function checkCSSFiles() {
  console.log('\n🎨 Verificando archivos CSS:');
  
  const cssFiles = [
    'src/index.css',
    'src/styles/Header.css',
    'src/styles/Home.css',
    'src/styles/Slider.css',
    'src/styles/animations.css'
  ];
  
  cssFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const stats = fs.statSync(file);
      console.log(`✅ ${file} - ${(stats.size / 1024).toFixed(2)}KB`);
    } else {
      console.log(`❌ ${file} - NO EXISTE`);
    }
  });
}

// Función para verificar imágenes
function checkImages() {
  console.log('\n🖼️ Verificando imágenes críticas:');
  
  const criticalImages = [
    'src/assets/LOGO.png',
    'src/assets/cana_dulce/cana_dulce_galeria1.webp',
    'src/assets/puertas_sol/img1.webp',
    'src/assets/rincon_lago/Rincon_lago_galeria1.webp',
    'src/assets/casas_lujo/casas_lugo_large.jpg'
  ];
  
  criticalImages.forEach(image => {
    if (fs.existsSync(image)) {
      const stats = fs.statSync(image);
      console.log(`✅ ${image} - ${(stats.size / 1024).toFixed(2)}KB`);
    } else {
      console.log(`❌ ${image} - NO EXISTE`);
    }
  });
}

// Función para generar recomendaciones
function generateRecommendations() {
  console.log('\n💡 Recomendaciones para solucionar problemas:');
  
  console.log(`
1. 🔧 Verificar que el servidor de desarrollo esté ejecutándose:
   npm run dev

2. 🧹 Limpiar caché del navegador:
   - Presionar Ctrl+Shift+R (Windows/Linux) o Cmd+Shift+R (Mac)
   - O abrir DevTools y hacer clic derecho en el botón de recarga

3. 📦 Reinstalar dependencias si es necesario:
   rm -rf node_modules package-lock.json
   npm install

4. 🔍 Verificar errores en la consola del navegador:
   - Abrir DevTools (F12)
   - Revisar la pestaña Console
   - Revisar la pestaña Network

5. 🎨 Verificar conflictos CSS:
   - Revisar z-index de elementos
   - Verificar position: fixed/absolute
   - Comprobar overflow y display

6. 🌐 Verificar traducciones:
   - Asegurar que todas las claves estén definidas
   - Verificar que no haya errores de sintaxis

7. 🖼️ Verificar imágenes:
   - Asegurar que las rutas sean correctas
   - Verificar que los archivos existan
   - Comprobar el formato de las imágenes
  `);
}

// Ejecutar diagnóstico
function runDiagnostic() {
  console.log('🚀 Iniciando diagnóstico completo...\n');
  
  checkCriticalFiles();
  checkDependencies();
  checkTranslations();
  checkCSSFiles();
  checkImages();
  generateRecommendations();
  
  console.log('\n✅ Diagnóstico completado.');
  console.log('\n📋 Si encuentras problemas, sigue las recomendaciones anteriores.');
}

// Ejecutar si es llamado directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  runDiagnostic();
}

export { runDiagnostic }; 