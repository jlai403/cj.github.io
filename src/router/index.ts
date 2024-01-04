import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [{
        path: '/',
        component: () => import('../components/home/HeroComponent.vue')
      }, {
        path: '/story',
        component: () => import('../components/home/StoryComponent.vue')
      }]
    },
    {
      path: '/memories',
      name: 'memories',
      component: () => import('../views/MemoriesView.vue')
    }
  ]
})

export default router
