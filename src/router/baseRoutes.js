import Layout from '@/layout'

const baseRoutes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/login/index')
  },
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
        },
        children: [{
          path: '/about5',
          name: 'About5',
          meta: {
            title: '关于5'
          }
        }]
      }]
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      meta: {
        title: '首页',
        icon: 'el-icon-user'
      },
      children: [{
        path: '/dashboard/index1',
        name: 'Dashboard1',
        meta: {
          title: '首页1'
        }
      }]
    }, {
      path: '/logout',
      name: 'Logout',
      meta: {
        title: '退出',
        icon: 'el-icon-switch-button'
      }
    }]
  }
]

export default baseRoutes
