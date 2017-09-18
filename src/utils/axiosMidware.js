import compose from './compose';
import router from '../routes/router.js';

function sessionInvalid(res) {
  console.log(res);
  let data = res.data;
  if (data && data.code === 100 && data.login === false) {
    //处理除在路由HOOK调用的接口(获取登录状态) 之外的接口(否则会重复处理两边)
    console.log('登录失效,axios');
    //跳转到登录页
    router.push("/login");
    //设置vuex相关状态
  }
  return res;
}

let midware = compose(sessionInvalid);

export default midware;