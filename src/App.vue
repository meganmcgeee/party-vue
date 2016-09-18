<template>
  <div id="app">
    <heading></heading>
    <p>
      <a v-link="{ path: '/' }">Home</a>
      <a v-link="{ path: '/heading' }">Greetings</a>
      <a v-link="{ path: '/instructions' }">Instructions</a>
      <a v-link="{ path: '/partyfavors' }">Party Favors</a>
    </p>

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
  font-family: 'Pontano Sans', sans-serif;
  display: flex;
  background-color: #f07aa1;
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
  color: #000;
  text-decoration: none;
  padding: 10px;
  font-family: 'Pontano Sans', sans-serif;
}

.logo {
  width: 400px;
  height: 400px
}
</style>
