import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export 默认 defineConfig({
  plugins: [vue()]，
  base: '/home/'， // 替换为您的仓库名
})
