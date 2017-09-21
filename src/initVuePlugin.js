//vue核心,Plugin
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import "./utils/vuePlugin/index";
import 'iview/dist/styles/iview.css';//iview样式

Vue.use(Vuex);
Vue.use(VueRouter);