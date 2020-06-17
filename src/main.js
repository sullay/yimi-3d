import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
import GlobalConfig from './config'
import './plugins/element.js'
import velocity from './plugins/velocity'

Vue.use(velocity)
Vue.use(GlobalConfig)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
