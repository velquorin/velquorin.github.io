import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: '../dist'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
