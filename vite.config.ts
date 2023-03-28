import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// vite 开启 GZip 插件
import viteCompression from 'vite-plugin-compression'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  // 路径重定向
  resolve: {
    alias: [
      {
        find: /\/#\//,
        replacement: pathResolve('types')
      },
      {
        find: '@',
        replacement: pathResolve('src')
      },
    ]
  },
  plugins: [
    vue(),
    // TODO: 探索 monacoEditor 用处
    monacoEditorPlugin({
      languageWorkers: ['editorWorkerService', 'typescript', 'json', 'html']
    }),
    // 开启 GZip 压缩
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ]
})
