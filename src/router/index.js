import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      const value = ('; '+document. cookie). split(`; token=`)
      if(to.name !== 'Login' && !value[1]){
        next({ name: 'Login' })
      }
     // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
      else next()
    },
  },
  
  // {
  //   path: '/product',
  //   name: 'Product',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
  //   },
    
  // },
  {
    path: '/product',
    name: 'Product',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Product.vue')
    },
    beforeEnter: (to, from, next) => {
      const value = ('; '+document. cookie). split(`; token=`)
      if(to.name !== 'Login' && !value[1]){
        next({ name: 'Login' })
      }
     // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
      else next()
    },
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Register.vue')
    },
    beforeEnter: (to, from, next) => {
      const value = ('; '+document. cookie). split(`; token=`)
      if(value[1]){
        next({ name: 'Product' })
      }
     // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
      else next()
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    beforeEnter: (to, from, next) => {
      const value = ('; '+document. cookie). split(`; token=`)
      if(value[1]){
        next({ name: 'Product' })
      }
     // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
      else next()
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
