import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login.vue';
import RegisterView from '../views/register.vue';
import IndexView from '../views/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: IndexView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
    }
  ]
})

export default router
