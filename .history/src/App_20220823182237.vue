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

</style>
