import { createRouter, createWebHistory } from 'vue-router'

import SuratView from '@/views/SuratView.vue'
import JuzView from '@/views/JuzView.vue'
import DetailSurat from '@/pages/DetailSurat.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue') // Lazy-loaded
    },    
    {
      path: '/surat',
      name: 'surat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SuratView
    },
    {
      path: '/surat/:id',
      name: 'detail-surat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DetailSurat
    },
    {
      path : '/juz/:id?',
      name : 'juz',
      component : JuzView
    }
  ]
})

// **Tangani navigasi agar "/juz" selalu mengarah ke "/juz/1"**
router.beforeEach((to, from, next) => {
  if (to.path === "/juz") {
    next("/juz/1");
  } else {
    next();
  }
});
export default router
