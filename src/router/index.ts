import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useGoogleAuthStore } from '@/stores/googleAuth'


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
    },
    {
      path: '/google',
      name: 'google',
      redirect: to => {
        if (to.hash.length > 0) {
          const params = new URLSearchParams(to.hash.substring(1, to.hash.length))
          for (const entry of params.entries()) {
            console.log(entry);
          }
          const accessToken = params.get('access_token');
          if (accessToken) {
            useGoogleAuthStore().googleAccessToken = accessToken;
          }
        }
        to.hash = "";
        return { name: 'memories' }
      }
    }
  ]
})

export default router
