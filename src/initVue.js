//vue核心,Plugin
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
//vue路由
import router from "./routes/router.js";
//vue入口组件
import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  el: "#root",
  router: router,
  render: h => h(App)
});