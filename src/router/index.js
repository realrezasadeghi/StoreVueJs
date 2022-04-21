import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import appRoutes from './app'
import dashboardRoutes from './dashboard'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { nameFa: 'خانه' },
    component: HomeView,
    children: [...appRoutes]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { nameFa: 'پنل مدیریت' },
    component: DashboardView,
    children: [...dashboardRoutes]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
