<script>
export default {
    methods: {
        login() {
            this.$router.push({ path: '/' })
        }
    }
}
</script>
<template>
  <div  class="container mx-auto h-full">
  <div class="container mx-auto px-4 h-full">
  </div>
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
      
        <div
          class="relative flex flex-col content-center items-center min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100  border-0"
        >
          
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0 mt-3">
            <div>
              <img alt="..." src="@/assets/img/logo-sonoc.png" class="h-auto align-middle max-w-250-px px-2 py-2 rounded-lg ">
            </div>
            <div class="text-blueGray-600 text-center mb-3 mt-3">
              YOU HAVE BEEN LOGGED OUT !
            </div>
          <div class="text-center mt-6">
            <button
              class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="button"
              @click="login()"
            >
              Sign In
            </button>
          </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
  </div>
</template>


