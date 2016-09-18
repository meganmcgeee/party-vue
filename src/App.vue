<template>
  <div id="app">
    <ul class="nav navbar-nav">
      <li><a v-link="{ path: '/' }">Home</a></li>
      <li><a v-link="{ path: '/heading' }">Heading</a></li>
      <li><a v-link="{ path: '/instructions' }">Instructions</a></li>
    </ul>
  <img class="logo" src="./assets/cocktails.jpg">
  <router-view></router-view>
</template>

<script>
export default {};
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
