//兼容polyfill
import 'babel-polyfill';
import 'whatwg-fetch';
//vue相关文件
import Vue from 'vue';
import VueRouter from 'vue-router';
//vue入口组件
import App from './App.vue';
//路由
import routes from "./routes/routes.js";
//初始化css
import './styles/normalize.css';

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',//html5 history
  routes, // （缩写）相当于 routes: routes
});

new Vue({
  el: "#root",
  router: router,
  render: h => h(App)
});