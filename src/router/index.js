import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/index'
import Index from '@/view/index/Index'
import Home from '@/view/home/Home'
import Class from '@/view/class/Class'
import Cart from '@/view/cart/Cart'
import User from '@/view/user/User'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'class',
          name: 'Class',
          component: Class
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'user',
          name: 'User',
          component: User
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
