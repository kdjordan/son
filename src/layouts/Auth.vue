<template>
  <div>
    <main>
      <section class="relative w-full h-full py-40 min-h-screen bg-sonocBlue">
        <!-- <div
          class="absolute top-0 w-full h-full bg-sonocgreen"
        ></div> -->
        <router-view />
        <!-- <footer-small absolute /> -->
      </section>
    </main>
  </div>
</template>
<script>
// import FooterSmall from "@/components/Footers/FooterAdmin.vue";



export default {
  data() {
    return {
    };
  },
  components: {
    // FooterSmall,
  },
};
</script>
