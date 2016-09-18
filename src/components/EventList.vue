<template>
  <div class="eventlist" id="events">

    <!-- add an event form -->
    <div class="col-sm-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Add an Event</h3>
            <p>{{ events }}</p>
        </div>
        <div class="panel-body">
          <!--  Form-->
          <div class="form-group">
            <input class="form-control" placeholder="Event Name" v-model="event.name">
          </div>

          <div class="form-group">
            <textarea class="form-control" placeholder="Event Description" v-model="event.description"></textarea>
          </div>

          <div class="form-group">
            <input type="date" class="form-control" placeholder="Date" v-model="event.date">
          </div>

          <button class="btn btn-primary" v-on="click: addEvent">Submit</button>


        </div>

      </div>
    </div>

    <!-- show the events -->
    <div class="col-sm-6">
      <div class="list-group">

      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {},

  // Anything within the ready function will run when the application loads
  ready() {},

  // Methods we want to use in our application are registered here
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #000;
  font-family: 'Pontano Sans', sans-serif;
}
</style>
