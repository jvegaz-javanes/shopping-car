// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Snackbar from 'vuejs-snackbar';

Vue.config.productionTip = false;
Vue.component('snackbar', Snackbar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, Snackbar},
  template: '<App/>'
});
