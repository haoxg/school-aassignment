import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import index from '@/components/idne.vue'
import in1 from '@/components/in1.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/in1',
      name: 'in1',
      component: in1
    }
  ]
})
