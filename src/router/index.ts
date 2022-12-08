import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/Login.vue'
import DashboardPage from '../views/Dashboard.vue'

import ListUsers from '../components/ListUsers.vue'
import RegisterUser from '../components/RegisterUser.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage,
    },
    {
      path: '/dashboard',
      name: 'dashboard-page',
      component: DashboardPage,
      children: [
        { path: '', name: 'User-List', component: ListUsers },
        { path: 'register', component: RegisterUser },
      ],
    },
  ],
})
