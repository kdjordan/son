import { createStore } from "vuex";
import invoices from "../static/invoices";

export default createStore({
    state: {
        loading: true,
        invoices: []
    },
    getters: {
        GET_INVOICES(state) {
            return state.invoices
        }
    },
    mutations: {
        SET_INVOICES(state, invoices) {
            state.invoices = invoices
        },
        SET_LOADING(state, payload) {
            state.loading = payload
        }
    },
    actions: {
        loadInvoices(context) {
            setTimeout(() => {
                context.commit('SET_INVOICES', invoices)
                context.commit('SET_LOADING', false)
            }, 3000)

        }
    }

})