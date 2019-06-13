import Vue from 'vue'
import Router from 'vue-router'
import zhongbiao from '@/components/zhongbiao'
import fenyeqi from '@/components/fenyeqi'
import homepage from '@/components/homepage'
import pintu from '@/components/pintu'

Vue.use(Router)

export default new Router({

    routes: [{
        path: '/',
        name: 'homepage',
        component: homepage
    }, {
        path: '/zhongbiao',
        name: 'zhongbiao',
        component: zhongbiao
    }, {
        path: '/fenyeqi',
        name: 'fenyeqi',
        component: fenyeqi
    }, {
        path: '/pintu',
        name: 'pintu',
        component: pintu
    }, ]
})