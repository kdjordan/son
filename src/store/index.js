import { createStore } from "vuex";
import invoices from "../static/invoices";
import axios from "axios";
// import createPersistedState from "vuex-persistedstate";

export default createStore({
    // plugins: [createPersistedState()],
    state: {
        loading: true,
        token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik4yQnZiUEdFRXpncENoV282VzlDYyJ9.eyJodHRwczovL2JpbGxpbmctYXBpLmdsb3RlbGwuc29ub2MuaW8vZW1haWwiOiJrLmRlYW4uam9yZGFuQGdtYWlsLmNvbSIsImh0dHBzOi8vYmlsbGluZy1hcGkuZ2xvdGVsbC5zb25vYy5pby9hY2NvdW50SWQiOiI1NzM3IiwiaXNzIjoiaHR0cHM6Ly9wb3J0YWwtZ2xvdGVsbC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjIzYmQ1MTYwZjRiOTIwMDY5MjRlZjU3IiwiYXVkIjpbImh0dHBzOi8vYmlsbGluZy1hcGkuZ2xvdGVsbC5zb25vYy5pby8iLCJodHRwczovL3BvcnRhbC1nbG90ZWxsLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NjYwNjg3MzksImV4cCI6MTY2NjE1NTEzOSwiYXpwIjoiZGNMN2JFc21hdTZVaFFDclhldTdPM2kzWHpUeWRBcnAiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.HtflrhywEen55mKfUcsw_k699b_aZeKKuuAH2SHsMKmBuGi_FiWeLxOifefX7A-aEabexS3Rv20_GF6072R3rBx6xhMIHT7jcr4n0BKnS5xdA6NzDC5PWTpZwrwE99iAcV_J091tMCfaIX1SdfSXKAL5xOryccXdhz1LYG-jSxDviEqYjFt1tGk2jzfCNnx0PdQ1N011t-zM7EkvHf3XTk0ROM_EtgkEeAVLYn60Nwdf3xMku3KTtnrekCb39riUlX1gEn4VT2_D2OLA5uNmNy_88t0qLnNfMsRWn94YbkWRAStTmV-Germ8gNAmpB7H4Y5yGFnxq1YUqnQIEnkN8Q',
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
            console.log('seeting loading', payload)
            state.loading = payload
        },
        SET_TOKEN(state, payload) {
            console.log('setting token', payload)
            state.token = payload
        }
    },
    actions: {
        async loadInvoices({commit, state}) {
            
            try {
                let { data } = await axios.get(`https://billing-portal-api.glotell.sonoc.io/v1/accounts/5737/invoices?page=1&size=10`, {  
                    headers: {
                        'Authorization' : `Bearer ${state.token}`, 
                    }
                })
                console.log('called')
                console.log(data._links.self.href)
                let  resp = await axios.get(`${data._links.self.href}`, {  
                    headers: {
                        'Authorization' : `Bearer ${state.token}`, 
                    }
                })
                console.log('resp***', resp)
                // setTimeout(() => {
                    commit('SET_INVOICES', invoices)
                    setTimeout(() => {
                        commit('SET_LOADING', false)

                    }, 70000)
                // }, 2000)
              } catch (error) {
                console.log('error', error)
              }
        }
    }

})