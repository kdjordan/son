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
            CDRS
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Invoices table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              DAY
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             INVOICE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  flex items-center"
            >
              <span
                class="ml-3 font-bold text-blueGray-600"
              >
                6/30/2022 - 6/31/2022
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
            <a href="#" class="text-blueGray-600">
              6_30_2022.pdf
            </a>
            </td>
          </tr>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  flex items-center"
            >
              <span
                class="ml-3 font-bold text-blueGray-600"
              >
                6/29/2022 - 6/30/2022
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
            <a href="#" class="text-blueGray-600">
              6_29_2022.pdf
            </a>
            </td>
          </tr>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  flex items-center"
            >
              <span
                class="ml-3 font-bold text-blueGray-600"
              >
                6/28/2022 - 6/29/2022
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
            <a href="#" class="text-blueGray-600">
              6_28_2022.pdf
            </a>
            </td>
          </tr>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  flex items-center"
            >
              <span
                class="ml-3 font-bold text-blueGray-600"
              >
                6/27/2022 - 6/28/2022
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
            <a href="#" class="text-blueGray-600">
              6_27_2022.pdf
            </a>
            </td>
          </tr>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  flex items-center"
            >
              <span
                class="ml-3 font-bold text-blueGray-600"
              >
                6/26/2022 - 6/27/2022
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
            <a href="#" class="text-blueGray-600">
              6_26_2022.pdf
            </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>





export default {
  components: {
    
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
