import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuratView from '@/views/SuratView.vue'
import JuzView from '@/views/JuzView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/surat/:id?',
      name: 'surat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SuratView
    },
    {
      path : '/juz/:id?',
      name : 'juz',
      component : JuzView
    }
  ]
})

export default router
