import axios from 'axios';
import serverPath from './serverPath.js';
import axiosMidware from './axiosMidware.js';
import Emitter from "../utils/EventEmitter";

axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: `/${serverPath.prefix}/`,
});

// 添加响应拦截
instance.interceptors.response.use(function (response) {
  return axiosMidware(response);
}, function (error) {
  return Promise.reject(error).catch(function (err) {
    Emitter.emit("httpErr", err);
    return err;
  });
});

window.axios = instance;
export default instance;