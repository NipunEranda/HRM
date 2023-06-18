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
        async getStaff(state) {
            try {
                return state.staff;
            } catch (e) {
                console.log(e);
            }
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
                const response = await await axios.get('/.netlify/functions/staff', {
                    headers: {
                        Authorization: `Bearer ${index.getters.getCurrentUser.token}`
                    }
                });
                context.commit("setStaff", response.data.data);
            } catch (e) {
                return [];
            }
        }
        // async addExpense(context, data) {
        //     try {
        //         const response = await axios.post('/.netlify/functions/transaction/expenses/add', data);
        //         context.commit("setExpenses", response.data.data.expenses);
        //         return response.data;
        //     } catch (e) {
        //         console.log(e);
        //         return helper.methods.handleError(e);
        //     }
        // },
        // async deleteExpense(context, data) {
        //     try{
        //         const response = await axios.delete(`/.netlify/functions/transaction/expenses/delete?id=${data._id}`);
        //         context.commit("setExpenses", response.data.data.expenses);
        //         return response.data;
        //     } catch (e) {
        //         console.log(e);
        //         return helper.methods.handleError(e);
        //     }
        // },
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