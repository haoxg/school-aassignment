import Vue from 'vue'
import Router from 'vue-router'
import mygrade from '@/components/mygrade'
import clock from '@/components/clock'
import home from '@/components/home'
import huarongdao from '@/components/huarongdao'
import huobidan from '@/components/huobidan'
import wuziqi from '@/components/wuziqi'
import lunbo from '@/components/lunbo'
import daiban from '@/components/daiban'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/mygrade',
        name: 'mygrade',
        component: mygrade
    }, {
        path: '/clock',
        name: 'clock',
        component: clock
    }, {
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/huarongdao',
        name: 'huarongdao',
        component: huarongdao
    }, {
        path: '/huobidan',
        name: 'huobidan',
        component: huobidan
    }, {
        path: '/wuziqi',
        name: 'wuziqi',
        component: wuziqi
    }, {
        path: '/lunbo',
        name: 'lunbo',
        component: lunbo
    }, {
        path: '/daiban',
        name: 'daiban',
        component: daiban
    }]
})