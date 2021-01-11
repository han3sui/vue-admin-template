import Layout from '@/layout'

const baseRoutes = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    children: [{
      path: '/about',
      name: 'About',
      meta: {
        title: '关于',
        icon: 'el-icon-message'
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      children: [{
        path: '/about1',
        name: 'About1',
        meta: {
          title: '关于1'
        }
      }, {
        path: '/about4',
        name: 'About4',
        meta: {
          title: '关于4'
        }
      }]
    }, {
      path: '/index',
      meta: {
        title: '首页',
        icon: 'el-icon-user'
      },
      children: [{
        path: '/index1',
        meta: {
          title: '首页1'
        }
      }]
    }]
  }
]

export default baseRoutes
