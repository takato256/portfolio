import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import home from '@/components/home'
import career from '@/components/career'
import product from '@/components/product'
import skill from '@/components/skill'
import sample from '@/components/sample'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/career',
      name: 'career',
      component: career
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/product/sample',
      name: 'sample',
      component: sample
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill
    }
  ]
})
