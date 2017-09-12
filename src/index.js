//兼容polyfill
import 'babel-polyfill';
//vue核心
import Vue from 'vue';
import VueRouter from 'vue-router';
//vue入口组件
import App from './App.vue';
//vue路由
import router from "./routes/router.js";
//全局样式
import './styles/common_css.js';
//全局js
import './utils/axios_instance';

//Vue Plugin
Vue.use(VueRouter);

new Vue({
  el: "#root",
  router: router,
  render: h => h(App)
});