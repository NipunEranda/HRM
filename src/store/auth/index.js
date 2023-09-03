import index from "..";

const getDefaultState = () => {
  return {
    currentUser: null,
    users: [],
  };
};

export default {
  state() {
    return getDefaultState();
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    resetState(state) {
      Object.assign(state, getDefaultState());
    },
    updateCurrentUser(state, data) {
      state.currentUser = data;
      state.currentUser.theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : data.theme;
    },
    setUserTheme(state, data) {
      state.currentUser.theme = data;
      localStorage.setItem("theme", data);
    },
    setUsers(state, data) {
      state.users = data;
    }
  },
  actions: {
    resetState({ commit }) {
      commit("resetState");
    },
    updateCurrentUser(context, data) {
      context.commit("updateCurrentUser", data);
    },
    async setUserTheme(context, data) {
      context.commit("setUserTheme", data);
      // Set themes in profile. Just set menu in local here to save request quota
      // axios.put(`${process.env.VUE_APP_API_URL}/user/theme?value=${data}`, {}, {
      //   headers: {
      //     Authorization: `Bearer ${this.getters.getCurrentUser.token}`
      //   }
      // });
    },
    async loadUsers(context, data) {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}/user/list`,
          {
            headers: {
              Authorization: `Bearer ${index.getters.getCurrentUser.token}`,
            },
          }
        );
        context.commit("setUsers", response.data.data);
        return response.data;
      } catch (e) {
        console.log(e);
        index.dispatch("handleRequestErrors", e);
      }
    },
    async deleteUser(context, data) {
      try {
        const response = await axios.delete(
          `${process.env.VUE_APP_API_URL}/user?id=${data._id}`,
          {
            headers: {
              Authorization: `Bearer ${index.getters.getCurrentUser.token}`,
            },
          }
        );
        context.commit("setUsers", response.data.data);
        return response.data;
      } catch (e) {
        console.log(e);
        index.dispatch("handleRequestErrors", e);
      }
    },
    async updateUserRole(context, data){
      try{
        const response = await axios.put(
          `${process.env.VUE_APP_API_URL}/user?id=${data.id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${index.getters.getCurrentUser.token}`,
            },
          }
        );
        context.commit("setUsers", response.data.data);
        return response.data;
      } catch (e) {
        console.log(e);
        index.dispatch("handleRequestErrors", e);
      }
    },
    hasAccess({ context, state }, data) {
      let accessGranted = false;
      if (data.routes.filter((r) => r.path == data.to)[0].accessBy) {
        if (
          data.routes
            .filter((r) => r.path == data.to)[0]
            .accessBy.includes("admin")
        ) {
          accessGranted = state.currentUser.role == "admin";
        }
        if (
          data.routes
            .filter((r) => r.path == data.to)[0]
            .accessBy.includes("hr")
        ) {
          if (!accessGranted) accessGranted = state.currentUser.role == "hr";
        }
      } else return true;
      return accessGranted;
    },
  },
};
