import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/store/authStore'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import CardView from '@/views/CardView.vue'
import LogOutView from '@/views/LogOutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false
    } 
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requiresAuth: false
    } 
  },
  {
    path: '/card',  
    name: 'card',
    component: CardView,
    meta: {
      requiresAuth: true
    } 
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogOutView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.loggedIn
  const requiresAuth = to.meta.requiresAuth

  if (!isAuthenticated && requiresAuth) {
    next('/login')
  } else if (to.name==='login' && isAuthenticated) {
    next('/card')
  } else {
    next()
  }
})

export default router
