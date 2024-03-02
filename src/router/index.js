import { createRouter, createWebHistory } from 'vue-router'
import KingdomView from '../views/KingdomView.vue'

const routes = [
  {
    path: '/',
    redirect: '/kingdom'
  },
  {
    path: '/kingdom',
    name: 'kingdom',
    component: KingdomView
  },
  {
    path: '/skills',
    name: 'skills',
    component: function () {
      return import('../views/SkillsView.vue')
    }
  },
  {
    path: '/faa',
    name: 'faa',
    component: function () {
      return import('../views/FAA.vue')
    }
  },
  {
    path: '/city',
    name: 'city',
    component: function () {
      return import('../views/City.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
