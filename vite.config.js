import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

const env = loadEnv("dev", process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    vue(),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(resolve(__dirname), 'src')
        }
      ]
    })
  ],
  define: {
    'process.env': env
  }
})
