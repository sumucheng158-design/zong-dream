/**
 * optimize-images.js
 * 用法：node scripts/optimize-images.js
 *
 * 需要先安裝：npm install sharp --save-dev
 *
 * 執行後會在 public/ 產生：
 *   logo.webp        (~15KB，取代 logo.png 的 ~90KB)
 *   logo@2x.webp     (Retina 版本)
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PUBLIC = path.join(__dirname, '..', 'public');

async function optimizeLogo() {
  const src = path.join(PUBLIC, 'logo.png');
  if (!fs.existsSync(src)) {
    console.error('❌  找不到 public/logo.png');
    process.exit(1);
  }

  // 1x WebP — 240px (Hero 顯示尺寸)
  await sharp(src)
    .resize(240, 240, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 85 })
    .toFile(path.join(PUBLIC, 'logo.webp'));
  console.log('✅  logo.webp 產生完成');

  // 2x WebP — 480px (Retina)
  await sharp(src)
    .resize(480, 480, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 85 })
    .toFile(path.join(PUBLIC, 'logo@2x.webp'));
  console.log('✅  logo@2x.webp 產生完成');

  // 也壓縮原始 PNG 備用（不支援 WebP 的瀏覽器）
  await sharp(src)
    .resize(240, 240, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(PUBLIC, 'logo-optimized.png'));
  console.log('✅  logo-optimized.png 產生完成');
}

optimizeLogo().catch(console.error);
