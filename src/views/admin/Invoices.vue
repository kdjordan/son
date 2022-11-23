<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <invoice-table-sonoc />
    </div>
  </div>
</template>

<script>
import InvoiceTableSonoc from "@/components/Cards/InvoiceTableSonoc.vue";

export default {
  components: {
    InvoiceTableSonoc,
  }
};
</script>
