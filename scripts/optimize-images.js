const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

/**
 * Script para optimizar todas las imágenes del proyecto
 * Convierte JPG/PNG a WebP y optimiza el tamaño
 */

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const OUTPUT_FORMAT = 'webp';
const QUALITY = 80;

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    const inputStats = await fs.stat(inputPath);
    const outputStats = await fs.stat(outputPath);
    const reduction = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${reduction}% reduction)`);
    return { success: true, reduction };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function processDirectory(dirPath) {
  const items = await fs.readdir(dirPath, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);
    
    if (item.isDirectory()) {
      await processDirectory(fullPath);
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase();
      
      if (IMAGE_EXTENSIONS.includes(ext)) {
        const outputPath = fullPath.replace(ext, `.${OUTPUT_FORMAT}`);
        
        // Solo convertir si no existe ya el WebP
        try {
          await fs.access(outputPath);
          console.log(`⏭️  ${path.basename(fullPath)} already has WebP version`);
        } catch {
          await optimizeImage(fullPath, outputPath);
        }
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  const startTime = Date.now();
  const assetsDir = path.join(__dirname, '..', 'src', 'assets');
  
  try {
    await processDirectory(assetsDir);
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log(`\n✨ Image optimization completed in ${duration}s`);
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { optimizeImage, processDirectory };
