<template>
  <div id="app">
    <p>HelloWorld</p>

  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

import './assets/css/reset.css'
import './assets/css/theme.css'
import './assets/css/global.css'

export default {
  name: 'App',
  components: {
    AppHeader, AppFooter
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
