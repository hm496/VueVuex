//vue-router
import VueRouter from 'vue-router';
//同步加载组件
import Home from "../views/Home.vue";
//主体框架
import Frame from "../views/Frame.vue";
//登录页面
import Login from "../views/Login.vue";
//异步加载组件
const Detail = () => import('../views/Detail.vue');
const User = () => import('../views/User.vue');
const NotFoundComponent = () => import('../views/NotFoundComponent.vue');

const routes = [
  {
    path: '/',
    component: Frame,
    children: [
      {
        path: '',
        component: Home
      },
      {
        name: 'home',
        path: '/home',
        component: Home
      },
      {
        name: 'detail',
        path: '/detail',
        component: Detail
      },
      {
        name: 'user',
        path: '/user/:id',
        component: User
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
    component: NotFoundComponent
  },
  {
    name: '404',
    path: '*',
    component: NotFoundComponent
  }
];

const router = new VueRouter({
  // mode: 'history',//html5 history
  routes, // （缩写）相当于 routes: routes
});

/*
*
{
  path: 'home',
  component: Home
},
{
  path: 'detail',
  component: Detail
},
{
  name: 'user',
  path: '/user/:id',
  component: User
},
* */

export default router;