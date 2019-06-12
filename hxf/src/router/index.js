import Vue from 'vue'
import Router from 'vue-router'
import zhongbiao from '@/components/zhongbiao'
import fyq from '@/components/fyq'
import hrd from '@/components/hrd'
import csk from '@/components/csk'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/zhongbiao',
    	name:"zhongbiao",
    	component:zhongbiao
    },{
    	path:'/fyq',
    	name:"fyq",
    	component:fyq
    },{
    	path:'/hrd',
    	name:"hrd",
    	component:hrd
    },{
    	path:"/csk",
    	name:"csk",
    	component:csk
    }
  ]
})
