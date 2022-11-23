<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
  
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">My Account # {{profile.id}}</h6>
        <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
        <router-link
         to="/admin/settings">
          ALL SETTINGS
        </router-link>
        </button>
      </div>
    </div>
    <div v-if="loadingStatus" class="mx-auto text-center w-full">
        <Loading />
    </div>
    <div v-else
      class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Carrier Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Account Name
              </label>
              <div class="px-3 py-3 text-blueGray-600 rounded text-sm shadow w-full ease-linear transition-all duration-150">
                {{profile.accountDesc}}
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Current Balance
              </label>
              <div class="px-3 py-3 text-blue-600  rounded text-sm shadow w-full ease-linear transition-all duration-150">
                <i class="fas fa-dollar-sign text-emerald-500 mr-4"></i>
                {{profile.balance}}
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                TOTAL PORTS
              </label>
              <div class="px-3 py-3 text-blue-600  rounded text-sm shadow w-full ease-linear transition-all duration-150">
                3000
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                CPS
              </label>
              <div class="px-3 py-3 text-blue-600  rounded text-sm shadow w-full ease-linear transition-all duration-150">
                3000
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import {mapState} from "vuex";

export default {
  computed : mapState({
    profile: state => state.profile,
    loadingStatus: state => state.loading
  }),
  components: {
    Loading
  }
}

</script>

