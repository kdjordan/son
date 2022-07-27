<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Callback',
  created() {
    console.log('callback')
    if(this.$auth.isAuthenticated) {
        console.log('good to go')
        this.$router.push({ path: '/admin/dashboard' })
    }
    if (this.$route.query.error) {
        console.log('error in callback')
      this.$auth.logout({
        returnTo: window.location.origin + `/error?error=${encodeURI(this.$route.query.error)}&error_description=${encodeURI(this.$route.query.error_description)}`
      })
    } 
  }
}
</script>