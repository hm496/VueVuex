import Home from "../views/Home.vue";

const Detail = () => import('../views/Detail.vue');
const User = () => import('../views/User.vue');
const NotFoundComponent = () => import('../views/NotFoundComponent.vue');

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
  },
  {
    name: '404',
    path: '*',
    component: NotFoundComponent
  }
];
export default routes;