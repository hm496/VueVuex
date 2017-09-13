import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/',
});
window.axios = instance;

export default instance;