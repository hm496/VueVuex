import axios from 'axios';
import serverPath from './serverPath.js';
import axiosMidware from './axiosMidware.js';

const instance = axios.create({
  baseURL: `/${serverPath.prefix}/`,
});

function proxyAxios(...args) {
  return instance(...args).then(function(res) {
    return axiosMidware(res);
  });
}

proxyAxios.post = function(...args) {
  return instance.post(...args).then(function(res) {
    return axiosMidware(res);
  });
}

proxyAxios.get = function(...args) {
  return instance.get(...args).then(function(res) {
    return axiosMidware(res);
  });
}


window.axios = proxyAxios;
export default proxyAxios;