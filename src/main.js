import Vue from 'vue'
import Fragment from 'vue-fragment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Fragment.Plugin)
Vue.use(ElementUI, { size: 'small' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
