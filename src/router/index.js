import { createRouter, createWebHistory } from "vue-router";
import store from '../store';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach((to, from) => {
  if (routes.filter(r => r.path == to.path)[0]) {
    if (routes.filter(r => r.path == to.path)[0].accessBy) {
      let accessGranted = store.dispatch("hasAccess", { routes: routes, to: to.path });
      if (!accessGranted)
        return '/dashboard'
    }
  }

  if (!store.state.auth.currentUser && to.name !== "/")
    return '/';
  if (store.state.auth.currentUser && to.name == "/")
    return '/dashboard';
});

export default router;
