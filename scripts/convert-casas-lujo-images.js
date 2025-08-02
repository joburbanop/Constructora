import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta de las imágenes JPG
const inputDir = path.join(__dirname, '../src/assets/Casas_de_Lujo');
const outputDir = path.join(__dirname, '../src/assets/Casas_de_Lujo');

// Función para convertir una imagen a WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`✅ Convertido: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error convirtiendo ${path.basename(inputPath)}:`, error.message);
  }
}

// Función principal
async function convertAllImages() {
  console.log('🔄 Iniciando conversión de imágenes de Casas de Lujo...\n');

  try {
    // Leer todos los archivos JPG del directorio
    const files = fs.readdirSync(inputDir);
    const jpgFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
    );

    console.log(`📁 Encontradas ${jpgFiles.length} imágenes JPG para convertir:\n`);

    // Convertir cada imagen
    for (const file of jpgFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));
      
      await convertToWebP(inputPath, outputPath);
    }

    console.log('\n🎉 ¡Conversión completada!');
    console.log(`📊 Total de imágenes convertidas: ${jpgFiles.length}`);

  } catch (error) {
    console.error('❌ Error durante la conversión:', error.message);
  }
}

// Ejecutar la conversión
convertAllImages(); 