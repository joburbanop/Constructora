import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de optimización WebP
const webpOptions = {
  quality: 85,
  effort: 6,
  nearLossless: false,
  smartSubsample: true
};

// Función para convertir una imagen a WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    console.log(`Convirtiendo: ${path.basename(inputPath)}`);
    
    await sharp(inputPath)
      .webp(webpOptions)
      .toFile(outputPath);
    
    // Obtener información del archivo original y convertido
    const originalStats = fs.statSync(inputPath);
    const convertedStats = fs.statSync(outputPath);
    const compressionRatio = ((originalStats.size - convertedStats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`   Tamaño original: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Tamaño WebP: ${(convertedStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Compresión: ${compressionRatio}%`);
    console.log('');
    
    return {
      original: path.basename(inputPath),
      converted: path.basename(outputPath),
      originalSize: originalStats.size,
      convertedSize: convertedStats.size,
      compressionRatio: parseFloat(compressionRatio)
    };
  } catch (error) {
    console.error(`❌ Error convirtiendo ${path.basename(inputPath)}:`, error.message);
    return null;
  }
}

// Función principal
async function convertSanMiguelImages() {
  const baseDir = path.join(__dirname, '../src/assets/SAN MIGUEL');
  const images = [
    'sm f888.jpg',
    'sm f88.jpg', 
    'locales F5.jpg',
    'locales F3.jpg',
    'SM Ubi san miguel.png',
    'SM F8.jpg',
    'SM F7.jpg',
    'SM F1.jpg',
    'San miguel/LOGO SAN MIGUEL PNG-01.png',
    'San miguel/LOGO SAN MIGUEL PNG-02.png',
    'San miguel/LOGO GH PNG-01.png'
  ];
  
  console.log('🔄 Iniciando conversión de imágenes de SAN MIGUEL a WebP...\n');
  
  const results = [];
  let totalOriginalSize = 0;
  let totalConvertedSize = 0;
  
  for (const image of images) {
    const inputPath = path.join(baseDir, image);
    
    // Verificar si el archivo existe
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Archivo no encontrado: ${image}`);
      continue;
    }
    
    // Crear nombre del archivo WebP
    const ext = path.extname(image);
    const nameWithoutExt = path.basename(image, ext);
    const outputPath = path.join(path.dirname(inputPath), `${nameWithoutExt}.webp`);
    
    const result = await convertToWebP(inputPath, outputPath);
    if (result) {
      results.push(result);
      totalOriginalSize += result.originalSize;
      totalConvertedSize += result.convertedSize;
    }
  }
  
  // Resumen final
  console.log('📊 RESUMEN DE CONVERSIÓN:');
  console.log('='.repeat(50));
  console.log(`Total de imágenes convertidas: ${results.length}`);
  console.log(`Tamaño total original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Tamaño total WebP: ${(totalConvertedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Ahorro total: ${((totalOriginalSize - totalConvertedSize) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Compresión promedio: ${((totalOriginalSize - totalConvertedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  
  // Mostrar archivos convertidos
  console.log('\n📁 Archivos WebP creados:');
  results.forEach(result => {
    console.log(`   • ${result.converted} (${result.compressionRatio}% compresión)`);
  });
  
  console.log('\n✅ Conversión completada exitosamente!');
}

// Ejecutar el script
convertSanMiguelImages().catch(console.error); 