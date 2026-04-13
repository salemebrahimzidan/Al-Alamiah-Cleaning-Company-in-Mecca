import sharp from 'sharp'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const assets = join(root, 'src', 'assets')
const publicDir = join(root, 'public')

async function main() {
  await sharp(join(assets, 'logo-alamiah.png'))
    .webp({ quality: 86, effort: 6 })
    .toFile(join(assets, 'logo-alamiah.webp'))

  await sharp(join(assets, 'logo-english.png'))
    .webp({ quality: 86, effort: 6 })
    .toFile(join(assets, 'logo-english.webp'))

  const logoBuf = await sharp(join(assets, 'logo-alamiah.png'))
    .resize(480, 480, { fit: 'inside' })
    .png()
    .toBuffer()

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 248, g: 250, b: 252 },
    },
  })
    .composite([{ input: logoBuf, gravity: 'center', blend: 'over' }])
    .webp({ quality: 82, effort: 6 })
    .toFile(join(publicDir, 'og-image.webp'))

  console.log('Wrote WebP: logos, public/og-image.webp')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
