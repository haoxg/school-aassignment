import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Grade from '@/components/grade'
import Clock from '@/components/clock'
import Home from '@/components/home'
import Carousel from '@/components/carousel'
import Currency from '@/components/currency'
import Klotski from '@/components/klotski'
import Todolist from '@/components/todolist'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/grade',
        name: 'grade',
        component: Grade
    }, {
        path: '/clock',
        name: 'clock',
        component: Clock
    }, {
        path: '/carousel',
        name: 'carousel',
        component: Carousel
    }, {
        path: '/currency',
        name: 'currency',
        component: Currency
    }, {
        path: '/klotski',
        name: 'klotski',
        component: Klotski
    }, {
        path: '/todolist',
        name: 'todolist',
        component: Todolist
    }]
})