var Clock = Vue.extend({
        template: '#zhong',
        data() {
            return {
                hour: new Date().getHours() * 30,
                mintu: new Date().getMinutes() * 6,
                second: new Date().getSeconds() * 6,
            }

        },
        created() {
            this.dida()
        },
        methods: {
            dida() {
                setInterval(() => {
                    this.hour = new Date().getHours() * 30
                    this.mintu = new Date().getMinutes() * 6
                    this.second = new Date().getSeconds() * 6
                }, 1000)
            }
        },
    })
    // Clock.dida()