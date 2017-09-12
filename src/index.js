//兼容polyfill
import 'babel-polyfill';
import 'whatwg-fetch';

import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#root',
  render: h => h(App)
});