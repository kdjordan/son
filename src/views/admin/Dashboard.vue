<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-line-chart />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-bar-chart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
        <card-user-details-home />
      </div>
    </div>
  </div>
</template>
<script>
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardBarChart from "@/components/Cards/CardBarChart.vue";
import CardUserDetailsHome from "@/components/Cards/CardUserDetailsHome.vue";
import { useStore } from "vuex";

export default {
  name: "dashboard-page",
  components: {
    CardLineChart,
    CardBarChart,
    CardUserDetailsHome,

  },
  async created() {
    /* populate all data with API calls */
    const store = useStore();
    try {
      await store.dispatch('loadProfile')
      await store.dispatch('loadResources')
      await store.dispatch('loadInvoices')
      store.commit('SET_LOADING', false)

    } catch(e) {
      console.log('error in loading data', e)
    }
  }, 
};
</script>
