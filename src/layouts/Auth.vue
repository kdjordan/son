<script>
import {useStore} from "vuex";

export default {
  async created() {
      const store = useStore();
      await store.dispatch('loadInvoices')
      await store.dispatch('loadProfile')
    }
}
</script>

<template>
  <div>
    <main>
      <section class="relative w-full h-full py-40 min-h-screen bg-sonoc-blue">
        <router-view />
      </section>
    </main>
  </div>
</template>

