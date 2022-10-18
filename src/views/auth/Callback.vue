<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Callback',
  async created() {
    if(this.$auth.isAuthenticated.value) {
      let token = await this.$auth.getTokenSilently()
      console.log('**token', token)
        this.$store.commit('SET_TOKEN', token)
        this.$router.push({ path: '/admin/dashboard' })
    }
    if (this.$route.query.error) {
        // console.log('error in callback')
      this.$auth.logout({
        returnTo: window.location.origin + `/error?error=${encodeURI(this.$route.query.error)}&error_description=${encodeURI(this.$route.query.error_description)}`
      })
    } 
  }
}
</script>