<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Login
        p(v-if="validateBool") Неверный логин или пароль
        form
          label(for='nameField') Name
          input#nameField(type='text', placeholder='Enter your name', v-model='name')
          label(for='userPassword') Password
          input#userPassword(type='password', placeholder='Enter your password' v-model='password')
          .row.grid-middle
            .col-xs-6(style='margin-bottom: 16px;')
              ul
                li
                  .ui-checkbox-wrapper
            .col-xs-6.grid-end
              a.button--round.button--big.button.button-primary(type='submit' @click="validate()") Send


</template>

<script>
export default {
  data () {
    return {
      validateBool: false,
      name: '',
      password: '',
      userAccount: [
        {
          userName: 'Admin',
          password: 12345
        }
      ]
    }
  },
  methods:{
    validate(){
      if (this.name == this.userAccount[0].userName && this.password == this.userAccount[0].password){
        localStorage.isAuthenticated = true;
        this.$router.push({name: 'profile'});
      }
      else this.validateBool = true
    }
  },
  mounted () {
    let isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated){
      this.$router.push({name: 'profile'});
    }
  }
}
</script>

<style lang="stylus" scoped>
  p
    padding 15px 5px
    background red
    font-weight bold
</style>
