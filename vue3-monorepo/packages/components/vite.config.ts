import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { name } from './package.json'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: name,
      fileName: 'my-components'
    }
  }
})
