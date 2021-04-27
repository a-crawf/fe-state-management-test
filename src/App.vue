<template>
  <div id="app">
    <p>Observable User: {{ observableUser.firstName }} </p>
    <p>Vuex User: {{ vuexUser.firstName }} </p>
  </div>
</template>

<script>
import { actions, getters, store } from './observable-store/index'

export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  computed: {
    observableUser: getters.getUser,
    vuexUser() {
      return this.$store.getters.getUser
    }
  },
  created() {
    this.$store.dispatch('fetchUser');
    actions.fetchUser();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
