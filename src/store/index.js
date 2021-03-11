import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    result: 'offline'
  },
  mutations: {
    // 登录改变result
    ModificationState(state,payload) {
      state.result = payload.State
    },
    // 退出改变result
    QuitState(state,payload) {
      state.result = payload.State
    }
  },
  actions: {},
  getters: {},
  modules: {}
})

export default store
