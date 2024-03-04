import { createRouter, createWebHistory } from 'vue-router'
import MapView from '../views/MapView.vue'

const routes = [
  {
    path: '/',
    redirect: '/map'
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/kingdom',
    name: 'kingdom',
    component: function () {
      return import('../views/KingdomView.vue')
    }
  },
  {
    path: '/skills',
    name: 'skills',
    component: function () {
      return import('../views/SkillsView.vue')
    }
  },
  {
    path: '/feats',
    name: 'feats',
    component: function () {
      return import('../views/Feats.vue')
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
