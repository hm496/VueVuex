import compose from './compose';
import router from '../routes/router.js';

function sessionInvalid(res) {
  let data = res.data;
  if (data && data.code === 100 && data.login === false) {
    console.log('登录失效');
    //跳转到登录页
    router.replace("/login");
  }
  return res;
}

let midware = compose(sessionInvalid);

export default midware;