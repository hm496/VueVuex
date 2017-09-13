import axios from 'axios';
import serverPath from './serverPath.js';

const instance = axios.create({
  baseURL: `/${serverPath.prefix}/`,
});
window.axios = instance;

export default instance;