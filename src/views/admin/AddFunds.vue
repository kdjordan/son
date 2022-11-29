<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">
                PAY WITH
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <pay-pal-button />
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <img alt="..." class="w-full" :src="stripe" />
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Name On Card
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Name"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  CARD NUMBER
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="CC #"
                />
              </div>
              <!-- HERR ---------------------------------------------------------------------->
              <div class="relative w-full mb-3 flex content-between space-x-2">
                <div class="relative  mb-3 lg:w-6/12 mr-2">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    EXPIRATION DATE
                  </label>
                  <input
                    type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="MM/YY"
                  />
                </div>
                <div class="relative lg:w-6/12 mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    CCV
                  </label>
                  <input
                    type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="CCV"
                  />
                </div>
              </div>
              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  PAY NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div 
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-sonoc-blue text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            TRANSACTIONS
          </h3>
        </div>
      </div>
    </div>
    <!-- <div v-if="loadingStatus"> -->
    <div v-if="loadingStatus" class="w-full h-96">
        <h1 class="text-center">LOADING</h1>
    </div>
    <div v-else class="block w-full overflow-x-auto">
      <!-- Invoices table -->
      <table class="w-full bg-transparent border-collapse">
        <thead>
          <tr class="whitespace-nowrap">
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-sonoc-blue text-white border-sonoc-blue',
              ]"
            >
              ID
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-sonoc-blue text-white border-sonoc-blue',
              ]"
            >
             INVOICE
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-white border-sonoc-blue',
              ]"
            >
             PERIOD
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-white border-sonoc-blue',
              ]"
            >
             INVOICE DATE
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-white border-sonoc-blue',
              ]"
            >
             INVOICE AMOUNT
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-white border-sonoc-blue',
              ]"
            >
             DUE DATE
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-white border-sonoc-blue',
              ]"
            >
             DOWNLOAD
            </th>
          </tr>
        </thead>  
        <tbody>
          <tr class="whitespace-nowrap">
            <th 
              class="px-6 py-4 align-middle text-xs  text-center"
            >
              <span
                class="ml-3 font-bold text-blueGray-600"
              >
                
              </span>
            </th>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
            >
            <a :href="`http://development.sonoc.io:8080/portal-api/v1/invoices/download`"  
                class="text-blueGray-600"
                target="_blank" rel="noopener"
                > 
              &#8595;
            </a>
            </td>
          </tr>
         
          
        </tbody>
      </table>
    </div>
  </div>
  </div>
  
</template>
<script>

import paypal from "@/assets/img/paypal.svg";
import stripe from "@/assets/img/stripe.svg";
import PayPalButton from "@/components/PayPal/PayPalButton.vue";

export default {
  data() {
    return {
      paypal,
      stripe
    };
  },
   components: {
    PayPalButton,
  },
};
</script>
