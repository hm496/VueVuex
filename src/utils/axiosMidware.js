import compose from './compose';
import router from '../routes/router.js';
import { USER_OUTLINE } from '../utils/responseCode.js';
import Store from '../store/Store.js';
import { types as RootTypes } from '../store/rootVuex.js';


function sessionInvalid(res) {
  // console.log(res);
  let data = res.data;
  const code = data.header && data.header.code;
  if (data && code && code === USER_OUTLINE) {
    console.log('登录失效,axiosMidware.js');
    //跳转到登录页
    router.push("/login");
    //设置vuex相关状态
    Store.commit(RootTypes.CHANGE_LOGIN_STATUS, false);
  }
  return res.data || {};
}

let midware = compose(sessionInvalid);

export default midware;