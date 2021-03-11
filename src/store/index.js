import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    result: 'offline'
  },
  mutations: {
    ModificationState(state,payload) {
      state.result = payload.State
    }
  },
  actions: {},
  getters: {},
  modules: {}
})

export default store
