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
    path: '/cities',
    name: 'cities',
    component: function () {
      return import('../views/Cities.vue')
    }
  },
  {
    path: '/items',
    name: 'items',
    component: function () {
      return import('../views/Items.vue')
    }
  },
  {
    path: '/battle',
    name: 'battle',
    component: function () {
      return import('../views/Battle.vue')
    }
  },
  {
    path: '/kobold',
    name: 'kobold',
    component: function () {
      return import('../views/Kobold.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
