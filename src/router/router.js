import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import axios from '../components/axios.vue'
import Contact from '../components/Contact.vue'
import Calendar from '../components/Calendar.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/Home', component: Home },
  { path: '/Calendar', component: Calendar },
  { path: '/Contact', component: Contact }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
