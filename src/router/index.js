import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('../views/login/Login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
