import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: '.',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib'),
      '@/docs': resolve(__dirname, 'docs/src')
    }
  },
  server: {
    port: 5000,
    open: true,
    // 热更新
    fs: {
      strict: false
    }
  },
  build: {
    sourcemap: true, // 映射文件
    minify: true, // 压缩方式
    lib: {
      entry: resolve(__dirname, './lib/main.ts'),
      name: 'main',
      fileName: 'index'
    },
    rollupOptions: {
      output: {
        dir: 'dist/main'
      }
    }
  },
  plugins: [
    dts({
      include: ['lib/**/*.d.ts'],
      copyDtsFiles: true, // 自动把目录下的所有d.ts文件复制到dist文件夹
      outDir: 'dist/types' // 指定输出类型声明文件的目录
    })
  ]
})
