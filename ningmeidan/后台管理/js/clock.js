var Clock = {
    template: "#myclock",
    data() {
        return {
            hourDeg: new Date().getHours() * 30,
            minDeg: new Date().getMinutes() * 6,
            secondsDeg: new Date().getSeconds() * 6,
        }

    },
    created() {
        this.run();
    },
    methods: {
        run() {
            setInterval(() => {
                this.hoursDeg = new Date().getHours() * 30 + (new Date().getMinutes() / 60 * 30);
                this.minutesDeg = new Date().getMinutes() * 6;
                this.secondsDeg = new Date().getSeconds() * 6;
            }, 1000)
        }
    }
}