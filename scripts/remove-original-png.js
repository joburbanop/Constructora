import fs from 'fs';
import path from 'path';

// Lista de archivos PNG que fueron convertidos
const pngFiles = [
  'src/assets/puertas_del_sol.png',
  'src/assets/dulce.png',
  'src/assets/Diapositiva04.PNG',
  'src/assets/render_quintas.png',
  'src/assets/San_Miguel.png',
  'src/assets/Diapositiva01.PNG',
  'src/assets/Diapositiva02.PNG',
  'src/assets/Diapositiva03.PNG',
  'src/assets/coral_render.png',
  'src/assets/render_san_miguel.png',
  'src/assets/LOGO.png',
  'src/assets/Rincon.png',
  'src/assets/coral.png',
  'src/assets/Marbella.png',
  'src/assets/brava.png',
  'src/assets/render_rincon.png',
  'src/assets/palmeras.png'
];

// Función para eliminar un archivo PNG
function removePngFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeInKB = (stats.size / 1024).toFixed(1);
      
      fs.unlinkSync(filePath);
      console.log(`🗑️  Eliminado: ${path.basename(filePath)} (${sizeInKB} KB)`);
      return true;
    } else {
      console.log(`ℹ️  No encontrado: ${path.basename(filePath)}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error eliminando ${filePath}:`, error.message);
    return false;
  }
}

// Función principal
function main() {
  console.log('🗑️  Eliminando archivos PNG originales...\n');
  
  let removedCount = 0;
  let totalSize = 0;
  
  // Eliminar cada archivo PNG
  pngFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
    }
    
    if (removePngFile(filePath)) {
      removedCount++;
    }
  });
  
  // Resumen final
  console.log('\n📊 Resumen de eliminación:');
  console.log(`🗑️  Archivos eliminados: ${removedCount}/${pngFiles.length}`);
  console.log(`💾 Espacio liberado: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  
  if (removedCount === pngFiles.length) {
    console.log('\n🎉 ¡Todos los archivos PNG originales han sido eliminados!');
    console.log('\n📝 Beneficios obtenidos:');
    console.log('✅ Reducción significativa del tamaño de archivos');
    console.log('✅ Mejor rendimiento de carga de la aplicación');
    console.log('✅ Formato WebP más moderno y eficiente');
    console.log('✅ Menor uso de ancho de banda');
  } else {
    console.log(`\n⚠️  ${pngFiles.length - removedCount} archivos no se pudieron eliminar.`);
  }
}

// Ejecutar el script
main();
