//vue核心,Plugin
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import "./utils/vuePlugin/index";

//iview相关组件
import 'iview/dist/styles/iview.css';//iview样式
import LoadingBar from 'iviewSrc/loading-bar';
import Message from 'iviewSrc/message';
import Modal from 'iviewSrc/modal';
import Notice from 'iviewSrc/notice';

Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;

Vue.use(Vuex);
Vue.use(VueRouter);