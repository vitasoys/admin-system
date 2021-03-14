import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('../views/login/Login')
const Home = () => import('../views/home/Home')
const UserSystem = () => import('../views/userSystem/UserSystem')

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [{name: 'usersystem',path: '/usersystem',component: UserSystem}]
    }
  ],
  mode: 'history'
})
