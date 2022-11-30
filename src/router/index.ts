import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage,
    },
  ],
})
