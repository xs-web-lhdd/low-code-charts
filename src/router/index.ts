/**
 * * 路由管理
 */


import type { App } from 'vue'
// 使用createWebHashHistory的好处：在上线的时候不需要ngeix的配置
import { createRouter, createWebHashHistory } from 'vue-router'

import Welcome from '../components/HelloWorld.vue'
import Login from '../views/login/index.vue'
import Home from '../views/index.vue'

// const RootRoute: Array<RouteRecordRaw> = []

const routes: any[] = [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: Home,
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: Login
  },
  {
    name: 'welcome',
    path: '/welcome',
    meta: {
      title: '欢迎页'
    },
    component: Welcome
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// function checkPermission(path) {
//   let hasPermission = router.getRoutes().filter(route => route.path == path).length;
//   if (hasPermission) {
//     return true;
//   } else {
//     return false;
//   }
// }

// 导航守卫
// router.beforeEach((to, from, next) => {
//   if (checkPermission(to.path)) {
//     document.title = to.meta.title;
//     next()
//   } else {
//     next('/404')
//   }
// })

export function setupRouter(app: App) {
  app.use(router)
}

export default router
