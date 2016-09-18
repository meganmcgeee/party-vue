<template>
  <div class="instructions">
    <p>{{ howto }}</p>
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
      howto: 'We are so very pleased that you could join us. Please leave all weapons at the door. This is a gat-free celebration.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #000;
}
</style>
