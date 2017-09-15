import { getLoginStatus } from 'api/LoginAPI';

// types
const LOAD_FINISH = 'LOAD_FINISH';
// state
const state = {
  loaded: false,//首次页面加载,判断是否登录
  islogin: false,//是否登录
};
// getters
const getters = {};
// actions
const actions = {
  getLoginStatus({ commit }) {
    getLoginStatus().then(function(res) {
      console.log(res, "-----------");
      commit(LOAD_FINISH);
    });
  },
}
// mutations
const mutations = {
  [LOAD_FINISH](state) {
    state.loaded = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}