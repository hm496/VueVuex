//兼容polyfill
import 'babel-polyfill';
//初始化vue
import './initVue';
//全局样式
import './styles/common_css.js';
//路由状态同步到Vuex
import './routes/vuex-router';

//试验
import './utils/axios_instance';