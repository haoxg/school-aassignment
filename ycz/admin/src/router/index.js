import Vue from 'vue'
import Router from 'vue-router'
import page from '@/components/page'
import clock from '@/components/clock'
import PF from '@/components/PF'
import HRD from '@/components/HRD'
import de from '@/components/de'


Vue.use(Router)

export default new Router({
    routes: [{
        name: 'de',
        path: '/',
        component: de,
    }, {
        path: '/page',
        name: 'page',
        component: page
    }, {
        path: '/clock',
        name: 'clock',
        component: clock
    }, {
        path: '/PF',
        name: 'PF',
        component: PF
    }, {
        path: '/HRD',
        name: 'HRD',
        component: HRD
    }]
})