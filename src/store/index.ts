import Vue from 'vue'
import Vuex from 'vuex'
import SocketService from '@/services/SocketService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socketService: new SocketService()
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getSocketService(state): SocketService {
      return state.socketService;
    }
  }
})
