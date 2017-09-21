import axiosIns from '../utils/axiosIns.js';
import { qs } from '../utils/tools.js';

//获取登录状态
export function getLoginInfo(params) {
  return axiosIns.get("/logoninfo");
}

//登录接口
export function login(params) {
  return axiosIns.post("/logon", qs(params));
}

//登出接口
export function logout(params) {
  return axiosIns.get("/logout");
}