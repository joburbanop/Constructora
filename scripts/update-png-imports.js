import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Mapeo de archivos PNG a WebP
const pngToWebpMap = {
  'puertas_del_sol.png': 'puertas_del_sol.webp',
  'dulce.png': 'dulce.webp',
  'Diapositiva04.PNG': 'Diapositiva04.webp',
  'render_quintas.png': 'render_quintas.webp',
  'San_Miguel.png': 'San_Miguel.webp',
  'Diapositiva01.PNG': 'Diapositiva01.webp',
  'Diapositiva02.PNG': 'Diapositiva02.webp',
  'Diapositiva03.PNG': 'Diapositiva03.webp',
  'coral_render.png': 'coral_render.webp',
  'render_san_miguel.png': 'render_san_miguel.webp',
  'LOGO.png': 'LOGO.webp',
  'Rincon.png': 'Rincon.webp',
  'coral.png': 'coral.webp',
  'Marbella.png': 'Marbella.webp',
  'brava.png': 'brava.webp',
  'render_rincon.png': 'render_rincon.webp',
  'palmeras.png': 'palmeras.webp'
};

// Función para actualizar las importaciones en un archivo
function updateImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // Buscar y reemplazar importaciones de PNG a WebP
    for (const [pngFile, webpFile] of Object.entries(pngToWebpMap)) {
      // Patrón para importaciones con extensión .png
      const pngPattern = new RegExp(`(['"])[^'"]*${pngFile.replace('.', '\\.')}\\?[^'"]*\\1`, 'g');
      const pngPatternSimple = new RegExp(`(['"])[^'"]*${pngFile.replace('.', '\\.')}\\1`, 'g');
      
      // Reemplazar importaciones con parámetros de Vite
      if (pngPattern.test(content)) {
        content = content.replace(pngPattern, (match) => {
          hasChanges = true;
          return match.replace(pngFile, webpFile);
        });
      }
      
      // Reemplazar importaciones simples
      if (pngPatternSimple.test(content)) {
        content = content.replace(pngPatternSimple, (match) => {
          hasChanges = true;
          return match.replace(pngFile, webpFile);
        });
      }
    }
    
    // Si hubo cambios, escribir el archivo
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Actualizado: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error procesando ${filePath}:`, error.message);
    return false;
  }
}

// Función principal
async function main() {
  console.log('🔄 Actualizando importaciones de PNG a WebP...\n');
  
  try {
    // Buscar todos los archivos JS/JSX en el proyecto
    const files = await glob('src/**/*.{js,jsx}', {
      ignore: ['node_modules/**', 'dist/**', 'build/**']
    });
    
    console.log(`📁 Encontrados ${files.length} archivos para procesar:\n`);
    
    let updatedCount = 0;
    
    // Procesar cada archivo
    for (const file of files) {
      if (updateImportsInFile(file)) {
        updatedCount++;
      }
    }
    
    // Resumen final
    console.log('\n📊 Resumen de actualización:');
    console.log(`✅ Archivos actualizados: ${updatedCount}/${files.length}`);
    
    if (updatedCount > 0) {
      console.log('\n🎉 ¡Actualización completada!');
      console.log('\n📝 Próximos pasos:');
      console.log('1. Verifica que la aplicación funcione correctamente');
      console.log('2. Elimina los archivos PNG originales si ya no los necesitas');
      console.log('3. Ejecuta el build para verificar que todo esté bien');
    } else {
      console.log('\nℹ️  No se encontraron importaciones de PNG para actualizar.');
    }
    
  } catch (error) {
    console.error('❌ Error durante la búsqueda de archivos:', error.message);
  }
}

// Ejecutar el script
main();
