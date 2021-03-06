import Vue from 'vue';
//响应码
import { LOGIN_SUCCESS, LOGIN_NOTFOUND, LOGIN_FAILPWD, LOGIN_OUTDATE } from '../utils/responseCode.js';
//接口
import { login as loginApi, logout } from '../api/LoginAPI';
//路由,跳转页面
import router from '../routes/router.js';

// types
const CHANGE_LOADING_MASK = 'CHANGE_LOADING_MASK';
const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS';
const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
const SET_CON_HEIGHT = 'SET_CON_HEIGHT';
// state
const state = {
  firstLoad: true,//判断是否首次加载(暂时无用)
  isLoading: false,//显示隐藏loading页面(true显示,false隐藏,默认false)
  isLogin: false,//是否登录(true已登录,false未登录,默认false)
  loginInfo: null,//登录用户信息
  frameConHeight: 800,//登录用户信息
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
    return loginApi(data).then(function (res) {
      if (res.header && res.header.code === LOGIN_SUCCESS) {
        //修改vuex登录状态
        commit(CHANGE_LOGIN_STATUS, true);
        console.log(res.body.info);
        //把登录用户信息存到sessionStorage中
        window.sessionStorage.setItem("loginInfo", JSON.stringify(res.body.info));
        commit(SET_LOGIN_INFO, res.body.info);
        //跳转home
        router.push("/home");
      }
      return res;
    });
  },
  loginOut({ commit }, data) {
    //调用登出接口并复位相关vuex状态,清空登录数据
    //跳转到登录页面
    window.sessionStorage.removeItem("loginInfo");
    router.push("/login");
    commit(CHANGE_LOGIN_STATUS, false);
    commit(SET_LOGIN_INFO, null);
    logout();//退出接口
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
  [SET_CON_HEIGHT](state, height) {
    state.frameConHeight = height;
  }
};

export const types = {
  CHANGE_LOADING_MASK,
  CHANGE_LOGIN_STATUS,
  SET_LOGIN_INFO,
  SET_CON_HEIGHT,
};


export default {
  state,
  getters,
  actions,
  mutations
}