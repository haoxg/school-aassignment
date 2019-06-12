import Vue from 'vue'
import Router from 'vue-router'
import horologe from '@/components/horologe'
import pageBreak from '@/components/pageBreak'
import huaRongDao from '@/components/huaRongDao'
import grade from '@/components/grade'
import hoom from '@/components/hoom'
import manifest from '@/components/manifest'
import slideshow from '@/components/slideshow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'hoom',
      path:'/',
      component:hoom,
  },
    {
      name:'horologe',
      path:'/horologe',
      component:horologe,
  },{
      name:'pagination',
      path:'/pagination',
      component:pageBreak,
  },{
      name:'huaRongDao',
      path:'/huaRongDao',
      component:huaRongDao,
  },{
      name:'grade',
      path:'/grade',
      component:grade,
  },{
    name:'manifest',
    path:'/manifest',
    component:manifest,
  },{
    name:'slideshow',
    path:'/slideshow',
    component:slideshow,
  }
  ]
})
