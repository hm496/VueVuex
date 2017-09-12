import Home from "../views/Home.vue";

const Detail = () => import('../views/Detail.vue');
const User = () => import('../views/User.vue');

const routes = [
  {
    path: '/',
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
];

export default routes;