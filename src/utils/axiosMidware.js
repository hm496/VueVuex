import compose from './compose';
import router from '../routes/router.js';
import { USER_OUTLINE } from 'utils/responseCode.js';

function sessionInvalid(res) {
  // console.log(res);
  let data = res.data;
  const code = data.header && data.header.code;
  if (data && code && code === USER_OUTLINE) {
    //处理除在路由HOOK调用的接口(获取登录状态) 之外的接口(否则会重复处理两边)
    console.log('登录失效,axios');
    //跳转到登录页
    router.push("/login");
    //设置vuex相关状态
  }
  return res.data || {};
}

let midware = compose(sessionInvalid);

export default midware;