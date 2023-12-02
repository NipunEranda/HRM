import { createRouter, createWebHistory } from "vue-router";
import store from '../store';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach(async (to, from) => {
  if(Object.keys($(".container-loader")[0].classList).filter(i => ($(".container-loader")[0].classList[i] == 'hidden' || $(".container-loader")[0].classList[i] == 'show')).length == 0){
    $(".container-loader").addClass("hidden");
  }else{
    $(".container-loader").removeClass("show").addClass("hidden");
  }
  if (routes.filter(r => r.path == to.path)[0]) {
    if (routes.filter(r => r.path == to.path)[0].accessBy) {
      let accessGranted = await store.dispatch("hasAccess", { routes: routes, to: to.path });
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
