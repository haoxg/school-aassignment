var horologe = Vue.extend({
    template: `
    <div class="horologe">
        <div class="needle hour" :style="{transform:'rotate('+hourDeg+'deg)'}"></div>
        <div class="needle minute" :style="{transform:'rotate('+minuteDeg+'deg)'}"></div>
        <div class="needle second" :style="{transform:'rotate('+secondDeg+'deg)'}"></div>
        <ul>
            <li v-for="i in 12" :style="{transform:'rotate('+i*30+'deg)'}">{{i}}</li>
        </ul>
        <ol>
            <li v-for="i in 60" :style="{transform:'rotate('+i*6+'deg)'}"><i></i></li>
        </ol>
    </div>
    `,
    data() {
        return {
            hourDeg: new Date().getHours() * 30 + (new Date().getMinutes() / 60 * 30),
            minuteDeg: new Date().getMinutes() * 6,
            secondDeg: new Date().getSeconds() * 6,
            timer1: new Date().getMinutes(),
        }
    },
    created() {
        this.timer();
    },
    methods: {
        timer() {
            setInterval(() => {
                this.hourDeg = new Date().getHours() * 30 + (new Date().getMinutes() / 60 * 30);
                this.minuteDeg = new Date().getMinutes() * 6 + (new Date().getSeconds() / 60 * 6);
                this.secondDeg = new Date().getSeconds() * 6;
                this.timer1 = new Date().getMinutes();
            }, 1000)
        }
    }
})