import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Todos from '../views/Todos.vue'
import Albuns from '../views/Albuns.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },

  {
    path: '/albuns',
    name: 'Albums',
    component: Albuns
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
