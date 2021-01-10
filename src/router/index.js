import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index'

Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    children: [{
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes: baseRoutes
})

export default router
