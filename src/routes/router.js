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
        meta: { requiresAuth: true }//需要登录
      },
      {
        name: 'detail',
        path: '/detail',
        component: Detail,
        meta: { requiresAuth: true }//需要登录
      },
      {
        name: 'user',
        path: '/user/:id',
        component: User,
        meta: { requiresAuth: true }//需要登录
      }
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