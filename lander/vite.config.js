import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vuePlugin from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: '../dist'
  },
  plugins: [
      vuePlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
