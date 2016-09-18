<template>
  <div class="Rules">
    <p>{{ rulelist }}</p>
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
      rulelist: 'Please leave all weapons at the door. This is a gat-free celebration.',
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
