var clock = Vue.extend({
    template: '#clock',
    data() {
        return {
            hour: new Date().getHours() * 30,
            minute: new Date().getMinutes() * 6,
            second: new Date().getSeconds() * 6
        }
    },
    created() {
        this.dt();
    },
    methods: {
        dt() {
            setInterval(() => {
                this.hour = new Date().getHours() * 30
                this.minute = new Date().getMinutes() * 6
                this.second = new Date().getSeconds() * 6
            }, 1000);
        }
    }
})