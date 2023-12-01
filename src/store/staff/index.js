import index from '..';
import xlsx from 'node-xlsx';
import { Buffer } from 'buffer';

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
                const response = await axios.get(`${process.env.VUE_APP_API_URL}/staff`, {
                    headers: {
                        Authorization: `Bearer ${index.getters.getCurrentUser.token}`
                    }
                });
                // console.log(response.data.data);
                context.commit("setStaff", response.data.data);
            } catch (e) {
                index.dispatch("handleRequestErrors", e);
                return [];
            }
        },
        async addStaff(context, data) {
            try {
                const response = await axios.post(`${process.env.VUE_APP_API_URL}/staff`, data, {
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
                const response = await axios.put(`${process.env.VUE_APP_API_URL}/staff?id=${data._id}`, data, {
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
                const response = await axios.delete(`${process.env.VUE_APP_API_URL}/staff?id=${data._id}`, {
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
        readStaffFile(context, data){
            const worksheet = xlsx.parse(Buffer.from(data)).filter(w => w.name.toLowerCase() == 'staff')[0];
            if(worksheet)
                return { columns: worksheet.data.splice(0, 1)[0], rows: worksheet.data.splice(0, worksheet.data.length) };
            else
                return null;
        },
        async importStaff(context, data){
            try{
                const response = await axios.post(`${process.env.VUE_APP_API_URL}/staff/upload`, data, {
                    headers: {
                        Authorization: `Bearer ${index.getters.getCurrentUser.token}`
                    }
                });
                return response.data;
            }catch(e){
                console.log(e);
                index.dispatch("handleRequestErrors", e);
            }
        }
        // async updateExpense(context, data){
        //     try{
        //         const response = await axios.put(`${process.env.VUE_APP_API_URL}/transaction/expenses/update?id=${data._id}`, data);
        //         context.commit("setExpenses", response.data.data.expenses);
        //         return response.data;
        //     } catch (e) {
        //         console.log(e);
        //         return helper.methods.handleError(e);
        //     }
        // }
    }
}