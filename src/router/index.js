import Vue from 'vue'
import VueRouter from 'vue-router'
import Season from '../components/Season'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Season
  },
  {
    path: '/season/:season',
    name: 'season',
    component: Season,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
