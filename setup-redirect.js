import { copyFileSync, mkdirSync, existsSync, cpSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Set up redirect structure after build
const distDir = resolve(__dirname, 'dist')
const ofspDir = resolve(distDir, 'ofsp_ce')

// Create ofsp_ce directory
if (!existsSync(ofspDir)) {
  mkdirSync(ofspDir, { recursive: true })
}

// Move built app files to ofsp_ce subdirectory
const appIndexSrc = resolve(distDir, 'index.html')
const appIndexDest = resolve(ofspDir, 'index.html')
const assetsSrc = resolve(distDir, 'assets')
const assetsDest = resolve(ofspDir, 'assets')
const viteSvgSrc = resolve(distDir, 'vite.svg')
const viteSvgDest = resolve(ofspDir, 'vite.svg')

// Copy app files to subdirectory
if (existsSync(appIndexSrc)) {
  copyFileSync(appIndexSrc, appIndexDest)
}
if (existsSync(assetsSrc)) {
  cpSync(assetsSrc, assetsDest, { recursive: true })
}
if (existsSync(viteSvgSrc)) {
  copyFileSync(viteSvgSrc, viteSvgDest)
}

// Copy redirect page to root
const redirectSrc = resolve(__dirname, 'public/index.html')
if (existsSync(redirectSrc)) {
  copyFileSync(redirectSrc, appIndexSrc)
}

console.log('✓ Set up redirect structure: root -> /ofsp_ce/')