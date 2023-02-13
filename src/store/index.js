import { createStore } from "vuex";
// import invoices from "../static/invoices";
import axios from "axios";
// import createPersistedState from "vuex-persistedstate";

export default createStore({
    // plugins: [createPersistedState()],
    state: {
        loading: true,
        token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik4yQnZiUEdFRXpncENoV282VzlDYyJ9.eyJodHRwczovL2JpbGxpbmctYXBpLmdsb3RlbGwuc29ub2MuaW8vZW1haWwiOiJrLmRlYW4uam9yZGFuQGdtYWlsLmNvbSIsImh0dHBzOi8vYmlsbGluZy1hcGkuZ2xvdGVsbC5zb25vYy5pby9hY2NvdW50SWQiOiI1NzM3IiwiaXNzIjoiaHR0cHM6Ly9wb3J0YWwtZ2xvdGVsbC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjIzYmQ1MTYwZjRiOTIwMDY5MjRlZjU3IiwiYXVkIjpbImh0dHBzOi8vYmlsbGluZy1hcGkuZ2xvdGVsbC5zb25vYy5pby8iLCJodHRwczovL3BvcnRhbC1nbG90ZWxsLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NzYzMjUwNjYsImV4cCI6MTY3NjQxMTQ2NiwiYXpwIjoiZGNMN2JFc21hdTZVaFFDclhldTdPM2kzWHpUeWRBcnAiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.T0aj-TI-RcicT9w2-ZK-KJIPNhE3LeXFfhnxcrYEis4wlM42nzBFWGMz3iQ1A7g41eXKujvjosQEcYLmeQX5GOBsiVgRBWsaR2YwivBm092Erj-opjYzPf_6b6taHNK6RrWvEggcmNq7VMpAJlBb6YnWsm-JNb_gCOLC2fc1kq5jbQDErJnjeXmXRfXgilpw8jbr_4hXLt19R6i3dx6-4IYWO_B0fLDB1PqamOZBfj9JGzKZZ-ZhzsXTYyzlXmKjok7t75ICZDoeBDl2z4XMnidBh8sf45ryXe0An7JmeV0PdPJClBJ3JnqX41lB8i9_moAgjwslEhtvz6lF1dcStg',
        invoices: [],
        profile: {},
        accountId: null,
        resources: {}
    },
    getters: {
        GET_INVOICES(state) {
            return state.invoices
        }
    },
    mutations: {
        SET_ID(state, payload) {
            state.accountId = payload
        },
        SET_INVOICES(state, invoices) {
            state.invoices = invoices
        },
        SET_PROFILE(state, invoices) {
            state.profile = invoices
        },
        SET_RESOURCES(state, payload) {
            state.resources = payload
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
            console.log('calling load invoices')
            try {
                let { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}/v1/accounts/5737/invoices`, {  
                    headers: {
                        'Authorization' : `Bearer ${state.token}`, 
                    }
                })
                console.log('got invoices', data._embedded.invoices)
                
                commit('SET_INVOICES', data._embedded.invoices)
              } catch (error) {
                console.log('error', error)
              }
        },
        async loadProfile({commit,  state}) {
            console.log('calling load profile')
            try {
                let { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}/v1/accounts/5737/`, 
                {  
                    headers: {
                        'Authorization' : `Bearer ${state.token}`, 
                    }
                })
                console.log('got profile', data)
                commit('SET_PROFILE', data)
              } catch (error) {
                console.log('error', error)
              }
        },
        async loadResources({commit,  state}) {
            try {
                let { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}/v1/resourceGroups/5737/`, {  
                    headers: {
                        'Authorization' : `Bearer ${state.token}`, 
                    }
                })
                console.log('got resources', data)
                commit('SET_RESOURCES', data)
              } catch (error) {
                console.log('error', error)
              }
        },
        async getBalance({commit,  state}) {
            try {
                let { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}/v1/resourceGroups/5737/`, {  
                    headers: {
                        'Authorization' : `Bearer ${state.token}`, 
                    }
                })
                console.log('got resources', data)
                commit('SET_RESOURCES', data)
              } catch (error) {
                console.log('error', error)
              }
        },
    }

})

// /v3/api-docs