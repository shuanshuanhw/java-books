import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // publicPath:'/dist/',
  base: './',
  server:{
    open: true,
    host: '0.0.0.0',
    strictPort: false,// 设为 true 时若端口已被占用则会直接退出
    https: false,// 启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS。
    port: 7771,
    
    proxy: {
      '/user': 'http://localhost:8887/user',
      '^/fallback/*': {
        target: 'http://localhost:8887',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      },
    // 正则表达式写法
    '^/fallback/.*': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/fallback/, '')
    },
    },
     cors: true
  }
})
