//vue核心,Plugin
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import "./utils/vuePlugin/index";

//iview相关组件
import 'iview/dist/styles/iview.css';//iview样式
import LoadingBar from '_iview/loading-bar';
import Message from '_iview/message';
import Modal from '_iview/modal';
import Notice from '_iview/notice';

Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;

Vue.use(Vuex);
Vue.use(VueRouter);