import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 如果环境变量存在，则使用它，否则默认为根目录
  base: process.env.VITE_BASE_PATH || '/', 
  plugins: [
    tailwindcss(),
  ],
})