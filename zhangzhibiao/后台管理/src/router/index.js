import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/componentGallery/homepage'



import horologe from '@/components/horologe'
import Klotski from '@/components/Klotski'
import manifest from '@/components/manifest'
import grade from '@/components/grade'
import slideshow from '@/components/slideshow'
import pagingDevice from '@/components/pagingDevice'

Vue.use(Router)

export default new Router({
    routes: [{
        name: 'homepage',
        path: '/',
        component: homepage,
    }, {
        name: 'horologe',
        path: '/horologe',
        component: horologe,
    }, {
        name: 'pagingDevice',
        path: '/pagingDevice',
        component: pagingDevice,
    }, {
        name: 'Klotski',
        path: '/Klotski',
        component: Klotski,
    }, {
        name: 'manifest',
        path: '/manifest',
        component: manifest,
    }, {
        name: 'grade',
        path: '/grade',
        component: grade,
    }, {
        name: 'slideshow',
        path: '/slideshow',
        component: slideshow,
    }]
})