<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'vapp',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld
  }
}
</script>

<style>
 #app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  color: #2c3e50;
  overflow-x: hidden;

}
html {
    font-size: 26.67vw;
}
</style>
