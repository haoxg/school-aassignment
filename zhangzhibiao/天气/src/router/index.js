import Vue from 'vue'
import Router from 'vue-router'
var search = () =>
    import ('@/subject/search')
var particular = () =>
    import ('@/subject/particular')
var futureWeather = () =>
    import ('@/subject/futureWeather')

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/search',
    }, {
        path: '/search',
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