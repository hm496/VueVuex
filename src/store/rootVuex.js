//响应码
import { LOGIN_SUCCESS } from '../utils/responseCode.js';
//接口
import { login as loginApi, logout } from '../api/LoginAPI';
//路由,跳转页面
import router from '../routes/router.js';

// types
const CHANGE_LOADING_MASK = 'CHANGE_LOADING_MASK';
const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS';
const LOGIN_OUT = 'LOGIN_OUT';
const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
// state
const state = {
  firstLoad: true,//判断是否首次加载(暂时无用)
  isLoading: false,//显示隐藏loading页面(true显示,false隐藏,默认false)
  isLogin: false,//是否登录(true已登录,false未登录,默认false)
  loginInfo: null,//登录用户信息
};
// getters
const getters = {};
// actions
const actions = {
  getLoginStatus({ commit }) {
    getLoginStatus().then(function (res) {
      console.log(res, "-----------");
      console.log("getLoginStatus");
    });
  },
  login({ commit }, data) {
    loginApi(data).then(function (res) {
      if (res.header && res.header.code === LOGIN_SUCCESS) {
        //修改vuex登录状态
        commit(CHANGE_LOGIN_STATUS, true);
        console.log(res.body.info);
        commit(SET_LOGIN_INFO, res.body.info);
        //跳转home
        router.push("/home");
      }
    });
  },
  loginOut({ commit }, data) {
    //调用登出接口并复位相关vuex状态,清空登录数据
    //跳转到登录页面
    logout().then(function (res) {
      commit(CHANGE_LOGIN_STATUS, false);
      commit(SET_LOGIN_INFO, null);
      router.push("/login");
    });
  },
}
// mutations
const mutations = {
  [CHANGE_LOADING_MASK](state, isLoading = false) {
    state.isLoading = isLoading;
  },
  [CHANGE_LOGIN_STATUS](state, isLogin = false) {
    state.isLogin = isLogin;
  },
  [SET_LOGIN_INFO](state, logininfo) {
    state.loginInfo = logininfo;
  },
};

export const types = {
  CHANGE_LOADING_MASK,
  CHANGE_LOGIN_STATUS,
  LOGIN_OUT,
  SET_LOGIN_INFO,
};


export default {
  state,
  getters,
  actions,
  mutations
}