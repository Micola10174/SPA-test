import Vue from 'vue'
import Router from 'vue-router'

import Home from '../assets/components/Home'
import News from '../assets/components/News'
import Profile from '../assets/components/Profile'
import Login from '../assets/components/Auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
