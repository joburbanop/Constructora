import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill para __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../src/assets/cana_brava');
const outputDir = path.join(__dirname, '../src/assets/cana_brava');

async function convertImagesToWebP() {
  try {
    console.log('🔄 Iniciando conversión de imágenes de Caña Brava a WebP...');
    
    // Leer todos los archivos en el directorio
    const files = await readdir(sourceDir);
    
    // Filtrar solo archivos JPG
    const jpgFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
    );
    
    console.log(`📁 Encontrados ${jpgFiles.length} archivos JPG para convertir`);
    
    let totalOriginalSize = 0;
    let totalConvertedSize = 0;
    
    for (const file of jpgFiles) {
      const inputPath = path.join(sourceDir, file);
      const outputFileName = file.replace(/\.(jpg|jpeg)$/i, '.webp');
      const outputPath = path.join(outputDir, outputFileName);
      
      try {
        // Obtener estadísticas del archivo original
        const stats = await stat(inputPath);
        const originalSize = stats.size;
        totalOriginalSize += originalSize;
        
        console.log(`\n🔄 Convirtiendo: ${file}`);
        
        // Convertir a WebP con optimizaciones
        await sharp(inputPath)
          .webp({ 
            quality: 85,  // Calidad alta pero optimizada
            effort: 6     // Máximo esfuerzo de compresión
          })
          .toFile(outputPath);
        
        // Obtener estadísticas del archivo convertido
        const convertedStats = await stat(outputPath);
        const convertedSize = convertedStats.size;
        totalConvertedSize += convertedSize;
        
        // Calcular porcentaje de reducción
        const reduction = ((originalSize - convertedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ Convertido: ${outputFileName}`);
        console.log(`📊 Tamaño original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`📊 Tamaño WebP: ${(convertedSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`📉 Reducción: ${reduction}%`);
        
      } catch (error) {
        console.error(`❌ Error convirtiendo ${file}:`, error.message);
      }
    }
    
    // Resumen final
    console.log('\n🎉 Conversión completada!');
    console.log(`📊 Tamaño total original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📊 Tamaño total WebP: ${(totalConvertedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📉 Reducción total: ${((totalOriginalSize - totalConvertedSize) / totalOriginalSize * 100).toFixed(1)}%`);
    console.log(`💾 Espacio ahorrado: ${((totalOriginalSize - totalConvertedSize) / 1024 / 1024).toFixed(2)} MB`);
    
  } catch (error) {
    console.error('❌ Error general:', error.message);
  }
}

// Ejecutar la conversión
convertImagesToWebP(); 