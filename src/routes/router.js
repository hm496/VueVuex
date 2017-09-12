import VueRouter from 'vue-router';
//同步加载组件
import Home from "../views/Home.vue";
//异步加载组件
const Detail = () => import('../views/Detail.vue');
const User = () => import('../views/User.vue');
const NotFoundComponent = () => import('../views/NotFoundComponent.vue');

const routes = [
  {
    path: '/',
    redirect: '/home'
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

export default router;