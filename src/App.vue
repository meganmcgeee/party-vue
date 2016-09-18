<template>
  <div id="app">
    <ul class="nav navbar-nav">
      <li><a v-link="{ path: '/' }">Dashboard</a></li>
      <li><a v-link="{ path: '/about' }">About</a></li>
      <li><a v-link="{ path: '/contact' }">Contact</a></li>
      <li><a v-link="{ path: '/404' }">404</a></li>
    </ul>
  <img class="logo" src="./assets/cocktails.jpg">
  <router-view></router-view>
</template>

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
