import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import EventList from './components/EventList.vue';
import RulesList from './components/RulesList.vue';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/rules': {
    component: RulesList,
  },
  '/events': {
    component: EventList,
  },
});

router.start(App, '#app');
