//router-hook
import routerHook from './routerHook.js';
//vue-router
import VueRouter from 'vue-router';

import Home from "../views/Home.vue"; //首页
import Frame from "../layouts/Frame.vue"; //主体框架
import Login from "../views/Login.vue"; //登录页面

const Detail = () => import(/* webpackChunkName: "Detail" */ '../views/Detail.vue')
const User = () => import(/* webpackChunkName: "User" */ '../views/User.vue');
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue');
const Invalid = () => import(/* webpackChunkName: "Invalid" */ '../views/Invalid.vue');

//工具:子路由wrapper
import ChildWrapper from "../layouts/ChildWrapper.vue";
//资源管理
import Device from "../views/Device.vue"; //设备
import Camera from "../views/Camera.vue"; //摄像头
import PersonLib from "../views/PersonLib.vue"; //人员库
import ClassLib from "../views/ClassLib.vue"; //分类库
//识别结果
import IdentitySuc from "../views/IdentitySuc.vue"; //识别成功
import IdentityFail from "../views/IdentityFail.vue"; //识别失败
//系统管理
import UserManage from "../views/UserManage.vue"; //用户管理
import DailyInfo from "../views/DailyInfo.vue"; //日志信息
import AccountInfo from "../views/AccountInfo.vue"; //账户信息

const routes = [
  {
    path: '/',
    component: Frame,
    children: [
      {
        path: '',
        redirect: { name: 'login' }//重定向 到登录页面
      },
      {
        name: 'home',
        path: '/home',
        component: Home,
        meta: { requiresAuth: true },//需要登录
      },
      {
        name: 'detail',
        path: '/detail',
        component: Detail,
        meta: { requiresAuth: true },//需要登录
      },
      {
        name: 'user',
        path: '/user/:id',
        component: User,
        meta: { requiresAuth: true },//需要登录
      },
      {
        name: 'source',
        path: '/source',
        component: ChildWrapper,
        meta: { requiresAuth: true },//需要登录
        children: [
          {
            path: '',
            redirect: { name: 'device' }//重定向
          },
          {
            name: 'device',
            path: 'device',
            component: Device,
            meta: {
              requiresAuth: true,
              title: "分析设备",
            },//需要登录
          },
          {
            name: 'camera',
            path: 'camera',
            component: Camera,
            meta: {
              requiresAuth: true,
              title: "采集设备",
            },//需要登录
          },
          {
            name: 'personlib',
            path: 'personlib',
            component: PersonLib,
            meta: {
              requiresAuth: true,
              title: "人员库",
            },//需要登录
          },
          {
            name: 'classlib',
            path: 'classlib',
            component: ClassLib,
            meta: {
              requiresAuth: true,
              title: "分类库",
            },//需要登录
          },
        ],
      },
      {
        name: 'identity',
        path: '/identity',
        component: ChildWrapper,
        meta: { requiresAuth: true },//需要登录
        children: [
          {
            path: '',
            redirect: { name: 'identitysuc' }//重定向
          },
          {
            name: 'identitysuc',
            path: 'identitysuc',
            component: IdentitySuc,
            meta: {
              requiresAuth: true,
              title: "识别成功",
            },//需要登录
          },
          {
            name: 'identityfail',
            path: 'identityfail',
            component: IdentityFail,
            meta: {
              requiresAuth: true,
              title: "未识别",
            },//需要登录
          },
        ]
      },
      {
        name: 'system',
        path: '/system',
        component: ChildWrapper,
        meta: { requiresAuth: true },//需要登录
        children: [
          {
            path: '',
            redirect: { name: 'usermanage' }//重定向
          },
          {
            name: 'usermanage',
            path: 'usermanage',
            component: UserManage,
            meta: { requiresAuth: true },//需要登录
          },
          {
            name: 'dailyinfo',
            path: 'dailyinfo',
            component: DailyInfo,
            meta: { requiresAuth: true },//需要登录
          },
          {
            name: 'accountinfo',
            path: 'accountinfo',
            component: AccountInfo,
            meta: { requiresAuth: true },//需要登录
          },
        ],
      },


    ]
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'invalid',
    path: '/invalid',
    component: Invalid
  },
  {
    name: '404',
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  // mode: 'history',//html5 history
  routes, // （缩写）相当于 routes: routes
});

routerHook(router);

export default router;