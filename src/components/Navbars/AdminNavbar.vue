<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import {mapState} from "vuex";

export default {
  components: {
    UserDropdown,
  },
  computed : mapState({
    profile: state => state.profile
  }),
};
</script>
<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a
        class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
        href="javascript:void(0)"
      >
      {{profile.accountDesc}}
      </a>
     
      <!-- User -->
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <user-dropdown />
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>


