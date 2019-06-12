import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username: ''
}
const mutations = {
  getUser (state, name) {
    state.username = name
  }
}
const actions = {
  getUser (context, name) {
    context.commit('getUser', name)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
