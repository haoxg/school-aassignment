import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fyq from '@/components/fyq'
import time from '@/components/time'
import num from '@/components/num'
import zhuanhuan from '@/components/zhuanhuan'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/fyq',
      name: 'fyq',
      component: fyq
    }, {
      path: '/',
      name: 'time',
      component: time
    },{
      path: '/num',
      name: 'num',
      component: num
    },{
      path: '/zhuanhuan',
      name: 'zhuanhuan',
      component: zhuanhuan
    }
  ]
})
