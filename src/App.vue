<template>
  <div id="app">
    <p>
      <a v-link="{ path: '/' }">Jam</a>
      <a v-link="{ path: '/rules' }">Rules</a>
      <a v-link="{ path: '/events' }">Events</a>
    </p>
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
  background-color: #f07aa1;
  /*align-items: center;
  justify-content: center;*/
  background-image: url('assets/lfndbg.jpg');
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  /*text-align: center;*/
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
