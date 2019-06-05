<template lang="pug">
  .content-wrapper
    section
      .container
        .avatar
        p.user-name {{ userName }}

</template>

<script>
export default {
  data () {
    return {
      userName: 'Admin'
    }
  },
  mounted () {
    let isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated){
      this.$router.push({name: 'login'});
    }
  }
}
</script>

<style lang="stylus" scoped>
  .avatar
    width 200px
    height 200px
    border 1px solid black
    margin 10px 0
</style>
