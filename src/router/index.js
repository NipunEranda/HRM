import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/Profile.vue";
import Leave from "../views/Leave/index.vue";
import Staff from "../views/Staff/index.vue";
import TimeTracking from "../views/TimeTracking/index.vue";
import store from '../store';

const routes = [
  {
    path: "/",
    name: "/",
    component: Index,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/leaves",
    name: "leaves",
    component: Leave,
  },
  {
    path: "/timeTracking",
    name: "timetracking",
    component: TimeTracking,
  },
  {
    path: "/staff",
    name: "staff",
    component: Staff,
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
    return '/dashboard';
});

export default router;
