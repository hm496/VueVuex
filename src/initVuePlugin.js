//vue核心,Plugin
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import "./utils/vuePlugin/index";
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(iView);
Vue.use(Vuex);
Vue.use(VueRouter);