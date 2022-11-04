import { createStore } from "vuex";
// import invoices from "../static/invoices";
import axios from "axios";
// import createPersistedState from "vuex-persistedstate";

export default createStore({
    // plugins: [createPersistedState()],
    state: {
        loading: true,
        token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik4yQnZiUEdFRXpncENoV282VzlDYyJ9.eyJodHRwczovL2JpbGxpbmctYXBpLmdsb3RlbGwuc29ub2MuaW8vZW1haWwiOiJrLmRlYW4uam9yZGFuQGdtYWlsLmNvbSIsImh0dHBzOi8vYmlsbGluZy1hcGkuZ2xvdGVsbC5zb25vYy5pby9hY2NvdW50SWQiOiI1NzM3IiwiaXNzIjoiaHR0cHM6Ly9wb3J0YWwtZ2xvdGVsbC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjIzYmQ1MTYwZjRiOTIwMDY5MjRlZjU3IiwiYXVkIjpbImh0dHBzOi8vYmlsbGluZy1hcGkuZ2xvdGVsbC5zb25vYy5pby8iLCJodHRwczovL3BvcnRhbC1nbG90ZWxsLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2Njc1MjAzMTcsImV4cCI6MTY2NzYwNjcxNywiYXpwIjoiZGNMN2JFc21hdTZVaFFDclhldTdPM2kzWHpUeWRBcnAiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.AmkPMNvXwvZ55RdRsNJ5vjhLRag01N8HHl8uhwYMR5MyD2q7naQ5LR7qNicoHWaVcZ5O4ISUGY2GTj0lbp5qTtRmZlIPqRWe2SgCGgVrhTmO4RcdNKJxxxknLnG8q0jYoGdWU6weebLFjRseaSGHYiBknGOSrIe0qTJxKYpQrttHVRTCrSZTdtyxdC_jP8PdnkxCziyebXb0bCgezvGwX2o-6LQJ6wBRZAy4bL5-29ziOq0LKdHUVuwF_WUDKkOM0nhXtgm72btst8dYZAdOLu69hr7RTeoOMGFt565LJTWqk166OreNVKk5W1_5Da3eVaqGZSWiWBePP5d_j0PeVw',
        invoices: [],
        profile: {},
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
        SET_PROFILE(state, invoices) {
            state.profile = invoices
        },
        SET_LOADING(state, payload) {
            console.log('seeting loading', payload)
            state.loading = payload
        },
        SET_TOKEN(state, payload) {
            console.log('setting token', payload)
            state.token = payload
        }
    },
    actions: {
        async loadInvoices({commit,  state}) {
            console.log(process.env.VUE_APP_BASE_URL)
            try {
                let { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}/v1/accounts/5737/invoices?page=1&size=10`, {  
                    headers: {
                        'Authorization' : `Bearer ${state.token}`, 
                    }
                })
                console.log('called', data._links)
                
                commit('SET_INVOICES', data._embedded.invoiceList)
                commit('SET_LOADING', false)
              } catch (error) {
                console.log('error', error)
              }
        },
        async loadProfile({commit,  state}) {
            try {
                let { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}/v1/accounts/5737/`, {  
                    headers: {
                        'Authorization' : `Bearer ${state.token}`, 
                    }
                })
                console.log('called Profile', data)
                commit('SET_PROFILE', data)
                commit('SET_LOADING', false)
              } catch (error) {
                console.log('error', error)
              }
        },
    }

})