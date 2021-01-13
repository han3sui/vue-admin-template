import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import baseRoutes from '@/router/baseRoutes'
import permissionRoutes from '@/router/permissionRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: baseRoutes
})

// 动态加载路由
router.addRoutes(permissionRoutes)

// 配置NProgress进度条选项 —— 进度环显示隐藏
NProgress.configure({ showSpinner: false })

// 前置路由守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (store.state.permissionMenu.length === 0) {
    store.commit('SET_ROUTES', baseRoutes[0].children.concat(permissionRoutes))
    next({ ...to, replace: true })
  } else {
    next()
  }
})

// 后置路由守卫
router.afterEach(() => {
  NProgress.done()
  store.commit('SET_COLLAPSE', false)
})

export default router
