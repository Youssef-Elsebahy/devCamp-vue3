import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/UsersView.vue')
  },
  { 
    name: "notfound", 
    path: "/:pathMatch(.*)*", 
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/user/:id',
    name: 'UserProfile',
    props: true,
    component: () => import('../components/users/UserProfile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
