import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { VueAxios } from './utils/request'

import './permission'
import './core/antd'
import './core/laze_use'
import '@/utils/filter'


Vue.config.productionTip = false

Vue.use(VueAxios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
