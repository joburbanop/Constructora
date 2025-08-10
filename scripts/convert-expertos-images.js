import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const inputDir = path.join(__dirname, '../src/assets/expertos');
const outputDir = path.join(__dirname, '../src/assets/expertos');

// Función para convertir imagen a WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ 
        quality: 80,
        effort: 6,
        nearLossless: false
      })
      .toFile(outputPath);
    
    console.log(`✅ Convertido: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error convirtiendo ${path.basename(inputPath)}:`, error.message);
  }
}

// Función principal
async function convertExpertosImages() {
  console.log('🔄 Iniciando conversión de imágenes de expertos...\n');

  // Verificar si el directorio existe
  if (!fs.existsSync(inputDir)) {
    console.error('❌ El directorio de expertos no existe:', inputDir);
    return;
  }

  // Leer archivos del directorio
  const files = fs.readdirSync(inputDir);
  const jpgFiles = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
  );

  if (jpgFiles.length === 0) {
    console.log('ℹ️ No se encontraron archivos JPG para convertir.');
    return;
  }

  console.log(`📁 Encontrados ${jpgFiles.length} archivos JPG para convertir:\n`);

  // Convertir cada archivo
  for (const jpgFile of jpgFiles) {
    const inputPath = path.join(inputDir, jpgFile);
    const outputFileName = jpgFile.replace(/\.(jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(outputDir, outputFileName);

    // Verificar si el archivo WebP ya existe
    if (fs.existsSync(outputPath)) {
      console.log(`⚠️ El archivo ${outputFileName} ya existe, saltando...`);
      continue;
    }

    await convertToWebP(inputPath, outputPath);
  }

  console.log('\n🎉 Conversión completada!');
  
  // Mostrar estadísticas
  const originalSize = jpgFiles.reduce((total, file) => {
    const stats = fs.statSync(path.join(inputDir, file));
    return total + stats.size;
  }, 0);

  const webpFiles = files.filter(file => file.toLowerCase().endsWith('.webp'));
  const convertedSize = webpFiles.reduce((total, file) => {
    const stats = fs.statSync(path.join(inputDir, file));
    return total + stats.size;
  }, 0);

  console.log(`\n📊 Estadísticas:`);
  console.log(`   Archivos originales: ${jpgFiles.length}`);
  console.log(`   Archivos WebP: ${webpFiles.length}`);
  console.log(`   Tamaño original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Tamaño WebP: ${(convertedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Reducción: ${((1 - convertedSize / originalSize) * 100).toFixed(1)}%`);
}

// Ejecutar el script
convertExpertosImages().catch(console.error);
