//vue核心,Plugin
import Vue from 'vue';
import './initVuePlugin';
//vue路由
import router from "./routes/router.js";
//vue入口组件
import App from './App.vue';


new Vue({
  el: "#root",
  router: router,
  render: h => h(App)
});