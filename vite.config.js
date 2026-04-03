import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tomato: resolve(__dirname, 'tomato.html'),
        tomatoOne: resolve(__dirname, 'tomato-one.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
