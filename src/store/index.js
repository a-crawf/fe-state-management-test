import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const defaultState = {
  user: {
    firstName: ''
  }
}

// GETTERS
const getUser = state => state.user;

const getters = {
  getUser
}

// MUTATIONS
const loadUser1 = (state) => {
  state.user = {
    firstName: 'Bob'
  }
}
const loadUser2 = (state) => {
  state.user = {
    firstName: 'Phil'
  }
}

const mutations = {
  loadUser1,
  loadUser2
}

// ACTIONS
const fetchUser = ({ commit }) => {
  setTimeout(() => {
    commit('loadUser1')
  }, 2000)
  setTimeout(() => {
    commit('loadUser2')
  }, 4000)
}

const actions = {
  fetchUser
}

export default new Vuex.Store({
  state: defaultState,
  mutations,
  actions,
  getters
})
