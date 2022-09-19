<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            API
          </h3>
        </div>
      </div>
    </div>

    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            GET TOKEN
            <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          @click="getToken()"
        >
       
          SUBMIT
        
        </button>
          </h3>
        </div>
      </div>
    </div>

    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            {{token}}
           
          </h3>
        </div>
      </div>
    </div>

    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            GET PROFILE
            <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          @click="getAccount()"
        >
       
          SUBMIT
        
        </button>
          </h3>
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>



import axios from 'axios'

// https://development.sonoc.io:8080/portal-api/v1/public
//https://billing-portal-api.glotell.sonoc.io/v1/accounts/5737/transactions
// POST /v1/accountTransactions (with the accountId and a date)
// To retrieve a list of transactions

// And
// POST /v1/accountTransactions/payment
// To add a new payment
// /v1/home returns the user email and a list with the allowed accounts
// /v1/home/account returns the business info for the user's "main" account (without user details)

// 'Accept': '*/*',
// 'Access-Control-Allow-Origin': '*',
// 'Content-Type': 'application/json',

// await axios.get('http://development.sonoc.io:8080/portal-api/v1/profile', {
//                              headers: {
//                                 'authorization' : `Bearer ${this.token}`
//                             }
//                         })

export default {
  data() {
    return {
      token: ''
    };
  },
  methods: {
    async getToken() {
      let ans = await this.$auth.getTokenSilently()
      this.token = ans
    },
    async getAccount() {
      console.log('getAccount', this.token)
      try {
        let resp = await axios.get('https://billing-portal-api.glotell.sonoc.io/v1/home/', {  
                                    headers: {
                                      'Authorization' : `Bearer ${this.token}`, 
                                    }
                                  })
        console.log(resp)
      } catch (error) {
        console.log('error', error)
      }
    }
  },
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
