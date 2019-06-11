Vue.component('zb1', {
    template: '#zb'
})

var app = new Vue({
    // el: '.box',
    data: {
        hour: new Date().getHours() * 30,
        miute: new Date().getMinutes() * 6,
        second: new Date().getSeconds() * 6

    },
    created() {
        this.dida()
    },
    methods: {
        dida() {
            setInterval(() => {
                this.hour = new Date().getHours() * 30,
                    this.miute = new Date().getMinutes() * 6,
                    this.second = new Date().getSeconds() * 6

            }, 1000);
        },

    }

}).$mount('#zb1')