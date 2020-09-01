import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import GameView from '@/views/GameView/GameView.vue';
import AuthService from '@/services/AuthService';
import LoginView from '@/views/GameView/LoginView/LoginView.vue';
import RegisterView from '@/views/GameView/RegisterView/RegisterView.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/game',
    name: 'GameView',
    component: GameView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(AuthService);

export default router
