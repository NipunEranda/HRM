import index from '..';
const getDefaultState = () => {
    return {
        staff: [],
    }
}

export default {
    state() {
        return getDefaultState();
    },
    getters: {
        getStaff(state) {
            return state.staff;
        },
    },
    mutations: {
        resetState(state) {
            Object.assign(state, getDefaultState());
        },
        setStaff(state, data) {
            state.staff = data;
        },
    },
    actions: {
        resetState({ commit }) {
            commit('resetState')
        },
        async loadStaff(context, data) {
            try {
                let temp = [];
                const response = await axios.get('/.netlify/functions/staff', {
                    headers: {
                        Authorization: `Bearer ${index.getters.getCurrentUser.token}`
                    }
                });
                console.log(response.data.data);
                context.commit("setStaff", response.data.data);
            } catch (e) {
                index.dispatch("handleRequestErrors", e);
                return [];
            }
        },
        async addStaff(context, data) {
            try {
                const response = await axios.post('/.netlify/functions/staff', data, {
                    headers: {
                        Authorization: `Bearer ${index.getters.getCurrentUser.token}`
                    }
                });
                context.commit("setStaff", response.data.data);
                return response.data;
            } catch (e) {
                console.log(e);
                index.dispatch("handleRequestErrors", e);
            }
        },
        async updateStaff(context, data) {
            try {
                const response = await axios.put(`/.netlify/functions/staff?id=${data._id}`, data, {
                    headers: {
                        Authorization: `Bearer ${index.getters.getCurrentUser.token}`
                    }
                });
                context.commit("setStaff", response.data.data);
                return response.data;
            } catch (e) {
                console.log(e);
                index.dispatch("handleRequestErrors", e);
            }
        },
        async deleteStaff(context, data) {
            try {
                const response = await axios.delete(`/.netlify/functions/staff?id=${data._id}`, {
                    headers: {
                        Authorization: `Bearer ${index.getters.getCurrentUser.token}`
                    }
                });
                context.commit("setStaff", response.data.data);
                return response.data;
            } catch (e) {
                console.log(e);
                index.dispatch("handleRequestErrors", e);
            }
        },
        // async updateExpense(context, data){
        //     try{
        //         const response = await axios.put(`/.netlify/functions/transaction/expenses/update?id=${data._id}`, data);
        //         context.commit("setExpenses", response.data.data.expenses);
        //         return response.data;
        //     } catch (e) {
        //         console.log(e);
        //         return helper.methods.handleError(e);
        //     }
        // }
    }
}