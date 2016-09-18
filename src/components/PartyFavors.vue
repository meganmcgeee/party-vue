<template>
  <div class="partyfavors">
    <p>{{ list }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      list: 'Here will go a really stellar CRUD app, implemented using Vue.js.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #000;
  font-family: 'Pontano Sans', sans-serif;
}
</style>
