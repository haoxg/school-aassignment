import Vue from 'vue'
import Router from 'vue-router'
import search from '@/subject/search'
import particular from '@/subject/particular'
import futureWeather from '@/subject/futureWeather'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'search',
        component: search
    }, {
        path: '/particular',
        name: 'particular',
        component: particular
    }, , {
        path: '/futureWeather',
        name: 'futureWeather',
        component: futureWeather
    }, ]
})