import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './auth';
import staff from './staff';
import router from '@/router';

const getDefaultState = () => {
    return {
    }
}

const store = createStore({
    state() {
        return getDefaultState();
    },
    getters: {
    },
    mutations: {
        resetState(state) {
            Object.assign(state, getDefaultState());
        },
    },
    modules: {
        auth: auth,
        staff: staff
    },
    plugins: [createPersistedState()],
    actions: {
        logout(){
            this.commit('resetState');
            router.push("/");
        },
    },
});

export default store;