import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { store } from './store/store'
import { router } from './router/router'
import axios from 'axios'

Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')
