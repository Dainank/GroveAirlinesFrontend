<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: { Navigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

html, body { margin: 0; padding: 0; } 
</style>
