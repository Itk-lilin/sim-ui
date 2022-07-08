const path = require("path")
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: '@arco-design/web-vue',
          esModule: true,
          resolveStyle: (name) => {
            // css
            // return `@arco-design/web-vue/es/${name}/style/css.js`
            // less
            return `@arco-design/web-vue/es/${name}/style/index.js`
          },
        }
      ]
    })
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  
  },
  server:{
    host:"192.168.10.99",
    port:9527,
    strictPort:true,
    open:true,
    proxy:{
      '/itkapi/v1': {
        target: 'http://192.168.10.249:8082',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/itkapi^\/v1/, '')
      },
    }
  }



})
