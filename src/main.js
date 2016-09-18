import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Heading from './components/Heading.vue';
import Instructions from './components/Instructions.vue';
import PartyFavors from './components/PartyFavors.vue';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/heading': {
    component: Heading,
  },
  '/instructions': {
    component: Instructions,
  },
  '/partyfavors': {
    component: PartyFavors,
  },
});

router.start(App, '#app');
