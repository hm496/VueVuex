import axiosIns from 'utils/axiosIns.js';

//获取登录状态
export function getLoginStatus(params) {
  return axiosIns.get("/getloginstatus.json");
}

//登录接口
export function login(params) {
  return axiosIns.post("/login", params);
}