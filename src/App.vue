<template>
  <div id="app">
    <TopNavBar v-if="isLogged()"/>
    <div style="overflow-y:scroll">
      <router-view></router-view>
    </div>
    <Menu v-if="isLogged()"/>
  </div>
</template>

<script>

import Menu from './components/Menu'
import TopNavBar from './components/TopNavBar'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components : {
    Menu,
    TopNavBar
  },
  mounted(){
    if(!this.isLogged()){
      this.$router.push('login')
    }
  },
  methods : {
    isLogged: function() {
      if(localStorage.auth === 'false')
      {
        return false;
      }
      return true
    }
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
