import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/Login.vue'
import RegisterPage from '../pages/Register.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register-page',
      component: RegisterPage,
    },
  ],
})
