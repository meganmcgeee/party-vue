<template>
  <div id="app">
  <img class="logo" src="./assets/cocktails.jpg">
  <heading></heading>
  <instructions></instructions>
</template>

<script>
import Heading from './components/Heading'
import Instructions from './components/Instructions'

export default {
  components: {
    Heading,
    Instructions
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 400px;
  height: 400px
}
</style>
