import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import User from "../views/User.vue";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/user/:id',
    component: User
  }
];

export default routes;