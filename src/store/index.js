import { createStore } from "vuex";
import invoices from "../static/invoices";

export default createStore({
    state: {
        loading: false,
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
        }
    },
    actions: {
        loadInvoices(context) {
            setTimeout(() => {
                context.commit('SET_INVOICES', invoices)
            }, 1000)

        }
    }

})