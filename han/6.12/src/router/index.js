import Vue from 'vue'
import Router from 'vue-router'
import horologe from '@/components/horologe'
// import left from '@/components/left'
// import right from '@/components/right'
import page from '@/components/page'
import num from '@/components/num'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/page',
        name: 'page',
        component: page
    }, {
        path: '/horologe',
        name: 'horologe',
        component: horologe
    }, {
        path: '/num',
        name: 'num',
        component: num
    }, {
        path: '/',
        name: 'num',
        component: num
    }]
})