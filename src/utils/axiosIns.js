import axios from 'axios';
import serverPath from './serverPath.js';
import axiosMidware from './axiosMidware.js';

axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: `/${serverPath.prefix}/`,
});

// 添加响应拦截
instance.interceptors.response.use(function (response) {
  return axiosMidware(response);
}, function (error) {
  return Promise.reject(error);
});

window.axios = instance;
export default instance;