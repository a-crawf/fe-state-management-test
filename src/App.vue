<template>
  <div id="app">
    <p>User: {{ user.firstName }} </p>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },
  created() {
    this.$store.dispatch('fetchUser');
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
