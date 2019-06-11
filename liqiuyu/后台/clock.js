var Clock = Vue.extend({
    template: '#clock',
    data() {
        return {
            hoursDeg: new Date().getHours() * 30 + (new Date().getMinutes() / 60 * 30),
            minutesDeg: new Date().getMinutes() * 6,
            secondsDeg: new Date().getSeconds() * 6
        }
    },
    created() {
        this.dida()
    },
    methods: {
        dida() {
            setInterval(() => {
                this.hoursDeg = new Date().getHours() * 30 + (new Date().getMinutes() / 60 * 30);
                this.minutesDeg = new Date().getMinutes() * 6;
                this.secondsDeg = new Date().getSeconds() * 6;

            }, 1000)
        }
    }
})