import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill para __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de WebP
const webpOptions = {
  quality: 80,
  effort: 6
};

// Rutas
const sourceDir = path.join(__dirname, '../src/assets/Palmera_italia');
const outputDir = path.join(__dirname, '../src/assets/palmeras_italia');

// Asegurar que el directorio de salida existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convertImages() {
  try {
    console.log('🔄 Iniciando conversión de imágenes de Palmeras de la Italia...');
    
    // Leer archivos del directorio fuente
    const files = fs.readdirSync(sourceDir);
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg') ||
      file.toLowerCase().endsWith('.png')
    );

    console.log(`📁 Encontrados ${imageFiles.length} archivos de imagen para convertir`);

    let convertedCount = 0;
    let totalOriginalSize = 0;
    let totalConvertedSize = 0;

    for (const file of imageFiles) {
      const inputPath = path.join(sourceDir, file);
      const outputFileName = path.parse(file).name + '.webp';
      const outputPath = path.join(outputDir, outputFileName);

      try {
        // Obtener estadísticas del archivo original
        const originalStats = fs.statSync(inputPath);
        const originalSize = originalStats.size;

        console.log(`\n🔄 Convirtiendo: ${file}`);
        
        // Convertir imagen
        await sharp(inputPath)
          .webp(webpOptions)
          .toFile(outputPath);

        // Obtener estadísticas del archivo convertido
        const convertedStats = fs.statSync(outputPath);
        const convertedSize = convertedStats.size;
        const compressionRatio = ((originalSize - convertedSize) / originalSize * 100).toFixed(1);

        console.log(`✅ Convertido: ${outputFileName}`);
        console.log(`📊 Tamaño original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`📊 Tamaño convertido: ${(convertedSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`📈 Compresión: ${compressionRatio}%`);

        totalOriginalSize += originalSize;
        totalConvertedSize += convertedSize;
        convertedCount++;

      } catch (error) {
        console.error(`❌ Error convirtiendo ${file}:`, error.message);
      }
    }

    // Resumen final
    console.log('\n🎉 Conversión completada!');
    console.log(`📊 Total de archivos convertidos: ${convertedCount}`);
    console.log(`📊 Tamaño total original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📊 Tamaño total convertido: ${(totalConvertedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📈 Compresión total: ${((totalOriginalSize - totalConvertedSize) / totalOriginalSize * 100).toFixed(1)}%`);
    console.log(`📁 Archivos guardados en: ${outputDir}`);

  } catch (error) {
    console.error('❌ Error durante la conversión:', error);
  }
}

// Ejecutar la conversión
convertImages(); 