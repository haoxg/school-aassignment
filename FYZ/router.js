var index1 = Vue.extend({
	template: "#index1"
})
var index2 = Vue.extend({
	template: "#index2"
})
var index3 = Vue.extend({
	template: "#index3"
})

var routes = [{
	path: '/',
	component: index1
}, {
	path: '/index2',
	component: index2
}, {
	path: '/index3',
	component: index3
}]

var router = new VueRouter({
	routes
})