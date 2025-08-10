import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Lista de archivos PNG encontrados en el proyecto
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

// Verificar si ImageMagick está instalado
function checkImageMagick() {
  try {
    execSync('convert --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Convertir un archivo PNG a WebP
function convertToWebP(inputPath) {
  const outputPath = inputPath.replace(/\.(png|PNG)$/, '.webp');
  
  try {
    // Comando para convertir PNG a WebP con optimización
    const command = `convert "${inputPath}" -quality 85 -define webp:lossless=false "${outputPath}"`;
    
    console.log(`Convirtiendo: ${inputPath} -> ${outputPath}`);
    execSync(command, { stdio: 'inherit' });
    
    // Verificar que el archivo se creó correctamente
    if (fs.existsSync(outputPath)) {
      const originalSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      const compressionRatio = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`✅ Convertido exitosamente: ${path.basename(inputPath)}`);
      console.log(`   Tamaño original: ${(originalSize / 1024).toFixed(1)} KB`);
      console.log(`   Tamaño WebP: ${(newSize / 1024).toFixed(1)} KB`);
      console.log(`   Compresión: ${compressionRatio}%\n`);
      
      return true;
    } else {
      console.error(`❌ Error: No se pudo crear el archivo ${outputPath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error convirtiendo ${inputPath}:`, error.message);
    return false;
  }
}

// Función principal
function main() {
  console.log('🔄 Iniciando conversión de archivos PNG a WebP...\n');
  
  // Verificar ImageMagick
  if (!checkImageMagick()) {
    console.error('❌ Error: ImageMagick no está instalado.');
    console.log('Por favor instala ImageMagick:');
    console.log('  macOS: brew install imagemagick');
    console.log('  Ubuntu/Debian: sudo apt-get install imagemagick');
    console.log('  Windows: Descarga desde https://imagemagick.org/');
    process.exit(1);
  }
  
  let successCount = 0;
  let totalCount = pngFiles.length;
  
  console.log(`📁 Encontrados ${totalCount} archivos PNG para convertir:\n`);
  
  // Convertir cada archivo
  pngFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (convertToWebP(filePath)) {
        successCount++;
      }
    } else {
      console.error(`❌ Archivo no encontrado: ${filePath}`);
    }
  });
  
  // Resumen final
  console.log('📊 Resumen de conversión:');
  console.log(`✅ Archivos convertidos exitosamente: ${successCount}/${totalCount}`);
  
  if (successCount === totalCount) {
    console.log('🎉 ¡Todas las conversiones se completaron exitosamente!');
    console.log('\n📝 Próximos pasos:');
    console.log('1. Actualiza las importaciones en los archivos JS/JSX para usar .webp');
    console.log('2. Elimina los archivos PNG originales si ya no los necesitas');
    console.log('3. Verifica que todas las imágenes se muestren correctamente');
  } else {
    console.log(`⚠️  ${totalCount - successCount} archivos no se pudieron convertir.`);
  }
}

// Ejecutar el script
main();
