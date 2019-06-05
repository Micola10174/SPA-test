<template lang="pug">
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(
              to="/"
            ) SPA Test
            .button-burger(
              @click="menuShow = !menuShow"
              :class="{ active: menuShow }"
            )
              span.line.line-1
              span.line.line-2
              span.line.line-3
            .navbar-list__wrapper(
              :class="{ active: menuShow }"
            )
              ul.navbar-list
                li.navbar-item(
                  v-for="link in linkMenu"
                  :key="link.title"
                  @click="menuShow = false"
                )
                  router-link.navbar-link(
                    :to="`${link.url}`"
                  ) {{ link.title }}


    router-view
</template>

<script>
export default {
  data () {
    return {
      menuShow: false,
      isAuthenticated: false,
      linkMenu: [
        {title: 'Home', url: '/'},
        {title: 'News', url: '/news'},
        {title: 'Profile', url: '/profile'},
        {title: 'Login', url: '/login'},
      ]
    }
  },
}
</script>

<style lang="stylus">
  @import "assets/stylus/main.styl"
</style>
