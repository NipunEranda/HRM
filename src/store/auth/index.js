import index from '..';

const getDefaultState = () => {
  return {
    currentUser: null,
  }
}

export default {
  state() {
    return getDefaultState();
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
  mutations: {
    resetState(state) {
      Object.assign(state, getDefaultState());
    },
    updateCurrentUser(state, data) {
      state.currentUser = data;
    },
    setUserTheme(state, data) {
      state.currentUser.theme = data;
    }
  },
  actions: {
    resetState({ commit }) {
      commit('resetState')
    },
    updateCurrentUser(context, data) {
      context.commit("updateCurrentUser", data);
    },
    async setUserTheme(context, data) {
      context.commit("setUserTheme", data);

      // Set themes in profile. Just set menu in local here to save request quota
      // axios.put(`/.netlify/functions/user/theme?value=${data}`, {}, {
      //   headers: {
      //     Authorization: `Bearer ${this.getters.getCurrentUser.token}`
      //   }
      // });
    },
    hasAccess(context, data) {
      let accessGranted = false;
      if (data.routes.filter(r => r.path == data.to)[0].accessBy) {
        if (data.routes.filter(r => r.path == data.to)[0].accessBy.includes("admin")) {
          accessGranted = process.env.VUE_APP_SYSTEM_ADMINS.split(",").includes(context.getters.getCurrentUser.email);
        }
        if (data.routes.filter(r => r.path == data.to)[0].accessBy.includes("hr")) {
          accessGranted = process.env.VUE_APP_SYSTEM_ADMINS.split(",").includes(context.getters.getCurrentUser.email);
        }
      } else
        return true;
      return accessGranted;
    }
  }
}