import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useGoogleAuthStore } from '@/stores/googleAuth'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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

router.beforeEach(async (to) => {
  if (to.fullPath.startsWith('/access_token')) {
    const params = new URLSearchParams(to.fullPath.replace('/', '?')); // replace first slash with ? for query param
    const accessToken = params.get('access_token');
    if (accessToken !== null) {
      useGoogleAuthStore().googleAccessToken = accessToken;
    }
    return { name: 'memories'}
  }
})

export default router
