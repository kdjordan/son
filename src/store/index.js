import { createStore } from "vuex";
// import invoices from "../static/invoices";
import axios from "axios";
// import createPersistedState from "vuex-persistedstate";

export default createStore({
    // plugins: [createPersistedState()],
    state: {
        loading: true,
        token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik4yQnZiUEdFRXpncENoV282VzlDYyJ9.eyJodHRwczovL2JpbGxpbmctYXBpLmdsb3RlbGwuc29ub2MuaW8vZW1haWwiOiJrLmRlYW4uam9yZGFuQGdtYWlsLmNvbSIsImh0dHBzOi8vYmlsbGluZy1hcGkuZ2xvdGVsbC5zb25vYy5pby9hY2NvdW50SWQiOiI1NzM3IiwiaXNzIjoiaHR0cHM6Ly9wb3J0YWwtZ2xvdGVsbC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjIzYmQ1MTYwZjRiOTIwMDY5MjRlZjU3IiwiYXVkIjpbImh0dHBzOi8vYmlsbGluZy1hcGkuZ2xvdGVsbC5zb25vYy5pby8iLCJodHRwczovL3BvcnRhbC1nbG90ZWxsLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NjczOTk4NjgsImV4cCI6MTY2NzQ4NjI2OCwiYXpwIjoiZGNMN2JFc21hdTZVaFFDclhldTdPM2kzWHpUeWRBcnAiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.SrNQAvofue7q7TN7gr--qseC4mQv3_B7akEHCBnvlcTQyxg-WzCrWDV_dTWWygbrJ-0VO2GXaydf0_qxqnB2G8tEyCnc-7tnpk6i8HYhy5hOdZbyfRc3vmsJ-7XJiu7dB2WIPjDQkrCS7DHzhIH5iqN2ZFJSLQsVp8IUL3ZbajMA3X--d6_w_w_YLW8rCx3Oyy43T9IpodRRyz3k4n5WsmcJALAtzmSVwkULoiyqEgDVihG9Uinh1HCkfwI4RgHfkWG3Av-iAS_qZPWp2Cfcfn-bkhaw9ptfaADwL1JANXQscwmGO_6DxO7PQqRis-n6l9CXG_KRtGu7JcSxT8JmPg',
        invoices: [],
        profile: {}
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
            try {
                let { data } = await axios.get(`https://billing-portal-api.glotell.sonoc.io/v1/accounts/5737/invoices?page=1&size=10`, {  
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
                let { data } = await axios.get(`https://billing-portal-api.glotell.sonoc.io/v1/accounts/5737/`, {  
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