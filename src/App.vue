<template>
  <div id="app">
    <v-app>
      <component :is="$route.meta.layout">
        <router-view />
      </component>
    </v-app>
  </div>
</template>
<script>
export default {
  async mounted() {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
