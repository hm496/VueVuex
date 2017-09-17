import { getLoginStatus, login as loginApi } from '../api/LoginAPI';
import router from '../routes/router.js';

// types
const CHANGE_LOADING_MASK = 'CHANGE_LOADING_MASK';
const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS';
const LOGIN_OUT = 'CHANGE_LOGIN_STATUS';
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
    getLoginStatus().then(function(res) {
      console.log(res, "-----------");
      console.log("getLoginStatus");
    });
  },
  login({ commit }, data) {
    loginApi(data).then(function(res) {
      console.log(res, "-----------");
      console.log("getLoginStatus");
    });
  },
  loginOut({ commit }, data) {
    //调用登出接口并复位相关vuex状态,清空登录数据
    //跳转到登录页面
    commit(CHANGE_LOGIN_STATUS, false);
    router.push("/login");
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
};

export const types = {
  CHANGE_LOADING_MASK,
  CHANGE_LOGIN_STATUS,
  LOGIN_OUT,
};

export default {
  state,
  getters,
  actions,
  mutations
}