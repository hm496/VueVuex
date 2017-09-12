//兼容polyfill
import 'babel-polyfill';
import 'whatwg-fetch';

//vue相关文件
import Vue from 'vue';
import VueRouter from 'vue-router';


//入口文件
import App from './App.vue';

//路由
import routes from "./routes/routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#root');