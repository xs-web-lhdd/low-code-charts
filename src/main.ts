import { createApp } from 'vue'
// 入口页面
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'



function initApp() {
  const app = createApp(App)

  // 挂载路由
  setupRouter(app)

  // 挂载状态管理
  setupStore(app)

  app.mount('#app')
}

initApp()
