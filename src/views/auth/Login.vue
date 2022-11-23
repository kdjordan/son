<script>

export default {
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
  },
  beforeUpdate() {
    if(this.$auth.isAuthenticated) {
        console.log('good to go')
        this.$router.push({ path: '/admin/dashboard' })
    }
    if (this.$route.query.error) {
      this.$auth.logout({
        returnTo: window.location.origin + `/error?error=${encodeURI(this.$route.query.error)}&error_description=${encodeURI(this.$route.query.error_description)}`
      })
    }
      
  },
  async mounted() {
    console.log('trying', this.$auth.isAuthenticated.effect)
    await this.$auth.loginWithRedirect();
  }
}
</script>
