<script>
import jwt_decode from "jwt-decode";

export default {
  name: 'Callback',
  async created() {
    if(this.$auth.isAuthenticated.value) {
      let token = await this.$auth.getTokenSilently()
      let accountId = jwt_decode(token)['https://billing-api.glotell.sonoc.io/accountId']
      console.log('setting actID', accountId)
      this.$store.commit('SET_TOKEN', token)
      this.$store.commit('SET_ID', accountId)
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