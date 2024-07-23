import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SurahView from '@/views/SurahView.vue'
import JuzView from '@/views/JuzView.vue'
import TafsirView from '@/views/TafsirView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/surah',
      name: 'surah',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:  SurahView
    },
    {
      path: '/juz',
      name: 'juz',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:  JuzView
    },
    {
      path: '/tafsir',
      name: 'tafsir',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:  TafsirView
    },
  ]
})

export default router
