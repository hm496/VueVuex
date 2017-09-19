import Store from 'store/Store.js';
import { types as RootTypes } from 'store/rootVuex.js';
import { getLoginStatus } from '../api/LoginAPI';

export default function (router) {
  //全局导航钩子
  router.beforeEach((to, from, next) => {
    //隐藏
    if (to.matched.some(record => record.meta.requiresAuth)) {
      console.log("路由钩子,判断登录权限");


      const isLogin = Store.state.isLogin;
      if (isLogin) {
        next();
      } else {
        //1,显示loading页
        Store.commit(RootTypes.CHANGE_LOADING_MASK, true);//显示loading
        console.log("显示loading页");
        //2,去后台请求判断权限
        //模拟请求
        setTimeout(function () {
          //通过后台返回数据,判断登录状态
          // getLoginStatus().then(function(res) {
          //   //if(未登录)
          //   //1,显示loading页
          //   //2,去后台请求判断权限
          //   //3,隐藏loading页
          //   //4,跳转到指定页面(登录页,或内容页)
          //   //else(已经登录)
          //   //next()
          // });
          const isLogin = true;//模拟后台返回的登录状态
          Store.commit(RootTypes.CHANGE_LOADING_MASK, false);//隐藏loading
          console.log("隐藏loading页");
          if (isLogin) {
            //更新登录状态isLogin和更新登录用户信息loginInfo
            Store.commit(RootTypes.CHANGE_LOGIN_STATUS, true);
            next();
          } else {
            Store.commit(RootTypes.CHANGE_LOGIN_STATUS, false);
            next("/login");
          }
        }, 2500);
      }

      //先判断本地vuex中登录状态
      //if(未登录)
      //1,显示loading页
      //2,去后台请求判断权限
      //3,隐藏loading页
      //4,跳转到指定页面(登录页,或内容页)
      //else(已经登录)
      //next()
    } else {
      next() // 确保一定要调用 next()
    }
  });
}