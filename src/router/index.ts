import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import GameView from '@/views/GameView/GameView.vue';
import AuthService from '@/services/AuthService';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/game',
    name: 'GameView',
    component: GameView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(AuthService);

export default router
