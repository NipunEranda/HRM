import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import store from '../store';

const routes = [
  {
    path: "/",
    name: "/",
    component: Index,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if(!store.state.auth.currentUser && to.name !== "/")
    return '/';
  if(store.state.auth.currentUser && to.name == "/")
    return '/home';
});

export default router;
