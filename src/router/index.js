import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'
import HomePage from '../components/HomePage.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('../components/HomePage.vue')
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: () => import('../components/HomePage.vue')
  },
  {
    path: '/demo2',
    name: 'demo2',
    component:() => import('../components/PageContent/PageContent.vue')
  }

  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
