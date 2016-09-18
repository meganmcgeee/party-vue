<template>
  <div class="eventlist" id="events">
    <!-- show the events -->
    <div class="col-sm-6">
      <div class="list-group">
        <a href="#" class="list-group-item" v-for="event in events">
          <h4 class="list-group-item-heading">
            <i class="glyphicon glyphicon-bullhorn"></i>
            {{ event.name }}
          </h4>

          <h5>
            <i class="glyphicon glyphicon-calendar" v-if="event.date"></i>
            {{ event.date }}
          </h5>

          <p class="list-group-item-text" v-if="event.description">{{ event.description }}</p>

          <button class="btn btn-xs btn-danger" v-on="click: deleteEvent($index)">Delete</button>
        </a>
      </div>
    </div>
    <div class"container">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <p>Add an Event</p>
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

            <button class="btn btn-primary" v-on:click="addEvent">Submit</button>
          </div>

        </div>
      </div>
    </div>

  </div>
  </div>
  </div>
</template>

<script>

  export default {

    // Here we can register any values or collections that hold data
    // for the application
    data() {
      return {
        event: { name: '', description: '', date: '' },
        events: [],
      };
    },

    // Anything within the ready function will run when the application loads
    ready() {
        // When the application loads, we want to call the method that initializes
        // some data
      this.fetchEvents();
    },

    // Methods we want to use in our application are registered here
    methods: {


        // We dedicate a method to retrieving and setting some data
      fetchEvents() {
        const events = [{
        //   id: 1,
        //   name: 'TIFF',
        //   description: 'Toronto International Film Festival',
        //   date: '2015-09-10',
        // }, {
        //   id: 2,
        //   name: 'The Martian Premiere',
        //   description: 'The Martian comes to theatres.',
        //   date: '2015-10-02',
        // }, {
        //   id: 3,
        //   name: 'SXSW',
        //   description: 'Music, film and interactive festival in Austin, TX.',
        //   date: '2016-03-11',
        }];
            // $set is a convenience method provided by Vue that is similar to pushing
            // data onto an array
        this.$set('events', events);
      },

        // Adds an event to the existing events array
      addEvent() {
        if (this.event.name) {
          this.events.push(this.event);
          this.event = { name: '', description: '', date: '' };
        }
      },

      deleteEvent(index) {
        if (confirm('Are you sure you want to delete this event?')) {
                // $remove is a Vue convenience method similar to splice
          this.events.$remove(index);
        }
      },
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
