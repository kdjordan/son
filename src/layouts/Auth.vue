<script>
import {useStore} from "vuex";

export default {
  created() {
    const store = useStore();
    setTimeout(async () => {
      await store.dispatch('loadInvoices')
      await store.dispatch('loadProfile')
    }, 1000)
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

