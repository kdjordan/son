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
            INVOICES
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
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              ID
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             INVOICE
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             PERIOD
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             INVOICE DATE
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             INVOICE AMOUNT
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             DUE DATE
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             DOWNLOAD
            </th>
          </tr>
        </thead>  
        <tbody>
          <tr v-for="invoice in loadedInvoices" :key="invoice"  class="whitespace-nowrap">
            <th 
              class="px-6 py-4 align-middle text-xs  text-center"
            >
              <span
                class="ml-3 font-bold text-blueGray-600"
              >
                {{invoice.id}}
              </span>
            </th>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              {{invoice.number}}
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              {{invoice.period}}
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              {{invoice.date}}
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              {{invoice.amount}}
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              {{invoice.due_date}}
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
            >
            <a href={{invoice.link}} class="text-blueGray-600"> 
              &#8595;
            </a>
            </td>
          </tr>
         
          
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import {useStore, mapState} from "vuex";


export default {
  async created(){
    const store = useStore();
    await store.dispatch('loadInvoices')
  },
  data() {
    return {
    }
  },
  computed: mapState({
    loadedInvoices: state => state.invoices,
    loadingStatus: state => state.loading
  }),
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  }
}
</script>
