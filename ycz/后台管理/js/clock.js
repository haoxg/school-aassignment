var clock = Vue.extend({
    template: `
<div id="clock">
    <div id="content">
        <div id="hours" :style="{transform:'rotate('+hoursDeg+'deg)'}"></div>
        <div id="minutes" :style="{transform:'rotate('+minutesDeg+'deg)'}"></div>
        <div id="seconds" :style="{transform:'rotate('+secondsDeg+'deg)'}"></div>
        <ul>
            <li v-for="i in 12" :style="{transform:'rotate('+i*30+'deg)'}">{{i}}</li>
        </ul>
    </div>
</div>
        `,
    data() {
        return {
            hoursDeg: new Date().getHours() * 30,
            minutesDeg: new Date().getMinutes() * 6,
            secondsDeg: new Date().getSeconds() * 6,
        }
    },
    created() {
        this.dida();
    },
    methods: {
        dida() {
            setInterval(() => {
                this.hoursDeg = new Date().getHours() * 30
                this.minutesDeg = new Date().getMinutes() * 6
                this.secondsDeg = new Date().getSeconds() * 6
            }, 1000)
        }
    }
})