import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/Login.vue'
import DashboardPage from '../views/Dashboard.vue'

import UserInfo from '../components/UserInfo.vue'
import ListUsers from '../components/ListUsers.vue'
import RegisterUser from '../components/RegisterUser.vue'
import EditUser from '../components/EditUser.vue'

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
      path: '/dashboard/:id/',
      name: 'dashboard-page',
      component: DashboardPage,
      children: [
        { path: 'info', name: 'user', component: UserInfo },
        { path: 'list', component: ListUsers },
        { path: 'register', component: RegisterUser },
        { path: 'edit', component: EditUser },
      ],
    },
  ],
})
