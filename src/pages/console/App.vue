<template>
  <div id="app">
    <index-view />
  </div>
</template>

<script>
import IndexView from './view/index'
export default {
  name: 'App',
  components: {
    IndexView,
  },
}
</script>

<style>
body {
  background-color: #f8f8fe;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
