import Vue from 'vue'
import Router from 'vue-router'

import Pagination  from '@/components/pagination'
import clock from '@/components/clock'
import Carousel from '@/components/Carousel'
import currency from '@/components/currency'
// import leftNav from '@/components/leftNav'
Vue.use(Router)

export default new Router({
  //var router=newrouter({})
  routes: [
    {
      path: '/clock',
      name: 'clock',
      component: clock
    },
    {
      path: '/Carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/currency',
      name: 'currency',
      component: currency
    },
    {
      path: '/',
      name: ' Pagination',
      component:  Pagination
    },
    
  ]
})
