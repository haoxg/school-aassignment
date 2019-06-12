var app = Vue.extend({
    // el: '.box',
    template: '#zb',
    data() {
        return {
            hour: new Date().getHours() * 30,
            miute: new Date().getMinutes() * 6,
            second: new Date().getSeconds() * 6
        }
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

})