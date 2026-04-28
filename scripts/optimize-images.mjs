import sharp from 'sharp'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const assets = join(root, 'src', 'assets')
const publicDir = join(root, 'public')

/** Navbar logos: 2× for ~56px display → 192px max dimension */
const LOGO_SIZE = 192

async function writeLogoVariants(baseName) {
  const png = join(assets, `${baseName}.png`)
  const resized = sharp(png).resize(LOGO_SIZE, LOGO_SIZE, {
    fit: 'inside',
    withoutEnlargement: true,
  })
  await resized
    .clone()
    .webp({ quality: 82, effort: 6 })
    .toFile(join(assets, `${baseName}.webp`))
  await resized
    .clone()
    .avif({ quality: 55, effort: 6 })
    .toFile(join(assets, `${baseName}.avif`))
}

/** Soft gradient hero (LCP): matches site palette, kept small for LCP budget */
async function writeHeroLcp() {
  const w = 1600
  const h = 900
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff"/>
      <stop offset="55%" style="stop-color:#f8fafc"/>
      <stop offset="100%" style="stop-color:#f1f5f9"/>
    </linearGradient>
    <radialGradient id="r1" cx="85%" cy="15%" r="70%">
      <stop offset="0%" style="stop-color:rgba(14,165,233,0.07)"/>
      <stop offset="55%" style="stop-color:rgba(14,165,233,0)"/>
    </radialGradient>
    <radialGradient id="r2" cx="10%" cy="80%" r="65%">
      <stop offset="0%" style="stop-color:rgba(16,185,129,0.06)"/>
      <stop offset="50%" style="stop-color:rgba(16,185,129,0)"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect width="100%" height="100%" fill="url(#r1)"/>
  <rect width="100%" height="100%" fill="url(#r2)"/>
</svg>`
  const buf = Buffer.from(svg)
  const base = sharp(buf).resize(w, h)
  await base
    .clone()
    .webp({ quality: 78, effort: 6 })
    .toFile(join(publicDir, 'hero-lcp.webp'))
  await base
    .clone()
    .avif({ quality: 45, effort: 6 })
    .toFile(join(publicDir, 'hero-lcp.avif'))
}

async function writeOgImages() {
  const logoBuf = await sharp(join(assets, 'logo-alamiah.png'))
    .resize(480, 480, { fit: 'inside' })
    .png()
    .toBuffer()

  const base = sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 248, g: 250, b: 252 },
    },
  }).composite([{ input: logoBuf, gravity: 'center', blend: 'over' }])

  await base
    .clone()
    .webp({ quality: 82, effort: 6 })
    .toFile(join(publicDir, 'og-image.webp'))
  await base
    .clone()
    .avif({ quality: 50, effort: 6 })
    .toFile(join(publicDir, 'og-image.avif'))
}

async function main() {
  await writeLogoVariants('logo-alamiah')
  await writeLogoVariants('logo-english')
  await writeHeroLcp()
  await writeOgImages()
  console.log(
    'Wrote optimized logos (webp+avif), public/hero-lcp.{webp,avif}, public/og-image.{webp,avif}',
  )
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
