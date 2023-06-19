import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './auth';
import staff from './staff';
import router from '@/router';

const getDefaultState = () => {
    return {
        darkMode: 'light-theme',
    }
}

const store = createStore({
    state() {
        return getDefaultState();
    },
    getters: {
        getDarkModeStatus(state){
            return state.darkMode;
        }
    },
    mutations: {
        resetState(state) {
            Object.assign(state, getDefaultState());
        },
        setDarkModeStatus(state, data){
            state.darkMode = data;
        }
    },
    modules: {
        auth: auth,
        staff: staff
    },
    plugins: [createPersistedState()],
    actions: {
        logout(context){
            context.commit("setDarkModeStatus", 'light-theme');
            this.commit('resetState');
            location.reload();
        },
        setDarkModeStatus(context, data){
            context.commit("setDarkModeStatus", data);
        }
    },
});

export default store;