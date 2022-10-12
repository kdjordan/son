import { createStore } from "vuex";
import invoices from "../static/invoices";
import axios from "axios";

export default createStore({
    state: {
        loading: true,
        token: null,
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
        },
        SET_TOKEN(state, payload) {
            console.log('setting token')
            state.token = payload
        }
    },
    actions: {
        async loadInvoices({commit, state}) {
            
            try {
                let resp = await axios.get(`https://billing-portal-api.glotell.sonoc.io/v1/accounts/5737/invoices?page=1&size=10`, {  
                    headers: {
                        'Authorization' : `Bearer ${state.token}`, 
                    }
                })
                console.log('called')
                console.log(resp)
                commit('SET_INVOICES', invoices)
                commit('SET_LOADING', false)
              } catch (error) {
                console.log('error', error)
              }
            // setTimeout(() => {
            //     context.commit('SET_INVOICES', invoices)
            //     context.commit('SET_LOADING', false)
            // }, 3000)

        }
    }

})