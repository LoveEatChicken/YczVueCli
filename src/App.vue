<template>
  <div id="main">
    <transition name="fade">
      <img v-show="show" src="./assets/logo.png">
    </transition>
    <router-view></router-view>
    <button @click="showTransition" v-color="'red'">toggle</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        show: true
      }
    },
    methods: {
      showTransition() {
        this.show = !this.show;
      }
    }
  }
</script>

<style>
  #main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-out;
  }
</style>
