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
    hasAccess({context, state}, data) {
      let accessGranted = false;
      if (data.routes.filter(r => r.path == data.to)[0].accessBy) {
        if (data.routes.filter(r => r.path == data.to)[0].accessBy.includes("admin")) {
          accessGranted = state.currentUser.role == 'admin';
        }
        if (data.routes.filter(r => r.path == data.to)[0].accessBy.includes("hr")) {
          if(!accessGranted)
            accessGranted = state.currentUser.role == 'hr';
        }
      } else
        return true;
      return accessGranted;
    }
  }
}